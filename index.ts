const scriptProp = PropertiesService.getScriptProperties().getProperties();
type HttpMethod = "get" | "delete" | "patch" | "post" | "put";

const postSlack = (message: string) => {
  var url = "https://slack.com/api/chat.postMessage";
  var postData: { [key: string]: any } = {
    channel: "lecture",
    token: scriptProp.SLACK_TOKEN,
    text: message,
  };
  var options: { method: HttpMethod; payload: any } = {
    method: "post",
    payload: postData,
  };
  Logger.log(UrlFetchApp.fetch(url, options));
};

const getTodaysClassList = (date: Date) => {
  const day = dates[date.getDay()];
  const todaysClassList = Array.from(
    new Set(
      Object.entries(timeTable[day])
        .map((item) => item[1])
        .flat(5)
    )
  );
  // Logger.log(todaysClassList);
  return todaysClassList;
};
const getNextPeriod = (date: Date): number => {
  for (let i = 1; i < 8; i++) {
    /** アラート時間の3分前後に発火したらアラートが起動する。 */
    const condition =
      date.getHours() == periodsInfo[i].alert.getHours() &&
      periodsInfo[i].alert.getMinutes() - 3 < date.getMinutes() &&
      date.getMinutes() < periodsInfo[i].alert.getMinutes() + 3;
    if (condition) return i;
  }
};
const test = () => {
  const dateList = [
    new Date("2022/04/04 18:00:00"), //FIXME: debug用 月曜18:00 3限
    new Date("2022/04/04 19:40:00"), //FIXME: debug用 月曜19:40 4限
    new Date("2022/04/05 18:00:00"), //FIXME: debug用 火曜18:00 3限
    new Date("2022/04/05 19:40:00"), //FIXME: debug用 火曜19:40 4限
    new Date("2022/04/06 18:00:00"), //FIXME: debug用 水曜18:00 3限
    new Date("2022/04/06 19:40:00"), //FIXME: debug用 水曜19:40 4限
    new Date("2022/04/07 18:00:00"), //FIXME: debug用 木曜18:00 3限
    new Date("2022/04/07 19:40:00"), //FIXME: debug用 木曜19:40 4限
    new Date("2022/04/08 18:00:00"), //FIXME: debug用 金曜18:00 3限
    new Date("2022/04/08 19:40:00"), //FIXME: debug用 金曜19:40 4限
    new Date("2022/04/02 08:30:00"), //FIXME: debug用 土曜8:30 1限
    new Date("2022/04/02 10:10:00"), //FIXME: debug用 土曜10:10 2限
    new Date("2022/04/02 12:30:00"), //FIXME: debug用 土曜12:30 3限
    new Date("2022/04/02 14:15:00"), //FIXME: debug用 土曜14:15 4限
  ];
  dateList.forEach((date) => {
    main(date);
  });
};
/**
     * 5分ごとに起動
     *　現在の時間を取得
       次の授業がどの時限かを取得
       30分後の時刻を見て、開始時間があればその授業をとっているか確認
          - 次の授業の30分前にアラート
     * 授業があればclassName, descriptionを表示
     */
const index = () => {
  const date = new Date();
  main(date);
};
const main = (date: Date) => {
  const day = dates[date.getDay()];
  Logger.log(day); // saturday
  Logger.log(date.getDay()); // 6.0
  const nextPeriod = getNextPeriod(date);
  Logger.log(nextPeriod); //1.0
  const nextClasses: string[] = timeTable[day][nextPeriod];
  Logger.log(nextClasses); //[技術倫理, 情報セキュリティ特論]
  let yourNextClass = "";
  ownClassList.map((it) => {
    // 各時限で1つしか授業をとっていないはず...
    // いずれチェッカーを噛ませたい
    if (Array.isArray(nextClasses) && nextClasses.includes(it)) {
      yourNextClass = it;
    }
  });
  Logger.log(yourNextClass);
  let notifications = "";
  classInfomation.map((it) => {
    if (it.className === yourNextClass) {
      notifications = `30分後に${yourNextClass}が開始されます。この講義のタイプは${it.courseType}です。\ndescription: ${it.description}  \n<!channel>`;
    }
  });
  postSlack(notifications);
};

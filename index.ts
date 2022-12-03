const scriptProp = PropertiesService.getScriptProperties().getProperties();
type HttpMethod = "get" | "delete" | "patch" | "post" | "put";

/** post to slack */
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
      // Object.entries(timeTableQ1[day])
      Object.entries(timeTableQ2[day])
        .map((item) => item[1])
        .flat(5)
    )
  );
  return todaysClassList;
};

const getNextPeriod = (date: Date): number => {
  for (let i = 1; i < 8; i++) {
    /** アラート時間の3分前後に発火したらアラートが起動する。 */
    // FIXME: hoursを跨ぐ場合に対応し切れていない
    const condition =
      date.getHours() == periodsInfo[i].alert.getHours() &&
      periodsInfo[i].alert.getMinutes() - 3 < date.getMinutes() &&
      date.getMinutes() < periodsInfo[i].alert.getMinutes() + 3;
    if (condition) return i;
  }
};

/** 授業以外のなにか通知する(todosに情報を書き込む)
 * - 締め切り
 * - other
 */
const customNotification = (date: Date) => {
  const day = dates[date.getDay()];
  const hours = date.getHours();
  const minutes = date.getMinutes();
  todos.map((it) => {
    // FIXME: hoursを跨ぐ場合に対応し切れていない
    const condition =
      day == it.day &&
      hours == it.times.getHours() &&
      it.times.getMinutes() - 3 < date.getMinutes() &&
      minutes < it.times.getMinutes() + 3;
    if (condition) {
      postSlack(it.title + " \n<!channel>");
    }
  });
};

const getNextPeriodClasses = (
  day:"sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday", 
  nextPeriod: number,
  timeTable: TimeTable)=> timeTable[day][nextPeriod];


/**
     * 5分ごとに起動
     * 現在の時間を取得
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
  const nextPeriod = getNextPeriod(date);

  // const nextClasses: string[] = timeTableQ4[day][nextPeriod];
  const nextClasses: string[] = getNextPeriodClasses(day, nextPeriod, timeTableQ4)


  // 各時限で1つしか授業をとっていないはず.
  const yourNextClass = ownClassList.find((it) => 
     Array.isArray(nextClasses) && nextClasses.includes(it)
  );

  customNotification(date);
  if (!yourNextClass) return;
  const notifications = `30分後に${yourNextClass}が開始されます。  \n<!channel>`;
  postSlack(notifications);
};

const test = () => {
  const dateList = [
    new Date("2022/04/04 18:00:00"), //FIXME: debug用 月曜18:00 6限
    new Date("2022/04/04 19:40:00"), //FIXME: debug用 月曜19:40 7限
    new Date("2022/04/05 18:00:00"), //FIXME: debug用 火曜18:00 6限
    new Date("2022/04/05 19:40:00"), //FIXME: debug用 火曜19:40 7限
    new Date("2022/04/06 14:00:00"), //FIXME: debug用 水曜14:00 情報セキュリティ特論確認テスト締め切り当日です。
    new Date("2022/04/06 18:00:00"), //FIXME: debug用 水曜18:00 情報セキュリティ特論確認テスト締め切り30分前です。
    new Date("2022/04/06 18:00:00"), //FIXME: debug用 水曜18:00 6限
    new Date("2022/04/06 19:40:00"), //FIXME: debug用 水曜19:40 7限
    new Date("2022/04/07 18:00:00"), //FIXME: debug用 木曜18:00 6限
    new Date("2022/04/07 19:40:00"), //FIXME: debug用 木曜19:40 7限
    new Date("2022/04/08 18:00:00"), //FIXME: debug用 金曜18:00 6限
    new Date("2022/04/08 19:40:00"), //FIXME: debug用 金曜19:40 7限
    new Date("2022/04/09 08:30:00"), //FIXME: debug用 土曜8:30 1限
    new Date("2022/04/09 10:10:00"), //FIXME: debug用 土曜10:10 2限
    new Date("2022/04/09 12:30:00"), //FIXME: debug用 土曜12:30 3限
    new Date("2022/04/09 14:15:00"), //FIXME: debug用 土曜14:15 4限
    new Date("2022/04/09 16:00:00"), //FIXME: debug用 土曜16:00 5限
    new Date("2022/04/10 17:00:00"), //FIXME: debug用 日曜17:00 Javaプログラミング技法課題締め切り当日
    new Date("2022/04/10 21:00:00"), //FIXME: debug用 日曜21:30 Javaプログラミング技法課題締め切り30分前
  ];
  dateList.forEach((date) => {
    main(date);
  });
};

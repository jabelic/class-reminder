const dates = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

const timeTable = {
  sunday: { 6: [""], 7: [""] },
  monday: { 6: ["ソフトウェア工学特論"], 7: ["Javaプログラミング技法"] },
  tuesday: {
    6: ["プロジェクト管理特論1"],
    7: ["コミュニケーション技術特論"],
  },
  wednesday: { 6: ["情報セキュリティ特論"], 7: ["情報アーキテクチャ特論1"] },
  thursday: { 6: ["ソフトウェア工学特論"], 7: ["Javaプログラミング技法"] },
  friday: { 6: ["プロジェクト管理特論1"], 7: ["コミュニケーション技術特論"] },
  saturday: {
    1: ["技術倫理", "情報セキュリティ特論"],
    2: ["技術倫理", "情報アーキテクチャ特論1"],
    3: ["フレームワーク開発特論"],
    4: ["サービスサイエンス特論", "フレームワーク開発特論"],
    5: [""],
  },
};

const classInfomation = [
  {
    id: 0,
    className: "ソフトウェア工学特論",
    description: "",
    courseType: "",
  },
  {
    id: 1,
    className: "Javaプログラミング技法",
    description: "",
    courseType: "",
  },
  {
    id: 2,
    className: "プロジェクト管理特論1",
    description: "",
    courseType: "",
  },
  {
    id: 3,
    className: "コミュニケーション技術特論",
    description: "",
    courseType: "",
  },
  {
    id: 4,
    className: "情報セキュリティ特論",
    description: "",
    courseType: "ハイブリッド型",
  },
  {
    id: 5,
    className: "情報アーキテクチャ特論1",
    description: "",
    courseType: "",
  },
  { id: 6, className: "技術倫理", description: "", courseType: "" },
  {
    id: 7,
    className: "フレームワーク開発特論",
    description: "",
    courseType: "",
  },
  {
    id: 8,
    className: "サービスサイエンス特論",
    description: "",
    courseType: "",
  },
];

const ownClassList = [
  "Javaプログラミング技法",
  "情報アーキテクチャ特論1",
  "フレームワーク開発特論",
  "情報セキュリティ特論",
];

const periodsInfo = {
  1: {
    alert: new Date("2000/01/01 08:30:00"),
    start: new Date("2000/01/01 09:00:00"),
    end: new Date("2000/01/01 10:30:00"),
  },
  2: {
    alert: new Date("2000/01/01 10:10:00"),
    start: new Date("2000/01/01 10:40:00"),
    end: new Date("2000/01/01 12:10:00"),
  },
  3: {
    alert: new Date("2000/01/01 12:30:00"),
    start: new Date("2000/01/01 13:00:00"),
    end: new Date("2000/01/01 14:30:00"),
  },
  4: {
    alert: new Date("2000/01/01 14:15:00"),
    start: new Date("2000/01/01 14:45:00"),
    end: new Date("2000/01/01 16:15:00"),
  },
  5: {
    alert: new Date("2000/01/01 16:00:00"),
    start: new Date("2000/01/01 16:30:00"),
    end: new Date("2000/01/01 18:00:00"),
  },
  6: {
    alert: new Date("2000/01/01 18:00:00"),
    start: new Date("2000/01/01 18:30:00"),
    end: new Date("2000/01/01 20:00:00"),
  },
  7: {
    alert: new Date("2000/01/01 19:40:00"),
    start: new Date("2000/01/01 20:10:00"),
    end: new Date("2000/01/01 21:40:00"),
  },
};

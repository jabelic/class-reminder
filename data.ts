const dates = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
] as const;

type TimeTable = {
  readonly sunday: {
    readonly 6: readonly string[];
    readonly 7: readonly string[];
  },
  readonly monday: {
    readonly 6: readonly string[];
    readonly 7: readonly string[];
  },
  readonly tuesday: {
    readonly 6: readonly string[];
    readonly 7: readonly string[];
  },
  readonly wednesday: {
    readonly 6: readonly string[];
    readonly 7: readonly string[];
  },
  readonly thursday: {
    readonly 6: readonly string[];
    readonly 7: readonly string[];
  },
  readonly friday: {
    readonly 6: readonly string[];
    readonly 7: readonly string[];
  },
  readonly saturday: {
    readonly 1: readonly string[];
    readonly 2: readonly string[];
    readonly 3: readonly string[];
    readonly 4: readonly string[];
    readonly 5: readonly string[];
  }
}

const timeTableQ1:TimeTable = {
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
} as const;

const timeTableQ2:TimeTable = {
  sunday: { 6: [""], 7: [""] },
  monday: {
    6: ["情報セキュリティ特別講義1", "ネットワーク特論"],
    7: ["ネットワーク特論"],
  },
  tuesday: {
    6: ["プロジェクト管理特別講義"],
    7: ["データベース特論"],
  },
  wednesday: {
    6: ["システムソフトウェア特論"],
    7: ["ネットワークシステム特別講義"],
  },
  thursday: { 6: ["情報セキュリティ特別講義1"], 7: [""] },
  friday: { 6: ["プロジェクト管理特別講義"], 7: ["データベース特論"] },
  saturday: {
    1: ["システムプログラミング特論"],
    2: ["情報アーキテクチャ特論2"],
    3: ["システムソフトウェア特論"],
    4: ["ネットワークシステム特別講義"],
    5: ["情報アーキテクチャ特論3"],
  },
} as const;

const timeTableQ3:TimeTable = {
  sunday: { 6: [""], 7: [""] },
  monday: {
    6: ["セキュアプログラミング特論", "情報ビジネス特別講義2"],
    7: ["OSS特論", "情報ビジネス特別講義2"],
  },
  tuesday: {
    6: [""],
    7: ["クラウドサーバ構築特論"],
  },
  wednesday: {
    6: ["Technical Writing in English", "クラウドインフラ構築特論"],
    7: ["クラウドインフラ構築特論"],
  },
  thursday: { 6: ["セキュアプログラミング特論"], 7: ["OSS特論"] },
  friday: {
    6: ["情報ビジネス特別講義1"],
    7: ["クラウドサーバ構築特論", "情報ビジネス特別講義1"],
  },
  saturday: {
    1: ["情報技術者倫理"],
    2: ["プロジェクト管理特論2"],
    3: ["データインテリジェンス特論"],
    4: [
      "国際開発特論",
      "Technical Writing in English",
      "アジャイル開発手法特論",
    ],
    5: ["国際開発特論", "アジャイル開発手法特論"],
  },
} as const;

const timeTableQ4:TimeTable = {
  sunday: { 6: [""], 7: [""] },
  monday: {
    6: ["DESIGN [RE] THINKING", "情報セキュリティ特別講義2"],
    7: ["ビッグデータ解析特論"],
  },
  tuesday: {
    6: ["コラボレイティブ開発特論",
    "機械学習特論" // 創造
  ],
    7: ["プロジェクト管理特論3"],
  },
  wednesday: {
    6: [""],
    7: ["情報システム特論1"],
  },
  thursday: { 6: ["DESIGN [RE] THINKING", "情報セキュリティ特別講義2"], 7: ["ビッグデータ解析特論"] },
  friday: {
    6: ["コラボレイティブ開発特論",
      "機械学習特論" // 創造
    ],
    7: ["プロジェクト管理特論3"],
  },
  saturday: {
    1: ["情報システム特論2"],
    2: ["IoT開発特論", "情報システム特論2"],
    3: ["情報システム特論1"],
    4: [
      "国際経営特論",
      "セキュアシステム管理運用特論",
      "情報ビジネス特別講義3",
      "データサイエンス特別演習" // 創造
    ],
    5: [
      "国際経営特論",
      "セキュアシステム管理運用特論",
      "情報ビジネス特別講義3",
      "データサイエンス特別演習" // 創造
    ]
  },
} as const;


// const classInformation = [
//   {
//     id: 0,
//     className: "ソフトウェア工学特論",
//     description: "{}",
//     courseType: "{}",
//   },
//   {
//     id: 1,
//     className: "Javaプログラミング技法",
//     description: "{}",
//     courseType: "{}",
//   },
//   {
//     id: 2,
//     className: "プロジェクト管理特論1",
//     description: "{}",
//     courseType: "{}",
//   },
//   {
//     id: 3,
//     className: "コミュニケーション技術特論",
//     description: "{}",
//     courseType: "{}",
//   },
//   {
//     id: 4,
//     className: "情報セキュリティ特論",
//     description: "{}",
//     courseType: "ハイブリッド型",
//   },
//   {
//     id: 5,
//     className: "情報アーキテクチャ特論1",
//     description: "",
//     courseType: "",
//   },
//   { id: 6, className: "技術倫理", description: "", courseType: "" },
//   {
//     id: 7,
//     className: "フレームワーク開発特論",
//     description: "",
//     courseType: "",
//   },
//   {
//     id: 8,
//     className: "サービスサイエンス特論",
//     description: "",
//     courseType: "",
//   },
// ] as const;

/** 自分の取っている授業のタイトル */
const ownClassList = [
  // "Javaプログラミング技法",
  // "情報アーキテクチャ特論1",
  // "フレームワーク開発特論",
  // "情報セキュリティ特論",
  // "ネットワーク特論",
  // "データベース特論",
  // "システムソフトウェア特論",
  // "システムプログラミング特論",
  // "セキュアプログラミング特論",
  // "データインテリジェンス特論",
  // "情報技術者倫理",
  // "アジャイル開発手法特論"
  // "ビッグデータ解析特論",
  // "機械学習特論"
] as const;

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

const todos = [
  // {
  //   title:
  //     "Javaプログラミング技法課題提出当日です。21:30までに提出してください。",
  //   day: "sunday",
  //   times: new Date("2000/01/01 17:00:00"),
  // },
  // {
  //   title: "Javaプログラミング技法課題提出締め切り30分前です。",
  //   day: "sunday",
  //   times: new Date("2000/01/01 21:00:00"),
  // },
  // {
  //   title: "情報セキュリティ特論確認テスト締め切り当日です。",
  //   day: "wednesday",
  //   times: new Date("2000/01/01 14:00:00"),
  // },
  // {
  //   title: "情報セキュリティ特論確認テスト締め切り30分前です。",
  //   day: "wednesday",
  //   times: new Date("2000/01/01 18:00:00"),
  // },
];

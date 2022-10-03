# 授業時間通知 slack bot

## 設定等

- GoogleAppsScript の環境変数に slack ので作成した webhooks のトークンを`SLACK_TOKEN`というキー名で登録する

- デプロイ
  　`$ clasp push`

- デバッグ
  - `$ clasp open`で web を開く
  - 左側のファイル一覧から`test.gs`を開く
  - `test`関数を実行する
  - slack に通知が来る

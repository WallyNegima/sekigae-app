## Firebase Setting
```
yarn global add firebase-tools
firebase login
```

## node install
- FirebaseのFunctionsを動かすために8系を使用する
```
nodebrew install v8.16.0
nodebrew use v8.16.0
```
 
## install
```
npm install
```

## .env
### Google Application Credentials
- Firebase のプロジェクトページを開く
- Project Overview の右にある ⚙(歯車) ボタンを押して、プロジェクトの設定へ遷移
- タブの サービスアカウント へ遷移
- 新しい秘密鍵の生成 ボタンを押して、鍵をダウンロードする
- ダウンロードした鍵を、 適当な場所に置き、ルートの`/.env`と`/functions/.env` の GOOGLE_APPLICATION_CREDENTIALS に設定ファイルの場所を教える

## serve
```
firebase serve
```

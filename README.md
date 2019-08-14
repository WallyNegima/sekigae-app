# sekigae

> sekigae app for treasure2019

## みんなも席替えロジック作ろう

API 叩くなり自由にして OK!!

### 作り方

1. pages/index.vue の methods に 0〜30 の配列を組み替えるようなアルゴリズムを実装 or 自作 API 等を用いて 0〜30 の配列を受け取る関数を作成する
2. pages/index.vue の data プロパティにある patterns に以下のようなオブジェクトを記述する

```
{
  text: "セレクタに表示されます",
  value: yourCreatedFunctionName!!
}
```

例

```
patterns: [{ text: "AIが決める", value: this.exchangeByAI }],
methods: {
  exchangeByAI: function() {
    this.members = sortedMembers;
  }
}
```

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

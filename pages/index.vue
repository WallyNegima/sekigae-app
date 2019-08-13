<template>
  <div>
    <SeatsExchanger :patterns="patterns" />
    <div style="margin: auto; text-align: center; font-size: 24px;">スクリーン側</div>
    <div style="width: 1360px; margin: 40px auto;">
      <Seats :members="line1" />
      <Seats :members="line2" />
      <Seats :members="line3" />
    </div>
  </div>
</template>

<script>
import Seats from "~/components/Seats.vue";
import SeatsExchanger from "~/components/SeatsExchanger.vue";
import { exchangeMembers } from "~/utils/exchangeMembers";

export default {
  components: {
    Seats: Seats,
    SeatsExchanger: SeatsExchanger
  },
  data() {
    return {
      // 2. ここに{text: "hoge", value: 選択したときに実行される関数 }なオブジェクトを配置する
      patterns: [{ text: "AIが決める", value: this.exchangeByAI }],
      members: [
        { id: 1, name: "あらた" },
        { id: 2, name: "りょうちゃん" },
        { id: 3, name: "ひろき" },
        { id: 4, name: "かつや" },
        { id: 5, name: "キッチン" },
        { id: 6, name: "とむ" },
        { id: 7, name: "電電" },
        { id: 8, name: "くぎ" },
        { id: 9, name: "リク" },
        { id: 10, name: "NASA" },
        { id: 11, name: "てるふの" },
        { id: 12, name: "しんや" },
        { id: 13, name: "りょう(R.S)" },
        { id: 14, name: "ぎーたか" },
        { id: 15, name: "たじまん" },
        { id: 16, name: "ツム" },
        { id: 17, name: "直紀" },
        { id: 18, name: "たか" },
        { id: 19, name: "ウォーリー" },
        { id: 20, name: "ダンテ" },
        { id: 21, name: "アサシン" },
        { id: 22, name: "ゆうちゃん" },
        { id: 23, name: "ふじ" },
        { id: 24, name: "よしじ" },
        { id: 25, name: "まえちゃん" },
        { id: 26, name: "まっきー" },
        { id: 27, name: "おじさん" },
        { id: 28, name: "りゅう" },
        { id: 29, name: "タツヤ" },
        { id: 30, name: "てっちゃん" }
      ]
    };
  },
  computed: {
    line1() {
      return this.members.slice(0, 10);
    },
    line2() {
      return this.members.slice(10, 20);
    },
    line3() {
      return this.members.slice(20, 30);
    }
  },
  methods: {
    // 1. 席替えアルゴリズムを実装し, 0〜29のindexの配列を作成し, exchangeMembers関数に噛ませて members を更新する関数を作成
    exchangeByAI: function() {
      let baseArray = [...Array(30).keys()];
      for (let i = this.members.length - 1; i >= 0; i--) {
        // 0~iのランダムな数値を取得
        let rand = Math.floor(Math.random() * (i + 1));

        // 配列の数値を入れ替える
        [baseArray[i], baseArray[rand]] = [baseArray[rand], baseArray[i]];
      }

      this.members = exchangeMembers(this.members, baseArray);
    }
  }
};
</script>
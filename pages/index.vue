<template>
  <div>
    <SeatsExchanger :patterns="patterns" />
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

export default {
  components: {
    Seats: Seats,
    SeatsExchanger: SeatsExchanger
  },
  data() {
    return {
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
    exchangeByAI: function() {
      console.log("execute!");
      return [...Array(30).keys()];
    }
  }
};
</script>
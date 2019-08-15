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
import axios from "axios";
const URL = "https://us-central1-sekigae-114514.cloudfunctions.net/app/server";

export default {
  components: {
    Seats: Seats,
    SeatsExchanger: SeatsExchanger
  },
  data() {
    return {
      // 2. ここに{text: "hoge", value: 選択したときに実行される関数 }なオブジェクトを配置する
      patterns: [
        { text: "AIが決める", value: this.exchangeByAI },
        { text: "今日の占い結果から決める", value: this.exchangeByStars }
      ],
      baseMembers: [
        { id: 1, name: "あらた", star: "魚座", eniaguramu: 5 },
        { id: 2, name: "りょうちゃん", star: "蟹座", eniaguramu: 1 },
        { id: 3, name: "ひろき", star: "蠍座", eniaguramu: 5 },
        { id: 4, name: "かつや", star: "獅子座", eniaguramu: 5 },
        { id: 5, name: "キッチン", star: "牡羊座", eniaguramu: 2 },
        { id: 6, name: "とむ", star: "水瓶座", eniaguramu: 3 },
        { id: 7, name: "電電", star: "蠍座", eniaguramu: 8 },
        { id: 8, name: "くぎ", star: "蠍座", eniaguramu: 6 },
        { id: 9, name: "リク", star: "牡羊座", eniaguramu: 4 },
        { id: 10, name: "NASA", star: "蠍座", eniaguramu: 7 },
        { id: 11, name: "てるふの", star: "水瓶座", eniaguramu: 8 },
        { id: 12, name: "しんや", star: "射手座", eniaguramu: 6 },
        { id: 13, name: "りょう(R.S)", star: "双子座", eniaguramu: 5 },
        { id: 14, name: "ぎーたか", star: "獅子座", eniaguramu: 1 },
        { id: 15, name: "たじまん", star: "乙女座", eniaguramu: 7 },
        { id: 16, name: "ツム", star: "乙女座", eniaguramu: 7 },
        { id: 17, name: "直紀", star: "射手座", eniaguramu: 8 },
        { id: 18, name: "たか", star: "山羊座", eniaguramu: 6 },
        { id: 19, name: "ウォーリー", star: "射手座", eniaguramu: 6 },
        { id: 20, name: "ダンテ", star: "乙女座", eniaguramu: 5 },
        { id: 21, name: "アサシン", star: "牡羊座", eniaguramu: 7 },
        { id: 22, name: "ゆうちゃん", star: "蠍座", eniaguramu: 3 },
        { id: 23, name: "ふじ", star: "獅子座", eniaguramu: 6 },
        { id: 24, name: "よしじ", star: "蠍座", eniaguramu: 4 },
        { id: 25, name: "まえちゃん", star: "魚座", eniaguramu: 8 },
        { id: 26, name: "まっきー", star: "射手座", eniaguramu: 7 },
        { id: 27, name: "おじさん", star: "牡牛座", eniaguramu: 7 },
        { id: 28, name: "りゅう", star: "蠍座", eniaguramu: 3 },
        { id: 29, name: "タツヤ", star: "天秤座", eniaguramu: 3 },
        { id: 30, name: "てっちゃん", star: "水瓶座", eniaguramu: 9 }
      ],
      sortedMembers: null,
      star: []
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
    },
    members() {
      if (this.sortedMembers == null) {
        return this.baseMembers;
      } else {
        return this.sortedMembers;
      }
    }
  },
  methods: {
    // 1. 席替えアルゴリズムを実装し, 0〜29のindexの配列を作成し, exchangeMembers関数に噛ませて members を更新する関数を作成
    exchangeByAI: function() {
      let baseArray = [...Array(30).keys()];
      for (let i = this.baseMembers.length - 1; i >= 0; i--) {
        // 0~iのランダムな数値を取得
        let rand = Math.floor(Math.random() * (i + 1));

        // 配列の数値を入れ替える
        [baseArray[i], baseArray[rand]] = [baseArray[rand], baseArray[i]];
      }

      this.sortedMembers = exchangeMembers(this.baseMembers, baseArray);
    },
    exchangeByStars: function() {
      axios
        .get(`${URL}/star`)
        .then(resp => {
          this.star = resp.data.star;
          this.sortedMembers = resp.data.members;
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>
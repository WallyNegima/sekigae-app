<template>
  <div class="con">
    <v-card
      light
      class="mx-auto card"
      max-width="400"
      tile
      v-for="star in sortedStars"
      :key="star.sign"
    >
      <v-list-item-content>
        <v-list-item-title>{{star.rank}}位: {{ star.sign }}</v-list-item-title>
        <v-list-item-subtitle>
          ラッキーカラー: {{ star.color }}
          <br />
          一言: {{ star.content }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-card>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  name: "Star",
  props: {
    stars: {
      type: Array,
      required: false,
      default: () => {}
    }
  },
  computed: {
    sortedStars() {
      return _.sortBy(this.stars, ["rank"]);
    }
  }
};
</script>

<style scoped>
.card {
  margin: 16px auto;
}
</style>
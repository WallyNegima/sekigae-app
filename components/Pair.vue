<template>
  <div class="pair">
    <v-card light width="130" class="mx-auto">
      <v-card-title>{{pair[0].name}}</v-card-title>
      <v-card-text v-if="pair[0].rank">{{pair[0].star}}: {{pair[0].rank}}位</v-card-text>
    </v-card>
    <v-card light width="130" class="mx-auto">
      <v-card-title>{{pair[1].name}}</v-card-title>
      <v-card-text v-if="pair[1].rank">{{pair[1].star}}: {{pair[1].rank}}位</v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    pair: {
      required: true,
      type: Array,
      defualt: []
    }
  }
};
</script>

<style scoped>
.pair {
  width: 260px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
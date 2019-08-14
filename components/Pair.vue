<template>
  <div class="pair">
    <v-card light width="130" class="mx-auto">
      <v-card-title>{{pair[0].name}}</v-card-title>
      <!-- <v-card-text>{{pair[0].name}}</v-card-text> -->
    </v-card>
    <v-card light width="130" class="mx-auto">
      <v-card-title>{{pair[1].name}}</v-card-title>
      <!-- <v-card-text>{{pair[1].name}}</v-card-text> -->
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
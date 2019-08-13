<template>
  <div class="line">
    <div class="pair">
      <v-card width="122" class="mx-auto">
        <v-card-title>{{members[0].id}}</v-card-title>
        <v-card-text>{{members[0].name}}</v-card-text>
      </v-card>
      <v-card width="122" class="mx-auto">
        <v-card-title>{{members[1].id}}</v-card-title>
        <v-card-text>{{members[1].name}}</v-card-text>
      </v-card>
    </div>
    <div class="pair">
      <v-card width="122" class="mx-auto">
        <v-card-title>{{members[2].id}}</v-card-title>
        <v-card-text>{{members[2].name}}</v-card-text>
      </v-card>
      <v-card width="122" class="mx-auto">
        <v-card-title>{{members[3].id}}</v-card-title>
        <v-card-text>{{members[3].name}}</v-card-text>
      </v-card>
    </div>
    <div class="pair">
      <v-card width="122" class="mx-auto">
        <v-card-title>{{members[4].id}}</v-card-title>
        <v-card-text>{{members[4].name}}</v-card-text>
      </v-card>
      <v-card width="122" class="mx-auto">
        <v-card-title>{{members[5].id}}</v-card-title>
        <v-card-text>{{members[5].name}}</v-card-text>
      </v-card>
    </div>
    <div class="pair">
      <v-card width="122" class="mx-auto">
        <v-card-title>{{members[6].id}}</v-card-title>
        <v-card-text>{{members[6].name}}</v-card-text>
      </v-card>
      <v-card width="122" class="mx-auto">
        <v-card-title>{{members[7].id}}</v-card-title>
        <v-card-text>{{members[7].name}}</v-card-text>
      </v-card>
    </div>
    <div class="pair">
      <v-card width="122" class="mx-auto">
        <v-card-title>{{members[8].id}}</v-card-title>
        <v-card-text>{{members[8].name}}</v-card-text>
      </v-card>
      <v-card width="122" class="mx-auto">
        <v-card-title>{{members[9].id}}</v-card-title>
        <v-card-text>{{members[9].name}}</v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    members: {
      required: true,
      type: Array,
      defualt: []
    }
  }
};
</script>

<style scoped>
.pair {
  width: 244px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.line {
  max-width: 1440px;
  margin: 32px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
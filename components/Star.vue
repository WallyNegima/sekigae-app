<template>
  <div>
    <v-list-item-content v-for="star in stars" :key="star.sign">
      <v-list-item-title>{{ star.sign }}</v-list-item-title>
      <v-list-item-subtitle>{{ star.color }}</v-list-item-subtitle>
    </v-list-item-content>
  </div>
</template>

<script>
export default {
  name: "Star",
  props: {
    stars: {
      type: Array,
      required: false,
      default: () => {}
    }
  },
  computed: {}
};
</script>
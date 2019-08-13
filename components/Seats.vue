<template>
  <div class="line">
    <Pair :pair="pair1" />
    <Pair :pair="pair2" />
    <Pair :pair="pair3" />
    <Pair :pair="pair4" />
    <Pair :pair="pair5" />
  </div>
</template>

<script>
import Pair from "./Pair.vue";

export default {
  components: {
    Pair: Pair
  },
  props: {
    members: {
      required: true,
      type: Array,
      defualt: []
    }
  },
  computed: {
    pair1() {
      return this.members.slice(0, 2);
    },
    pair2() {
      return this.members.slice(2, 4);
    },
    pair3() {
      return this.members.slice(4, 6);
    },
    pair4() {
      return this.members.slice(6, 8);
    },
    pair5() {
      return this.members.slice(8, 10);
    }
  }
};
</script>

<style scoped>
.line {
  max-width: 1440px;
  margin: 32px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
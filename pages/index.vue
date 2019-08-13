<template>
  <div>
    <div style="width: 1360px; margin: 60px auto;">
      <Seats :members="line1" />
      <Seats :members="line2" />
      <Seats :members="line3" />
    </div>
  </div>
</template>

<script>
import Seats from "~/components/Seats.vue";
export default {
  components: {
    Seats: Seats
  },
  data() {
    return {
      members: [
        { id: 1, name: "abc" },
        { id: 2, name: "abc" },
        { id: 3, name: "abc" },
        { id: 4, name: "abc" },
        { id: 5, name: "abc" },
        { id: 6, name: "abc" },
        { id: 7, name: "abc" },
        { id: 8, name: "abc" },
        { id: 9, name: "abc" },
        { id: 10, name: "abc" },
        { id: 11, name: "abc" },
        { id: 12, name: "abc" },
        { id: 13, name: "abc" },
        { id: 14, name: "abc" },
        { id: 15, name: "abc" },
        { id: 16, name: "abc" },
        { id: 17, name: "abc" },
        { id: 18, name: "abc" },
        { id: 19, name: "abc" },
        { id: 20, name: "abc" },
        { id: 21, name: "abc" },
        { id: 22, name: "abc" },
        { id: 23, name: "abc" },
        { id: 24, name: "abc" },
        { id: 25, name: "abc" },
        { id: 26, name: "abc" },
        { id: 27, name: "abc" },
        { id: 28, name: "abc" },
        { id: 29, name: "abc" },
        { id: 30, name: "abc" }
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
  }
};
</script>
<template>
  <div class="exchangerContainer">
    <div class="selector">
      <v-select :items="patterns" label="Outlined style" outlined v-model="selectedFunction"></v-select>
      <v-btn @click="execExchange" style="margin: 14px; font-weight: bold;">席替えをする</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedFunction: null
    };
  },
  props: {
    patterns: {
      required: true,
      default: []
    }
  },
  computed: {
    patternLabels: function() {
      return this.patterns.map(pattern => pattern.label);
    }
  },
  methods: {
    execExchange: function() {
      if (this.selectedFunction) {
        this.selectedFunction();
      }
    }
  }
};
</script>

<style scoped>
.selector {
  width: 344px;
  display: flex;
}

.exchangerContainer {
  margin: 10px auto;
  width: 1360px;
}
</style>
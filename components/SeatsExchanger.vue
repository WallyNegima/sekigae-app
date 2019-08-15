<template>
  <div class="exchangerContainer">
    <div class="selector">
      <v-select :items="patternLabels" label="席替え方法を選ぶ" outlined v-model="selectedFunction"></v-select>
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
      return this.patterns.map(pattern => pattern.text);
    }
  },
  methods: {
    execExchange: function() {
      if (this.selectedFunction) {
        const selectedObj = this.patterns.find(p => {
          return p.text === this.selectedFunction;
        });
        selectedObj.value();
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
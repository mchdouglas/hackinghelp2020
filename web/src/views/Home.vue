<template>
  <v-card class="mx-auto text-center" color="grey" dark max-width="2000" height="890">
    <v-card-text>
      <v-sheet color="rgba(0, 0, 0, .12)">
        <v-sparkline
          :value="value"
          color="purple"
          height="100"
          padding="24"
          stroke-linecap="round"
          smooth
        >
          <template v-slot:label="item">%{{ item.value }}</template>
        </v-sparkline>
      </v-sheet>
    </v-card-text>

    <v-card-text>
      <div
        id="cor"
        class="display-1 font-weight-thin"
      ><strong>Crescente do match entre empresas e profissionais</strong></div>
    </v-card-text>

    <v-divider></v-divider>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    value: [10, 20, 30, 40, 45, 47, 53]
  })
};
</script>
<style>
</style>
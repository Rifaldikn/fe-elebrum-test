<script setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "vue-chartjs";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Complete", "Not Complete"],
  datasets: [
    {
      backgroundColor: ["#0796E5", "#E53935"],
      data: [50, 50],
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};
</script>

<template>
  <v-card class="pa-5" height="100%" flat border>
    <v-row>
      <v-col cols="12">
        <div class="text-grey text-h6">Attendance Completeness</div>
      </v-col>
      <v-col cols="12">
        <Pie :data="data" :options="options" style="height: 350px" />
      </v-col>
    </v-row>
  </v-card>
</template>

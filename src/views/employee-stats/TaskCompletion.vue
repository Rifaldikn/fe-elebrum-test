<script setup>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Data One",
      backgroundColor: "rgb(219, 241, 251)",
      data: [40, 39, 10, 40, 39, 80, 40],
      borderColor: "#0796E5",
      fill: "start",
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  radius: 5,
  pointBackgroundColor: "#fff",
  elements: {
    line: {
      tension: 0.3,
    },
  },
  interaction: {
    intersect: false,
  },
  plugins: {
    filler: {
      propagate: true,
    },
    legend: {
      position: "top",
      align: "end",
    },
  },
};

const cardData = {
  completed: {
    value: 2400,
    label: "Total Task Completed",
    perks: "Last Year : 2000 Task",
  },
  mostCompleteTask: {
    value: 185,
    label: "Most Completed Task At",
    perks: "May 2022",
  },
  taskCreated: {
    value: 1600,
    label: "Total Task Created",
    perks: "Last Year : 1800 Task",
  },
  mostCompletedTaskAt: {
    value: "UI/UX Design",
    label: "Most Completed Task At",
    perks: "240 Task",
  },
};
</script>

<template>
  <v-card class="pa-5" height="450px" flat border>
    <v-row>
      <v-col cols="12">
        <div class="text-grey text-h6">Task Completion in All Project</div>
      </v-col>

      <v-col cols="12">
        <Line
          :options="options"
          :data="data"
          ref="chartInstance"
          style="height: 200px"
        />
      </v-col>

      <v-col cols="12">
        <v-row>
          <v-col v-for="(data, key) in cardData" :key="key" cols="3">
            <v-card class="pa-5 text-center" flat border>
              <div class="text-grey text-subtitle-2">{{ data.label }}</div>
              <div class="text-h6 font-weight-bold mt-3">{{ data.value }}</div>
              <div class="text-subtitle-2 font-weight-regular">
                {{ data.perks }}
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

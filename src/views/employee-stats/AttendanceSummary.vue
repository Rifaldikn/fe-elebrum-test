<script setup>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import moment from "moment";
import { Bar } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: moment.months(),
  datasets: [
    {
      label: "Total Working Days",
      data: [12, 30, 12, 35, 232, 554, 22],
      backgroundColor: "#0796E5",
      borderWidth: 2,
    },
    {
      label: "Actual Working Hours",
      data: [122, 42, 21, 232, 343, 121, 434],
      backgroundColor: "#27B3F7",
    },
    {
      label: "Total Working Hours",
      data: [221, 323, 434, 65, 342, 65, 132],
      backgroundColor: "#80D2FB",
    },
    {
      label: "Total Late coming",
      data: [1, 0, 0, 0, 0, 4, 0, 1, 3],
      backgroundColor: "#E53935",
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
      align: "end",
    },
  },
};

const attendanceSummary = {
  "Total Working Days": {
    value: 237,
    color: "#0796E5",
  },
  "Actual Working Hours": {
    value: "2126 hr 14 min",
    color: "#27B3F7",
  },
  "Total Working Hours": {
    value: "2930 hr 26 min",
    color: "#80D2FB",
  },
  "Total Late Coming": {
    value: 0,
    color: "#E53935",
  },
};
</script>

<template>
  <v-card class="pa-5" height="" flat border>
    <v-row>
      <v-col cols="12">
        <div class="text-h6 text-grey font-weight-bold">Attendance Summary</div>
      </v-col>
      <v-col cols="12">
        <Bar :data="data" :options="options" style="height: 230px" />
      </v-col>

      <v-col cols="12">
        <v-row>
          <v-col
            cols="6"
            sm="6"
            md="4"
            lg="3"
            v-for="(data, key) in attendanceSummary"
            :key="key"
          >
            <v-card
              class="pa-5"
              height="100%"
              border
              flat
              :style="{ borderLeft: `solid 5px ${data.color}` }"
            >
              <div class="text-grey text-subtitle-2">
                {{ key }}
              </div>
              <div class="font-weight-bold text-h6">
                {{ data.value }}
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

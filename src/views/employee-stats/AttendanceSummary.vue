<script setup>
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
  <v-card class="pa-5" height="450px" flat border>
    <v-row>
      <v-col cols="12">
        <div class="text-h6 text-grey font-weight-bold">Attendance Summary</div>
      </v-col>
      <v-col cols="12"> </v-col>

      <v-col cols="12">
        <v-row>
          <v-col
            cols="6"
            md="3"
            v-for="(data, key) in attendanceSummary"
            :key="key"
          >
            <v-card
              class="pa-5"
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

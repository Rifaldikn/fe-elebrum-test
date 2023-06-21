<script setup>
import { ref } from "vue";

import AttendanceSummary from "./AttendanceSummary.vue";
import AttendanceCompleteness from "./AttendanceCompleteness.vue";
import TaskProgress from "./TaskProgress.vue";
import TaskCompletion from "./TaskCompletion.vue";

const rangeDataFilter = ref(0);
const yearFilter = ref(2022);
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col cols="12" class="d-flex align-center">
            <div class="font-weight-bold text-h5">Employee Summary</div>

            <v-spacer></v-spacer>

            <div class="mr-3">Display Data in</div>

            <div class="mr-5">
              <v-btn-toggle
                v-model="rangeDataFilter"
                variant="flat"
                color="blue"
                density="compact"
                mandatory
                border
              >
                <v-btn size="small" class="text-capitalize"> Monthly </v-btn>

                <v-btn size="small" class="text-capitalize"> Yearly </v-btn>
              </v-btn-toggle>
            </div>

            <div class="mr-3">Periode</div>

            <div>
              <v-select
                v-model="yearFilter"
                variant="outlined"
                :items="[2023, 2022, 2021]"
                density="compact"
                hide-details
                single-line
              ></v-select>
            </div>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" md="8">
        <AttendanceSummary />
      </v-col>

      <v-col cols="6" md="4">
        <AttendanceCompleteness />
      </v-col>

      <v-col cols="6" md="4">
        <TaskProgress />
      </v-col>

      <v-col cols="12" md="8">
        <TaskCompletion />
      </v-col>
    </v-row>
  </v-container>
</template>

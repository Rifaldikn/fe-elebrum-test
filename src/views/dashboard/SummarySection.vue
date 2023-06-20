<script setup>
import { ref } from "vue";

import moment from "moment";
import idLocale from "moment/locale/id";
moment.locale("id", idLocale);

const monthPicker = ref(false);
const dateFilter = ref(moment().format("MMMM YYYY"));
const yearFilter = ref(moment().year());
const months = ref(moment.months("MMM"));
</script>

<template>
  <v-card border flat class="pa-10">
    <v-row>
      <v-col cols="12" class="d-flex align-center">
        <div class="font-weight-bold text-h5">Summary</div>
        <v-spacer></v-spacer>
        <div class="d-flex align-center">
          <div class="mr-5">Periode</div>
          <v-menu v-model="monthPicker" :close-on-content-click="false">
            <template v-slot:activator="{ props }">
              <v-text-field
                variant="outlined"
                class="text-capitalize"
                append-inner-icon="mdi-calendar"
                color="primary"
                v-bind="props"
                density="compact"
                style="width: 150px"
                hide-details
                readonly
                :value="dateFilter"
              >
              </v-text-field>
            </template>

            <v-card class="pa-5" width="250">
              <v-row dense align="center" justify="space-around">
                <v-col cols="4">
                  <v-icon>mdi-chevron-left</v-icon>
                </v-col>
                <v-col cols="4">
                  <div class="font-weight-bold text-primary text-center">
                    {{ yearFilter }}
                  </div>
                </v-col>
                <v-col cols="4" class="text-end">
                  <v-icon>mdi-chevron-right</v-icon>
                </v-col>
              </v-row>
              <v-row dense>
                <v-col cols="4" v-for="month in months" :key="month">
                  <v-btn
                    variant="flat"
                    :color="
                      moment(dateFilter).format('MMMM') == month
                        ? 'primary'
                        : ''
                    "
                    class="text-capitalize text-center"
                  >
                    {{ moment(month, "MMMMM").format("MMM") }}
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-menu>
        </div>
      </v-col>
      <v-col cols="12">
        <v-divider></v-divider>
      </v-col>
      <v-col cols="4">
        <v-card border flat class="pa-5">
          <div class="text-grey text-subtitle-1">Working Day(s)</div>
          <div class="font-weight-bold text-h5">2 Hari</div>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card border flat class="pa-5">
          <div class="text-grey text-subtitle-1">Working Hour(s)</div>
          <div class="font-weight-bold text-h5">13 hr 14 min</div>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card border flat class="pa-5">
          <div class="text-grey text-subtitle-1">Exceptional Attendance</div>
          <div class="font-weight-bold text-h5">0 Hari</div>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card border flat class="pa-5">
          <div class="text-grey text-subtitle-1">Leave Taken</div>
          <div class="font-weight-bold text-h5">0 Hari</div>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card border flat class="pa-5">
          <div class="text-grey text-subtitle-1">Overtime</div>
          <div class="font-weight-bold text-h5">00 hr 00 min</div>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card border flat class="pa-5">
          <div class="text-grey text-subtitle-1">Claim</div>
          <div class="font-weight-bold text-h5">IDR 0</div>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

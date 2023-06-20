<script setup>
import Summary from "./SummarySection.vue";
import Task from "./TaskSection.vue";
import Profile from "./ProfileSection.vue";
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="8">
        <v-row>
          <v-col cols="12">
            <Summary />
          </v-col>
          <v-col cols="12">
            <Task />
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" md="4">
        <v-row>
          <v-col cols="12">
            <Profile />
          </v-col>

          <v-col cols="12">
            <v-card class="pa-10" flat border>
              <v-row>
                <v-col cols="12" class="d-flex align-center">
                  <div class="font-weight-bold text-h5">Today's Attendance</div>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="6">
                  <v-card
                    class="pa-5"
                    flat
                    border
                    style="border-top: 5px solid #09a262"
                  >
                    <div class="text-grey">Clock In</div>
                    <div class="font-weight-bold text-h5">07:00</div>
                  </v-card>
                </v-col>
                <v-col cols="6">
                  <v-card
                    class="pa-5"
                    flat
                    border
                    style="border-top: 5px solid #ff2442"
                  >
                    <div class="text-grey">Clock Out</div>
                    <div class="font-weight-bold text-h5">18:00</div>
                  </v-card>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const profileData = ref({
  "Employee ID": "PT - GOO34",
  Position: "Senior Front-End Developer",
  "Join Date": "23 Feb 2018",
  "Years of Service": "4 Years 5 Months 2 Days",
});
</script>

<template>
  <v-card variant="flat" border>
    <v-img cover height="150" src="@/assets/images/profile_banner.png"></v-img>

    <div class="text-center mb-5" style="margin-top: -60px">
      <v-avatar size="120">
        <img height="120" src="@/assets/images/profile_picture.png" />
      </v-avatar>
    </div>

    <div class="font-weight-bold text-center text-h6">John Doe</div>

    <div class="text-center d-flex align-center justify-center">
      <v-col cols="auto">
        <v-img
          class="mx-0"
          height="16px"
          width="16px"
          src="@/assets/icons/building.svg"
        >
        </v-img>
      </v-col>
      <span>Google Indonesia</span>
    </div>

    <v-row class="px-10 py-3">
      <v-col cols="12">
        <v-divider></v-divider>
      </v-col>
      <v-col cols="12">
        <div
          v-for="(data, key) in profileData"
          :key="data"
          class="d-flex justify-space-between mb-3"
        >
          <div class="text-grey">{{ key }}</div>
          <div class="text-end font-weight-medium">
            {{ data }}
          </div>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

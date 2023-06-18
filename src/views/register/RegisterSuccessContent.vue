<script setup>
import Step_1 from "@/assets/images/step_1.svg";
import Step_2 from "@/assets/images/step_2.svg";
import Step_3 from "@/assets/images/step_3.svg";

const steps = [
  {
    title: "Verify your account",
    subtitle: "A verification link has been sent to your email account",
    imgURI: Step_1,
    marginLeft: "10%",
  },

  {
    title: "Login to your account",
    subtitle: "Login to your Axdif account",
    imgURI: Step_2,
    marginLeft: "20%",
  },
  {
    title: "Setup your data",
    subtitle: "Input your employee data and get the ease of managing employee",
    imgURI: Step_3,
    marginLeft: "30%",
  },
];
</script>

<template>
  <v-row class="pt-auto" style="margin: 0 auto">
    <v-col
      v-for="(step, index) in steps"
      :key="step.title"
      md="12"
      cols="12"
      class="d-flex mb-5"
      :style="{
        marginTop: index == 0 ? '5%' : '',
        paddingLeft: step.marginLeft,
      }"
    >
      <v-row>
        <v-col cols="auto" v-if="index > 0">
          <div
            style="
              width: 80px;
              height: 80px;
              border-left: dashed 5px #2b427c;
              border-bottom: dashed 5px #2b427c;
              opacity: 1;
              margin-top: -30px;
            "
          ></div>
          <!-- </div> -->
        </v-col>
        <v-col cols="auto">
          <v-img :src="step.imgURI" height="120px" width="120px"></v-img>
        </v-col>

        <v-col cols="auto">
          <div style="max-width: 386px">
            <div class="text-h5 font-weight-bold">{{ step.title }}</div>
            <div class="text-h6 font-weight-regular text-grey">
              {{ step.subtitle }}
            </div>
          </div>
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12" class="d-flex justify-center">
      <v-btn
        color="error"
        class="text-capitalize"
        width="215px"
        rounded="lg"
        variant="flat"
        size="large"
      >
        Login to Axdif
      </v-btn>
    </v-col>
  </v-row>
</template>

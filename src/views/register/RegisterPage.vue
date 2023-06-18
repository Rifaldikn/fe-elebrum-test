<script setup>
import { ref } from "vue";
import Carousel from "./CarouselSection.vue";
import RegisterForm from "./RegisterForm.vue";
import SuccessRegister from "./RegisterSuccessContent.vue";

const successRegister = ref(false);
</script>

<template>
  <v-container class="fill-height pa-0" fluid>
    <v-row class="fill-height" no-gutters>
      <v-col cols="3">
        <v-card max-width="640px" height="100%" color="blue">
          <Carousel style="height: 100%" />
        </v-card>
      </v-col>
      <v-col cols="9" style="padding: 30px 5% 0px 5%">
        <v-row justify="start" class="my-5">
          <v-col cols="auto">
            <v-img height="68px" src="@/assets/images/logo-axdif.svg"></v-img>
          </v-col>

          <v-col cols="12">
            <RegisterForm
              v-if="!successRegister"
              @success-submit="successRegister = true"
            ></RegisterForm>

            <SuccessRegister v-else />
          </v-col>

          <v-col cols="12" style="position: static; bottom: 0px">
            <div>© Copyright 2023. All Right Reserved.</div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

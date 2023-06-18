<script setup>
import LoginForm from "./LoginForm";

import MaskingBg from "@/assets/images/login/masking-bg.svg";
import Ilustration from "@/assets/images/login/ilustration.png";
</script>

<template>
  <v-container fluid class="pa-0 fill-height">
    <v-row class="fill-height" no-gutters>
      <v-col cols="8">
        <v-card class="pa-0" height="100vh" color="blue" rounded="0">
          <v-img :src="MaskingBg" height="100%" cover>
            <v-row justify="center" align="center" class="fill-height pa-15">
              <div>
                <v-img :src="Ilustration" height="80vh"> </v-img>
              </div>
              <div
                class="text-center py-10"
                style="position: absolute; bottom: 0px"
              >
                © Copyright 2023. All Right Reserved.
              </div>
            </v-row>
          </v-img>
        </v-card>
      </v-col>
      <v-col cols="4" class="">
        <LoginForm />
      </v-col>
    </v-row>
  </v-container>
</template>

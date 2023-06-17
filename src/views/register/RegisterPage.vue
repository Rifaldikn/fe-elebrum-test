<script setup>
import Carousel from "./CarouselSection.vue";
</script>

<template>
  <v-container class="fill-height pa-0" fluid>
    <v-row class="fill-height" no-gutters>
      <v-col cols="3" class="bg-primary">
        <v-card max-width="640px" height="100%">
          <Carousel style="height: 100%" />
        </v-card>
      </v-col>
      <v-col cols="9" style="padding: 50px 100px 0px 100px">
        <component :is=""></component>
      </v-col>
    </v-row>
  </v-container>
</template>

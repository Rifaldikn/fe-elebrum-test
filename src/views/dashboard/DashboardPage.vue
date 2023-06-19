<script setup>
import Summary from "./SummarySection.vue";
import Task from "./TaskSection.vue";
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="8">
        <Summary />
      </v-col>

      <v-col cols="12" md="8">
        <Task />
      </v-col>
    </v-row>
  </v-container>
</template>

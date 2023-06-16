<script setup></script>
<template>
  <v-container class="fill-height pa-0" fluid>
    <v-row class="fill-height">
      <v-col cols="4" class="bg-primary">
        <v-card max-width="640px"> </v-card>
      </v-col>
      <v-col cols="8" class="pa-15">
        <v-row>
          <v-col cols="auto" class="mb-10">
            <v-img height="68px" src="@/assets/images/logo-axdif.svg"></v-img>
          </v-col>
          <v-col cols="12">
            <div class="font-weight-bold text-h4 mb-5">
              Manage all your employee efficiently
            </div>
            <div class="text-h5">
              Let’s get you all set up so you can verify your personal account
              and begin setting up your profile
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6">
            <div class="font-weight-bold">Company Name</div>
            <v-text-field
              placeholder="e.g John"
              variant="outlined"
              density="comfortable"
              single-line
            ></v-text-field>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

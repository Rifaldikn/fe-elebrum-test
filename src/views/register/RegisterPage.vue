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
        <v-row class="my-5">
          <v-col cols="auto">
            <div>
              <v-img height="68px" src="@/assets/images/logo-axdif.svg"></v-img>
            </div>
          </v-col>
          <v-col cols="12">
            <div style="max-width: 782px">
              <div class="font-weight-bold text-h4 mb-5">
                Manage all your employee efficiently
              </div>
              <div class="text-h5">
                Let’s get you all set up so you can verify your personal account
                and begin setting up your profile
              </div>
            </div>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="6">
            <div class="font-weight-bold">Company Name</div>
            <v-text-field
              placeholder="e.g John"
              variant="outlined"
              density="compact"
              class="mr-5"
              single-line
            ></v-text-field>
          </v-col>

          <v-col cols="6">
            <div class="font-weight-bold">Fullname</div>
            <v-text-field
              placeholder="e.g Doe"
              variant="outlined"
              density="compact"
              single-line
            ></v-text-field>
          </v-col>

          <v-col cols="6">
            <div class="font-weight-bold">Email</div>
            <v-text-field
              placeholder="e.g john.doe@mail.com"
              variant="outlined"
              density="compact"
              class="mr-5"
              single-line
            ></v-text-field>
          </v-col>

          <v-col class="d-flex">
            <v-row no-gutters>
              <v-col cols="12">
                <div class="font-weight-bold">Phone Number (Optional)</div>
              </v-col>
              <v-col cols="3">
                <v-text-field
                  placeholder="Country Code"
                  variant="outlined"
                  density="compact"
                  class="mr-3"
                  single-line
                ></v-text-field>
              </v-col>

              <v-col cols="9">
                <v-text-field
                  placeholder="e.g 821 2345 6789"
                  variant="outlined"
                  density="compact"
                  class="ml-3"
                  single-line
                ></v-text-field>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="6">
            <div class="font-weight-bold">Password</div>
            <v-text-field
              placeholder="Insert Password"
              variant="outlined"
              density="compact"
              class="mr-5"
              append-inner-icon="mdi-eye-off-outline"
              single-line
            ></v-text-field>
          </v-col>

          <v-col cols="6">
            <div class="font-weight-bold">Confirm Password</div>
            <v-text-field
              placeholder="Confirm Password"
              variant="outlined"
              density="compact"
              append-inner-icon="mdi-eye-off-outline"
              single-line
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-checkbox
              v-model="value"
              value="value"
              density="compact"
              hide-details
            >
              <template v-slot:label>
                <div class="text-black">
                  Yes I want to receive Axdif’s Newsletter
                </div>
              </template>
            </v-checkbox>

            <v-checkbox
              v-model="value"
              value="value"
              density="compact"
              hide-details
            >
              <template v-slot:label>
                <div class="text-black">
                  I have read and accept the
                  <span>
                    <a class="text-secondary font-weight-bold" variant="text">
                      Terms & Conditions
                    </a>
                  </span>
                  and
                  <span class="font-weight-bold text-secondary">
                    Privacy Policy
                  </span>
                </div>
              </template>
            </v-checkbox>
          </v-col>

          <v-col cols="12" class="my-5">
            <v-btn
              color="error"
              class="text-capitalize"
              size="large"
              variant="flat"
              rounded="lg"
              >Submit</v-btn
            >
          </v-col>

          <v-col class="py-15" style="position: absolute; bottom: 0px">
            <div>© Copyright 2023. All Right Reserved.</div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

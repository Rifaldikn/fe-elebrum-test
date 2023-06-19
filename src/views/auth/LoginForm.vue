<script setup>
import { ref } from "vue";
import { required, email } from "@/helpers/inputeRules";

const form = ref({
  email: null,
  password: null,
  rememberMe: false,
});

const rules = ref({
  email: [required, email],
  password: [required],
});

const isPasswordHidden = ref(true);

const formValid = ref(false);
</script>

<template>
  <v-form v-model="formValid" style="height: 100vh; overflow: auto">
    <v-row style="padding: 50px">
      <v-col cols="auto" class="my-5">
        <v-img height="68px" src="@/assets/images/logo-axdif.svg"></v-img>
      </v-col>

      <v-col cols="12">
        <div class="text-h4 font-weight-bold mb-5">Login to your Account</div>
        <div class="text-h6">Hi, welcome back! Select method to login</div>
      </v-col>

      <v-col>
        <v-row>
          <v-col>
            <v-btn
              color="grey"
              height="50px"
              variant="outlined"
              class="text-capitalize font-weight-bold"
              rounded="lg"
              block
            >
              <template #prepend>
                <v-img src="@/assets/icons/google.png" height="24px"></v-img>
              </template>

              <div class="text-black">Google</div>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn
              color="grey"
              height="50px"
              variant="outlined"
              class="text-capitalize font-weight-bold text-"
              rounded="lg"
              left
              block
            >
              <template #prepend>
                <v-img src="@/assets/icons/linkedin.png" height="24px"></v-img>
              </template>
              <div class="text-black">Linked In</div>
            </v-btn>
          </v-col>

          <v-col cols="12" class="">
            <v-row align="center">
              <v-col>
                <v-divider></v-divider>
              </v-col>
              <v-col cols="auto">
                <div class="subtitle-2">Or continue with email</div>
              </v-col>
              <v-col>
                <v-divider></v-divider>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12">
            <div class="font-weight-bold">Email</div>
            <v-text-field
              v-model="form.email"
              placeholder="e.g john.doe@mail.com"
              density="comfortable"
              class="rounded-l"
              variant="outlined"
              :rules="rules.email"
            ></v-text-field>
          </v-col>

          <v-col cols="12" class="py-0">
            <div class="font-weight-bold">Password</div>
            <v-text-field
              v-model="form.password"
              placeholder="Insert Password"
              density="comfortable"
              class="rounded-l"
              variant="outlined"
              :rules="rules.password"
              :type="!isPasswordHidden ? 'text' : 'password'"
              :append-inner-icon="
                !isPasswordHidden ? 'mdi-eye-outline' : 'mdi-eye-off-outline'
              "
              @click:append-inner="isPasswordHidden = !isPasswordHidden"
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-row no-gutters justify="space-between" align="center">
              <v-col>
                <v-checkbox
                  color="primary"
                  label="Remember Me"
                  v-model="form.rememberMe"
                  class="mt-0"
                  hide-details
                  dense
                ></v-checkbox>
              </v-col>
              <v-col class="text-end">
                <a class="text-secondary font-weight-bold" variant="text">
                  Forgot Password
                </a>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12">
            <v-btn
              color="error"
              class="text-capitalize"
              variant="flat"
              height="50"
              rounded="lg"
              size="large"
              :disabled="!formValid"
              block
              :to="{ name: 'Dashboard' }"
              >login
            </v-btn>
          </v-col>

          <v-col class="d-flex justify-center subtitle-2 font-weight-light">
            <div><a> Privacy Policy</a> • <a>Terms & Condition</a></div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-form>
</template>

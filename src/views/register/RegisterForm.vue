<script setup>
import { ref } from "vue";
import { required, minLength, samePass, email } from "@/helpers/inputeRules";
import { MIN_PASSWORD_LENGTH } from "@/helpers/variables";
import { vMaska } from "maska";

const phoneNumberMask = { mask: "### ##### ####" };
const countryCodeMask = { mask: "+##" };

const emit = defineEmits(["successSubmit", "submit"]);

const submit = () => {
  try {
    emit("successSubmit");
  } catch (error) {
    console.error(error);
  }
};

const formValid = ref(false);

const form = ref({
  companyName: "",
  fullname: "",
  email: "",
  phoneNumber: null,
  countryCode: null,
  password: null,
  confirmPassword: null,
});

const passwordIcon = ref({
  password: false,
  confirmPassword: false,
});

const checkBoxes = ref({
  newsLetter: false,
  termCondition: false,
});

const rules = ref({
  companyName: [required],
  fullname: [required],
  email: [required, email],
  phoneNumber: [required],
  countryCode: [required],
  password: [required, (v) => minLength(v, MIN_PASSWORD_LENGTH)],
  confirmPassword: [required, (v) => samePass(v, form.value.password)],
});
</script>

<template>
  <v-col cols="12">
    <div style="max-width: 782px">
      <div class="font-weight-bold text-h4 mb-5">
        Manage all your employee efficiently
      </div>
      <div class="text-h5">
        Let’s get you all set up so you can verify your personal account and
        begin setting up your profile
      </div>
    </div>
  </v-col>

  <v-col>
    <v-form v-model="formValid">
      <v-row dense>
        <v-col cols="6">
          <div class="font-weight-bold">Company Name</div>
          <v-text-field
            v-model="form.companyName"
            placeholder="e.g John"
            variant="outlined"
            density="compact"
            class="mr-5"
            :rules="rules.companyName"
            single-line
          ></v-text-field>
        </v-col>

        <v-col cols="6">
          <div class="font-weight-bold">Fullname</div>
          <v-text-field
            placeholder="e.g Doe"
            variant="outlined"
            density="compact"
            :rules="rules.fullname"
            single-line
          ></v-text-field>
        </v-col>

        <v-col cols="6">
          <div class="font-weight-bold">Email</div>
          <v-text-field
            v-model="form.email"
            placeholder="e.g john.doe@mail.com"
            variant="outlined"
            density="compact"
            class="mr-5"
            :rules="rules.email"
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
                v-maska:[countryCodeMask]
                v-model="form.countryCode"
                placeholder="Country Code"
                variant="outlined"
                density="compact"
                class="mr-3"
                :rules="rules.countryCode"
                single-line
              ></v-text-field>
            </v-col>

            <v-col cols="9">
              <v-text-field
                v-maska:[phoneNumberMask]
                v-model="form.phoneNumber"
                placeholder="e.g 821 2345 6789"
                variant="outlined"
                density="compact"
                class="ml-3"
                :rules="rules.phoneNumber"
                single-line
              ></v-text-field>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="6">
          <div class="font-weight-bold">Password</div>
          <v-text-field
            v-model="form.password"
            placeholder="Insert Password"
            variant="outlined"
            density="compact"
            class="mr-5"
            :type="passwordIcon.password ? 'text' : 'password'"
            :append-inner-icon="
              passwordIcon.password ? 'mdi-eye-outline' : 'mdi-eye-off-outline'
            "
            :rules="rules.password"
            @click:append-inner="passwordIcon.password = !passwordIcon.password"
            single-line
          ></v-text-field>
        </v-col>

        <v-col cols="6">
          <div class="font-weight-bold">Confirm Password</div>
          <v-text-field
            v-model="form.confirmPassword"
            placeholder="Confirm Password"
            variant="outlined"
            density="compact"
            :type="passwordIcon.confirmPassword ? 'text' : 'password'"
            :append-inner-icon="
              passwordIcon.confirmPassword
                ? 'mdi-eye-outline'
                : 'mdi-eye-off-outline'
            "
            :rules="rules.confirmPassword"
            @click:append-inner="
              passwordIcon.confirmPassword = !passwordIcon.confirmPassword
            "
            single-line
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-checkbox
            v-model="checkBoxes.newsLetter"
            value="value"
            density="compact"
            color="primary"
            hide-details
          >
            <template v-slot:label>
              <div class="text-black">
                Yes I want to receive Axdif’s Newsletter
              </div>
            </template>
          </v-checkbox>

          <v-checkbox
            v-model="checkBoxes.termCondition"
            value="value"
            density="compact"
            color="primary"
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
            @click="submit()"
            :disabled="!checkBoxes.termCondition || !formValid"
            >Submit</v-btn
          >
        </v-col>
      </v-row>
    </v-form>
  </v-col>
</template>

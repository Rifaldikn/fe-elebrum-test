<script setup>
import { ref } from "vue";

const tasks = ref([
  {
    title: "UI/UX Designer",
    tags: ["Wms", "Web", "Task"],
    todo: "Create Goals Design",
  },
  {
    title: "UI/UX Designer",
    tags: ["Wms", "Chat"],
    todo: "Improve Design",
  },
  {
    title: "UI/UX Designer",
    tags: ["Wms", "Task"],
    todo: "Improve Dashboard",
  },
]);
</script>

<template>
  <v-card border flat class="pa-10">
    <v-row>
      <v-col cols="12" class="d-flex align-center">
        <div class="font-weight-bold text-h5">Task Due Soon</div>
        <v-spacer></v-spacer>
        <a
          class="text-blue d-flex align-center"
          href="#"
          style="text-decoration: none"
        >
          See All
          <v-icon>mdi-menu-right</v-icon>
        </a>
      </v-col>

      <v-col cols="12">
        <v-divider></v-divider>
      </v-col>

      <v-col cols="12">
        <v-row>
          <v-col cols="12" v-for="(task, index) in tasks" :key="index">
            <v-card class="pa-5 text-grey" flat border>
              <v-row>
                <v-col
                  cols="12"
                  md="12"
                  class="d-flex align-center justify-space-between"
                >
                  <div>
                    <div class="text-grey">UI/UX Designer</div>
                    <div class="font-weight-bold text-black">
                      [Wms][Web][Task] Create Goals Design
                    </div>
                  </div>
                  <v-spacer></v-spacer>
                  <div class="d-flex align-center">
                    <v-img height="24" src="@/assets/icons/attach.svg"></v-img>
                    <div>44</div>
                  </div>
                  <div class="d-flex align-center mx-3">
                    <v-img
                      height="24"
                      src="@/assets/icons/Comments.svg"
                    ></v-img>
                    <div>1</div>
                  </div>
                  <v-divider class="mx-5" vertical thickness="2"></v-divider>
                  <!-- </v-col>
                <v-col
                  cols="6"
                  md="auto"
                  class="d-flex align-center justify-space-between"
                > -->
                  <v-chip color="success" class="mr-5">Medium</v-chip>
                  <div class="d-flex align-center justify-space-around">
                    <v-img
                      height="24"
                      src="@/assets/icons/Callendar.svg"
                    ></v-img>
                    <div>06 Aug 2021</div>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

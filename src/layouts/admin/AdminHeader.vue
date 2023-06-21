<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useDisplay } from "vuetify";

const { mdAndUp } = useDisplay();
const route = useRoute();

const appNavigationRoutes = ref([
  {
    title: "Overview",
    route: "/",
  },
  {
    title: "Employee Stats",
    route: "/employee-stats",
  },
  {
    title: "Submission",
    children: [
      {
        title: "Exc. Attendance",
        description: "Report your special absences to get an exception",
        img: "Group 659.svg",
        route: "/a",
      },
      {
        title: "Leave",
        description:
          "Submit your leave request here. Don’t forget to pay attention to the quota",
        route: "/b",
        img: "Group 663.svg",
      },
      {
        title: "Overtime Requisition",
        description:
          "Submit your overtime request here. Use your overtime efficiently",
        route: "/c",
        img: "Icon - Overtime Requisition - 24px-1.svg",
      },
      {
        title: "Overtime",
        description:
          "Report your overtime here. So that your working time is not in vain",
        route: "/d",
        img: "Group 661.svg",
      },
      {
        title: "Claim",
        description:
          "Submit your reimbursement here. Complete the submission file",
        route: "/e",
        img: "Group 663.svg",
      },
      {
        title: "Business Trip",
        description:
          "Submit your business trip here. Complete the submission file",
        route: "/f",
        img: "Group 5016.svg",
      },
      {
        title: "Cash Advance",
        description:
          "Submit your multilevel reimbursement here. Complete the submission file",
        route: "/g",
        img: "Icon - Overtime Requisition - 24px-1.svg",
      },
      {
        title: "Approval",
        description: "Do all the approval process for your team here",
        route: "/h",
        img: "Icon - Approval - 24px.svg",
      },
    ],
  },
  {
    title: "Task",
    route: "/task",
  },
  {
    title: "Chat",
    route: "/chat",
  },
  {
    title: "Payroll",
    route: "/payroll",
  },
]);

const selectedMenu = ref();

const showExtendMenu = ref(false);

const getImageUrl = (path) => {
  return new URL(`/src/assets/menus/${path}`, import.meta.url).href;
};

const isChildRouteActive = ({ children }) => {
  const currentRoute = route.path;
  return children.findIndex((child) => child.route === currentRoute) !== -1;
};
</script>

<template>
  <v-app-bar
    elevation="0"
    style="box-shadow: 0px 1px 2px #00000029 !important"
    height="80"
    id="app-bar"
    app
  >
    <template #prepend>
      <div class="d-flex align-center py-auto">
        <v-avatar size="60" image="@/assets/logo.png" rounded="0" class="mx-10">
        </v-avatar>
        <v-divider width="2px" inset vertical></v-divider>
      </div>
    </template>

    <template #title>
      <div class="d-flex">
        <div v-for="item in appNavigationRoutes" :key="item.title" class="mx-5">
          <v-btn
            v-if="!item?.children"
            color="grey"
            class="font-weight-bold text-capitalize"
            rounded="lg"
            height="50"
            :to="item.route"
            selected-class="text-black"
            active-class="text-black"
          >
            <div>
              {{ item.title }}
            </div>
          </v-btn>

          <v-btn
            v-else
            :active="isChildRouteActive(item)"
            color="grey"
            class="font-weight-bold text-capitalize"
            rounded="lg"
            height="50"
            append-icon="mdi-chevron-down"
            selected-class="error--text"
            @click="
              selectedMenu = !showExtendMenu ? item : null;
              showExtendMenu = !showExtendMenu;
            "
            :class="{
              'selected-menu':
                selectedMenu?.title == item.title && showExtendMenu,
            }"
          >
            <div :class="{ 'text-black': isChildRouteActive(item) }">
              {{ item.title }}
            </div>
          </v-btn>
        </div>
      </div>
    </template>

    <template #append>
      <v-menu offset-y offset="10px" elevation="0">
        <template v-slot:activator="{ props }">
          <v-btn icon :ripple="false" class="mx-5">
            <v-avatar
              size="48"
              image="@/assets/images/profile_picture.png"
              v-bind="props"
            ></v-avatar>
          </v-btn>
        </template>
        <v-card width="400px" class="pa-7">
          <v-row>
            <v-col cols="auto">
              <v-avatar
                size="80"
                image="@/assets/images/profile_picture.png"
                v-bind="props"
              ></v-avatar>
            </v-col>
            <v-col>
              <div class="font-weight-bold text-subtitle-2">
                Muhammad Iqra Djauhari
              </div>
              <div class="text-grey text-body-2 my-1">iqra@elabram.com</div>
              <div>
                <v-chip size="small" color="blue">Employe</v-chip>
              </div>
            </v-col>
            <v-divider color="grey"></v-divider>

            <v-col cols="12">
              <v-list-item density="compact" class="pa-0">
                <template #prepend>
                  <v-icon color="primary" size="24">mdi-account-outline</v-icon>
                </template>

                <div class="text-subtitle-2">My Profile</div>
              </v-list-item>
            </v-col>
            <v-divider color="grey"></v-divider>

            <v-col cols="12">
              <v-list-subheader class="text-grey">Appearance</v-list-subheader>
              <v-list-item density="compact" class="pa-0">
                <div class="text-subtitle-2">Dark Mode</div>

                <template #append>
                  <v-switch
                    color="blue"
                    v-model="value"
                    hide-details
                    density="compact"
                    flat
                    inset
                  ></v-switch
                ></template>
              </v-list-item>
            </v-col>
            <v-divider color="grey"></v-divider>

            <v-col cols="12">
              <v-list-item density="compact" class="pa-0">
                <template #prepend>
                  <v-icon color="primary" size="24">mdi-logout-variant</v-icon>
                </template>

                <div class="text-subtitle-2">Log Out</div>
              </v-list-item>
            </v-col>
          </v-row>
        </v-card>
      </v-menu>
    </template>
  </v-app-bar>

  <v-menu
    v-model="showExtendMenu"
    @update:model-value="(event) => (showExtendMenu = event)"
    style="position: fixed"
    attach=".v-main"
    scrim
  >
    <v-card
      v-if="showExtendMenu"
      elevation="0"
      class="pa-5"
      style="z-index: 9999; box-shadow: 0px 15px 24px #00000012 !important; top: 21px"
    >
      <v-row :style="{ padding: mdAndUp ? '0px 140px 30px 140px' : '' }">
        <v-col cols="12" class="text-h5 text-blue font-weight-bold">
          {{ selectedMenu.title }}
        </v-col>
        <v-divider></v-divider>
        <v-col
          md="3"
          cols="6"
          v-for="child in selectedMenu.children"
          :key="child.title"
        >
          <div class="d-flex align-center mb-3">
            <div class="mr-3">
              <v-img height="48" :src="getImageUrl(child.img)"></v-img>
            </div>
            <div class="text-h6 font-weight-bold">
              {{ child.title }}
            </div>
          </div>
          <div class="subtitle-1 font-weight-regular">
            {{ child.description }}
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-menu>
</template>

<style scoped>
.v-btn.v-btn--active {
  background-color: #f4f6ff;
  color: black;
}
.v-btn.v-btn--active .v-btn__content div {
  color: black !important;
}

.v-btn:hover {
  background-color: #e1f4fe;
  color: #0796e5 !important;
}

.v-btn:hover .v-icon {
  color: #0796e5 !important;
}

.v-btn:hover:hover div {
  color: #0796e5 !important;
}

.selected-menu .v-icon {
  color: #0796e5 !important;
}

.selected-menu {
  background-color: #e1f4fe;
  color: #0796e5 !important;
}

.v-overlay >>> .v-overlay__content {
  position: absolute;
  top: 60px;
  margin-left: 0px;
  margin-right: 0px;
}
</style>

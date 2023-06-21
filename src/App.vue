<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import AdminLayout from "./layouts/admin/AdminLayout.vue";
import DefaultLayout from "./layouts/default/Default.vue";

const route = useRoute();

const layoutComponent = computed(() => {
  return route.meta.needAuth ? AdminLayout : DefaultLayout;
});
</script>

<template>
  <component :is="layoutComponent"></component>
</template>

<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

import Ilustration_1 from "@/assets/images/carousel-register/Illustration-1.svg";
import Ilustration_2 from "@/assets/images/carousel-register/Illustration-2.svg";
import Ilustration_3 from "@/assets/images/carousel-register/Illustration-3.svg";
import Masking from "@/assets/images/carousel-register/Masking-1.svg";

const modules = [Pagination, Autoplay];

const carouselContents = [
  {
    title: "A few clicks away from being a part of Axdif",
    subtitle: "Manage Task Easily & Efficiently",
    description:
      "Increase employee productivity and performance in a measurable and precision system in one application.",
    img: Ilustration_1,
  },
  {
    title: "A few clicks away from being a part of Axdif",
    subtitle: "Communication Is Key",
    description:
      "Connect with your coworkers anywhere like you are in one workspace. Very simple and fast.",
    img: Ilustration_2,
  },
  {
    title: "A few clicks away from being a part of Axdif",
    subtitle: "Employee Self-Service",
    description:
      "Simplify the administrative affairs of the company where you work wherever and whenever. Let’s get started with all these conveniences",
    img: Ilustration_3,
  },
];
</script>

<template>
  <swiper
    :pagination="{
      dynamicBullets: true,
      clickable: true,
      dynamicMainBullets: 3,
    }"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
    :modules="modules"
  >
    <swiper-slide v-for="item in carouselContents" :key="item.subtitle">
      <v-img :src="Masking" height="100vh" cover>
        <v-row
          class="justify-center align-space-between text-center pa-10 fill-height"
        >
          <v-col cols="12" class="my-auto">
            <div class="text-h4 font-weight-bold mb-15">
              {{ item.title }}
            </div>

            <div class="mb-10">
              <v-img :src="item.img" height="300px"></v-img>
            </div>

            <div class="text-h5 font-weight-bold mb-5">{{ item.subtitle }}</div>
            <div class="text-subtitle-1">{{ item.description }}</div>
          </v-col>
        </v-row>
      </v-img>
    </swiper-slide>
  </swiper>
</template>

<style>
.swiper-pagination-bullet {
  width: 16px;
  height: 16px;
  /* UI Properties */
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 12px;
  opacity: 1;
}

.swiper-pagination-bullet-active {
  color: #fff;
  background: #08539a;
  width: 50px;
  height: 16px;
  border-radius: 12px;
  opacity: 1;
}

.swiper-pagination {
  margin-bottom: 50px;
}
</style>

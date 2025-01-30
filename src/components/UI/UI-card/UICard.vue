<script setup lang="ts">
import { computed } from "vue";
import BaseIcon from "@/components/Base/BaseIcon.vue";
import {UIButton} from "@/components";

interface Card {
  title: string;
  rating: number;
  reviewsCount: number;
}

const { title, rating, reviewsCount } = defineProps<Card>();

defineEmits(["view", "write"]);

const fullStars = computed(() => Math.floor(rating));
const hasHalfStar = computed(() => rating % 1 !== 0);
</script>

<template>
  <div class="card">
    <div class="card__content-wrapper">
      <div class="card__content">
        <BaseIcon class="google-icon" id="google"/>
        <p class="card__content-title">{{ title }}</p>
      </div>

      <div class="card__content wrap">
        <div class="card__content-rating-stars">
          <p class="card__content-rating">{{ rating }}</p>

          <div class="card__content-stars">
            <BaseIcon class="star" v-for="n in fullStars" :key="'full-' + n" id="star" />
            <BaseIcon class="star" v-if="hasHalfStar" id="half-star" />
          </div>
        </div>

        <p class="card__content-reviews">{{ reviewsCount }} відгуки</p>
      </div>

    </div>

    <div class="card__buttons">
      <UIButton txt="Переглянути" modify="primary" @click="$emit('view')"/>
      <UIButton txt="Написати" modify="secondary" @click="$emit('write')" />
    </div>
  </div>
</template>

<style lang="scss">
@use 'UICard';
</style>

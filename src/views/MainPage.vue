<script setup lang="ts">
import { collection, getDocs } from "firebase/firestore";
import { onMounted, ref } from 'vue';
import { db } from "@/modules/firebase/firebase.ts";
import type { Card } from "@/type/type.ts";
import { UICard } from "@/components";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const cards = ref<Card[]>([]);

const fetchData = async () => {
  const querySnapshot = await getDocs(collection(db, 'cards'));

  cards.value = querySnapshot.docs.map((doc): Card => ({
    title: doc.data().title,
    rating: doc.data().rating,
    reviewsCount: doc.data().reviewsCount,
  }));
};

onMounted(fetchData);

const handleView = () => {
  if (typeof window !== 'undefined') {
    window.open('https://www.google.com', '_blank');
  }
};

const handleToast = () => {
  toast('You clicked the write button', {
    autoClose: 500,
  })
}
</script>

<template>
  <div class="main__container">
    <h1 class="main__title">Test Work</h1>
    <UICard
        v-for="(card, index) in cards"
        :key="index"
        :title="card.title"
        :rating="card.rating"
        :reviews-count="card.reviewsCount"
        @view="handleView"
        @write="handleToast"
    />
  </div>
</template>

<style lang="scss">
.main {
  &__title {
    font-size: 40px;
    text-align: center;
    margin: 20px 0;
  }
}
</style>

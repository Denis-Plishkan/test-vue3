<script setup lang="ts">
interface IButton {
  txt?: string
  modify?: string
}

withDefaults(defineProps<IButton>(), {
  text: '',
  modify: '',
})
</script>

<template>
  <button class="button" :class="modify ? `button_${modify}` : ''">
    {{ txt }}
  </button>
</template>

<style lang="scss">
@use 'UIButton';
</style>

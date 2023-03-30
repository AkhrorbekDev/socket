<template>
  <div class="contact-item">
    <div class="contact-item__avatar">
      <img
        :src="contact.avatar"
        class="">
      <span class="online_icon"></span>
    </div>
    <div class="contact-item__info">
      <span>{{ contact.name }}</span>
      <p>{{ contact.is_online }}</p>
    </div>
  </div>
</template>

<script setup>

import { defineComponent } from 'vue';

defineComponent({
  name: 'Contact',
});

defineProps({
  contact: {
    type: Object,
    default: null,
  },
});

</script>

<style scoped lang="scss" src="@/assets/scss/contact.scss">

</style>

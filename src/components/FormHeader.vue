<template>
  <div class="form-header">
    <div v-if="contact" class="form-header__contact-info">
      <div class="form-header__contact-avatar">
        <img :src="contact.avatar" class="rounded-circle user_img">
        <span class="online_icon"></span>
      </div>
      <div class="form-header__contact-user">
        <span>{{ contact.name }}</span>
      </div>
      <div class="form-header__contact-types">
        <button class="video-cam">
          <img src="@/assets/cam.svg" alt="">
        </button>
        <button>
          <a href="tel:+998712022021" class="phone">
            <img src="@/assets/phone.svg" alt="">
          </a>
        </button>


      </div>
    </div>
    <!--    <span class="form-header__actions-btn">+</span>
        <div class="form-header__action-menu">
          <ul>
            <li><i class="fas fa-user-circle"></i> View profile</li>
            <li><i class="fas fa-users"></i> Add to close friends</li>
            <li><i class="fas fa-plus"></i> Add to group</li>
            <li><i class="fas fa-ban"></i> Block</li>
          </ul>
        </div>-->
  </div>
</template>

<script setup>

import { defineComponent } from 'vue';

defineComponent({
  name: 'FormHeader',
});

defineProps({
  contact: {
    type: Object,
    default: null,
  },
});

</script>

<style scoped lang="scss" src="@/assets/scss/form-header.scss">

</style>

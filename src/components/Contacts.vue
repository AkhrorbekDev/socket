<template>
  <div class="contacts-list">
    <div class="contacts-list__header">
      <div class="input-group">
        <input type="text" placeholder="Search..." name="" class="search">
        <div class="input-group-prepend">
          <span class="input-group-text search_btn"><i class="fas fa-search"></i></span>
        </div>
      </div>
    </div>
    <div class="contacts-list__items">
      <Contact v-for="contact in contacts" :key="contact.id" :contact="contact" />
    </div>
    <div class="contacts-list__footer"></div>
  </div>
</template>

<script setup>
import Contact from '@/components/Contact.vue';
import { ref } from 'vue';


const contacts = ref([{
  avatar: 'https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg',
  name: 'Chat with Khalid',
}, {
  avatar: 'https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg',
  name: 'Chat with Khalid',
}, {
  avatar: 'https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg',
  name: 'Chat with Khalid',
}, {
  avatar: 'https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg',
  name: 'Chat with Khalid',
}, {
  avatar: 'https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg',
  name: 'Chat with Khalid',
}, {
  avatar: 'https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg',
  name: 'Chat with Khalid',
}]);
</script>

<style scoped src="@/assets/scss/contacts.scss" lang="scss">

</style>

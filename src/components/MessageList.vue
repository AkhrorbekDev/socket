<template>
  <div class="messages-list">
    <div v-for="message in messages" :key="message.id" class="messages-list__item" :class="{ _sender: message.sender }">
      <Message :message="message" />
    </div>
  </div>

</template>

<script setup>
import { defineComponent, ref } from 'vue';
import Message from '@/components/Message.vue';
import { socket } from '@/socket';

defineComponent({
  name: 'Message',
});

defineProps({
  messages: {
    type: Array,
    default: null,
  },
});

</script>

<style scoped lang="scss" src="@/assets/scss/message-list.scss">

</style>

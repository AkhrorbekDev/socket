<template>
  <div v-if="message" class="message-item" :class="{ _sender: message.sender }">
    <p class="message-item__content">
      {{ message.text }}
    </p>
    <span v-if="message.send_time" class="message-item__time">
      {{ $ISOtoDate(message.send_time) }}
    </span>
  </div>
</template>

<script setup>
import { defineComponent } from 'vue';

defineComponent({
  name: 'Message',
});

defineProps({
  message: {
    type: Object,
    default: null,
  },
});

</script>

<style scoped lang="scss" src="@/assets/scss/message.scss">

</style>

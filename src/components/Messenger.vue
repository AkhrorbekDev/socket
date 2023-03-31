<template>
  <div class="messager">
    <FormHeader :contact="contact" />
    <MessageList :messages="messages" />
    <MessageForm ref="_messageForm" @on:submit="sendMessage" />
  </div>
</template>

<script setup>
import FormHeader from '@/components/FormHeader.vue';
import MessageForm from '@/components/MessageForm.vue';
import MessageList from '@/components/MessageList.vue';
import { defineComponent, ref } from 'vue';
import {pusher, socket} from '@/socket';

defineComponent({
  name: 'Messenger',
});

const contact = ref({
  avatar: 'https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg',
  name: 'Chat with Khalid',
});

const messages = ref([]);
const _messageForm = ref(null);

socket.on('get-messages', (e) => {
  messages.value = e;
});

socket.on('message:get', (e) => {
  messages.value.push(e);
});

pusher.listen('MessageSent',(event) => {
    console.log(event)
})

function sendMessage(e) {
  if (e?.text.length > 0) {
    messages.value.push(e);
    socket.emit('message:send', e);
    _messageForm.value.clear();
  }
}

</script>

<style scoped lang="scss" src="@/assets/scss/messenger.scss">

</style>

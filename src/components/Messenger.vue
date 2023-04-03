<template>
    <div class="messager">
        <FormHeader :contact="contact"/>
        <MessageList :messages="messages"/>
        <MessageForm ref="_messageForm" @on:submit="sendMessage"/>
    </div>
</template>

<script setup>
import FormHeader from '@/components/FormHeader.vue';
import MessageForm from '@/components/MessageForm.vue';
import MessageList from '@/components/MessageList.vue';
import {defineComponent, ref} from 'vue';
import echo, {pusherState} from '@/pusher'
import axios from '@/axios'

defineComponent({
    name: 'Messenger',
});

const contact = ref({
    avatar: 'https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg',
    name: 'Chat with Khalid',
});

axios.get('/messages').then((res) => {
    console.log(res)
})

const messages = pusherState.messages;
const _messageForm = ref(null);


function sendMessage(e) {
    pusherState.messages.push({
        user: pusherState.user,
        message: e.text
    })
    axios.post('/messages', {
        message: e.text
    })
}


</script>

<style scoped lang="scss" src="@/assets/scss/messenger.scss">

</style>

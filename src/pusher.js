import {reactive} from 'vue';
import Echo from 'laravel-echo'
import Pusher from "pusher-js";

export const pusherState = reactive({
    activeUser: null,
    users: [],
    messages: [],
});

// "undefined" means the URL will be computed from the `window.location` object
const echo = new Echo({
    broadcaster: 'pusher',
    key: 'qwerty',
    cluster: 'mt1',
    forceTLS: true
})

let typingTimer = null

echo.join('chat')
    .here(user => {
        console.log(user)
        pusherState.users = user;
    })
    .joining(user => {
        pusherState.users.push(user);
    })
    .leaving(user => {
        pusherState.users = pusherState.users.filter(u => u.id !== user.id);
    })
    .listen('MessageSent', (event) => {
        pusherState.messages.push(event.message);
    })
    .listenForWhisper('typing', user => {
        pusherState.activeUser = user;

        if (typingTimer) {
            clearTimeout(typingTimer);
        }

        typingTimer = setTimeout(() => {
            pusherState.activeUser = false;
        }, 3000);
    })

export default echo

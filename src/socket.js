import {reactive} from 'vue';
import {io} from 'socket.io-client';
import Pusher from "pusher-js";

export const state = reactive({
    connected: false,
    socket_id: null,
    fooEvents: [],
    barEvents: [],
});

// "undefined" means the URL will be computed from the `window.location` object
const URL = process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:3333';

export const socket = io(URL, {
    path: '/websocket',
    auth: {
        token: 'abcd',
    },
    reconnectionAttempts: 10,
});

socket.on('connect', () => {
    state.socket_id = socket.id;
    state.connected = true;
});

socket.on('disconnect', () => {
    state.connected = false;
    state.socket_id = null;
});


export const pusher = new Pusher('qwerty', {
    httpHost: '92.204.253.20',
    httpPort: '6001',
    cluster: 'mt1'
})

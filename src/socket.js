import { reactive } from 'vue';
import { io } from 'socket.io-client';

export const state = reactive({
  connected: false,
  socket_id: null,
  fooEvents: [],
  barEvents: [],
});

// "undefined" means the URL will be computed from the `window.location` object
const URL = process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:3333';

export const socket = io(URL);

socket.on('connect', () => {
  console.log(socket.id);
  state.socket_id = socket.id;
  state.connected = true;
});

socket.on('disconnect', () => {
  state.connected = false;
});

socket.on('foo', (...args) => {
  state.fooEvents.push(args);
});

socket.on('bar', (...args) => {
  state.barEvents.push(args);
});

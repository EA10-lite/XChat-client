import { io } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
// const URL = 'https://xchat-server-c0ch.onrender.com/4000';
const URL = 'http://localhost:4000';

export const socket = io(URL);

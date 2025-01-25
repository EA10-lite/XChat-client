"use client"
import './globals.css';
import { socket } from '../../socket';
import { useEffect, useState } from "react";

export default function Home() {
  // const socket = io("http://localhost:4000");
  const [message, setMessage] = useState("");
  const [handle, setHandle] = useState("");

  const handleSubmit  = () => {
    socket.emit("chat", {
      message,
      handle
    });

    setMessage("");
  }

  useEffect(() => {
    function getChats(data){
      console.log(data);
      document.getElementById("output").innerHTML += `
        <p><strong>${data.handle}:</strong> ${data.message}</p>
      `;
    }

    socket.on('chat', getChats);

    return () => {
      socket.off('chat', getChats);
    };
  }, []);

  return (
    <div className="">
      <div id='chat-window'>
        <div id='output'></div>

      </div>
      <input 
        id="handle" 
        type="text" 
        placeholder="Handle" 
        value={handle} 
        onChange={(e)=> setHandle(e.target.value)} 
      />
      <input 
        id="message" 
        type="text" 
        placeholder="Message" 
        value={message} 
        onChange={(e)=> setMessage(e.target.value)}
      />
      <button id="send" onClick={handleSubmit}>Send</button>
    </div>
  );
}

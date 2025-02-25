"use client"
import { useContext } from 'react';

import { ChatContext } from '@/context/ChatContext';
import { UserContext } from '@/context/UserContext';

import { ChatRoom, EmptyChatRoom } from '@/containers';

import './globals.css';

export default function Home() {
  const { selectedChat } = useContext(ChatContext);
  const { user } = useContext(UserContext);

  return (
    <>
     { user && <div className="w-full h-full">
      { selectedChat ? <ChatRoom /> : <EmptyChatRoom /> }
      </div> }
    </>
  );
}

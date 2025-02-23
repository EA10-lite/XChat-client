
import create from 'zustand';

export const useChatStore = () => {
    const chatStore = create((set) => ({
        messages: [],
        setMessages: (messages) => set({ messages }),
        addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
    }));


    return chatStore;
}
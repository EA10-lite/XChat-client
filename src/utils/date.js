export const formatTime = (timestamp) => {
    const messageDate = new Date(timestamp);
    const now = new Date();

    const diffTime = now - messageDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    
    if (diffDays === 0) {
        return messageDate.toLocaleTimeString('en-US', options);
    } else if (diffDays === 1) {
        return "Yesterday";
    } else if (diffDays < 7) {
        return messageDate.toLocaleDateString('en-US', { weekday: 'long' });
    } else {
        return messageDate.toLocaleDateString('en-GB'); // 'en-GB' gives DD/MM/YYYY format
    }
}
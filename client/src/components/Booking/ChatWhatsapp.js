// src/WhatsAppButton.js
import React from 'react';
import './ChatWhatsapp.css';
import whatsappIcon from './assets/whatsapp-icon.png'; // Ensure you have the WhatsApp icon image in the src directory

const ChatWhatsapp = () => {
    return (
        <a href="https://wa.me/601160744138?text=Hello!%20I%20just%20booked%20an%20appointment" className="whatsapp-button" target="_blank" rel="noopener noreferrer">
    <img src={whatsappIcon} alt="WhatsApp Icon" />
    Chat with Technician
</a>

    );
}

export default ChatWhatsapp;

import React from 'react';
import whatsappIcon from './assets/whatsapp-icon.png'; // Ensure you have the WhatsApp icon image in the src directory

const ChatWhatsappIcon = () => {
   

    const imageStyle = {
        width: '32px', // Adjust the width as needed
        height: '32px', // Adjust the height as needed
        boxShadow: '4px 5px 10px rgba(0, 0, 0, 0.4)',
        borderRadius: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
    };

    return (
        <a href="https://wa.me/601160744138?text=Hello!%20I%20just%20booked%20an%20appointment"  target="_blank" rel="noopener noreferrer">
            <img src={whatsappIcon} alt="WhatsApp Icon" style={imageStyle} />
        </a>
    );
}

export default ChatWhatsappIcon;

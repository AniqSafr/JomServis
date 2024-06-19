import React, {useState} from 'react';
import './Payment.css';
import qr from './assets/qr.jpg';
import mae from './assets/mae.png';
import tng from './assets/tng.png';
import dn from './assets/dn.png';
import bmw from './assets/bmw.jpg';

function Payment() {
  return (
    <div className="Payment">
      <div className="payment-container">
      </div>
      <ServiceSummary/>
      <div className='timer-container'>
        <p>Please Complete Your Payment</p>
        </div>
        <QRCode/>
    </div>
  );
}

function ServiceSummary() {
    return (
        <section>
        <div className="summary-section">
          <div className="summary-details">
            <p><strong>Total Deposit</strong>: <a href="#">RM 20.00</a></p>
            <p><strong>Pay With</strong>:</p>
            <div className="payment-methods">
              <img src={mae} />
              <img src={tng}  />
              <img src={dn}  />
            </div>
            <p><strong>Recipient Name</strong>: <a>SIME DARBY MOTORS</a></p>
            <div className='service-type'>
            <img src={bmw} alt="service-type" />
            </div>
            </div>
            </div>
        </section>
    )
}

function QRCode() {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleAddReceiptClick = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

    return (
        <section>
            <div className="qr-code-section">
              <img src={qr}alt="QR Code" />
            </div>
            <div className='receipt-button'>
            <button className="add-receipt-button" onClick={handleAddReceiptClick}>Add a receipt</button>
            {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>Payment Complete</h2>
            <p>Your payment has been successfully processed.</p>
            <button className="close-popup-button" onClick={handleClosePopup}>Done</button>
          </div>
        </div>
      )}
            </div>
        </section>
    )
}

export default Payment;

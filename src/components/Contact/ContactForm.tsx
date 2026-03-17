import React from 'react';
import { SITE_CONTENT } from '../../utils/constants';

const ContactQRCode: React.FC = () => {
  return (
    <div className="contact-qrcode">
      <div className="qr-placeholder">
        <div className="qr-placeholder-content">
          📱
          <p>飞书二维码</p>
        </div>
      </div>
      <p className="qr-description">{SITE_CONTENT.CONTACT.QR_CODE_DESC}</p>
    </div>
  );
};

export default ContactQRCode;
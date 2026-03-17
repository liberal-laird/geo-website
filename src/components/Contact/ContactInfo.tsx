import React from 'react';
import { SITE_CONTENT } from '../../utils/constants';

const ContactInfo: React.FC = () => {
  return (
    <div className="contact-info">
      <h3>联系我们</h3>
      <p>扫码添加我们的飞书账号，与我们的专家团队直接沟通</p>

      <div className="qr-code-container">
        <img
          src="/feishu.png"
          alt="飞书二维码"
          className="qr-code-image"
        />
        <p className="qr-instruction">截图保存二维码，打开飞书App扫一扫</p>
      </div>
    </div>
  );
};

export default ContactInfo;
import React from 'react';
import { SITE_CONTENT } from '../../utils/constants';
import Button from '../Shared/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (href: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onNavigate }) => {
  if (!isOpen) return null;

  return (
    <div className="mobile-menu-overlay" onClick={onClose}>
      <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
        <button className="mobile-menu-close" onClick={onClose}>×</button>
        <ul className="mobile-menu-list">
          {SITE_CONTENT.NAVIGATION.map((item, index) => (
            <li key={index} className="mobile-menu-item">
              <a
                href={item.href}
                className="mobile-menu-link"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.href);
                  onClose();
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
          <li className="mobile-menu-item">
            <Button
              variant="primary"
              onClick={() => {
                onNavigate('#contact');
                onClose();
              }}
              className="mobile-menu-cta"
            >
              联系我们
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
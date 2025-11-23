import React from 'react';
import { Page } from './types';
import { HomeIcon, ServicesIcon, ShopIcon, CommunityIcon, ProfileIcon, PawIcon, MenuIcon, XIcon, ShoppingBagIcon } from './Icons';

interface HeaderProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
  cartItemCount: number;
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ activePage, setActivePage, cartItemCount, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems: { label: Page; icon: React.ReactElement }[] = [
    { label: 'Home', icon: <HomeIcon /> },
    { label: 'Services', icon: <ServicesIcon /> },
    { label: 'Shop', icon: <ShopIcon /> },
    { label: 'Community', icon: <CommunityIcon /> },
    { label: 'Profile', icon: <ProfileIcon /> },
  ];

  const NavLink: React.FC<{item: typeof navItems[0]}> = ({ item }) => {
    const isActive = activePage === item.label;
    return (
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setActivePage(item.label);
            setIsMenuOpen(false);
          }}
          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            isActive ? 'text-purple-600 bg-purple-50' : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          {item.label}
        </a>
    );
  }

  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-sm border-b border-gray-200 z-30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <PawIcon className="w-8 h-8 text-purple-600 mr-2" />
            <span className="text-xl font-bold text-gray-800">Pet Memorial</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
             {navItems.map((item) => <NavLink key={item.label} item={item} /> )}
          </div>
          <div className="flex items-center">
            <button 
              onClick={onCartClick} 
              className="relative p-2 rounded-full text-gray-600 hover:bg-gray-100 hover:text-gray-800 mr-2"
              aria-label="Open cart"
            >
              <ShoppingBagIcon className="w-6 h-6" />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 block h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center transform translate-x-1/2 -translate-y-1/2">
                  {cartItemCount}
                </span>
              )}
            </button>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-gray-600 hover:bg-gray-100">
                {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             {navItems.map((item) => <NavLink key={item.label} item={item} /> )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
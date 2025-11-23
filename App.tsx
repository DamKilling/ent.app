import React from 'react';
import { Page, Post, Comment, Product, Memorial } from './types';
import Header from './BottomNav';
import {
  CalendarIcon, PawIcon, LocationPinIcon, HeartIcon, InfoIcon, UsersIcon, CheckCircleIcon, DiamondIcon, UrnIcon, CandleIcon,
  ShoppingCartIcon, SearchIcon, PlusIcon, ChevronRightIcon, CreditCardIcon, ClockIcon, RefreshCwIcon, StoreIcon, FileTextIcon,
  BriefcaseIcon, BellIcon, SettingsIcon, GridIcon, LogOutIcon, ImageIcon, XIcon, TagIcon, SparklesIcon, EllipsisHorizontalIcon,
  ArrowLeftIcon, MessageCircleIcon, ShareIcon, SendIcon, HomeIcon, TrashIcon
} from './Icons';

// Page Components defined in the same file to keep file count low.

const LoginPage: React.FC<{ onLogin: (asGuest: boolean) => void }> = ({ onLogin }) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-fuchsia-50 to-white flex items-center justify-center p-4 font-sans">
            <div className="max-w-md w-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 space-y-8">
                <div className="text-center">
                    <PawIcon className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                    <h2 className="text-3xl font-bold text-gray-900">Cherish Every Moment</h2>
                    <p className="mt-2 text-gray-600">Sign in to continue to your memorial space.</p>
                </div>
                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onLogin(false); }}>
                    <div>
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                        <input id="email" name="email" type="email" autoComplete="email" required defaultValue="jessica.smith@example.com" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500" />
                    </div>
                    <div>
                        <label htmlFor="password"className="text-sm font-medium text-gray-700">Password</label>
                        <input id="password" name="password" type="password" autoComplete="current-password" required defaultValue="password123" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500" />
                    </div>
                    <div>
                        <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors">
                            Sign In
                        </button>
                    </div>
                </form>
                <div className="text-center">
                    <button onClick={() => onLogin(true)} className="font-medium text-sm text-purple-600 hover:text-purple-500">
                        Continue as Guest
                    </button>
                </div>
            </div>
        </div>
    );
};

const HomePage: React.FC<{ setActivePage: (page: Page) => void }> = ({ setActivePage }) => {
  const [activeTab, setActiveTab] = React.useState('Nearby Stores');

  const features = [
    { icon: <LocationPinIcon className="w-7 h-7 text-purple-500"/>, label: 'Store Booking', desc: 'Find nearby locations', page: 'Services' as Page },
    { icon: <HeartIcon className="w-7 h-7 text-red-400"/>, label: 'Memorials', desc: 'Custom keepsakes', page: 'Memorials' as Page },
    { icon: <InfoIcon className="w-7 h-7 text-sky-500"/>, label: 'About Us', desc: 'Trusted nationwide', page: 'AboutUs' as Page },
    { icon: <UsersIcon className="w-7 h-7 text-orange-500"/>, label: 'Partnerships', desc: 'Business collaboration', page: 'Home' as Page }
  ];

  const stores = [
      {
          name: "Main Store (总店)",
          address: "江苏省苏州市工业园区独墅湖科教创新区仁爱路111号",
      },
      {
          name: "Branch (分店)",
          address: "中国江苏省苏州市太仓市太仓大道111号",
      }
  ];

  return (
    <div>
      <div className="p-6 md:p-10 bg-gradient-to-b from-purple-200 via-fuchsia-100 to-transparent rounded-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Petner</h1>
        <p className="text-gray-500 mt-2">Honoring the unconditional love they gave us</p>
      </div>

      <div className="px-4 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button 
            onClick={() => setActivePage('Services')}
            className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg shadow-purple-100/50 flex flex-col items-center text-center cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75">
            <div className="bg-blue-100 text-blue-500 rounded-xl p-3">
              <CalendarIcon className="w-10 h-10" />
            </div>
            <h3 className="font-bold text-lg mt-4 text-gray-800">Quick Booking</h3>
            <p className="text-sm text-gray-500 mt-1">Free pet pickup service</p>
          </button>
          <button 
            onClick={() => setActivePage('Services')}
            className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg shadow-fuchsia-100/50 flex flex-col items-center text-center cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75">
            <div className="bg-green-100 text-green-500 rounded-xl p-3">
              <PawIcon className="w-10 h-10" />
            </div>
            <h3 className="font-bold text-lg mt-4 text-gray-800">Afterlife Process</h3>
            <p className="text-sm text-gray-500 mt-1">Detailed service guide</p>
          </button>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md mt-6">
          <div className="flex justify-around">
            {features.map(item => (
              <button key={item.label} onClick={() => setActivePage(item.page)} className="flex flex-col items-center text-center w-1/4 px-2 rounded-lg hover:bg-gray-100 py-2 transition-colors">
                <div className="p-3 bg-gray-100 rounded-full">{item.icon}</div>
                <p className="text-sm font-semibold mt-2 text-gray-700">{item.label}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md mt-6 text-center bg-fuchsia-50">
          <h3 className="font-bold text-xl text-gray-800">Share & Get Rewards</h3>
          <p className="text-gray-500 mt-1">Nationwide pet cremation service • Years of expertise</p>
          <button className="bg-purple-500 text-white font-semibold py-2 px-8 rounded-full mt-4">Learn More</button>
        </div>

        <div className="mt-6">
          <div className="flex border-b">
            <button onClick={() => setActiveTab('Nearby Stores')} className={`py-2 px-4 font-semibold ${activeTab === 'Nearby Stores' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500'}`}>Nearby Stores</button>
            <button onClick={() => setActiveTab('Reviews')} className={`py-2 px-4 font-semibold ${activeTab === 'Reviews' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500'}`}>Reviews</button>
          </div>
           {activeTab === 'Nearby Stores' && (
              <div className="bg-white p-6 rounded-b-2xl rounded-r-2xl space-y-4">
                {stores.map((store, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-start">
                      <LocationPinIcon className="w-6 h-6 text-purple-500 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-gray-800">{store.name}</p>
                        <p className="text-sm text-gray-600">{store.address}</p>
                      </div>
                    </div>
                    <button onClick={() => setActivePage('Services')} className="ml-4 bg-purple-100 text-purple-700 font-semibold py-2 px-4 rounded-lg text-sm whitespace-nowrap hover:bg-purple-200 transition-colors">
                      Book Now
                    </button>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'Reviews' && (
                <div className="bg-white p-6 rounded-b-2xl rounded-r-2xl text-center text-gray-500">
                    <p>Reviews will be shown here.</p>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

const ServicesPage: React.FC<{
    setActivePage: (page: Page, data?: any) => void;
}> = ({ setActivePage }) => {
    const services = [
        {
            id: 101,
            title: "Basic Farewell",
            price: 120,
            petSize: "For small pets",
            features: ["Individual cremation service", "Urn bag included", "Memorial certificate", "24-hour pickup service", "Basic farewell ceremony"],
            popular: false
        },
        {
            id: 102,
            title: "Premium Memorial",
            price: 280,
            petSize: "For small to medium pets",
            features: ["Individual cremation service", "Premium urn", "Memorial certificate & photo", "24-hour pickup service", "Warm farewell ceremony", "Fur keepsake creation", "Online memorial space"],
            popular: true
        },
        {
            id: 103,
            title: "Eternal Tribute",
            price: 580,
            petSize: "For small, medium & large pets",
            features: ["VIP cremation service", "Premium custom urn", "Professional photo album", "24-hour dedicated pickup", "Private farewell ceremony", "Multiple fur keepsakes", "Permanent online memorial", "Bone & diamond customization", "Grief counseling support"],
            popular: false
        }
    ];

    const [selectedService, setSelectedService] = React.useState('Premium Memorial');

    return (
        <div>
            <div className="text-center p-6">
                <h1 className="text-3xl font-bold text-gray-800">Pet Funeral Services</h1>
                <p className="text-gray-500 mt-2 max-w-lg mx-auto">With love and respect, giving your beloved companion their final journey</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
                {services.map(service => {
                    const isSelected = selectedService === service.title;
                    return (
                        <div 
                            key={service.title} 
                            onClick={() => setSelectedService(service.title)}
                            className={`bg-white p-6 rounded-2xl shadow-lg relative flex flex-col cursor-pointer transition-all duration-300 ${
                                isSelected ? 'border-2 border-purple-500 ring-2 ring-purple-200' : 
                                service.popular ? 'border-2 border-purple-400' : 'border-2 border-transparent'
                            }`}
                        >
                            {service.popular && !isSelected && <span className="absolute top-0 -mt-3 left-1/2 -translate-x-1/2 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</span>}
                            {isSelected && <span className="absolute top-0 -mt-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">Selected</span>}

                            <div className="text-center">
                                <h2 className="text-xl font-bold text-gray-800">{service.title}</h2>
                                <p className="text-sm text-gray-500 mt-1">{service.petSize}</p>
                                <p className="text-4xl font-bold text-purple-600 my-2">${service.price} <span className="text-lg font-normal text-gray-500">from</span></p>
                            </div>
                            <ul className="space-y-3 mt-4 flex-grow">
                                {service.features.map(feature => (
                                    <li key={feature} className="flex items-center text-gray-600">
                                        <CheckCircleIcon className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0"/>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button 
                                onClick={(e) => {
                                    e.stopPropagation(); // prevent card's onClick
                                    setActivePage('ServiceDetail', { service });
                                }}
                                className={`w-full mt-6 py-3 rounded-xl font-semibold text-center transition-colors ${
                                    (isSelected || service.popular) ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                {isSelected ? 'Customize Service' : 'Select This Service'}
                            </button>
                        </div>
                    );
                })}
            </div>
            
            <div className="mt-12">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Service Commitment</h2>
                <ul className="space-y-3 text-gray-600 list-disc list-inside text-center max-w-md mx-auto">
                  <li>We provide 24/7 service, responding to your needs promptly</li>
                  <li>All service processes are transparent and open, giving you peace of mind</li>
                  <li>Our professional team treats every departed pet with the utmost respect and care</li>
                </ul>
              </div>
            </div>
        </div>
    );
};

const ServiceDetailPage: React.FC<{
  service: { id: number; title: string; price: number; features: string[] };
  onAddToCart: (product: Product) => void;
  onBack: () => void;
}> = ({ service, onAddToCart, onBack }) => {
  const urnOptions = [
    { name: 'Standard Urn', price: 0, desc: 'A simple and elegant ceramic urn.' },
    { name: 'Premium Wooden Urn', price: 50, desc: 'Crafted from solid oak with a fine finish.' },
    { name: 'Engraved Photo Urn', price: 80, desc: 'Personalize with your favorite photo.' },
  ];
  const keepsakeOptions = [
    { name: 'Fur Keepsake', price: 0, desc: 'A small vial containing a lock of fur.' },
    { name: 'Clay Paw Print', price: 30, desc: 'A lasting impression of your pet\'s paw.' },
  ];
  
  const [selectedUrn, setSelectedUrn] = React.useState(urnOptions[0]);
  const [selectedKeepsake, setSelectedKeepsake] = React.useState(keepsakeOptions[0]);

  if (!service) {
      return (
        <div className="text-center p-8">
            <p>Service details not found.</p>
            <button onClick={onBack} className="mt-4 text-purple-600 font-semibold">Go Back</button>
        </div>
      );
  }

  const finalPrice = service.price + selectedUrn.price + selectedKeepsake.price;

  const handleAddToCart = () => {
    const customizedProduct: Product = {
      id: service.id,
      icon: <CalendarIcon className="w-8 h-8 text-purple-500" />,
      name: `${service.title}`,
      desc: `Urn: ${selectedUrn.name}, Keepsake: ${selectedKeepsake.name}`,
      price: finalPrice,
      tag: 'Service',
      tagColor: 'bg-purple-100 text-purple-600',
    };
    onAddToCart(customizedProduct);
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-6">
          <button onClick={onBack} className="flex items-center text-gray-600 hover:text-gray-900 font-semibold">
              <ArrowLeftIcon className="w-5 h-5 mr-2" />
              Back to Services
          </button>
          <h1 className="text-4xl font-bold text-gray-800 mt-4">{service.title}</h1>
          <p className="text-gray-500 mt-2">Customize the farewell service for your beloved companion.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
              {/* Urn Options */}
              <div className="bg-white p-6 rounded-2xl shadow-md">
                  <h2 className="text-xl font-bold mb-4">Urn Selection</h2>
                  <div className="space-y-3">
                      {urnOptions.map(option => (
                          <div key={option.name} onClick={() => setSelectedUrn(option)}
                               className={`p-4 border rounded-lg cursor-pointer flex justify-between items-center transition-all ${selectedUrn.name === option.name ? 'border-purple-500 ring-2 ring-purple-200' : 'border-gray-200'}`}>
                               <div>
                                  <h3 className="font-semibold">{option.name}</h3>
                                  <p className="text-sm text-gray-500">{option.desc}</p>
                                </div>
                               <span className="font-semibold text-gray-700 ml-4 whitespace-nowrap">
                                  {option.price > 0 ? `+$${option.price}` : 'Included'}
                               </span>
                          </div>
                      ))}
                  </div>
              </div>

              {/* Keepsake Options */}
              <div className="bg-white p-6 rounded-2xl shadow-md">
                  <h2 className="text-xl font-bold mb-4">Keepsake Options</h2>
                   <div className="space-y-3">
                      {keepsakeOptions.map(option => (
                          <div key={option.name} onClick={() => setSelectedKeepsake(option)}
                               className={`p-4 border rounded-lg cursor-pointer flex justify-between items-center transition-all ${selectedKeepsake.name === option.name ? 'border-purple-500 ring-2 ring-purple-200' : 'border-gray-200'}`}>
                               <div>
                                  <h3 className="font-semibold">{option.name}</h3>
                                  <p className="text-sm text-gray-500">{option.desc}</p>
                                </div>
                               <span className="font-semibold text-gray-700 ml-4 whitespace-nowrap">
                                  {option.price > 0 ? `+$${option.price}` : 'Included'}
                               </span>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
          
          <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-2xl shadow-md sticky top-24">
                  <h2 className="text-xl font-bold mb-4 border-b pb-3">Service Summary</h2>
                  <div className="space-y-2 text-gray-600">
                      <div className="flex justify-between"><span>Base Service:</span> <strong>{service.title}</strong></div>
                      <div className="flex justify-between"><span>Base Price:</span> <strong>${service.price.toFixed(2)}</strong></div>
                      <div className="flex justify-between"><span>Urn:</span> <strong>{selectedUrn.name}</strong></div>
                      <div className="flex justify-between"><span>Keepsake:</span> <strong>{selectedKeepsake.name}</strong></div>
                  </div>
                  <div className="border-t mt-4 pt-4">
                      <div className="flex justify-between items-center font-bold text-2xl text-gray-800">
                          <span>Total</span>
                          <span>${finalPrice.toFixed(2)}</span>
                      </div>
                      <button 
                          onClick={handleAddToCart}
                          className="w-full mt-4 bg-purple-600 text-white font-bold py-3 rounded-xl shadow-lg shadow-purple-200 hover:bg-purple-700 transition-all flex items-center justify-center">
                          <ShoppingCartIcon className="w-5 h-5 mr-2" />
                          Add to Cart
                      </button>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

const CartSidebar: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    cart: Product[];
    onRemoveFromCart: (index: number) => void;
}> = ({ isOpen, onClose, cart, onRemoveFromCart }) => {
    const [paymentMethod, setPaymentMethod] = React.useState('card');
    const cartTotal = cart.reduce((total, item) => total + item.price, 0);

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose} aria-hidden="true"></div>
            )}
            <div 
                className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                role="dialog"
                aria-modal="true"
                aria-labelledby="cart-heading"
            >
                <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center p-4 border-b">
                        <h2 id="cart-heading" className="text-xl font-bold">Your Cart</h2>
                        <button onClick={onClose} aria-label="Close cart">
                            <XIcon className="w-6 h-6 text-gray-500" />
                        </button>
                    </div>
                    {cart.length === 0 ? (
                        <p className="text-gray-500 text-center py-8 flex-grow flex items-center justify-center">Your cart is empty.</p>
                    ) : (
                        <div className="p-4 space-y-3 flex-grow overflow-y-auto">
                            {cart.map((item, index) => (
                                <div key={`${item.id}-${index}`} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <div className="flex-grow">
                                        <p className="font-semibold text-gray-800">{item.name}</p>
                                        <p className="text-xs text-gray-500 line-clamp-1">{item.desc}</p>
                                        <p className="text-sm font-bold text-purple-600 mt-1">${item.price.toFixed(2)}</p>
                                    </div>
                                    <button onClick={() => onRemoveFromCart(index)} className="p-2 text-gray-400 hover:text-red-500 transition-colors" aria-label={`Remove ${item.name} from cart`}>
                                        <TrashIcon className="w-5 h-5" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                    {cart.length > 0 && (
                        <div className="p-6 border-t bg-gray-50">
                            <div className="mb-6">
                                <h3 className="font-semibold text-gray-700 mb-3">Payment Method</h3>
                                <div className="space-y-2">
                                    <label className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${paymentMethod === 'card' ? 'border-purple-500 bg-white ring-1 ring-purple-500' : 'bg-white border-gray-200'}`}>
                                        <input type="radio" name="payment" value="card" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} className="text-purple-600 focus:ring-purple-500" />
                                        <span className="ml-3 font-medium text-gray-700 flex items-center"><CreditCardIcon className="w-5 h-5 mr-2 text-gray-500"/> Credit Card</span>
                                    </label>
                                    <label className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${paymentMethod === 'paypal' ? 'border-purple-500 bg-white ring-1 ring-purple-500' : 'bg-white border-gray-200'}`}>
                                        <input type="radio" name="payment" value="paypal" checked={paymentMethod === 'paypal'} onChange={() => setPaymentMethod('paypal')} className="text-purple-600 focus:ring-purple-500" />
                                        <span className="ml-3 font-medium text-gray-700">PayPal</span>
                                    </label>
                                    <label className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${paymentMethod === 'apple' ? 'border-purple-500 bg-white ring-1 ring-purple-500' : 'bg-white border-gray-200'}`}>
                                        <input type="radio" name="payment" value="apple" checked={paymentMethod === 'apple'} onChange={() => setPaymentMethod('apple')} className="text-purple-600 focus:ring-purple-500" />
                                        <span className="ml-3 font-medium text-gray-700">Apple Pay</span>
                                    </label>
                                </div>
                            </div>
                            <div className="flex justify-between items-center font-bold text-xl text-gray-800 mb-4">
                                <span>Total</span>
                                <span>${cartTotal.toFixed(2)}</span>
                            </div>
                            <button className="w-full bg-purple-600 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-purple-200 hover:bg-purple-700 transition-all">
                                Checkout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

const ShopPage: React.FC<{
    onAddToCart: (product: Product) => void;
}> = ({ onAddToCart }) => {
    const products: Product[] = [
        {
            id: 1,
            icon: <DiamondIcon className="w-8 h-8 text-cyan-500" />,
            name: "Pet Ashes Necklace (Glass Pendant)",
            desc: "Beautiful glass pendant to keep your pet close",
            price: 65,
            tag: "Memorial",
            tagColor: "bg-blue-100 text-blue-600"
        },
        {
            id: 2,
            icon: <UrnIcon className="w-8 h-8 text-orange-500" />,
            name: "Scented Urn with Dried Flowers",
            desc: "Elegant urn with aromatic dried flowers",
            price: 95,
            tag: "Memorial",
            tagColor: "bg-blue-100 text-blue-600"
        },
        {
            id: 3,
            icon: <CandleIcon className="w-8 h-8 text-yellow-500" />,
            name: "Cremation Service Package",
            desc: "Complete cremation with memorial ceremony",
            price: 280,
            tag: "Service",
            tagColor: "bg-green-100 text-green-600"
        }
    ];

    return (
        <div>
             <div className="text-center p-6">
                <h1 className="text-3xl font-bold text-gray-800">Memorial Shop</h1>
                <p className="text-gray-500 mt-2">Cherish precious memories with our curated products</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
                {products.map(product => (
                    <div key={product.id} className="bg-white p-4 rounded-2xl shadow-lg flex flex-col">
                        <div className="p-4 bg-gray-100 rounded-xl self-center">
                           {product.icon}
                        </div>
                        <div className="flex-grow pt-4 flex flex-col">
                            <div className="flex justify-between items-start">
                                <h3 className="font-bold text-gray-800 leading-tight">{product.name}</h3>
                                <span className={`text-xs font-semibold px-2 py-1 rounded-md ${product.tagColor} whitespace-nowrap`}>{product.tag}</span>
                            </div>
                            <p className="text-sm text-gray-500 my-2 flex-grow">{product.desc}</p>
                            <p className="text-lg font-bold text-purple-600">${product.price}</p>
                            <button 
                                onClick={() => onAddToCart(product)}
                                className="w-full mt-3 py-2 rounded-xl bg-gray-100 text-gray-700 font-semibold text-sm flex items-center justify-center transition-colors hover:bg-purple-100 hover:text-purple-700"
                            >
                                <ShoppingCartIcon className="w-4 h-4 mr-2" />
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


const CommunityPage: React.FC<{
    setActivePage: (page: Page) => void;
    posts: Post[];
    onPostSelect: (post: Post) => void;
}> = ({ setActivePage, posts, onPostSelect }) => {
    const [activeTab, setActiveTab] = React.useState('Discover');

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                 <div className="flex space-x-2 md:space-x-6 border-b">
                    {['Follow', 'Discover', 'Nearby'].map(tab => (
                        <button key={tab} onClick={() => setActiveTab(tab)} className={`text-lg font-bold pb-2 transition-colors duration-200 ${activeTab === tab ? 'text-gray-900 border-b-2 border-purple-600' : 'text-gray-400'}`}>{tab}</button>
                    ))}
                </div>
                 <button onClick={() => setActivePage('Upload')} className="bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center">
                    <PlusIcon className="w-5 h-5 mr-2" />
                    New Post
                </button>
            </div>
            
            <main className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {posts.map((post) => (
                    <div key={post.id} onClick={() => onPostSelect(post)} className="bg-white rounded-xl flex flex-col overflow-hidden shadow-lg cursor-pointer transition-transform hover:scale-105 duration-200">
                        {post.image ? (
                           <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                        ) : (
                           <div className="text-5xl text-center flex-grow flex items-center justify-center p-4 h-48 bg-fuchsia-50">{post.emoji}</div>
                        )}
                        <div className="p-3 flex flex-col flex-grow justify-end">
                            <p className="font-semibold text-gray-800 line-clamp-2">{post.title}</p>
                            <div className="flex justify-between items-center mt-2">
                                <div className="flex items-center">
                                    <img src={post.avatar} alt={post.user} className="w-6 h-6 rounded-full mr-2" />
                                    <span className="text-sm text-gray-500 truncate">{post.user}</span>
                                </div>
                                <div className="flex items-center text-sm text-gray-500">
                                    <HeartIcon className="w-4 h-4 mr-1" />
                                    <span>{post.likes}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
};

const ProfilePage: React.FC<{ 
    setActivePage: (page: Page) => void;
    user: { name: string; id: string; avatar: string; };
}> = ({ setActivePage, user }) => {
    const orderIcons = [
        { icon: <CreditCardIcon />, label: "Pending Payment" },
        { icon: <ClockIcon />, label: "In Service" },
        { icon: <CheckCircleIcon />, label: "Pending Confirm" },
        { icon: <RefreshCwIcon />, label: "Returns/After-sales" },
    ];
    const managementIcons = [
        { icon: <StoreIcon />, label: "Open Store" },
        { icon: <FileTextIcon />, label: "Invoices" },
        { icon: <BriefcaseIcon />, label: "Job Opportunities" },
        { icon: <BellIcon />, label: "Notifications" },
        { icon: <PawIcon />, label: "Pet Memorial Credentials" },
        { icon: <SettingsIcon />, label: "Settings" },
        { icon: <GridIcon />, label: "Apply to Join" },
        { icon: <LogOutIcon />, label: "Sign Out" },
    ];

    return (
        <div>
            <div className="p-6 bg-white rounded-lg shadow-md">
                <div className="flex items-center">
                    <img src={user.avatar} alt={user.name} className="w-20 h-20 rounded-full mr-6" />
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
                        <p className="text-gray-500">User ID: {user.id}</p>
                    </div>
                </div>
            </div>
            <div className="mt-6 space-y-6">
                <div className="bg-white p-4 rounded-2xl shadow-md">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-gray-800">My Orders</h3>
                        <a href="#" className="text-sm text-gray-500 flex items-center">View All <ChevronRightIcon className="w-4 h-4"/></a>
                    </div>
                    <div className="flex justify-around">
                        {orderIcons.map(item => (
                            <div key={item.label} className="flex flex-col items-center text-center w-1/4">
                                <div className="text-gray-600">{React.cloneElement(item.icon, { className: 'w-8 h-8' })}</div>
                                <p className="text-xs mt-2 text-gray-600">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <button 
                    onClick={() => setActivePage('PetAICompanion')}
                    className="w-full p-6 rounded-2xl shadow-md text-center bg-gradient-to-br from-blue-100 to-purple-100 transition-transform duration-200 hover:scale-105 active:scale-100"
                >
                    <h3 className="font-bold text-lg text-gray-800">Pet Memorial AI Model</h3>
                    <p className="text-gray-500 mt-1">If only you could become an angel like your furry child~</p>
                    <div className="bg-white text-gray-700 text-sm font-semibold py-2 px-6 rounded-full mt-3 shadow inline-block">Learn More</div>
                </button>

                <div className="bg-white p-4 rounded-2xl shadow-md">
                    <div className="grid grid-cols-4 gap-y-6">
                        {managementIcons.map(item => (
                            <div key={item.label} className="flex flex-col items-center text-center">
                                <div className="text-gray-600">{React.cloneElement(item.icon, { className: 'w-8 h-8' })}</div>
                                <p className="text-xs mt-2 text-gray-600">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const UploadPage: React.FC<{
    setActivePage: (page: Page) => void;
    onPublish: (post: { caption: string; image: string | null }) => void;
}> = ({ setActivePage, onPublish }) => {
    const [imagePreview, setImagePreview] = React.useState<string | null>(null);
    const [caption, setCaption] = React.useState('');
    const fileInputRef = React.useRef<HTMLInputElement>(null);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const triggerFileSelect = () => fileInputRef.current?.click();

    const handlePublish = () => {
        if (!imagePreview && !caption.trim()) return;
        onPublish({ caption, image: imagePreview });
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-gray-800">New Post</h1>
                <div>
                     <button onClick={() => setActivePage('Community')} className="font-semibold text-gray-600 mr-4">Cancel</button>
                    <button 
                        onClick={handlePublish}
                        className="font-semibold text-white bg-purple-600 rounded-lg px-6 py-2 text-sm disabled:bg-purple-300 transition-colors"
                        disabled={!imagePreview && !caption.trim()}
                    >
                        Publish
                    </button>
                </div>
            </div>

            <div className="space-y-4">
                <textarea
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    placeholder="Share something..."
                    className="w-full h-40 border rounded-lg p-2 focus:ring-purple-500 focus:border-purple-500 resize-none placeholder-gray-500 text-base"
                />
                {imagePreview ? (
                    <div className="relative w-32 h-32">
                        <img src={imagePreview} alt="Preview" className="w-32 h-32 object-cover rounded-lg" />
                        <button onClick={() => setImagePreview(null)} className="absolute -top-2 -right-2 bg-gray-800 text-white rounded-full p-1 shadow-lg">
                            <XIcon className="w-4 h-4" />
                        </button>
                    </div>
                ) : (
                    <button onClick={triggerFileSelect} className="w-32 h-32 bg-white rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 transition-colors hover:bg-gray-50 hover:border-purple-400">
                       <div className="text-center">
                         <ImageIcon className="w-8 h-8 mx-auto" />
                         <span className="text-sm mt-1">Photo/Video</span>
                       </div>
                    </button>
                )}
            </div>
            
             <div className="border-t mt-4 pt-4 flex flex-wrap gap-2">
                <button className="flex items-center bg-gray-100 text-gray-700 text-sm px-3 py-1.5 rounded-full transition-colors hover:bg-gray-200">
                   <UsersIcon className="w-4 h-4 mr-1.5" /> @ Friends
                </button>
                <button className="flex items-center bg-gray-100 text-gray-700 text-sm px-3 py-1.5 rounded-full transition-colors hover:bg-gray-200">
                   <TagIcon className="w-4 h-4 mr-1.5" /> Add Tag
                </button>
                <button className="flex items-center bg-gray-100 text-gray-700 text-sm px-3 py-1.5 rounded-full transition-colors hover:bg-gray-200">
                   <LocationPinIcon className="w-4 h-4 mr-1.5" /> Add Location
                </button>
                <button className="flex items-center bg-purple-100 text-purple-700 text-sm font-semibold px-3 py-1.5 rounded-full transition-colors hover:bg-purple-200">
                   <SparklesIcon className="w-4 h-4 mr-1.5" /> AI Assistant
                </button>
            </div>

            <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                capture="environment"
                className="hidden"
            />
        </div>
    );
};

const PostDetailPage: React.FC<{
    post: Post | null;
    onBack: () => void;
    onLike: (postId: number) => void;
    onAddComment: (postId: number, text: string) => void;
}> = ({ post, onBack, onLike, onAddComment }) => {
    const [newComment, setNewComment] = React.useState('');

    if (!post) {
        return (
            <div className="text-center">
                <p>Post not found.</p>
                <button onClick={onBack} className="mt-4 text-purple-600 font-semibold">Go Back to Community</button>
            </div>
        );
    }
    
    const handleCommentSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newComment.trim()) {
            onAddComment(post.id, newComment.trim());
            setNewComment('');
        }
    };

    return (
        <div className="bg-white max-w-4xl mx-auto rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex">
                <div className="md:w-1/2">
                    {post.image ? 
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover" /> :
                        <div className="w-full h-full bg-fuchsia-50 flex items-center justify-center text-7xl">{post.emoji}</div>
                    }
                </div>
                <div className="md:w-1/2 flex flex-col">
                    <header className="border-b p-4 flex justify-between items-center">
                        <div className="flex items-center overflow-hidden">
                            <img src={post.avatar} alt={post.user} className="w-10 h-10 rounded-full mr-3 flex-shrink-0" />
                            <span className="font-semibold truncate">{post.user}</span>
                        </div>
                        <button className="font-semibold text-white bg-purple-600 rounded-full px-4 py-1.5 text-sm ml-auto flex-shrink-0">Follow</button>
                    </header>
                    
                    <main className="flex-grow p-4 overflow-y-auto">
                        <p className="text-gray-800">{post.title}</p>
                        <p className="text-xs text-gray-400 mt-2">Posted 2 hours ago</p>

                        <div className="border-t border-b border-gray-100 my-4 py-3 flex justify-around">
                            <button className="flex items-center text-gray-600 space-x-2">
                               <ShareIcon className="w-5 h-5" />
                               <span>Share</span>
                            </button>
                             <button className="flex items-center text-gray-600 space-x-2">
                               <MessageCircleIcon className="w-5 h-5" />
                               <span>{post.comments.length}</span>
                            </button>
                            <button onClick={() => onLike(post.id)} className="flex items-center text-gray-600 space-x-2">
                               <HeartIcon className="w-5 h-5" />
                               <span>{post.likes}</span>
                            </button>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-semibold">Comments ({post.comments.length})</h3>
                            {post.comments.map((comment, index) => (
                                 <div key={index} className="flex items-start space-x-3">
                                    <img src={comment.avatar} alt={comment.user} className="w-8 h-8 rounded-full flex-shrink-0" />
                                    <div className="flex-grow">
                                        <p className="text-sm text-gray-500">{comment.user}</p>
                                        <p className="text-gray-800">{comment.text}</p>
                                    </div>
                                </div>
                            ))}
                             {post.comments.length === 0 && (
                                <p className="text-gray-500 text-sm">Be the first to comment!</p>
                            )}
                        </div>
                    </main>

                     <footer className="border-t p-2">
                        <form onSubmit={handleCommentSubmit} className="flex items-center">
                            <input
                                type="text"
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                placeholder="Add a comment..."
                                className="w-full bg-gray-100 border-none rounded-full px-4 py-2 focus:ring-purple-500 text-sm"
                            />
                            <button type="submit" className="ml-2 font-semibold text-purple-600 px-3 py-2 text-sm">Send</button>
                        </form>
                    </footer>
                </div>
            </div>
        </div>
    );
};

const PetAICompanionPage: React.FC<{
    setActivePage: (page: Page) => void;
}> = ({ setActivePage }) => {
    const [petType, setPetType] = React.useState<'Dog' | 'Cat' | null>(null);
    const [messages, setMessages] = React.useState<{ sender: 'user' | 'ai', text: string }[]>([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [userInput, setUserInput] = React.useState('');
    const messagesEndRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading]);

    const handleSelectPet = async (type: 'Dog' | 'Cat') => {
        setPetType(type);
        setMessages([]); // Clear previous chat
        setIsLoading(true);
        try {
            const res = await fetch('/api/gemini', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ petType: type, messages: [] }),
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || `API request failed with status ${res.status}`);
            }
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            setMessages([{ sender: 'ai', text: data.text }]);
        } catch (error) {
            console.error("Failed to initialize AI chat:", error);
            const errorMessage = (error as Error).message;
            setMessages([{ sender: 'ai', text: `Sorry, I am having trouble connecting right now. ${errorMessage}` }]);
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!userInput.trim() || isLoading) return;
        
        const userMessage = { sender: 'user' as const, text: userInput.trim() };
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        setUserInput('');
        setIsLoading(true);
        
        try {
            const res = await fetch('/api/gemini', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ petType, messages: newMessages }),
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || `API request failed with status ${res.status}`);
            }
            const data = await res.json();
            if (data.error) { throw new Error(data.error); }
            
            setMessages(prev => [...prev, { sender: 'ai', text: data.text }]);

        } catch (error) {
            console.error("Failed to send message:", error);
            const errorMessage = (error as Error).message;
            setMessages(prev => [...prev, { sender: 'ai', text: `I seem to be having trouble responding. Error: ${errorMessage}` }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-[calc(100vh-10rem)] max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <header className="flex items-center p-4 border-b">
                <button onClick={() => petType ? setPetType(null) : setActivePage('Profile')} className="p-2 rounded-full hover:bg-gray-100">
                    <ArrowLeftIcon className="w-6 h-6 text-gray-600" />
                </button>
                <h1 className="text-xl font-bold ml-4 text-gray-800">{petType ? `Chat with your ${petType}` : 'Pet AI Companion'}</h1>
            </header>
            
            {!petType ? (
                <div className="flex flex-col items-center justify-center flex-grow p-8 text-center">
                    <SparklesIcon className="w-16 h-16 text-purple-400 mb-4" />
                    <h2 className="text-2xl font-bold text-gray-800">Connect with Your Beloved Pet</h2>
                    <p className="text-gray-500 mt-2">Choose your pet type to start a conversation with our compassionate AI, designed to bring back cherished memories.</p>
                    <div className="flex gap-4 mt-8">
                        <button onClick={() => handleSelectPet('Dog')} className="px-8 py-4 bg-blue-100 text-blue-700 font-bold rounded-xl text-4xl transform hover:scale-105 transition-transform">🐶</button>
                        <button onClick={() => handleSelectPet('Cat')} className="px-8 py-4 bg-orange-100 text-orange-700 font-bold rounded-xl text-4xl transform hover:scale-105 transition-transform">🐱</button>
                    </div>
                </div>
            ) : (
                <main className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                            {msg.sender === 'ai' && <div className="w-8 h-8 rounded-full bg-purple-200 text-purple-600 flex items-center justify-center text-lg flex-shrink-0">{petType === 'Dog' ? '🐶' : '🐱'}</div>}
                            <div className={`max-w-xs md:max-w-md px-4 py-2 rounded-2xl shadow-sm ${msg.sender === 'user' ? 'bg-purple-500 text-white rounded-br-none' : 'bg-white text-gray-800 rounded-bl-none'}`}>
                                <p className="leading-relaxed">{msg.text}</p>
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex items-end gap-2 justify-start">
                            <div className="w-8 h-8 rounded-full bg-purple-200 text-purple-600 flex items-center justify-center text-lg flex-shrink-0">{petType === 'Dog' ? '🐶' : '🐱'}</div>
                             <div className="px-4 py-3 bg-white rounded-2xl rounded-bl-none shadow-sm">
                                <EllipsisHorizontalIcon className="w-6 h-6 text-gray-400 animate-pulse" />
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </main>
            )}

            {petType && (
                <footer className="p-2 border-t bg-white">
                    <form onSubmit={handleSendMessage} className="flex items-center">
                        <input
                            type="text"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            placeholder="Type your message..."
                            disabled={isLoading}
                            className="w-full bg-gray-100 border-none rounded-full px-4 py-3 focus:ring-purple-500 text-base"
                            aria-label="Chat input"
                        />
                        <button type="submit" disabled={isLoading || !userInput.trim()} className="ml-2 p-3 rounded-full bg-purple-600 text-white disabled:bg-purple-300 transition-colors" aria-label="Send message">
                            <SendIcon className="w-6 h-6" />
                        </button>
                    </form>
                </footer>
            )}
        </div>
    );
};


const MemorialsPage: React.FC<{
  setActivePage: (page: Page, data?: any) => void;
  memorials: Memorial[];
}> = ({ setActivePage, memorials }) => {
  return (
    <div>
      <div className="text-center p-6">
          <h1 className="text-3xl font-bold text-gray-800">Online Memorials</h1>
          <p className="text-gray-500 mt-2">A dedicated space to remember and honor your beloved pets</p>
          <button 
            onClick={() => setActivePage('CreateMemorial')}
            className="mt-4 bg-purple-600 text-white font-semibold py-2 px-6 rounded-lg flex items-center mx-auto"
          >
              <PlusIcon className="w-5 h-5 mr-2" />
              Create a Memorial
          </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
        {memorials.map((memorial) => (
          <div key={memorial.id} onClick={() => setActivePage('MemorialDetail', { memorial })} className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform hover:-translate-y-2 transition-transform duration-300">
            <img src={memorial.petAvatar} alt={memorial.petName} className="w-full h-56 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800">{memorial.petName}</h3>
              <p className="text-gray-500 text-sm">Forever in our hearts</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MemorialDetailPage: React.FC<{
  memorial: Memorial | null;
  onBack: () => void;
}> = ({ memorial, onBack }) => {
  if (!memorial) {
    return <div className="text-center p-8">Memorial not found. <button onClick={onBack} className="text-purple-600">Go Back</button></div>;
  }
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="relative">
        <img src={memorial.photos[0]} alt={memorial.petName} className="w-full h-64 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <h1 className="text-4xl font-bold text-white">{memorial.petName}</h1>
          <p className="text-purple-200">Our beloved companion</p>
        </div>
      </div>
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
            <div className="bg-gray-50 p-3 rounded-lg"><strong className="text-gray-600">Birthday:</strong> {memorial.birthday}</div>
            <div className="bg-gray-50 p-3 rounded-lg"><strong className="text-gray-600">Adoption Day:</strong> {memorial.adoptionDay}</div>
        </div>
        <div>
          <h3 className="font-bold text-lg text-gray-800">Favorite Toys</h3>
          <p className="text-gray-600 mt-1">{memorial.favoriteToys}</p>
        </div>
         <div>
          <h3 className="font-bold text-lg text-gray-800">Our Story</h3>
          <p className="text-gray-600 mt-1 leading-relaxed">{memorial.stories}</p>
        </div>
        <div>
          <h3 className="font-bold text-lg text-gray-800 mb-2">Photo Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {memorial.photos.map((photo, index) => (
              <img key={index} src={photo} alt={`${memorial.petName} ${index+1}`} className="rounded-lg object-cover w-full h-40" />
            ))}
          </div>
        </div>
        <div className="text-center pt-4">
          <button onClick={onBack} className="bg-purple-100 text-purple-700 font-semibold py-2 px-8 rounded-lg">Back to Memorials</button>
        </div>
      </div>
    </div>
  );
};

const CreateMemorialPage: React.FC<{
  onSave: (memorial: Omit<Memorial, 'id'>) => void;
  onCancel: () => void;
}> = ({ onSave, onCancel }) => {
  const [formData, setFormData] = React.useState({
    petName: '',
    birthday: '',
    adoptionDay: '',
    favoriteToys: '',
    stories: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...formData,
      petAvatar: 'https://i.pravatar.cc/300?u=mittens', // Placeholder
      photos: ['https://placedog.net/500/500?id=1', 'https://placedog.net/500/500?id=2', 'https://placedog.net/500/500?id=3'], // Placeholder
      // Fix: Add missing candles and tributes properties to conform to the Memorial type
      candles: 0,
      tributes: [],
    });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Create a New Memorial</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="petName" className="block text-sm font-medium text-gray-700">Pet's Name</label>
            <input type="text" name="petName" id="petName" value={formData.petName} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="birthday" className="block text-sm font-medium text-gray-700">Birthday</label>
              <input type="date" name="birthday" id="birthday" value={formData.birthday} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500" />
            </div>
            <div>
              <label htmlFor="adoptionDay" className="block text-sm font-medium text-gray-700">Adoption Day</label>
              <input type="date" name="adoptionDay" id="adoptionDay" value={formData.adoptionDay} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500" />
            </div>
          </div>
          <div>
            <label htmlFor="favoriteToys" className="block text-sm font-medium text-gray-700">Favorite Toys</label>
            <input type="text" name="favoriteToys" id="favoriteToys" value={formData.favoriteToys} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500" />
          </div>
           <div>
            <label htmlFor="stories" className="block text-sm font-medium text-gray-700">Share a Story</label>
            <textarea name="stories" id="stories" rows={4} value={formData.stories} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500" />
          </div>
          <div className="flex justify-end gap-4 pt-4">
             <button type="button" onClick={onCancel} className="bg-gray-100 text-gray-700 font-semibold py-2 px-6 rounded-lg">Cancel</button>
             <button type="submit" className="bg-purple-600 text-white font-semibold py-2 px-6 rounded-lg">Save Memorial</button>
          </div>
        </form>
    </div>
  );
};

const AboutUsPage: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">About Us</h1>
            <p className="text-gray-600 leading-relaxed mb-4">
                Founded with a deep love for animals, Petner is dedicated to providing compassionate and professional end-of-life care for beloved pets. We understand that pets are family, and their loss is a profound experience. Our mission is to honor their memory with dignity and respect, while supporting pet owners through their time of grief.
            </p>
             <p className="text-gray-600 leading-relaxed mb-4">
                Our team consists of caring professionals who are committed to creating a peaceful and comforting farewell. We offer a range of services, from individual cremation to personalized memorials, all designed to celebrate the unique bond you shared with your companion.
            </p>
            <p className="text-gray-600 leading-relaxed">
                Thank you for trusting us to care for your cherished friend.
            </p>
        </div>
    );
};

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [activePage, setActivePage] = React.useState<Page>('Home');
  const [pageData, setPageData] = React.useState<any>(null);
  const [history, setHistory] = React.useState<{ page: Page; data: any }[]>([]);

  const [posts, setPosts] = React.useState<Post[]>([
    { id: 1, emoji: "🌈", title: "Crossed the rainbow bridge today. Miss you, buddy.", user: "Sarah", likes: 12, avatar: "https://i.pravatar.cc/150?u=sarah", comments: [] },
    // Fix: Add missing emoji property
    { id: 2, emoji: "❤️", image: "https://placedog.net/500/500?id=45", title: "Our sweet boy, Max. We'll never forget your cuddles.", user: "John D.", likes: 45, avatar: "https://i.pravatar.cc/150?u=john", comments: [] },
    // Fix: Add missing emoji property
    { id: 3, emoji: "❤️", image: "https://loremflickr.com/500/500/cat?lock=12", title: "Found her favorite toy today and couldn't stop crying.", user: "Emily", likes: 33, avatar: "https://i.pravatar.cc/150?u=emily", comments: [] },
    { id: 4, emoji: "🕊️", title: "Fly high, sweet angel.", user: "Mike", likes: 21, avatar: "https://i.pravatar.cc/150?u=mike", comments: [] },
  ]);

  const [memorials, setMemorials] = React.useState<Memorial[]>([
    {
      id: 1,
      petName: 'Buddy',
      petAvatar: 'https://placedog.net/500/500?id=10',
      birthday: '2010-05-20',
      adoptionDay: '2010-08-15',
      favoriteToys: 'Squeaky squirrel, tennis balls',
      stories: 'Buddy was the most loyal friend anyone could ask for. He loved long walks in the park and chasing squirrels. His favorite spot was right by the fireplace on a cold evening. We miss his gentle presence every day.',
      photos: ['https://placedog.net/500/500?id=10', 'https://placedog.net/500/500?id=11', 'https://placedog.net/500/500?id=12'],
      // Fix: Add missing candles and tributes properties to conform to the Memorial type
      candles: 0,
      tributes: [],
    },
     {
      id: 2,
      petName: 'Mittens',
      petAvatar: 'https://loremflickr.com/500/500/cat?lock=20',
      birthday: '2015-02-14',
      adoptionDay: '2015-04-01',
      favoriteToys: 'Laser pointer, catnip mice',
      stories: 'Mittens had the loudest purr and the softest fur. She ruled the house with an iron paw, but was a total sweetheart when she wanted to be. Napping in sunbeams was her favorite pastime.',
      photos: ['https://loremflickr.com/500/500/cat?lock=20', 'https://loremflickr.com/500/500/cat?lock=21', 'https://loremflickr.com/500/500/cat?lock=22'],
      // Fix: Add missing candles and tributes properties to conform to the Memorial type
      candles: 0,
      tributes: [],
    }
  ]);

  const [cart, setCart] = React.useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  const currentUser = { name: "Jessica Smith", id: "U-182374", avatar: "https://i.pravatar.cc/150?u=jessica" };

  const handlePageChange = (page: Page, data: any = null) => {
    if (activePage === page) return;
    setHistory(prev => [...prev, { page: activePage, data: pageData }]);
    setActivePage(page);
    setPageData(data);
    window.scrollTo(0, 0);
  };
  
  const handleGlobalBack = () => {
    if (history.length > 0) {
        const lastState = history[history.length - 1];
        setHistory(prev => prev.slice(0, -1));
        setActivePage(lastState.page);
        setPageData(lastState.data);
    } else {
        if (activePage !== 'Home') {
            setActivePage('Home');
            setPageData(null);
        }
    }
  };

  if (!isLoggedIn) {
      return <LoginPage onLogin={() => setIsLoggedIn(true)} />;
  }
  
  const handleRemoveFromCart = (indexToRemove: number) => {
    setCart(currentCart => currentCart.filter((_, index) => index !== indexToRemove));
  };
  
  const handleLike = (postId: number) => {
    setPosts(posts.map(p => p.id === postId ? { ...p, likes: p.likes + 1 } : p));
  };
  
  const handleAddComment = (postId: number, text: string) => {
    const newComment: Comment = { user: currentUser.name, avatar: currentUser.avatar, text };
    const updatedPosts = posts.map(p => p.id === postId ? { ...p, comments: [...p.comments, newComment] } : p);
    setPosts(updatedPosts);
    if(pageData?.post?.id === postId) {
      setPageData({ post: updatedPosts.find(p => p.id === postId) });
    }
  };

  const handlePublishPost = (post: { caption: string; image: string | null }) => {
    const newPost: Post = {
        id: Date.now(),
        title: post.caption,
        image: post.image,
        emoji: "❤️",
        user: currentUser.name,
        avatar: currentUser.avatar,
        likes: 0,
        comments: [],
    };
    setPosts([newPost, ...posts]);
    handlePageChange('Community');
  };

  const handleSaveMemorial = (newMemorialData: Omit<Memorial, 'id'>) => {
    const newMemorial: Memorial = {
      id: Date.now(),
      ...newMemorialData
    };
    setMemorials([newMemorial, ...memorials]);
    handlePageChange('Memorials');
  };
  
  const renderPage = () => {
    switch(activePage) {
      case 'Home': return <HomePage setActivePage={handlePageChange} />;
      case 'Services': return <ServicesPage setActivePage={handlePageChange} />;
      case 'Shop': return <ShopPage onAddToCart={(p) => { setCart([...cart, p]); setIsCartOpen(true); }} />;
      case 'Community': return <CommunityPage setActivePage={handlePageChange} posts={posts} onPostSelect={(post) => handlePageChange('PostDetail', { post })} />;
      case 'Profile': return <ProfilePage setActivePage={handlePageChange} user={currentUser} />;
      case 'Upload': return <UploadPage setActivePage={handlePageChange} onPublish={handlePublishPost} />;
      case 'PostDetail':
        // Fix: Use find to get the live post object instead of relying on stale pageData.post
        // This ensures that likes and comments are updated immediately in the UI
        const currentPost = posts.find(p => p.id === pageData?.post?.id);
        return <PostDetailPage post={currentPost || pageData?.post} onBack={() => handlePageChange('Community')} onLike={handleLike} onAddComment={handleAddComment} />;
      case 'PetAICompanion': return <PetAICompanionPage setActivePage={handlePageChange} />;
      case 'Memorials': return <MemorialsPage setActivePage={handlePageChange} memorials={memorials} />;
      case 'MemorialDetail': return <MemorialDetailPage memorial={pageData?.memorial} onBack={() => handlePageChange('Memorials')} />;
      case 'CreateMemorial': return <CreateMemorialPage onSave={handleSaveMemorial} onCancel={() => handlePageChange('Memorials')} />;
      case 'AboutUs': return <AboutUsPage />;
      case 'ServiceDetail': 
        return <ServiceDetailPage 
            service={pageData?.service} 
            onBack={() => handlePageChange('Services')} 
            onAddToCart={(product) => {
                setCart(currentCart => [...currentCart, product]);
                setIsCartOpen(true);
            }}
        />;
      default: return <HomePage setActivePage={handlePageChange} />;
    }
  };

  return (
    <div className="font-sans">
      <Header activePage={activePage} setActivePage={handlePageChange} cartItemCount={cart.length} onCartClick={() => setIsCartOpen(true)} />
      <CartSidebar 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onRemoveFromCart={handleRemoveFromCart}
      />
      <main className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
        {activePage !== 'Home' && (
            <button 
                onClick={handleGlobalBack} 
                className="flex items-center text-gray-600 hover:text-purple-600 font-semibold mb-4 transition-colors"
            >
                <ArrowLeftIcon className="w-5 h-5 mr-1" />
                Back
            </button>
        )}
        {renderPage()}
      </main>
    </div>
  );
};

export default App;
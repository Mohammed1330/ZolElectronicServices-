import React, { useState } from 'react';
import { Building2, Phone, Mail, Menu, X, Home, Info, ShoppingBag, MessageSquare, LogIn, UserPlus } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [isLoginForm, setIsLoginForm] = useState(true);

  const services = [
    { title: 'Clothes', icon: '👕' },
    { title: 'Mobiles', icon: '📱' },
    { title: 'Furniture', icon: '🛋️' },
    { title: 'Real Estate', icon: '🏠' },
    { title: 'Rentals', icon: '🔑' },
    { title: 'Engineering Consultations', icon: '⚙️' },
    { title: 'Architecture', icon: '🏛️' },
    { title: 'Contractors', icon: '👷' },
    { title: 'Building Materials', icon: '🏗️' },
    { title: 'Motorcycles', icon: '🏍️' }
  ];

  const AuthForm = () => (
    <div className="max-w-md w-full mx-auto bg-white p-8 rounded-lg shadow-lg">
      <div className="flex justify-center mb-8">
        <Building2 className="h-12 w-12 text-blue-600" />
      </div>
      <div className="flex justify-center mb-6">
        <button
          className={`px-4 py-2 ${isLoginForm ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          onClick={() => setIsLoginForm(true)}
        >
          <LogIn className="inline-block mr-2 h-5 w-5" />
          Sign In
        </button>
        <button
          className={`px-4 py-2 ${!isLoginForm ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          onClick={() => setIsLoginForm(false)}
        >
          <UserPlus className="inline-block mr-2 h-5 w-5" />
          Sign Up
        </button>
      </div>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        {!isLoginForm && (
          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        )}
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {isLoginForm ? 'Sign In' : 'Sign Up'}
        </button>
      </form>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-8">Welcome to ZolElectronicServices</h1>
              <p className="text-xl text-gray-600 mb-12">Your One-Stop Solution for All Services</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">Explore our {service.title.toLowerCase()} services</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 'services':
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">Professional {service.title.toLowerCase()} services tailored to your needs</p>
                  <button className="mt-4 text-blue-600 hover:text-blue-800">Learn More →</button>
                </div>
              ))}
            </div>
          </div>
        );
      case 'about':
        return (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-600 mb-6">
                ZolElectronicServices is your premier destination for a wide range of services. We pride ourselves on
                connecting customers with quality service providers across multiple industries.
              </p>
              <p className="text-gray-600 mb-6">
                Our mission is to simplify the process of finding and booking services, ensuring a seamless experience
                for both customers and service providers.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">1000+</div>
                  <div className="text-gray-600">Service Providers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">50k+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">10+</div>
                  <div className="text-gray-600">Service Categories</div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'contact':
        return (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Name</label>
                      <input
                        type="text"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Message</label>
                      <textarea
                        rows={4}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-blue-600 mr-3" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-blue-600 mr-3" />
                      <span>contact@zolelectronicservices.com</span>
                    </div>
                    <div className="flex items-center">
                      <Building2 className="h-5 w-5 text-blue-600 mr-3" />
                      <span>123 Business Street, Suite 100<br />New York, NY 10001</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'auth':
        return <AuthForm />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">ZolElectronicServices</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => setActiveTab('home')}
                className={`flex items-center px-3 py-2 text-sm font-medium ${
                  activeTab === 'home' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                <Home className="h-5 w-5 mr-1" />
                Home
              </button>
              <button
                onClick={() => setActiveTab('services')}
                className={`flex items-center px-3 py-2 text-sm font-medium ${
                  activeTab === 'services' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                <ShoppingBag className="h-5 w-5 mr-1" />
                Services
              </button>
              <button
                onClick={() => setActiveTab('about')}
                className={`flex items-center px-3 py-2 text-sm font-medium ${
                  activeTab === 'about' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                <Info className="h-5 w-5 mr-1" />
                About
              </button>
              <button
                onClick={() => setActiveTab('contact')}
                className={`flex items-center px-3 py-2 text-sm font-medium ${
                  activeTab === 'contact' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                <MessageSquare className="h-5 w-5 mr-1" />
                Contact
              </button>
              <button
                onClick={() => setActiveTab('auth')}
                className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                <LogIn className="h-5 w-5 mr-1" />
                Sign In
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                {isMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => {
                  setActiveTab('home');
                  setIsMenuOpen(false);
                }}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => {
                  setActiveTab('services');
                  setIsMenuOpen(false);
                }}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 w-full text-left"
              >
                Services
              </button>
              <button
                onClick={() => {
                  setActiveTab('about');
                  setIsMenuOpen(false);
                }}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => {
                  setActiveTab('contact');
                  setIsMenuOpen(false);
                }}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 w-full text-left"
              >
                Contact
              </button>
              <button
                onClick={() => {
                  setActiveTab('auth');
                  setIsMenuOpen(false);
                }}
                className="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700 w-full text-left"
              >
                Sign In
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="py-10">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-400">
                ZolElectronicServices is your trusted partner for all your service needs.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => setActiveTab('home')} className="text-gray-400 hover:text-white">Home</button></li>
                <li><button onClick={() => setActiveTab('services')} className="text-gray-400 hover:text-white">Services</button></li>
                <li><button onClick={() => setActiveTab('about')} className="text-gray-400 hover:text-white">About</button></li>
                <li><button onClick={() => setActiveTab('contact')} className="text-gray-400 hover:text-white">Contact</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>123 Business Street</li>
                <li>New York, NY 10001</li>
                <li>+1 (555) 123-4567</li>
                <li>contact@zolelectronicservices.com</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {/* Add social media icons here */}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} ZolElectronicServices. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
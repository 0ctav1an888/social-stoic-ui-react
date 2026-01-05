
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Coaching', path: '/coaching' },
    { name: 'Bootcamps', path: '/bootcamps' },
    { name: 'Videos', path: '/videos' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled 
          ? 'bg-stoic-black/95 backdrop-blur-md py-3 shadow-md' 
          : 'bg-transparent py-5'
      )}
    >
      <nav className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 z-30">
          <img 
            src="https://socialstoic-assets-cdn.s3.eu-west-2.amazonaws.com/logo.png"
            height={254}
            width={50}
            alt="Social Stoic Logo" 
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'animated-underline text-white font-medium hover:text-stoic-green-light transition-colors',
                location.pathname === link.path && 'text-stoic-green-light'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="https://calendly.com/thesocialstoic/coachingapplicationcall?month=2025-03" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-black py-2 px-4"
          >
            Book a Consultation
          </Link>
          <a 
            href="https://www.youtube.com/@SocialStoicYouTube" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-stoic-green-light transition-colors"
            aria-label="YouTube Channel"
          >
            <Youtube className="h-6 w-6" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-30 text-white focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <div className="relative w-6 h-5">
            <span
              className={cn(
                "absolute h-0.5 w-6 bg-white transform transition-all duration-300",
                isOpen ? "rotate-45 top-2" : "top-0"
              )}
            />
            <span
              className={cn(
                "absolute h-0.5 bg-white transform transition-all duration-300",
                isOpen ? "opacity-0 w-0" : "opacity-100 w-6 top-2"
              )}
            />
            <span
              className={cn(
                "absolute h-0.5 w-6 bg-white transform transition-all duration-300",
                isOpen ? "-rotate-45 top-2" : "top-4"
              )}
            />
          </div>
        </button>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "fixed inset-0 bg-stoic-black/95 backdrop-blur-md z-20 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center justify-center",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col items-center space-y-6 w-full px-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-xl text-white hover:text-stoic-green-light transition-colors w-full text-center py-2',
                  location.pathname === link.path && 'text-stoic-green-light'
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 w-full flex flex-col gap-4">
              <Link 
                to="https://calendly.com/thesocialstoic/coachingapplicationcall?month=2025-03" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-black py-3 w-full text-center"
              >
                Book a Consultation
              </Link>
              <a 
                href="https://www.youtube.com/@SocialStoicYouTube" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex justify-center py-2"
                aria-label="YouTube Channel"
              >
                <Youtube className="h-8 w-8 text-white hover:text-stoic-green-light transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

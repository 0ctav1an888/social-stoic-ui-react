
import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube } from 'lucide-react';
import { generateSizes, generateSrcSet } from '@/lib/image';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-stoic-black text-white pt-12 pb-8 border-t border-stoic-gray">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="https://socialstoic-assets-cdn.s3.eu-west-2.amazonaws.com/logo.png"
                srcSet={generateSrcSet("https://socialstoic-assets-cdn.s3.eu-west-2.amazonaws.com/logo.png")}
                sizes={generateSizes([{ size: '40px' }])}
                height={254}
                width={50}
                alt="Social Stoic Logo" 
                loading="lazy"
                decoding="async"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-400 max-w-xs">
              Offline Dating for Stoic Men.
            </p>
            <div className="flex items-center space-x-2">
                <a 
                  href="https://www.youtube.com/@SocialStoicYouTube" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-stoic-green-light transition-colors"
                  aria-label="YouTube Channel"
                >
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-primaryItalic text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-stoic-green-light transition-colors">Home</Link></li>
              <li><Link to="/coaching" className="text-gray-400 hover:text-stoic-green-light transition-colors">Coaching</Link></li>
              <li><Link to="/bootcamps" className="text-gray-400 hover:text-stoic-green-light transition-colors">Bootcamps</Link></li>
              <li><Link to="/videos" className="text-gray-400 hover:text-stoic-green-light transition-colors">Videos</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-stoic-green-light transition-colors">Contact</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-stoic-green-light transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-stoic-green-light transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-primaryItalic text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2">
              <li><Link to="/coaching" className="text-gray-400 hover:text-stoic-green-light transition-colors">1-on-1 Coaching In-Person</Link></li>
              <li><Link to="/coaching" className="text-gray-400 hover:text-stoic-green-light transition-colors">1-on-1 Coaching Online</Link></li>
              <li><Link to="/bootcamps" className="text-gray-400 hover:text-stoic-green-light transition-colors">Worldwide Bootcamps</Link></li>
              <li><Link to="/coaching" className="text-gray-400 hover:text-stoic-green-light transition-colors">Residentials</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-primaryItalic text-lg font-semibold">Contact</h4>
            <div className="flex flex-col space-y-3">
              <Link to="https://calendly.com/thesocialstoic/coachingapplicationcall?month=2025-03" className="inline-block">
                <button className="btn-secondary text-stoic-green py-2">Book a Consultation</button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-stoic-gray/30 mt-10 pt-6 flex flex-col md:flex-row justify-center items-center">
              <p className="text-sm text-gray-500 text-center">
              © {year} Social Stoic. All rights reserved. Website by Octav1an888 <a href="https://github.com/0ctav1an888" className="text-stoic-green-light hover:text-stoic-green transition-colors">(Desk888)</a>.
              </p>
            </div>
      </div>
    </footer>
  );
};

export default Footer;

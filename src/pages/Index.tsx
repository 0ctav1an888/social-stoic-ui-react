
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { generateOrganizationSchema } from '@/lib/structuredData';

const Index = () => {
  return (
    <div className="min-h-screen bg-stoic-black text-white">
      <Helmet>
                      <meta charSet="utf-8" />
                      <title>Social Stoic | Offline Dating For Stoic Men</title>
                      <meta name="description" content="Unlock the power of organic connections through Daygame. Learn to approach, connect, and build relationships with confidence." />
                      <link rel="canonical" href="/" />
                          {/* Open Graph / Social */}
                      <meta property="og:type" content="website" />
                      <meta property="og:url" content="https://socialstoic.com/" />
                      <meta property="og:title" content="Social Stoic | Offline Dating For Stoic Men" />
                      <meta property="og:description" content="Unlock the power of organic connections through Daygame. Learn to approach, connect, and build relationships with confidence." />
                      <meta property="og:image" content="https://socialstoic-assets-cdn.s3.eu-west-2.amazonaws.com/metadata_banner.png" />
                      {/* Twitter */}
                      <meta name="twitter:card" content="summary_large_image" />
                      <meta name="twitter:title" content="Social Stoic | Offline Dating For Stoic Men" />
                      <meta name="twitter:description" content="Unlock the power of organic connections through Daygame. Learn to approach, connect, and build relationships with confidence." />
                      <meta name="twitter:image" content="https://socialstoic-assets-cdn.s3.eu-west-2.amazonaws.com/metadata_banner.png" />
                      {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://socialstoic.com/",
            "name": "Social Stoic | Offline Dating For Stoic Men",
            "description": "Unlock the power of organic connections through Daygame. Learn to approach, connect, and build relationships with confidence."
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(generateOrganizationSchema({
            name: 'Social Stoic',
            description: 'Professional dating and social skills coaching for men.',
            url: 'https://socialstoic.com',
            logo: 'https://socialstoic-assets-cdn.s3.eu-west-2.amazonaws.com/logo.png',
            sameAs: [
              'https://www.instagram.com/thesocialstoic',
              'https://www.youtube.com/@thesocialstoic'
            ]
          }))}
        </script>
      </Helmet>
      <Navbar />
      
      <main>
        <HeroSection 
          title="Master The Art of Meeting Beautiful Women The Organic Way"
          description="Unlock the power of organic connections through Daygame. Learn to approach, attract, and build relationships with confidence."
        />
        
        <ServicesSection />
        
        {/* CTA Section */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://plus.unsplash.com/premium_photo-1661609291595-3a849ea67002?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Background"
              height={3540}
              width={2360}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-stoic-black/95 to-stoic-black/80"></div>
          </div>
          
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center opacity-0 animate-fade-in">
              <h2 className="font-primaryItalic text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Dating Life?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Take the first step towards building authentic connections with women through our coaching programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="https://calendly.com/thesocialstoic/coachingapplicationcall?month=2025-03" className="btn-primary text-black">
                  Book a Consultation
                </Link>
                <Link to="/coaching" className="btn-secondary">
                  Explore Programs
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

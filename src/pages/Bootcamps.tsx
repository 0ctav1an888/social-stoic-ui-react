
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { MapPin, Calendar, Flag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { generateOrganizationSchema, generateSchemaScript } from '@/lib/structuredData';

const Bootcamps = () => {
  const bootcampEvents = [
    { city: 'Munich', country: 'Germany', dates: '31 May–1 June', year: '2025', flag: '🇩🇪' },
    { city: 'Krakow', country: 'Poland', dates: '7–8 June', year: '2025', flag: '🇵🇱' },
    { city: 'Prague', country: 'Czech Republic', dates: '14–15 June', year: '2025', flag: '🇨🇿' },
    { city: 'Belgrade', country: 'Serbia', dates: '21–22 June', year: '2025', flag: '🇷🇸' },
    { city: 'London', country: 'UK', dates: '28–29 June', year: '2025', flag: '🇬🇧' },
    { city: 'Prague', country: 'Czech Republic', dates: '12–13 July', year: '2025', flag: '🇨🇿' },
    { city: 'Warsaw', country: 'Poland', dates: '26–27 July', year: '2025', flag: '🇵🇱' },
  ];

  // Generate schema for SEO
  const orgSchema = generateOrganizationSchema({
    name: 'Social Stoic',
    description: 'Offline Dating for Stoic Men - Bootcamps across Europe',
    url: 'https://www.socialstoic.com/bootcamps',
    logo: 'https://socialstoic-assets-cdn.s3.eu-west-2.amazonaws.com/logo.png',
  });

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Bootcamps | Social Stoic | Offline Dating for Stoic Men</title>
        <meta name="description" content="Join our immersive bootcamps across Europe and transform your dating life. Learn practical skills with Social Stoic's expert coaching." />
        <link rel="canonical" href="https://www.socialstoic.com/bootcamps" />
        <meta property="og:title" content="Social Stoic Bootcamps | Transform Your Dating Life" />
        <meta property="og:description" content="Join our immersive bootcamps across Europe and transform your dating life. Learn practical skills with Social Stoic's expert coaching." />
        <meta property="og:url" content="https://www.socialstoic.com/bootcamps" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://socialstoic-assets-cdn.s3.eu-west-2.amazonaws.com/socialstoichero.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Social Stoic Bootcamps | Transform Your Dating Life" />
        <meta name="twitter:description" content="Join our immersive bootcamps across Europe and transform your dating life. Learn practical skills with Social Stoic's expert coaching." />
        <meta name="twitter:image" content="https://socialstoic-assets-cdn.s3.eu-west-2.amazonaws.com/socialstoichero.webp" />
        <meta name="keywords" content="dating bootcamp, dating coaching, social skills, confidence, approach anxiety, social stoic, dating for men, europe bootcamps" />
        <div dangerouslySetInnerHTML={{ __html: generateSchemaScript(orgSchema) }} />
      </Helmet>

      <div className="page-transition min-h-screen flex flex-col bg-stoic-black text-white">
        <Navbar />
        
        <main className="flex-grow">
          <HeroSection 
            imageUrl="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            title="Bootcamps" 
            description="Immersive weekend experiences to transform your dating life across major European cities. Learn practical skills with expert guidance in real-world environments."
          />
          <section className="section-padding bg-stoic-black">
            <div className="container-custom">
              <div className="mb-12 max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-4xl font-primaryItalic font-bold mb-6">Upcoming Bootcamp Dates</h2>
                <p className="text-gray-300 text-lg mb-8">
                  Join our expert coaches for an intensive weekend of hands-on training, real-world approaches, and transformative experiences.
                </p>
                <Link 
                  to="https://calendly.com/thesocialstoic/bootcamp-application-call?month=2025-05" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-black py-3 px-8 text-lg"
                >
                  Apply for a Bootcamp
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bootcampEvents.map((event, index) => (
                  <Card key={index} className="bg-stoic-black/60 border border-stoic-gray hover:border-stoic-green/60 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 font-primaryItalic text-stoic-green-light">
                        <span className="text-2xl" aria-label={`Flag of ${event.country}`}>{event.flag}</span>
                        {event.city}, {event.country}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-3 text-gray-300 mb-4">
                        <Calendar className="h-5 w-5 text-stoic-green" />
                        <span className="text-lg">{event.dates}, {event.year}</span>
                      </div>
                      <Link 
                        to="https://calendly.com/thesocialstoic/bootcamp-application-call?month=2025-05" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center font-medium text-stoic-green hover:text-stoic-green-light"
                      >
                        Apply Now
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="section-padding bg-stoic-black/50">
            <div className="container-custom">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-primaryItalic font-bold mb-6">What to Expect at Our Bootcamps</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-stoic-green-light mb-2">Immersive Learning Experience</h3>
                      <p className="text-gray-300">Dive deep into practical skills with our expert coaches. Get immediate feedback and personalized guidance to overcome your specific challenges.</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-stoic-green-light mb-2">Real-World Application</h3>
                      <p className="text-gray-300">Practice in authentic social environments with our team's support. Learn to approach, connect, and build genuine relationships confidently.</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-stoic-green-light mb-2">Transformative Results</h3>
                      <p className="text-gray-300">Walk away with newfound confidence, practical skills, and a supportive community to continue your growth journey.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-stoic-black/60 p-8 rounded-lg border border-stoic-gray">
                  <h3 className="text-2xl font-primaryItalic font-bold mb-6 text-center">Ready to Transform Your Dating Life?</h3>
                  <p className="text-gray-300 mb-6">Our bootcamps are intensive, results-driven, and designed to create lasting change. Spaces are strictly limited to ensure quality coaching for each participant.</p>
                  <div className="text-center">
                    <Link 
                      to="https://calendly.com/thesocialstoic/bootcamp-application-call?month=2025-05" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-black py-3 px-8 block w-full"
                    >
                      Book Your Application Call
                    </Link>
                    <p className="mt-4 text-sm text-gray-400">Not sure if this is right for you? Schedule a free call to discuss your goals.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section-padding bg-gradient-to-b from-stoic-black to-stoic-black/90">
            <div className="container-custom text-center">
              <h2 className="text-3xl md:text-4xl font-primaryItalic font-bold mb-6">Join Us in Your City</h2>
              <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
                Don't miss the opportunity to transform your dating life with our expert coaches in a city near you.
                Spaces are limited to ensure personalized attention for each participant.
              </p>
              <Link 
                to="https://calendly.com/thesocialstoic/bootcamp-application-call?month=2025-05" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-black py-3 px-8 text-lg"
              >
                Apply Now
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Bootcamps;

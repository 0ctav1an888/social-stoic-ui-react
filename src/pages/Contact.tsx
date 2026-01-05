
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/sections/ContactForm';
import SmoothImage from '@/components/ui/SmoothImage';
import { Helmet } from 'react-helmet';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-stoic-black text-white">
      <Helmet>
                      <meta charSet="utf-8" />
                      <title>Social Stoic | Contact Us</title>
                      <meta name="description" content="Ready to take your social and dating skills to the next level? Fill out the form, and we'll get back to you to discuss how we can help you achieve your goals." />
                      <link rel="canonical" href="/contact" />
                          {/* Open Graph / Social */}
                          <meta property="og:type" content="website" />
                      <meta property="og:url" content="https://socialstoic.com/contact" />
                      <meta property="og:title" content="Social Stoic | Contact Us" />
                      <meta property="og:description" content="Ready to take your social and dating skills to the next level? Fill out the form, and we'll get back to you to discuss how we can help you achieve your goals." />
                      <meta property="og:image" content="https://socialstoic-assets-cdn.s3.eu-west-2.amazonaws.com/metadata_banner.png" />
                      {/* Twitter */}
                      <meta name="twitter:card" content="summary_large_image" />
                      <meta name="twitter:title" content="Social Stoic | Contact Us" />
                      <meta name="twitter:description" content="Ready to take your social and dating skills to the next level? Fill out the form, and we'll get back to you to discuss how we can help you achieve your goals." />
                      <meta name="twitter:image" content="https://socialstoic-assets-cdn.s3.eu-west-2.amazonaws.com/metadata_banner.png" />
                      {/* Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://socialstoic.com/contact",
              "name": "Social Stoic | Contact Us",
              "description": "Ready to take your social and dating skills to the next level? Fill out the form, and we'll get back to you to discuss how we can help you achieve your goals."
            }
          `}
        </script>
      </Helmet>
      <Navbar />
      
      <main className="page-transition pt-24">
        {/* Team Image Section */}
        <section className="py-16 bg-stoic-black">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center space-x-2 mb-6 justify-center">
                <div className="h-px w-10 bg-stoic-green"></div>
                <span className="font-primaryItalic text-stoic-green uppercase tracking-wider text-sm font-medium">Meet the Team</span>
                <div className="h-px w-10 bg-stoic-green"></div>
              </div>
              
              <h2 className="font-primaryItalic text-3xl md:text-4xl font-bold mb-8 text-center">
                The Faces Behind Social Stoic
              </h2>
              
              <div className="rounded-xl overflow-hidden">
                <SmoothImage
                  src="https://socialstoic-assets-cdn.s3.eu-west-2.amazonaws.com/contact_page_photo.webp"
                  height={4000}
                  width={5000}
                  alt="Eddie and Adam - Social Stoic Team"
                  className="w-full"
                  aspectRatio="aspect-[13/9]"
                />
              </div>
              
              <div className="mt-6 text-center text-gray-300">
                <p>Adam (left) and Eddie (right)</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Hero Section */}
        <section className="py-16 md:py-24 relative">
          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Text Section with Background */}
              <div className="relative">
                {/* Background Image - Only behind this column */}
                <div className="absolute inset-0 z-0 opacity-30 rounded-xl overflow-hidden">
                  <SmoothImage
                    src=""
                    height={0}
                    width={0}
                    alt="Background"
                    className="w-full h-full object-cover"
                    aspectRatio="aspect-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-stoic-black to-stoic-black/70"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 p-6">
                  <div className="flex items-center space-x-2 mb-6">
                    <div className="h-px w-10 bg-stoic-green"></div>
                    <span className="font-primaryItalic text-stoic-green uppercase tracking-wider text-sm font-medium">Get In Touch</span>
                  </div>
                  
                  <h1 className="font-primaryItalic text-4xl sm:text-5xl font-bold mb-6">
                    Let's Start Your Transformation
                  </h1>
                  
                  <p className="text-lg text-gray-300 mb-8">
                    Ready to take your social and dating skills to the next level? Fill out the form, and we'll get back to you to discuss how we can help you achieve your goals.
                  </p>
                  
                  {/* About Us Section */}
                  <div className="mb-8">
                    <h2 className="font-primaryItalic text-2xl font-bold mb-4">About Us</h2>
                    <p className="text-gray-300 mb-4">
                    With over 30 years of combined experience in daygame and offline dating, we've dedicated our lives to
                    helping men break free from frustration and create the dating lives they've always dreamed of—through
                    the powerful, time-tested art of cold approach. Everything we teach is real, tested, and proven. And
                    once you learn it, you'll never have to struggle with dating again.
                    </p>
                    {/* Eddie's Section */}
                    <div className="mb-6"></div>
                      <h3 className="font-primaryItalic text-xl font-semibold mb-2">Eddie</h3>
                      <p className="text-gray-300">
                      I've been in this game since 2005, coaching since 2012—which is why a lot of guys jokingly call me 'the
                      dinosaur of Daygame.' It's safe to say that … you're unlikely to find anyone out there with more
                      experience who's still actively coaching at this level. I've dedicated the past twenty years of my life to
                      this. I've coached thousands of men from every background and skill level, from beginners struggling to
                      take their first step to advanced guys refining the finer points of their game. I've seen it all, collaborated
                      with some of the biggest names in this space, and continuosly refined what actually works to help get
                      men real results.
                      </p>
                    </div>

                    {/* Adam's Section */}
                    <div className="mb-6">
                      <h3 className="font-primaryItalic text-xl font-semibold mb-2">Adam</h3>
                      <p className="text-gray-300">
                      I might not be a Daygame dinosaur like Eddie just yet… but I'm definitely no spring chicken either. Like
                      Eddie, I've dedicated my life to this. I started gaming in 2013, and since 2018, I've been coaching
                      alongside Eddie—refining, evolving, and pushing the boundaries of what's possible with these
                      techniques. Starting so young gave me the unique opportunity to test, adapt, and master this craft at an
                      insane level. I've taken these skills to their absolute limit, and now, I'm here to show you exactly how to do
                      the same.
                      </p>
                    </div>
                    {/* Our Philosophy Section */}
                    <div className="mb-6">
                      <h3 className="font-primaryItalic text-xl font-semibold mb-2">Our Philosophy</h3>
                      <p className="text-gray-300">
                      Together we're Social Stoic. And our name says it all. The Stoic part? That's
                      masculinity—strength, composure, and an unshakable mindset
                      </p>
                    </div>
                </div>
              </div>
              
              {/* Form Section - No Background Image */}
              <div className="animation-fade-in-right">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="bg-stoic-darkgray py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-primaryItalic text-3xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-300">
                Answers to common questions about our coaching services
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "How are your services different from other dating coaches?",
                  answer: "We focus on authentic connection rather than manipulation. Our approach is based on developing genuine confidence, emotional intelligence, and social skills—not on memorized lines or tricks. We believe in teaching men how to be their best selves and connect with women in an honest, respectful way."
                },
                {
                  question: "How long does it take to see results?",
                  answer: "Many clients report noticeable improvements after their first coaching session. However, significant transformation typically occurs over 1-3 months of consistent practice and implementation. The exact timeline depends on your starting point, how frequently you practice, and your specific goals."
                },
                {
                  question: "Do you guarantee results?",
                  answer: "While we can't guarantee specific outcomes (no ethical coach can), we can guarantee our commitment to providing you with the highest quality coaching and effective strategies. Our track record of success speaks for itself, and we work with each client until they achieve their desired results."
                },
                {
                  question: "What locations do you offer in-person coaching?",
                  answer: "We currently offer in-person coaching in most European countries but we are open for coaching overseas. For clients in other locations, we offer online coaching or can arrange travel for residential programs (additional fees may apply)."
                },
                {
                  question: "How do I know which program is right for me?",
                  answer: "The best way to determine which program fits your needs is to book a free consultation call. During this call, we'll discuss your current situation, goals, and preferences to recommend the most appropriate coaching option."
                }
              ].map((faq, i) => (
                <div key={i} className="bg-stoic-gray/20 rounded-xl overflow-hidden">
                  <details className="group">
                    <summary className="flex justify-between items-center p-6 cursor-pointer text-white font-medium text-left">
                      {faq.question}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-stoic-green transition-transform duration-300 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 text-gray-300">
                      {faq.answer}
                    </div>
                  </details>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-300 mb-6">
                Still have questions? Feel free to reach out to us directly.
              </p>
              <a href="mailto:thesocialstoic@gmail.com" className="btn-secondary">
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;

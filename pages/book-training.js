import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { stripePromise, STRIPE_PRODUCTS } from '../config/stripe';

export default function BookTraining() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const trainingPackages = [
    {
      title: "Team Training",
      description: "Exclusive training blocks reserved for sports teams. Perfect for building team chemistry while improving speed. Every athlete receives the same comprehensive speed training program.",
      plans: [
        {
          name: "Team Package",
          price: "$40",
          period: "per athlete/session",
          features: [
            "Reserved time block for your team",
            "4+ athletes from same team",
            "Minimum 4 sessions",
            "Full speed training program",
            "Team-focused environment"
          ],
          highlight: true
        }
      ]
    },
    {
      title: "Individual Training",
      description: "Train consistently with a monthly commitment or try a single session. All sessions are first come, first served and may include 1-6 athletes training together. Every session includes comprehensive speed training, form analysis, and progress tracking.",
      plans: [
        {
          name: "Single Session",
          price: "$75",
          period: "per session",
          features: [
            "No commitment required",
            "Try before you subscribe",
            "Full speed training program",
            "Form analysis included",
            "Progress tracking"
          ],
          highlight: false
        },
        {
          name: "Basic",
          price: "$130",
          period: "per month",
          features: [
            "2 sessions per month",
            "$65 per session value",
            "Save $20 vs. single sessions",
            "Full speed training program",
            "Monthly commitment"
          ],
          highlight: false
        },
        {
          name: "Standard",
          price: "$240",
          period: "per month",
          features: [
            "4 sessions per month",
            "$60 per session value",
            "Save $60 vs. single sessions",
            "Full speed training program",
            "Monthly commitment"
          ],
          highlight: true
        },
        {
          name: "Elite",
          price: "$440",
          period: "per month",
          features: [
            "8 sessions per month (maximum)",
            "$55 per session value",
            "Save $160 vs. single sessions",
            "Full speed training program",
            "Monthly commitment"
          ],
          highlight: false
        }
      ]
    }
  ];

  const handleCheckout = async (priceId, packageName) => {
    try {
      setLoading(true);
      const stripe = await stripePromise;
      
      // Create checkout session
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId,
          packageName,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Something went wrong');
      }

      const session = await response.json();

      // Redirect to Stripe Checkout
      const result = await stripe.redirectToCheckout({
        sessionId: session.sessionId,
      });

      if (result.error) {
        throw new Error(result.error.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert(error.message || 'Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Head>
        <title>Training Packages | Speed Force Athletics</title>
        <meta 
          name="description" 
          content="Choose your speed training package with Olympic athlete Eric Harrison Jr. Flexible options for individual athletes and teams." 
        />
      </Head>

      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="container-custom">
          <div className="flex justify-between items-center py-4">
            {/* Brand Name */}
            <Link href="/" className="text-xl font-bold text-[#2B4C7E]">
              Speed Force Athletics
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/#programs" className="nav-link">Programs</Link>
              <Link href="/#gallery" className="nav-link">Gallery</Link>
              <Link href="/#contact" className="nav-link">Contact</Link>
              <Link href="/#pricing" className="nav-link">Pricing</Link>
              <Link 
                href="/book-training" 
                className="btn-primary px-6 py-2 rounded-lg text-sm font-semibold hover:scale-105 transition-all duration-300"
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} py-4 border-t border-gray-100`}>
            <div className="flex flex-col space-y-4 px-4">
              <Link href="/#programs" className="nav-link-mobile" onClick={() => setIsMenuOpen(false)}>Programs</Link>
              <Link href="/#gallery" className="nav-link-mobile" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
              <Link href="/#contact" className="nav-link-mobile" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              <Link href="/#pricing" className="nav-link-mobile" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
              <Link 
                href="/book-training" 
                className="btn-primary px-6 py-3 rounded-lg text-center font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="min-h-screen bg-gray-50 pt-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2B4C7E] mb-4">Training Packages</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Choose your perfect training package and start your journey to becoming a faster athlete. 
              All packages include the same high-quality speed training program.
            </p>
            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-lg font-semibold text-green-700">
                First Session Free!
              </p>
              <p className="text-green-600">
                Try a complimentary training session to experience our program firsthand. No commitment required.
              </p>
            </div>
          </div>

          {/* Package Sections */}
          {trainingPackages.map((section, index) => (
            <div key={index} className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[#2B4C7E] mb-2">{section.title}</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">{section.description}</p>
              </div>
              
              <div className={`grid grid-cols-1 ${
                section.title === "Team Training" 
                  ? "md:grid-cols-1 max-w-md mx-auto" 
                  : "md:grid-cols-2 lg:grid-cols-4"
              } gap-8`}>
                {section.plans.map((plan, planIndex) => (
                  <div 
                    key={planIndex}
                    className={`bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 ${
                      plan.highlight ? 'border-2 border-yellow-400' : ''
                    }`}
                  >
                    {plan.highlight && (
                      <div className="bg-yellow-400 text-center py-2">
                        <span className="text-sm font-semibold text-blue-900">MOST POPULAR</span>
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[#2B4C7E] mb-4">{plan.name}</h3>
                      <div className="mb-4">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-gray-600 ml-2">{plan.period}</span>
                      </div>
                      <ul className="space-y-3 mb-6">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-600">
                            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <button 
                        onClick={() => handleCheckout(
                          plan.priceId,
                          plan.name
                        )}
                        disabled={loading}
                        className="w-full bg-[#2B4C7E] text-white py-3 px-6 rounded-md hover:bg-[#1a3057] transition-colors duration-200 disabled:opacity-50"
                      >
                        {loading ? 'Processing...' : 'Select Package'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Contact Information */}
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-[#2B4C7E] mb-6 text-center">Contact Us</h2>
            <p className="text-gray-600 text-center mb-8">
              Ready to start your speed training journey? Contact us to discuss your goals and get started with your preferred package.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="inline-block p-3 bg-[#2B4C7E] rounded-full text-white mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <a href="mailto:speedforceath@gmail.com" className="text-[#2B4C7E] hover:underline">
                  speedforceath@gmail.com
                </a>
              </div>
              <div className="text-center">
                <div className="inline-block p-3 bg-[#2B4C7E] rounded-full text-white mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <a href="tel:6893235834" className="text-[#2B4C7E] hover:underline">
                  (689) 323-5834
                </a>
              </div>
            </div>

            {/* Training Location & Times */}
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold text-[#2B4C7E] mb-4">Training Location & Times</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Location</h4>
                  <p className="text-gray-600">
                    Lakeland Christian School
                  </p>
                  <div className="mt-2">
                    <a 
                      href="https://maps.app.goo.gl/Tk8FNzAUbLYcCe9b6" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#2B4C7E] hover:underline"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      View on Google Maps
                    </a>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Training Times</h4>
                  <div className="text-gray-600">
                    <p>Saturday & Sunday</p>
                    <p>2:00 PM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

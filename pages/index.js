import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <Head>
        <title>Speed Training in Lakeland, FL | Olympic Athlete Coach | Speed Force Athletics</title>
        <meta 
          name="description" 
          content="Elite speed training in Lakeland, FL by Olympic athlete Eric Harrison Jr. Serving Tampa, Haines City, Plant City & Central Florida. Professional sprint training for youth athletes ages 8-18. Located at Lakeland Christian School."
        />
        <meta name="keywords" content="speed training Lakeland FL, youth athletics Tampa, sprint training Florida, Eric Harrison Jr, Olympic athlete coach, Lakeland Christian School, Plant City sports, Haines City athletics, Central Florida speed training, youth sports Lakeland, sprint coach Tampa Bay, athletic development Florida" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Speed Training in Lakeland, FL | Olympic Athlete Coach | Speed Force Athletics" />
        <meta property="og:description" content="Elite speed training by Olympic sprinter Eric Harrison Jr. in Lakeland, FL. Professional training for young athletes at Lakeland Christian School. Serving Tampa, Haines City, Plant City & Central Florida." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://speedforceathletics.com" />
        <meta property="og:image" content="https://speedforceathletics.com/og-image.jpg" />
        <meta property="og:site_name" content="Speed Force Athletics" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Speed Training in Lakeland, FL | Olympic Athlete Coach" />
        <meta name="twitter:description" content="Elite speed training by Olympic sprinter Eric Harrison Jr. in Lakeland, FL. Professional training for young athletes. Serving Tampa Bay area." />
        <meta name="twitter:image" content="https://speedforceathletics.com/twitter-card.jpg" />
        
        {/* Location Tags */}
        <meta name="geo.region" content="US-FL" />
        <meta name="geo.placename" content="Lakeland" />
        <meta name="geo.position" content="28.0395;-81.9498" />
        <meta name="ICBM" content="28.0395, -81.9498" />
        
        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Eric Harrison Jr." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://speedforceathletics.com" />
        
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsActivityLocation",
              "name": "Speed Force Athletics",
              "description": "Elite speed training facility led by Olympic athlete Eric Harrison Jr., offering professional sprint training for youth athletes in Lakeland, FL and surrounding areas.",
              "url": "https://speedforceathletics.com",
              "telephone": "+1-863-555-0123",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Lakeland Christian School",
                "addressLocality": "Lakeland",
                "addressRegion": "FL",
                "postalCode": "33801",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 28.0395,
                "longitude": -81.9498
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Saturday", "Sunday"],
                  "opens": "14:00",
                  "closes": "18:00"
                }
              ],
              "areaServed": [
                "Lakeland, FL",
                "Tampa, FL",
                "Haines City, FL",
                "Plant City, FL",
                "Central Florida"
              ],
              "priceRange": "$$",
              "sameAs": [
                "https://www.instagram.com/speedforceathletics",
                "https://www.facebook.com/speedforceathletics"
              ]
            })
          }}
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
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 focus:outline-none"
            >
              {mobileMenuOpen ? (
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
              <Link href="#programs" className="nav-link">Programs</Link>
              <Link href="#gallery" className="nav-link">Gallery</Link>
              <Link href="#contact" className="nav-link">Contact</Link>
              <Link href="#pricing" className="nav-link">Pricing</Link>
              <Link 
                href="/book-training" 
                className="btn-primary px-6 py-2 rounded-lg text-sm font-semibold hover:scale-105 transition-all duration-300"
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} py-4 border-t border-gray-100`}>
            <div className="flex flex-col space-y-4 px-4">
              <Link href="#programs" className="nav-link-mobile" onClick={() => setMobileMenuOpen(false)}>Programs</Link>
              <Link href="#gallery" className="nav-link-mobile" onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
              <Link href="#contact" className="nav-link-mobile" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              <Link href="#pricing" className="nav-link-mobile" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
              <Link 
                href="/book-training" 
                className="btn-primary px-6 py-3 rounded-lg text-center font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="min-h-screen w-full overflow-x-hidden">
        <main>
          {/* Hero Section */}
          <section className="relative h-screen w-full flex items-center">
            <div className="absolute inset-0">
              <Image
                src="/hero-image.jpg"
                alt="Speed Force Athletics Training Facility"
                fill
                className="object-cover"
                sizes="100vw"
                quality={85}
                priority={true}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
            </div>
            
            <div className="container-custom relative z-10 mt-16 md:mt-0">
              <div className="max-w-3xl">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Train Like an Olympic Athlete in Lakeland, FL
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
                  Elite speed training for young athletes by Olympic sprinter Eric Harrison Jr.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="#programs"
                    className="btn-primary text-center px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:-translate-y-1"
                  >
                    View Programs
                  </Link>
                  <Link
                    href="#contact"
                    className="btn-secondary text-center px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Training Session Section */}
          <section className="section-padding bg-gray-50" id="programs">
            <div className="container-custom">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 space-y-6">
                  <h2 className="heading-secondary">Experience Elite Training Sessions</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    At Speed Force Athletics, we deliver high-intensity, focused training sessions that push young athletes to their full potential. Using state-of-the-art equipment and proven methodologies, we create an environment where speed development flourishes.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#2B4C7E]/10 flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#2B4C7E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#2B4C7E] mb-2">High-Intensity Training</h3>
                        <p className="text-gray-600">Scientifically designed workouts that maximize speed development and athletic performance.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#2B4C7E]/10 flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#2B4C7E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#2B4C7E] mb-2">Professional Guidance</h3>
                        <p className="text-gray-600">Expert coaching from Olympic athlete Eric Harrison Jr.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#2B4C7E]/10 flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#2B4C7E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2m0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#2B4C7E] mb-2">Progress Tracking</h3>
                        <p className="text-gray-600">Regular performance assessments and data-driven feedback to monitor improvement.</p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6">
                    <Link href="/book-training" className="btn-accent">
                      Book a Training Session
                    </Link>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
                    <Image
                      src="/training-session.jpg"
                      alt="Speed Force Athletics Training Session in Action"
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={85}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Meet Your Coach Section */}
          <section className="section-padding bg-white" id="coach">
            <div className="container-custom">
              <h2 className="heading-secondary text-center mb-16">Train with an Olympic Athlete</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative h-[600px] rounded-lg overflow-hidden shadow-2xl group">
                  <Image
                    src="/eric-harrison.jpg"
                    alt="Eric Harrison Jr., Olympic Sprinter and Head Coach at Speed Force Athletics"
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={85}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 relative">
                      </div>
                      <span className="text-sm font-medium">Olympic Athlete</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold mb-2 text-[#2B4C7E]">Eric Harrison Jr.</h3>
                    <p className="text-xl text-gray-600">Professional Track & Field Athlete | Olympic Sprinter</p>
                  </div>
                  <div className="text-lg text-gray-700 space-y-4">
                    <p className="leading-relaxed">
                      As a dual national representing Trinidad and Tobago, Eric brings Olympic-level expertise to youth speed training. His exceptional track record and professional experience make him uniquely qualified to develop young athletes' speed and agility.
                    </p>
                    <p className="leading-relaxed">
                      A 6x Big Ten Champion, Eric's achievements include medals at the 2018 World U20 Championships, 2020 Tokyo Olympics, and 2022 Commonwealth Games.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                    <div className="stat-card">
                      <div className="font-bold text-[#2B4C7E] text-xl mb-1">10.08s</div>
                      <div className="text-gray-600">100m Best</div>
                    </div>
                    <div className="stat-card">
                      <div className="font-bold text-[#2B4C7E] text-xl mb-1">20.18s</div>
                      <div className="text-gray-600">200m Best</div>
                    </div>
                    <div className="stat-card">
                      <div className="font-bold text-[#2B4C7E] text-xl mb-1">6x</div>
                      <div className="text-gray-600">Big Ten Champ</div>
                    </div>
                    <div className="stat-card">
                      <div className="font-bold text-[#2B4C7E] text-xl mb-1">PUMA</div>
                      <div className="text-gray-600">Pro Athlete</div>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-6 mt-8">
                    <h4 className="font-bold text-xl mb-4 text-[#2B4C7E]">Professional Achievements</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Olympic Athlete - 2020 Tokyo Olympics</li>
                      <li>Commonwealth Games Medalist - 2022</li>
                      <li>World U20 Championships Medalist - 2018</li>
                      <li>NCAA All-American</li>
                    </ul>
                  </div>
                  <div className="flex gap-4 mt-8">
                    <a 
                      href="https://www.instagram.com/ericjharrison/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-accent"
                    >
                      Follow on Instagram
                    </a>
                    <Link href="/book-training" className="btn-outline">
                      Book a Session
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Programs Section */}
          <section className="section-padding bg-gray-50" id="programs">
            <div className="container-custom">
              <h2 className="heading-secondary text-center">Our Training Programs</h2>
              <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12 text-lg px-4">
                Comprehensive training programs designed to enhance speed, agility, and overall athletic performance for young athletes.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-4 md:px-0">
                {/* Speed Development */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src="/program-speed.jpg"
                      alt="1080 Sprint Technology for Speed Development Training"
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#2B4C7E] mb-4">Speed Development</h3>
                    <p className="text-gray-600 mb-6 text-lg">
                      Master proper running mechanics and explosive acceleration using cutting-edge 1080 Sprint technology.
                    </p>
                    <ul className="space-y-2 mb-6 text-gray-600">
                      <li className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-[#2B4C7E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Sprint mechanics training
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-[#2B4C7E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        1080 Sprint analysis
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-[#2B4C7E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Acceleration techniques
                      </li>
                    </ul>
                    <Link href="/book-training" className="btn-outline w-full">Learn More</Link>
                  </div>
                </div>

                {/* Agility Training */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src="/program-agility.jpg"
                      alt="Freelap Timing System for Agility Training"
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#2B4C7E] mb-4">Agility Training</h3>
                    <p className="text-gray-600 mb-6 text-lg">
                      Enhance your quickness and change of direction abilities with Freelap timing system feedback.
                    </p>
                    <ul className="space-y-2 mb-6 text-gray-600">
                      <li className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-[#2B4C7E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Reaction time drills
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-[#2B4C7E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Freelap timing system
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-[#2B4C7E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Change of direction
                      </li>
                    </ul>
                    <Link href="/book-training" className="btn-outline w-full">Learn More</Link>
                  </div>
                </div>

                {/* Performance Training */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src="/program-performance.jpg"
                      alt="Comprehensive Performance Training"
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#2B4C7E] mb-4">Performance Training</h3>
                    <p className="text-gray-600 mb-6 text-lg">
                      Comprehensive training to improve overall athletic performance and sports-specific skills.
                    </p>
                    <ul className="space-y-2 mb-6 text-gray-600">
                      <li className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-[#2B4C7E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Strength conditioning
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-[#2B4C7E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Sport-specific drills
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-[#2B4C7E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Performance testing
                      </li>
                    </ul>
                    <Link href="/book-training" className="btn-outline w-full">Learn More</Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Video Section */}
          <section className="py-20 bg-gray-100 w-full">
            <div className="container-custom">
              <h2 className="text-4xl font-bold text-center mb-8 md:mb-16">See Our Training in Action</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
                <div className="w-full aspect-w-16 aspect-h-9">
                  <iframe
                    className="w-full h-full rounded-lg shadow-lg"
                    src="https://www.youtube.com/embed/VNOYMqRERbc?start=24"
                    title="Speed Force Athletics Training"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="w-full aspect-w-16 aspect-h-9">
                  <iframe 
                    className="w-full h-full rounded-lg shadow-lg"
                    src="https://player.vimeo.com/video/1043540861?badge=0&autopause=0&player_id=0&app_id=58479"
                    title="1080 Overspeed"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>

          {/* Training Gallery Section */}
          <section className="section-padding bg-gray-50 w-full" id="gallery">
            <div className="container-custom">
              <div className="max-w-full mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {/* Row 1 */}
                  <div className="col-span-2 row-span-2 relative rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                    <Image
                      src="/gallery-1.jpg"
                      alt="Speed Force Athletics Training"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-white text-xl font-bold transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                          Elite Training Environment
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <Image
                      src="/gallery-2.jpg"
                      alt="Speed Training Session"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <Image
                      src="/gallery-3.jpg"
                      alt="Speed Force Athletics Training"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Row 2 */}
                  <div className="col-span-2 relative rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                    <Image
                      src="/gallery-4.jpg"
                      alt="Training Session"
                      width={800}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Row 3 */}
                  <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <Image
                      src="/gallery-5.jpg"
                      alt="Speed Development"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <Image
                      src="/gallery-6.jpg"
                      alt="Speed Force Athletics Training"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="col-span-2 relative rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                    <Image
                      src="/gallery-7.jpg"
                      alt="Speed Training"
                      width={800}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-white text-xl font-bold transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                          Professional Training Environment
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-16">Success Stories</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="mb-4">
                    ⭐⭐⭐⭐⭐
                  </div>
                  <p className="mb-6">"My son's sprint times improved dramatically after just 3 months. The coaches here truly understand youth development."</p>
                  <div className="font-bold">Michael R.</div>
                  <div className="text-gray-600">Parent of High School Athlete</div>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="mb-4">
                    ⭐⭐⭐⭐⭐
                  </div>
                  <p className="mb-6">"The personalized attention and scientific approach to training has helped my daughter excel in track and field."</p>
                  <div className="font-bold">Jennifer K.</div>
                  <div className="text-gray-600">Parent of Middle School Athlete</div>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="mb-4">
                    ⭐⭐⭐⭐⭐
                  </div>
                  <p className="mb-6">"Best investment we've made in our child's athletic development. The results speak for themselves!"</p>
                  <div className="font-bold">David W.</div>
                  <div className="text-gray-600">Parent of Youth Athlete</div>
                </div>
              </div>
            </div>
          </section>

          {/* Location Section */}
          <section className="py-16 bg-gray-50 w-full" id="location">
            <div className="container-custom">
              <h2 className="text-3xl font-bold text-center mb-8">Training Locations</h2>
              <div className="grid md:grid-cols-2 gap-8 mx-auto">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">Lakeland Christian School</h3>
                  <p className="text-gray-600 mb-4">
                    Our primary training location in Lakeland, Florida. Serving athletes from Tampa, Haines City, Plant City, and all of Central Florida.
                  </p>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Training Hours:</h4>
                    <ul className="text-gray-600">
                      <li>Saturday: 2:00 PM - 6:00 PM</li>
                      <li>Sunday: 2:00 PM - 6:00 PM</li>
                    </ul>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Convenient location for athletes from:
                  </p>
                  <ul className="text-gray-600 list-disc list-inside mb-4">
                    <li>Lakeland</li>
                    <li>Tampa</li>
                    <li>Haines City</li>
                    <li>Plant City</li>
                    <li>Winter Haven</li>
                    <li>Bartow</li>
                  </ul>
                </div>
                <div className="h-[400px] relative rounded-lg overflow-hidden shadow-lg">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3!2d-81.9498!3d28.0395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd3f1ca3f9c72f%3A0x3e0e3f7c7d7f3f3f!2sLakeland%20Christian%20School!5e0!3m2!1sen!2sus!4v1641234567890!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Speed Force Athletics Training Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 bg-gray-50">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-[#2B4C7E] mb-6 text-center">Contact Us</h2>
                <p className="text-gray-600 text-center mb-8 px-4">
                  Ready to start your speed training journey? Contact us to discuss your goals and get started with your preferred package.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

                {/* Training Location */}
                <div className="mt-12 text-center">
                  <h3 className="text-2xl font-bold text-[#2B4C7E] mb-4">Training Location & Times</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Location</h4>
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
                      <h4 className="font-medium mb-2">Training Times</h4>
                      <div className="text-gray-600">
                        <p>Saturday & Sunday</p>
                        <p>2:00 PM - 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

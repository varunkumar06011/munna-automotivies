import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = () => {
  const siteUrl = 'https://munnaauto.com';

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    "name": "Munna Automotives - Multi Brand Car Workshop",
    "image": `${siteUrl}/logo.jpeg`,
    "url": siteUrl,
    "telephone": "+917377766777",
    "priceRange": "$$",
    "description":
      "Munna Automotives is a trusted multi-brand car workshop in Palnadu District, Andhra Pradesh with 30+ years of automobile expertise. We offer 24/7 emergency towing, cashless insurance claims, advanced diagnostics, denting & painting, and complete car care for all brands.",
    "foundingDate": "1995",
    "slogan": "30+ Years of Automobile Excellence",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, Credit Card, Debit Card, UPI, Net Banking",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Main Road",
      "addressLocality": "Palnadu",
      "addressRegion": "Andhra Pradesh",
      "postalCode": "522413",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 16.5167,
      "longitude": 80.05
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Palnadu"
      },
      {
        "@type": "City",
        "name": "Narasaraopet"
      },
      {
        "@type": "City",
        "name": "Sattenapalli"
      },
      {
        "@type": "City",
        "name": "Chilakaluripet"
      },
      {
        "@type": "City",
        "name": "Guntur"
      }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "20:00"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Car Repair & Maintenance Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "General Car Service & Maintenance",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Multi-Brand Car Service"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Periodic Car Maintenance"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Engine Oil & Filter Replacement"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Body Repair & Painting",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Car Denting & Painting"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Accidental Repair & Restoration"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Full Body Paint & Polish"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Advanced Diagnostics & Electrical",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "ECU Scanning & Diagnostics"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Car AC Repair & Gas Refill"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Car Electrical Repair"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Wheel & Suspension",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Computerized Wheel Alignment & Balancing"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Suspension Repair"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Tyre Replacement & Rotation"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Insurance & Emergency",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Cashless Insurance Claim Assistance"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "24/7 Emergency Car Towing"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Roadside Breakdown Assistance"
              }
            }
          ]
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "527",
      "reviewCount": "512"
    },
    "sameAs": [
      "https://maps.app.goo.gl/M7FUwn67Cf6GwKZd8"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you provide cashless insurance claims in Palnadu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Munna Automotives provides 100% cashless insurance claim assistance and is a network partner with all major insurers including ICICI Lombard, HDFC Ergo, Bajaj Allianz, New India Assurance, and more. We handle the complete claim process from survey to final repair — zero paperwork hassle for you."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer emergency car towing near me in Andhra Pradesh?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide 24/7 emergency car towing and roadside breakdown assistance across a 50+ KM radius covering Palnadu, Narasaraopet, Sattenapalli, Chilakaluripet, and Guntur districts. Call +917377766777 anytime for immediate help — our towing team reaches you within 30-60 minutes."
        }
      },
      {
        "@type": "Question",
        "name": "What car brands do you service at Munna Automotives?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are a multi-brand car workshop and service all major car brands including Maruti Suzuki, Hyundai, Tata Motors, Kia, Toyota, Honda, Mahindra, Renault, Nissan, Volkswagen, Skoda, Ford, MG, and more. Our mechanics have 30+ years of experience working on every type of car."
        }
      },
      {
        "@type": "Question",
        "name": "Do you use genuine spare parts for car repairs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Munna Automotives uses only genuine OEM and OES spare parts for all repairs. We source parts directly from authorised distributors to ensure quality, warranty compliance, and long-lasting performance for your vehicle."
        }
      },
      {
        "@type": "Question",
        "name": "What advanced car diagnostic tools do you use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use the latest technology including multiple ECU scanners for all car brands, computerized wheel alignment machines, hydraulic dent pullers, MIG welding equipment for precision body repairs, advanced AC gas charging stations, and digital paint-matching systems."
        }
      },
      {
        "@type": "Question",
        "name": "How much does car service cost at Munna Automotives?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our pricing is transparent and competitive — typically 20-40% lower than authorised service centers with the same quality of work. Basic car service starts from ₹2,500, while full service packages range from ₹4,500 to ₹8,000 depending on the car model. We provide a detailed estimate before starting any work."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I repair my car near me in Palnadu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Munna Automotives is the most trusted car repair workshop near you in Palnadu District, Andhra Pradesh. Located on the Main Road, we are easily accessible from Narasaraopet, Sattenapalli, and Chilakaluripet. With 30+ years of experience and 500+ happy customers, we are the best choice for all car repairs near you."
        }
      },
      {
        "@type": "Question",
        "name": "Who provides the best towing service near me in Andhra Pradesh?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Munna Automotives provides the best and most reliable 24/7 car towing service near you in Andhra Pradesh. We cover Palnadu, Narasaraopet, Sattenapalli, Chilakaluripet, and Guntur areas. Our flatbed towing trucks ensure zero-damage vehicle transport. Call +917377766777 for immediate towing assistance anytime, day or night."
        }
      },
      {
        "@type": "Question",
        "name": "Which is the best workshop for accident repair near Palnadu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Munna Automotives is the best-rated workshop for accident and collision repair in Palnadu, Andhra Pradesh. We handle everything from minor dents to major structural damage using hydraulic dent pullers, MIG welding, and computerised paint-matching. We also manage complete cashless insurance claims so you don't have to worry about paperwork."
        }
      },
      {
        "@type": "Question",
        "name": "Is Munna Automotives open on Sundays and holidays?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Munna Automotives is open 7 days a week from 9 AM to 8 PM, including Sundays and most public holidays. For emergencies like breakdowns and towing, we are available 24/7 — just call +917377766777 anytime."
        }
      }
    ]
  };

  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Munna Automotives - Multi Brand Car Workshop",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "527",
      "reviewCount": "512"
    }
  };

  const metaKeywords = [
    // Ultra-Intent Keywords
    'best car service near me',
    'best car workshop near me',
    'trusted car mechanic near me',
    'best mechanic in Palnadu',
    'top rated car workshop Palnadu',
    'best automobile workshop near me',
    'car repair shop near me',
    'car garage near me',
    'best car garage in Andhra Pradesh',
    'affordable car service near me',
    'reliable car mechanic Palnadu',

    // Emergency Keywords
    'breakdown repair near me',
    'emergency towing service near me',
    '24 hour mechanic near me',
    'car stopped suddenly near me',
    'roadside assistance near me',
    'car breakdown help Palnadu',
    'emergency car repair Andhra Pradesh',
    '24/7 car towing Palnadu',
    'car not starting repair near me',
    'accident car repair near me',
    'car towing service Narasaraopet',
    'emergency mechanic Sattenapalli',
    'night time car repair near me',

    // Trust & Reputation Keywords
    'trusted by local customers',
    'honest automobile workshop',
    'quality assured car service',
    'trusted car workshop Palnadu',
    '30 years experienced car mechanic',
    'family trusted car garage',
    'best reviewed car workshop Palnadu',
    'genuine parts car repair',
    'transparent pricing car service',
    'warranty on car repairs',

    // Brand-Specific Keywords
    'Maruti car service in Palnadu',
    'Hyundai car repair Palnadu',
    'Tata car workshop Palnadu',
    'Kia car service center Palnadu',
    'Toyota car repair near me',
    'Honda car service Palnadu',
    'Mahindra car workshop near me',
    'Renault car repair Andhra Pradesh',
    'Volkswagen car service Palnadu',
    'Skoda car repair near me',
    'MG car service Palnadu',
    'Nissan car repair Narasaraopet',
    'Ford car service Chilakaluripet',
    'multi brand car service center',

    // Service + Location Keywords
    'car denting painting in Palnadu',
    'car AC repair in Palnadu',
    'wheel alignment Palnadu',
    'insurance claim workshop Palnadu',
    'car body repair Palnadu',
    'car engine repair Narasaraopet',
    'car electrical repair Palnadu',
    'car battery replacement near me',
    'car clutch repair Palnadu',
    'car brake repair near me',
    'car suspension repair Palnadu',
    'car oil change service Palnadu',
    'car wash and detailing Palnadu',
    'car paint polish Narasaraopet',
    'ECU scanning service Palnadu',
    'computerized wheel balancing Palnadu',
    'car windshield replacement Palnadu',
    'cashless insurance claim Palnadu',
    'accidental car repair Sattenapalli',
    'car periodic maintenance Guntur',
    'car full body paint Palnadu',

    // Voice Search Keywords
    'where can I repair my car near me',
    'who provides towing near me',
    'best workshop for accident repair',
    'where is the nearest car mechanic',
    'which workshop does cashless insurance near me',
    'where to get car AC repaired near me',
    'who does car denting painting near me',
    'is there a 24 hour car garage near me',
    'where to get wheel alignment done near me',
    'find car workshop open now near me',

    // Regional + Telugu Keywords
    'car workshop Palnadu district',
    'automobile workshop Andhra Pradesh',
    'car repair Narasaraopet',
    'car service Sattenapalli',
    'car mechanic Chilakaluripet',
    'car garage Guntur district',
    'best car workshop AP',
    'multi brand car workshop Andhra Pradesh',
    'car service center near Palnadu',

    // Long-Tail SEO Keywords
    'best multi brand car workshop in Palnadu Andhra Pradesh',
    'affordable car denting painting service near Palnadu',
    'cashless insurance claim car workshop in Andhra Pradesh',
    '24/7 emergency car towing service in Palnadu district',
    'trusted car mechanic with 30 years experience near me',
    'genuine spare parts car repair workshop Palnadu',
    'computerized car diagnostics and ECU scanning Palnadu'
  ].join(', ');

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>Best Car Workshop in Palnadu | Munna Automotives - 30+ Years Trusted Service</title>
      <meta
        name="description"
        content="Munna Automotives — Palnadu's most trusted multi-brand car workshop with 30+ years of excellence. 24/7 emergency towing, cashless insurance claims, expert denting & painting, AC repair, ECU diagnostics & more. Serving Palnadu, Narasaraopet, Sattenapalli, Chilakaluripet & Guntur. Call +917377766777."
      />
      <meta name="keywords" content={metaKeywords} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="author" content="Munna Automotives" />
      <meta name="geo.region" content="IN-AP" />
      <meta name="geo.placename" content="Palnadu, Andhra Pradesh" />
      <meta name="geo.position" content="16.5167;80.0500" />
      <meta name="ICBM" content="16.5167, 80.0500" />

      {/* Canonical URL */}
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta
        property="og:title"
        content="Munna Automotives — 30+ Years of Trusted Car Care in Palnadu, Andhra Pradesh"
      />
      <meta
        property="og:description"
        content="30+ years of automobile excellence. Palnadu's #1 multi-brand car workshop — expert mechanics, advanced diagnostics, cashless insurance claims, 24/7 towing & emergency breakdown repair. Trusted by 500+ happy customers."
      />
      <meta property="og:image" content={`${siteUrl}/logo.jpeg`} />
      <meta property="og:image:alt" content="Munna Automotives - Multi Brand Car Workshop in Palnadu" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content="Munna Automotives" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Best Car Workshop in Palnadu | 30+ Years Trusted | Munna Automotives"
      />
      <meta
        name="twitter:description"
        content="Expert multi-brand car repairs, 24/7 emergency towing, cashless insurance claims & advanced diagnostics. 30+ years of trusted automobile service in Palnadu, AP."
      />
      <meta name="twitter:image" content={`${siteUrl}/logo.jpeg`} />

      {/* JSON-LD: AutomotiveBusiness Schema */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>

      {/* JSON-LD: FAQPage Schema */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      {/* JSON-LD: AggregateRating Schema */}
      <script type="application/ld+json">
        {JSON.stringify(aggregateRatingSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;

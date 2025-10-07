// Structured Data (Schema.org) configurations for SEO

export const lawyerStructuredData = {
  "@context": "https://schema.org",
  "@type": "Attorney",
  "name": "Peter Thorp",
  "alternateName": "Peter Thorp Barrister",
  "description": "Experienced barrister with over 50 years of expertise in commercial litigation, administrative law, and civil disputes in New Zealand.",
  "url": "https://peterthorp.co.nz",
  "image": "https://peterthorp.co.nz/images/header-peter.png",
  "telephone": "+64-21-950-198",
  "email": "peter@thorp.co.nz",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Auckland",
    "addressRegion": "Auckland",
    "postalCode": "1140",
    "addressCountry": "NZ",
    "postOfficeBoxNumber": "P.O. Box 1987"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "New Zealand"
    },
    {
      "@type": "Country", 
      "name": "Australia"
    },
    {
      "@type": "Country",
      "name": "Cook Islands"
    }
  ],
  "knowsAbout": [
    "Commercial Litigation",
    "Administrative Law", 
    "Company Law and Trusts",
    "Contract and Tort",
    "Survey Law",
    "Construction Law",
    "Land Law",
    "Insurance Law",
    "Intellectual Property"
  ],
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "University of Auckland",
    "department": "Law School"
  },
  "award": [
    "Albertian of the Year 1997",
    "Member of the MAGS Hall of Distinction 2006",
    "Life Member Ponsonby Rugby Club 2011"
  ],
  "memberOf": [
    {
      "@type": "Organization",
      "name": "New Zealand Bar Association"
    },
    {
      "@type": "Organization", 
      "name": "Auckland District Law Society"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Legal Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Litigation",
          "description": "Resolving complex business disputes with commercially viable strategies"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Administrative Law",
          "description": "Judicially reviewing public bodies and regulatory authorities"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Company Law and Trusts",
          "description": "Resolving disputes involving directors, shareholders, and trustees"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Contract and Tort",
          "description": "Resolving contract, tort and damages disputes"
        }
      }
    ]
  },
  "priceRange": "$$$$",
  "paymentAccepted": "Cash, Credit Card, Bank Transfer",
  "currenciesAccepted": "NZD"
};

export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Peter Thorp Barrister",
  "description": "Premier barrister services in Auckland, New Zealand, specializing in commercial litigation and civil disputes.",
  "url": "https://peterthorp.co.nz",
  "logo": "https://peterthorp.co.nz/images/header-peter.png",
  "image": "https://peterthorp.co.nz/images/header-peter.png",
  "telephone": "+64-21-950-198",
  "email": "peter@thorp.co.nz",
  "foundingDate": "1991",
  "founder": {
    "@type": "Person",
    "name": "Peter Thorp",
    "@id": "https://peterthorp.co.nz/#peter-thorp"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Auckland",
    "addressRegion": "Auckland", 
    "postalCode": "1140",
    "addressCountry": "NZ",
    "postOfficeBoxNumber": "P.O. Box 1987"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -36.8485,
    "longitude": 174.7633
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "New Zealand"
    }
  ],
  "serviceType": [
    "Legal Services",
    "Barrister Services", 
    "Commercial Litigation",
    "Civil Litigation"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Legal Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Litigation",
          "serviceType": "Legal Service"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Administrative Law",
          "serviceType": "Legal Service"
        }
      }
    ]
  }
};

export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Peter Thorp Barrister",
  "description": "Official website of Peter Thorp, experienced barrister in Auckland, New Zealand",
  "url": "https://peterthorp.co.nz",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://peterthorp.co.nz/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Peter Thorp Barrister",
    "logo": {
      "@type": "ImageObject",
      "url": "https://peterthorp.co.nz/images/header-peter.png"
    }
  },
  "author": {
    "@type": "Person",
    "name": "Peter Thorp",
    "@id": "https://peterthorp.co.nz/#peter-thorp"
  }
};

export const breadcrumbStructuredData = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

// Page-specific structured data
export const homePageStructuredData = [lawyerStructuredData, organizationStructuredData, websiteStructuredData];

export const practicePageStructuredData = [
  lawyerStructuredData,
  {
    ...organizationStructuredData,
    "@type": "Service",
    "name": "Legal Practice Areas",
    "description": "Comprehensive legal services across multiple practice areas including commercial litigation, administrative law, and civil disputes."
  }
];

export const communityPageStructuredData = [
  {
    ...lawyerStructuredData,
    "memberOf": [
      {
        "@type": "Organization",
        "name": "Mount Albert Grammar School Board of Trustees"
      },
      {
        "@type": "Organization",
        "name": "Ponsonby Rugby Club"
      },
      {
        "@type": "Organization",
        "name": "MAGS Foundation"
      }
    ]
  }
];

export const aboutPageStructuredData = [
  {
    ...lawyerStructuredData,
    "@type": "Person",
    "jobTitle": "Barrister",
    "worksFor": {
      "@type": "Organization",
      "name": "Peter Thorp Barrister"
    },
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "name": "LLB (HONS)",
      "credentialCategory": "degree"
    }
  }
];

export const contactPageStructuredData = [
  {
    ...lawyerStructuredData,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+64-21-950-198",
      "email": "peter@thorp.co.nz",
      "contactType": "Legal Services",
      "areaServed": "NZ",
      "availableLanguage": "English"
    }
  }
];
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pageMeta = {
  '/': {
    title: 'Muhammad Hafizh Maulidan | Operations & Production Leader',
    description: 'Head of Unit & Production Leader at Rumah Susu Indonesia. Specializing in end-to-end dairy manufacturing, process optimization, and quality systems.',
    keywords: 'Production Leader, Operations Management, Dairy Manufacturing, Head of Unit, Quality Control, Supply Chain'
  },
  '/about': {
    title: 'About | Muhammad Hafizh Maulidan',
    description: 'Learn about my journey from IPB University to leading dairy production operations at Rumah Susu Indonesia.',
    keywords: 'about, biography, profile, production leader'
  },
  '/skills': {
    title: 'Skills | Muhammad Hafizh Maulidan',
    description: 'Skills in Operations Management, Production Planning, Quality Control, Supply Chain, IoT Systems, and Web Development.',
    keywords: 'skills, operations management, production planning, quality control'
  },
  '/experience': {
    title: 'Experience | Muhammad Hafizh Maulidan',
    description: 'Professional experience: Head of Unit at Rumah Susu Indonesia, Frontend Developer at PT Matra Kreasi Mandiri.',
    keywords: 'experience, work history, career, operations management'
  },
  '/projects': {
    title: 'Projects | Muhammad Hafizh Maulidan',
    description: 'Featured projects: Production Operations SOP, Flood Detection System, Banana Ripeness Detection, IDX Market Screener.',
    keywords: 'projects, portfolio, production, web development'
  },
  '/publications': {
    title: 'Publications | Muhammad Hafizh Maulidan',
    description: 'Research publications on IoT Automation, Cybersecurity, and Fuzzy Logic applications.',
    keywords: 'publications, research, papers'
  },
  '/certifications': {
    title: 'Certifications | Muhammad Hafizh Maulidan',
    description: 'Certifications: Hardware Installation Supervisor (BNSP), Google Analytics, Junior Network Engineer.',
    keywords: 'certifications, certificates, credentials'
  },
  '/contact': {
    title: 'Contact | Muhammad Hafizh Maulidan',
    description: 'Get in touch for collaboration opportunities in Operations Management, Production Leadership, or Dairy Manufacturing.',
    keywords: 'contact, hire, collaboration, operations management'
  }
};

export function usePageMeta() {
  const location = useLocation();
  
  useEffect(() => {
    const meta = pageMeta[location.pathname] || pageMeta['/'];
    
    // Update title
    document.title = meta.title;
    
    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = meta.description;
    
    // Update keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = meta.keywords;
    
    // Update OG title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.property = 'og:title';
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = meta.title;
    
    // Update OG description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.property = 'og:description';
      document.head.appendChild(ogDesc);
    }
    ogDesc.content = meta.description;
    
  }, [location.pathname]);
}
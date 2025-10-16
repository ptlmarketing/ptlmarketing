const caseStudies = [
  {
    slug: "project-alpha",
    title: "Project Alpha",
    client: "TechCorp Solutions",
    category: "Digital Transformation",
    date: "January 2024",
    duration: "6 Months",
    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=800&fit=crop",
    description:
      "A comprehensive digital transformation project that revolutionized the client's online presence and operational efficiency.",
    challenge:
      "TechCorp Solutions was struggling with an outdated website, fragmented marketing efforts, and inefficient internal processes.",
    solution:
      "We built a new digital ecosystem including a modern web app, marketing automation, and analytics integration.",
    results: [
      { metric: "50%", label: "Increase in Conversions" },
      { metric: "3x", label: "Traffic Growth" },
      { metric: "85%", label: "User Engagement" },
      { metric: "40%", label: "Cost Reduction" },
    ],
    serviceDetails: [
      { name: "UI/UX Design", description: "User-centric interfaces improving navigation and engagement." },
      { name: "Web Development", description: "Responsive web application with seamless user experience." },
      { name: "Digital Marketing", description: "SEO, social media, and ads to grow reach and conversions." },
      { name: "SEO Optimization", description: "Enhanced rankings with keyword strategy and content structuring." },
      { name: "Content Strategy", description: "Content roadmap aligned with business goals." },
    ],
    technologyDetails: [
      { name: "React.js", description: "Dynamic, high-performing front-end interfaces." },
      { name: "Node.js", description: "Scalable backend for real-time data handling." },
      { name: "MongoDB", description: "Flexible NoSQL database for fast operations." },
      { name: "AWS", description: "Secure cloud hosting and storage." },
      { name: "Tailwind CSS", description: "Responsive, pixel-perfect designs." },
    ],
    testimonial: {
      quote: "They created a digital ecosystem that transformed our business operations.",
      author: "John Smith",
      position: "CEO, TechCorp Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    },
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=600&fit=crop",
    ],
  },
  {
    slug: "project-beta",
    title: "Project Beta",
    client: "NextGen Retail",
    category: "E-commerce Automation",
    date: "May 2024",
    duration: "4 Months",
    heroImage:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&h=800&fit=crop",
    description:
      "Implemented AI-based automation for inventory and personalized product recommendations.",
    challenge:
      "NextGen Retail faced difficulties with manual stock updates and poor customer retention.",
    solution:
      "Automated inventory management and AI recommendations for personalized shopping.",
    results: [
      { metric: "70%", label: "Inventory Accuracy" },
      { metric: "2.5x", label: "Customer Retention" },
      { metric: "60%", label: "Sales Growth" },
      { metric: "30%", label: "Cost Reduction" },
    ],
    serviceDetails: [
      { name: "E-commerce Development", description: "Modern online store with payments and product management." },
      { name: "AI Integration", description: "Personalized shopping recommendations using AI." },
      { name: "Automation", description: "Custom workflows for inventory and orders." },
      { name: "UI Design", description: "Engaging user interface optimized for conversions." },
    ],
    technologyDetails: [
      { name: "React.js", description: "Responsive and smooth UI rendering." },
      { name: "Firebase", description: "Real-time database and authentication." },
      { name: "OpenAI API", description: "AI-powered recommendations and content generation." },
      { name: "Tailwind CSS", description: "Modern consistent design framework." },
    ],
    testimonial: {
      quote: "Their automation solutions saved us hundreds of man-hours every month.",
      author: "Sarah Lee",
      position: "CTO, NextGen Retail",
      image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=100&h=100&fit=crop",
    },
    gallery: [
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581093588401-22b87e75d2a5?w=800&h=600&fit=crop",
    ],
  },
  {
    slug: "project-gamma",
    title: "Project Gamma",
    client: "HealthSync Medicals",
    category: "Healthcare App Development",
    date: "March 2024",
    duration: "5 Months",
    heroImage:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=1600&h=800&fit=crop",
    description:
      "A telemedicine platform connecting doctors and patients for virtual consultations.",
    challenge:
      "Secure and scalable telehealth platform for real-time video and health data.",
    solution:
      "Built HIPAA-compliant telemedicine app with video calls, EMR, and scheduling.",
    results: [
      { metric: "2x", label: "Appointments Booked" },
      { metric: "95%", label: "User Satisfaction" },
      { metric: "60%", label: "Reduced No-shows" },
      { metric: "1.5x", label: "Operational Efficiency" },
    ],
    serviceDetails: [
      { name: "App Development", description: "Native and cross-platform telehealth app." },
      { name: "UI/UX Design", description: "Intuitive, easy-to-use interface for patients and doctors." },
      { name: "Data Security", description: "HIPAA-compliant handling of health data." },
      { name: "Video Integration", description: "High-quality video calls for consultations." },
    ],
    technologyDetails: [
      { name: "React Native", description: "Cross-platform mobile app development." },
      { name: "Node.js", description: "Backend services for data and video streaming." },
      { name: "Twilio", description: "Video calls and messaging integration." },
      { name: "AWS", description: "Scalable cloud infrastructure." },
      { name: "MongoDB", description: "Flexible NoSQL database for patient data." },
    ],
    testimonial: {
      quote: "Their expertise in healthcare tech made our telemedicine dream a reality.",
      author: "Dr. Emily Watson",
      position: "Founder, HealthSync Medicals",
      image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop",
    },
    gallery: [
      "https://images.unsplash.com/photo-1581093588401-22b87e75d2a5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1606761568499-6d2451b23c56?w=800&h=600&fit=crop",
    ],
  },
  {
    slug: "project-delta",
    title: "Project Delta",
    client: "EduSmart Academy",
    category: "E-Learning Platform",
    date: "February 2024",
    duration: "7 Months",
    heroImage:
      "https://images.unsplash.com/photo-1584697964403-6649e94f90b3?w=1600&h=800&fit=crop",
    description:
      "A scalable online education platform supporting video lectures, tests, and analytics.",
    challenge:
      "Needed a robust e-learning solution for 10,000+ students.",
    solution:
      "Built a scalable LMS with live classes, course creation, and analytics dashboards.",
    results: [
      { metric: "80%", label: "Student Engagement" },
      { metric: "3x", label: "User Enrollment" },
      { metric: "2x", label: "Revenue Growth" },
      { metric: "90%", label: "System Uptime" },
    ],
    serviceDetails: [
      { name: "LMS Development", description: "Comprehensive e-learning platform with course management." },
      { name: "Backend API", description: "Secure APIs to manage courses, users, and analytics." },
      { name: "Payment Gateway", description: "Smooth online payments for courses." },
      { name: "Admin Dashboard", description: "Central control for teachers and admins." },
    ],
    technologyDetails: [
      { name: "React.js", description: "Responsive front-end for students and admins." },
      { name: "Express.js", description: "Robust backend API framework." },
      { name: "MySQL", description: "Relational database for course and user data." },
      { name: "AWS", description: "Cloud hosting and storage." },
      { name: "Tailwind CSS", description: "Modern, responsive UI design." },
    ],
    testimonial: {
      quote: "Our online academy reached new heights thanks to their LMS.",
      author: "Michael Brown",
      position: "Director, EduSmart Academy",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=100&h=100&fit=crop",
    },
    gallery: [
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop",
    ],
  },
  {
    slug: "project-epsilon",
    title: "Project Epsilon",
    client: "UrbanBuild Realty",
    category: "Real Estate CRM",
    date: "June 2024",
    duration: "5 Months",
    heroImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=800&fit=crop",
    description:
      "A CRM platform tailored for property management and sales automation.",
    challenge:
      "The client lacked centralized property tracking and client communication tools.",
    solution:
      "Built a custom CRM with property listings, lead tracking, and automated follow-ups.",
    results: [
      { metric: "45%", label: "Sales Conversion Increase" },
      { metric: "70%", label: "Lead Response Speed" },
      { metric: "35%", label: "Reduced Manual Work" },
    ],
    serviceDetails: [
      { name: "CRM Development", description: "Custom platform for property management and sales." },
      { name: "Automation", description: "Automated lead follow-ups and workflows." },
      { name: "UI/UX Design", description: "User-friendly interfaces for agents and clients." },
    ],
    technologyDetails: [
      { name: "React.js", description: "Dynamic front-end interface." },
      { name: "Node.js", description: "Server-side logic and API." },
      { name: "PostgreSQL", description: "Reliable relational database." },
      { name: "Tailwind CSS", description: "Responsive, modern design framework." },
    ],
    testimonial: {
      quote: "Our real estate team runs smoother and faster now.",
      author: "Lisa Green",
      position: "COO, UrbanBuild Realty",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop",
    },
    gallery: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop",
    ],
  },
  {
    slug: "project-zeta",
    title: "Project Zeta",
    client: "TravelEase",
    category: "Travel Booking App",
    date: "August 2024",
    duration: "6 Months",
    heroImage:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=800&fit=crop",
    description:
      "Developed a complete travel booking app with real-time availability and payment integration.",
    challenge:
      "Client needed a scalable travel platform with dynamic pricing and smooth UX.",
    solution:
      "Integrated APIs for hotels, flights, and payments in a single responsive app.",
    results: [
      { metric: "90%", label: "Faster Booking" },
      { metric: "2x", label: "User Retention" },
      { metric: "4.8⭐", label: "App Rating" },
    ],
    serviceDetails: [
      { name: "App Development", description: "Full-featured booking app with real-time updates." },
      { name: "API Integration", description: "Connected flights, hotels, and payments seamlessly." },
      { name: "UI/UX Design", description: "Intuitive interface for travelers." },
      { name: "Payment Gateway", description: "Secure in-app payment processing." },
    ],
    technologyDetails: [
      { name: "React Native", description: "Cross-platform mobile app framework." },
      { name: "Node.js", description: "Backend server logic and APIs." },
      { name: "Stripe", description: "Payment processing and gateway integration." },
      { name: "Firebase", description: "Real-time database and authentication." },
    ],
    testimonial: {
      quote: "A seamless app that users love to use!",
      author: "Kevin Wilson",
      position: "Product Head, TravelEase",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    },
    gallery: [
      "https://images.unsplash.com/photo-1499696010181-37a5c1b98e8d?w=800&h=600&fit=crop",
    ],
  },
  {
    slug: "project-theta",
    title: "Project Theta",
    client: "FinNova Bank",
    category: "Fintech Web App",
    date: "September 2024",
    duration: "5 Months",
    heroImage:
      "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=1600&h=800&fit=crop",
    description:
      "A next-gen banking dashboard enabling users to manage accounts and analytics.",
    challenge:
      "FinNova needed a secure and modern interface for its online users.",
    solution:
      "Built a dashboard with two-factor authentication, charts, and quick transactions.",
    results: [
      { metric: "99%", label: "Data Security" },
      { metric: "2.5x", label: "User Engagement" },
      { metric: "70%", label: "Faster Transactions" },
    ],
    serviceDetails: [
      { name: "Fintech App", description: "Banking app with advanced dashboards and analytics." },
      { name: "UI/UX", description: "Clean, intuitive interface for banking users." },
      { name: "Security Implementation", description: "Two-factor authentication and data encryption." },
    ],
    technologyDetails: [
      { name: "React.js", description: "Interactive front-end." },
      { name: "Django", description: "Secure backend framework." },
      { name: "Chart.js", description: "Charts and analytics visualization." },
      { name: "Tailwind CSS", description: "Responsive modern UI design." },
    ],
    testimonial: {
      quote: "Flawless design and robust backend — users absolutely love it!",
      author: "Nina Roberts",
      position: "CTO, FinNova Bank",
      image: "https://images.unsplash.com/photo-1603415526960-f7e0328dd6c5?w=100&h=100&fit=crop",
    },
    gallery: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
    ],
  },
  {
    slug: "project-iota",
    title: "Project Iota",
    client: "EcoWorld",
    category: "Environmental NGO Website",
    date: "July 2024",
    duration: "3 Months",
    heroImage:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1600&h=800&fit=crop",
    description:
      "Created a modern responsive website to raise awareness and donations.",
    challenge:
      "Engaging platform to educate users and collect donations.",
    solution:
      "Storytelling-driven website with donation gateway and analytics tracking.",
    results: [
      { metric: "3x", label: "Donations Increased" },
      { metric: "65%", label: "Visitor Retention" },
      { metric: "80%", label: "Faster Load Time" },
    ],
    serviceDetails: [
      { name: "Web Design", description: "Responsive and storytelling-driven design." },
      { name: "Donation Gateway", description: "Secure and simple donation process." },
      { name: "SEO", description: "Optimized content for search engines." },
      { name: "Analytics", description: "Track donations, traffic, and engagement." },
    ],
    technologyDetails: [
      { name: "Next.js", description: "Fast SSR web framework." },
      { name: "Stripe", description: "Payment and donation gateway." },
      { name: "Vercel", description: "High-performance hosting." },
      { name: "Tailwind CSS", description: "Clean responsive UI." },
    ],
    testimonial: {
      quote: "They helped us connect better with our supporters — incredible design!",
      author: "Laura Green",
      position: "Founder, EcoWorld",
      image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=100&h=100&fit=crop",
    },
    gallery: [
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&h=600&fit=crop",
    ],
  },
  {
    slug: "project-kappa",
    title: "Project Kappa",
    client: "FoodieHub",
    category: "Restaurant Ordering System",
    date: "October 2024",
    duration: "4 Months",
    heroImage:
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1600&h=800&fit=crop",
    description:
      "Built an advanced ordering and table reservation system for restaurants.",
    challenge:
      "Managing online and offline orders simultaneously was difficult.",
    solution:
      "Unified platform with real-time kitchen updates and QR menu support.",
    results: [
      { metric: "2x", label: "Order Volume" },
      { metric: "50%", label: "Reduced Wait Time" },
      { metric: "4.9⭐", label: "Customer Rating" },
    ],
    serviceDetails: [
      { name: "POS Integration", description: "Integrated point-of-sale system for all orders." },
      { name: "Mobile App", description: "Mobile app for customers to order and reserve." },
      { name: "Admin Panel", description: "Centralized management for orders and tables." },
    ],
    technologyDetails: [
      { name: "React.js", description: "Dynamic front-end for both web and mobile views." },
      { name: "Firebase", description: "Real-time database updates." },
      { name: "Tailwind CSS", description: "Responsive modern design." },
    ],
    testimonial: {
      quote: "Our restaurants are more efficient and customers love the new ordering flow!",
      author: "Raj Patel",
      position: "Owner, FoodieHub",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    },
    gallery: [
      "https://images.unsplash.com/photo-1600891963937-5f5f2c11a9c2?w=800&h=600&fit=crop",
    ],
  },
  {
    slug: "project-lambda",
    title: "Project Lambda",
    client: "AutoServe Garage",
    category: "Automotive Service Management",
    date: "November 2024",
    duration: "5 Months",
    heroImage:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1600&h=800&fit=crop",
    description:
      "Developed a complete garage management system with bookings, inventory, and reports.",
    challenge:
      "Manual job cards and inventory tracking were slowing operations.",
    solution:
      "Automated job scheduling, invoicing, and inventory management in one dashboard.",
    results: [
      { metric: "70%", label: "Time Saved" },
      { metric: "2x", label: "Customer Satisfaction" },
      { metric: "50%", label: "Inventory Accuracy" },
    ],
    serviceDetails: [
      { name: "Dashboard", description: "Centralized dashboard to track all operations." },
      { name: "Inventory", description: "Manage inventory with automated updates." },
      { name: "Automation", description: "Schedule jobs, invoices, and reports automatically." },
      { name: "Web App", description: "Responsive web interface for employees and managers." },
    ],
    technologyDetails: [
      { name: "React.js", description: "Interactive and dynamic front-end." },
      { name: "Express.js", description: "Robust backend API services." },
      { name: "MySQL", description: "Relational database to store garage data." },
      { name: "Tailwind CSS", description: "Clean and responsive design." },
    ],
    testimonial: {
      quote: "The automation features have completely streamlined our daily workflow.",
      author: "Vikram Singh",
      position: "Manager, AutoServe Garage",
      image: "https://images.unsplash.com/photo-1603415526960-f7e0328dd6c5?w=100&h=100&fit=crop",
    },
    gallery: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
    ],
  },
];

export default caseStudies;

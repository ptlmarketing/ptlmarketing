import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

function CaseStudies() {
  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);
  const navigate=useNavigate()

  // Counter Component
  const Counter = ({ end, duration = 2, suffix = "", delay = 0 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const timeout = setTimeout(() => {
        let start = 0;
        const increment = end / (duration * 60);
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 1000 / 60);
        return () => clearInterval(timer);
      }, delay);

      return () => clearTimeout(timeout);
    }, [end, duration, delay]);

    return <span>{count}{suffix}</span>;
  };

  const banner = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&h=900&fit=crop";

  const paragraph =
    "Discover how we have helped our clients achieve remarkable success with our solutions.";

  const brandLogos = [
    "https://via.placeholder.com/150x50?text=Brand+1",
    "https://via.placeholder.com/150x50?text=Brand+2",
    "https://via.placeholder.com/150x50?text=Brand+3",
    "https://via.placeholder.com/150x50?text=Brand+4",
    "https://via.placeholder.com/150x50?text=Brand+5",
    "https://via.placeholder.com/150x50?text=Brand+6",
  ];

  const caseStudies = [
    {
      slug: "project-alpha",
      title: "Project Alpha",
      description:
        "We transformed their digital strategy and boosted conversions by 50%.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      stats: "50% Growth",
    },
    {
      slug: "project-beta",
      title: "Project Beta",
      description:
        "Optimized operations and increased revenue streams efficiently.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
      stats: "3x Revenue",
    },
    {
      slug: "project-gamma",
      title: "Project Gamma",
      description:
        "Enhanced UX/UI design that improved user engagement metrics.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop",
      stats: "85% Engagement",
    },
    {
      slug: "project-delta",
      title: "Project Delta",
      description:
        "Implemented automation solutions reducing operational costs.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
      stats: "40% Cost Savings",
    },
    {
      slug: "project-epsilon",
      title: "Project Epsilon",
      description:
        "Developed a data-driven marketing strategy that tripled lead generation.",
      image:
        "https://images.unsplash.com/photo-1556767576-cfba5f8d7bda?w=800&h=600&fit=crop",
      stats: "3x Leads",
    },
    {
      slug: "project-zeta",
      title: "Project Zeta",
      description:
        "Automated business workflows leading to faster delivery and reduced errors.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
      stats: "60% Faster Delivery",
    },
    {
      slug: "project-theta",
      title: "Project Theta",
      description:
        "Rebuilt entire product architecture with microservices for scalability.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
      stats: "99.9% Uptime",
    },
    {
      slug: "project-omega",
      title: "Project Omega",
      description:
        "Revamped brand identity with modern visuals and strong digital presence.",
      image:
        "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&h=600&fit=crop",
      stats: "90% Brand Recall",
    },
    {
      slug: "project-lambda",
      title: "Project Lambda",
      description:
        "Integrated advanced analytics for actionable business insights.",
      image:
        "https://images.unsplash.com/photo-1563986768817-6e724246b062?w=800&h=600&fit=crop",
      stats: "4x ROI",
    },
    {
      slug: "project-sigma",
      title: "Project Sigma",
      description:
        "Built an omnichannel strategy that unified all customer touchpoints.",
      image:
        "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?w=800&h=600&fit=crop",
      stats: "2x Engagement",
    },
  ];

  return (
    <div className="bg-white">
      {/* ===== Banner Section ===== */}
      <div
        className="relative h-[70vh] md:h-screen flex items-center justify-center text-center px-6 overflow-hidden"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
        
        {/* Animated overlay pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent animate-pulse"></div>
        </div>

        <div className="relative z-10 text-white space-y-6 max-w-4xl">
          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Case <span className="text-orange-500">Studies</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {paragraph}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex gap-6 justify-center mt-8 text-sm md:text-base">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-500">
                  <Counter end={50} suffix="+" delay={600} />
                </div>
                <div className="text-gray-300 mt-1">Projects</div>
              </div>
              <div className="w-px bg-gray-600"></div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-500">
                  <Counter end={100} suffix="%" delay={800} />
                </div>
                <div className="text-gray-300 mt-1">Success Rate</div>
              </div>
              <div className="w-px bg-gray-600"></div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-500">
                  <Counter end={30} suffix="+" delay={1000} />
                </div>
                <div className="text-gray-300 mt-1">Happy Clients</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ===== Logo Slider Section ===== */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-16 overflow-hidden border-y border-gray-200">
        <motion.h2
          className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Trusted by <span className="text-orange-500">Industry Leaders</span>
        </motion.h2>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <motion.div
            className="flex gap-16"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {[...brandLogos, ...brandLogos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center group"
              >
                <img
                  src={logo}
                  alt={`brand-${index}`}
                  className="h-12 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ===== Case Studies Cards Section ===== */}
      <div className="bg-white py-20 px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-orange-500">Success Stories</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real results from real partnerships. See how we've helped businesses transform and grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative overflow-hidden h-64 cursor-pointer"  onClick={() => navigate(`/case-study/${study.slug}`)}>
                  <img
                    src={study.image}
                    alt={study.title}
                   
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold transform translate-x-32 group-hover:translate-x-0 transition-transform duration-500">
                    {study.stats}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-300 cursor-pointer" onClick={() => navigate(`/case-study/${study.slug}`)}>
                    {study.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {study.description}
                  </p>
                  <motion.button
                 onClick={() => navigate(`/case-study/${study.slug}`)}
                    whileHover={{ x: 5 }}
                    className="text-orange-500 font-semibold inline-flex items-center gap-2 group/btn cursor-pointer"
                  >
                    Read Case Study
                    <svg 
                      className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ===== CTA Section ===== */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-orange-950 py-20 px-6 text-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Want to Create Your Own <span className="text-orange-500">Success Story?</span>
          </motion.h2>
          <motion.p
            className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's collaborate to build something extraordinary. Our experts are
            ready to help you design, develop, and grow your brand to the next
            level.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3 group"
          >
            Get in Touch
            <svg 
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default CaseStudies;
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      type: "work",
      title: "Senior Network Engineer",
      company: "TechNet Solutions",
      period: "2023 - Present",
      description: "Leading the transition from legacy routing protocols to an SDN-based architecture. Reduced overall network latency by 35% across all global data centers."
    },
    {
      id: 2,
      type: "work",
      title: "IoT Systems Architect",
      company: "SmartLife Systems",
      period: "2021 - 2023",
      description: "Designed a centralized hub capable of concurrently managing over 50,000 IoT devices with zero downtime during OTA updates."
    },
    {
      id: 3,
      type: "education",
      title: "M.S. in Computer Networks",
      company: "Tech University",
      period: "2019 - 2021",
      description: "Focus on Cryptography and Advanced Routing Algorithms. Graduated with Honors."
    }
  ];

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Journey & <span className="text-gradient">Evolution</span></h2>
        </div>

        <div className="relative border-l border-white/10 ml-6 md:ml-0 md:pl-0">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="mb-12 relative md:flex justify-between items-center w-full right-timeline"
            >
              <div className="absolute w-4 h-4 rounded-full bg-primary -left-[27px] md:left-1/2 md:-ml-2 top-1 shadow-[0_0_15px_rgba(59,130,246,1)] z-10"></div>
              
              <div className={`md:w-5/12 pl-6 md:pl-0 ${idx % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-2 md:pl-12'}`}>
                <div className="glassmorphism p-6 rounded-2xl hover:bg-white/10 transition-colors">
                  <div className={`flex items-center gap-3 mb-2 ${idx % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {exp.type === 'work' ? <Briefcase size={20} className="text-primary" /> : <GraduationCap size={20} className="text-secondary" />}
                    <span className="text-sm text-primary font-semibold">{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <h4 className="text-gray-400 mb-4">{exp.company}</h4>
                  <p className="text-sm text-gray-300 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2"></div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

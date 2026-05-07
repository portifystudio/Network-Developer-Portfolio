import { motion } from 'framer-motion';
import { Terminal, Cpu, Cloud, Lock } from 'lucide-react';
import FloatingElement from '../ui/FloatingElement';

const About = () => {
  const cards = [
    { icon: <Terminal size={24} />, title: 'Network Dev', desc: 'Building scalable architectures with Python & Automation.' },
    { icon: <Cpu size={24} />, title: 'IoT Systems', desc: 'Connecting hardware to seamless software interfaces.' },
    { icon: <Cloud size={24} />, title: 'Cloud Infra', desc: 'Deploying resilient, highly-available cloud networks.' },
    { icon: <Lock size={24} />, title: 'Security', desc: 'Implementing robust zero-trust network protocols.' },
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Decoding the <span className="text-gradient">Matrix</span></h2>
          <p className="text-gray-400 text-lg">
            With a deep understanding of packet-level interactions and modern web development, I bridge the gap between low-level network operations and high-level user experiences. 
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <FloatingElement key={idx} delay={idx * 0.2} duration={5 + Math.random()} yOffset={-15}>
              <div className="glassmorphism p-6 rounded-2xl border-white/5 hover:border-primary/30 transition-all duration-300 group h-full">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
              </div>
            </FloatingElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

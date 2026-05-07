import { motion } from 'framer-motion';
import { ArrowRight, Server, Wifi, Shield } from 'lucide-react';
import FloatingElement from '../ui/FloatingElement';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-10 relative">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glassmorphism text-sm text-primary w-fit">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for new opportunities
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm <br />
            <span className="text-gradient">Sheshu Kumar</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-400 font-medium">
            Network Developer & IoT Specialist
          </h2>

          <p className="text-gray-400 max-w-lg leading-relaxed">
            I engineer resilient network infrastructures and build intelligent, connected systems bridging the gap between hardware and elegant software solutions.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <a href="#projects" className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/80 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              View Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="px-8 py-3 glassmorphism rounded-full hover:bg-white/10 transition-all">
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Visual Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center lg:block"
        >
          {/* Main glowing orb */}
          <div className="absolute inset-0 m-auto w-96 h-96 rounded-full bg-primary/20 blur-[100px]" />

          <div className="relative w-full h-full">
            {/* Center profile or abstract shape */}
            <div className="absolute inset-0 m-auto w-72 h-72 rounded-full border border-white/10 flex items-center justify-center p-2">
              <img src="/images/profile.png" alt="Sheshu Kumar" className="w-full h-full object-cover rounded-full mix-blend-luminosity hover:mix-blend-normal transition-all duration-500 border border-primary/30 shadow-[0_0_40px_rgba(59,130,246,0.2)]" />
            </div>

            {/* Orbiting elements */}
            <FloatingElement delay={0} yOffset={-8}>
              <div className="absolute top-[25%] left-[28%] w-14 h-14 rounded-2xl glassmorphism flex items-center justify-center border-primary/30">
                <Server className="text-primary" size={24} />
              </div>
            </FloatingElement>

            <FloatingElement delay={1} duration={7} yOffset={10}>
              <div className="absolute top-[45%] right-[20%] w-12 h-12 rounded-2xl glassmorphism flex items-center justify-center border-secondary/30">
                <Wifi className="text-secondary" size={22} />
              </div>
            </FloatingElement>

            <FloatingElement delay={2} duration={5} yOffset={-6}>
              <div className="absolute bottom-[25%] left-[32%] w-11 h-11 rounded-xl glassmorphism flex items-center justify-center border-accent/30">
                <Shield className="text-accent" size={18} />
              </div>
            </FloatingElement>
          </div>
        </motion.div>
      </div>

      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0" />
    </section>
  );
};

export default Hero;

import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Networking",
      skills: ["TCP/IP", "BGP / OSPF", "SDN", "Cisco IOS", "Wireshark"]
    },
    {
      title: "Programming",
      skills: ["Python", "JavaScript", "React.js", "C++", "Bash"]
    },
    {
      title: "IoT & Tools",
      skills: ["Raspberry Pi", "MQTT", "Docker", "Git", "Linux"]
    },
    {
      title: "Security",
      skills: ["Firewalls", "VPNs", "Zero-Trust", "Cryptography"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical <span className="text-gradient">Arsenal</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glassmorphism p-8 rounded-3xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[50px] group-hover:bg-primary/20 transition-all duration-500"></div>
              
              <h3 className="text-2xl font-semibold mb-6 text-white">{category.title}</h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm hover:bg-primary/20 hover:border-primary/50 hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

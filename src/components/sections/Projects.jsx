import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "NeuralNet Topology",
      category: "Networking",
      image: "/images/project1.png",
      description: "An interactive dashboard visualizing complex network architectures in real-time using BGP routing data. Features predictive outage mapping and latency analysis.",
      tech: ["React", "Python", "WebSockets", "D3.js"],
      liveLink: "https://github.com/portifystudio",
      sourceLink: "https://github.com/portifystudio"
    },
    {
      id: 2,
      title: "SmartHome Hub IoT",
      category: "IoT",
      image: "/images/project2.png",
      description: "A centralized IoT management system that connects cross-vendor smart devices using a unified MQTT protocol. Emphasizes low-latency edge computing.",
      tech: ["Raspberry Pi", "Node.js", "MQTT", "React"],
      liveLink: "https://github.com/portifystudio",
      sourceLink: "https://github.com/portifystudio"
    },
    {
      id: 3,
      title: "CyberThreat Map",
      category: "Security",
      image: "/images/project3.png",
      description: "Live cybersecurity threat intelligence platform scraping global node vulnerability data and presenting it on an interactive 3D globe.",
      tech: ["Three.js", "Python", "Elasticsearch", "TailwindCSS"],
      liveLink: "https://github.com/portifystudio",
      sourceLink: "https://github.com/portifystudio"
    }
  ];

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Deployments</span></h2>
          <p className="text-gray-400">Exploring the intersection of hardware, networks, and interfaces.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glassmorphism rounded-2xl overflow-hidden group cursor-pointer border border-white/5 hover:border-primary/50 transition-all duration-300"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-300"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-2 block">{project.category}</span>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <div className="flex gap-2 flex-wrap mt-4">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded bg-white/5 text-gray-300">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl glassmorphism rounded-3xl overflow-hidden border border-white/20 shadow-2xl z-10 flex flex-col md:flex-row max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 hover:bg-primary rounded-full flex items-center justify-center text-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="md:w-1/2 relative h-64 md:h-auto">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent md:bg-gradient-to-r" />
              </div>

              <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto">
                <span className="text-primary font-medium tracking-wider text-sm uppercase">{selectedProject.category}</span>
                <h3 className="text-3xl font-bold mt-2 mb-6">{selectedProject.title}</h3>

                <p className="text-gray-300 leading-relaxed mb-8">
                  {selectedProject.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1.5 bg-white/10 rounded-lg text-sm text-white border border-white/5">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a href={selectedProject.liveLink} target='_blank' className="flex-1 py-3 bg-primary hover:bg-primary/80 text-white rounded-xl flex items-center justify-center gap-2 transition-colors font-medium">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                  <a href={selectedProject.sourceLink} target='_blank' className="flex-1 py-3 glassmorphism hover:bg-white/10 text-white rounded-xl flex items-center justify-center gap-2 transition-colors font-medium">
                    <Github size={18} /> qSource
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;

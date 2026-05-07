import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-white/5 bg-surface/50 mt-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Establish <span className="text-gradient">Connection</span></h2>
          <p className="text-gray-400">Open for new opportunities and collaborations.</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glassmorphism p-8 md:p-10 rounded-3xl flex flex-col gap-6">
              <h3 className="text-2xl font-semibold mb-2">Send a Message</h3>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-400 ml-2">Name</label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:bg-white/10 transition-all text-white placeholder:text-gray-500"
                  placeholder="John Doe"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-400 ml-2">Email</label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:bg-white/10 transition-all text-white placeholder:text-gray-500"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-400 ml-2">Message</label>
                <textarea
                  required
                  rows="4"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:bg-white/10 transition-all text-white placeholder:text-gray-500 resize-none"
                  placeholder="Initiate handshake protocol..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className={`mt-4 py-4 rounded-xl flex items-center justify-center gap-2 font-medium transition-all ${submitted
                  ? 'bg-green-500 text-white'
                  : isSubmitting
                    ? 'bg-primary/50 text-white cursor-not-allowed'
                    : 'bg-primary hover:bg-primary/80 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]'
                  }`}
              >
                {submitted ? 'Message Transmitted' : isSubmitting ? 'Transmitting...' : 'Send Transmission'}
                {!submitted && !isSubmitting && <Send size={18} />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

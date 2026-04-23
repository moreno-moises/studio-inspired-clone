import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link with invoice/inquiry details
    const mailtoSubject = encodeURIComponent(`Invoice Request: ${formData.subject}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:ticketburner100@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Contact
          </h2>
          <p className="text-xl text-muted-foreground">
            Send an inquiry or invoice request
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm tracking-widest uppercase text-muted-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-transparent border border-border px-4 py-3 focus:border-neon-pink focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm tracking-widest uppercase text-muted-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent border border-border px-4 py-3 focus:border-neon-pink focus:outline-none transition-colors"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm tracking-widest uppercase text-muted-foreground mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full bg-transparent border border-border px-4 py-3 focus:border-neon-pink focus:outline-none transition-colors"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm tracking-widest uppercase text-muted-foreground mb-2">
              Message / Invoice Details
            </label>
            <textarea
              id="message"
              required
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-transparent border border-border px-4 py-3 focus:border-neon-pink focus:outline-none transition-colors resize-none"
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background font-display text-sm tracking-widest uppercase hover:bg-neon-pink hover:text-foreground transition-all duration-300 disabled:opacity-50"
          >
            <Send className="w-5 h-5" />
            {isSubmitting ? "Sending..." : "Send Inquiry"}
          </button>
          
          {submitted && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-neon-pink text-center"
            >
              Your email client should have opened. If not, please email directly.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;

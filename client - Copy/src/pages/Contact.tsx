import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import { useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-secondary/30">
        <motion.div
          className="container text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground" variants={itemVariants}>
            Get in <span className="text-accent">Touch</span>
          </motion.h1>
          <motion.p className="text-xl text-muted-foreground max-w-2xl mx-auto" variants={itemVariants}>
            Ready to start your recovery and performance journey? We're here to help.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <motion.div
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-foreground mb-8">Book an Appointment</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-accent bg-white"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-accent bg-white"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-accent bg-white"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Service</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-accent bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="assessment">Initial Assessment</option>
                    <option value="physio">Physiotherapy</option>
                    <option value="strength">Strength & Conditioning</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-accent bg-white"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                <Button className="w-full bg-accent hover:bg-accent/90 text-white py-3">
                  Send Inquiry
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div className="space-y-8" variants={containerVariants}>
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl font-bold text-foreground mb-8">Contact Information</h2>
              </motion.div>

              {[
                {
                  icon: MapPin,
                  title: "Location",
                  content: "Opening soon in Ahmedabad, India",
                },
                {
                  icon: Phone,
                  title: "Phone / WhatsApp",
                  content: "+91 XXXXXXXXXX",
                  link: "tel:+91XXXXXXXXXX",
                },
                {
                  icon: Mail,
                  title: "Email",
                  content: "hello@vertexclinic.com",
                  link: "mailto:hello@vertexclinic.com",
                },
                {
                  icon: Instagram,
                  title: "Instagram",
                  content: "@vertexclinic",
                  link: "https://instagram.com/vertexclinic",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-secondary/30 rounded-lg border border-border"
                  variants={itemVariants}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                      {item.link ? (
                        <a href={item.link} className="text-accent hover:underline">
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.content}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              <motion.div className="p-6 bg-accent text-white rounded-lg" variants={itemVariants}>
                <h3 className="font-bold mb-2">Opening Hours</h3>
                <p className="text-sm">Coming soon to Ahmedabad</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-secondary/30">
        <motion.div
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 className="text-4xl font-bold text-center mb-12 text-foreground" variants={itemVariants}>
            Visit Us in <span className="text-accent">Ahmedabad</span>
          </motion.h2>

          <motion.div
            className="w-full h-96 bg-gradient-to-br from-secondary to-secondary/50 rounded-lg border border-border flex items-center justify-center"
            variants={itemVariants}
          >
            <div className="text-center">
              <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
              <p className="text-foreground font-medium">Opening soon in Ahmedabad, India</p>
              <p className="text-muted-foreground text-sm mt-2">Map will be available once location is confirmed</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white border-t-2 border-accent">
        <motion.div
          className="container text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 className="text-4xl font-bold mb-8 text-foreground" variants={itemVariants}>
            Have Questions? <br />
            <span className="text-accent">We're Here to Help</span>
          </motion.h2>
          <motion.p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto" variants={itemVariants}>
            Whether you're new to physiotherapy or looking to optimize your performance, our team is ready to assist you.
          </motion.p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="border-t border-white/20 mb-12" />
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-accent rounded flex items-center justify-center">
                  <span className="text-foreground font-bold text-sm">V</span>
                </div>
                <span className="font-bold text-lg">VERTEX</span>
              </div>
              <p className="text-white/60 text-sm">Physio | Rehab | Fitness</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/about">
                  <a className="text-white/60 hover:text-white transition-colors text-sm">About</a>
                </Link>
                <Link href="/services">
                  <a className="text-white/60 hover:text-white transition-colors text-sm">Services</a>
                </Link>
                <Link href="/contact">
                  <a className="text-white/60 hover:text-white transition-colors text-sm">Contact</a>
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="space-y-2">
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm block">
                  Instagram
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm block">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-white/40 text-sm">
            <p>&copy; 2026 Vertex Performance Clinic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

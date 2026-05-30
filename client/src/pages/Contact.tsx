import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, MessageCircle, Clock } from "lucide-react";

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

const cardHoverVariants = {
  initial: { y: 0, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" },
  hover: { 
    y: -8, 
    boxShadow: "0 20px 25px rgba(0, 0, 0, 0.15)",
    transition: { duration: 0.3 }
  },
};

export default function Contact() {
  // WhatsApp number - Replace with your actual number
  const whatsappNumber = "+919876543210"; // Update with your WhatsApp number
  const whatsappMessage = "Hi! I'm interested in your services at Vertex Performance Clinic.";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Navbar />

      {/* Hero Section with Gradient Background */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Animated background gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-white to-secondary/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -mr-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -ml-48"></div>

        <motion.div
          className="container relative z-10 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="inline-block mb-4 px-4 py-1.5 bg-accent/10 rounded-full border border-accent/20"
            variants={itemVariants}
          >
            <span className="text-accent font-semibold text-xs uppercase tracking-wider">GET IN TOUCH</span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight"
            variants={itemVariants}
          >
            Let's Start Your <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">Recovery Journey</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8"
            variants={itemVariants}
          >
            Ready to transform your health and performance? Our expert team at Vertex Performance Clinic is just one message away. Reach out today!
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white relative">
        <motion.div
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div 
            className="text-center mb-20"
            variants={itemVariants}
          >
            <h2 className="text-5xl font-bold text-foreground mb-4">Get in Touch With Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Choose your preferred way to connect. We're here to help you achieve your goals.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: MessageCircle,
                title: "WhatsApp",
                description: "Instant messaging",
                content: "Chat with us now",
                link: whatsappLink,
                bgGradient: "from-green-400 to-green-600",
                target: "_blank",
              },
              {
                icon: MapPin,
                title: "Location",
                description: "Visit our clinic",
                content: "View on Map",
                link: "https://maps.google.com/?q=Shop+307+Ishan+Square+Chandkheda+Ahmadabad",
                bgGradient: "from-blue-400 to-blue-600",
                target: "_blank",
              },
              {
                icon: Mail,
                title: "Email",
                description: "Send us a message",
                content: "hello@vertexclinic.com",
                link: "mailto:hello@vertexclinic.com",
                bgGradient: "from-orange-400 to-orange-600",
                target: undefined,
              },
              {
                icon: Instagram,
                title: "Instagram",
                description: "Follow our updates",
                content: "@vertexclinic",
                link: "https://instagram.com/vertexclinic",
                bgGradient: "from-pink-400 to-purple-600",
                target: "_blank",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                variants={itemVariants}
                whileHover="hover"
                initial="initial"
                animate="initial"
              >
                <motion.a
                  href={item.link}
                  target={item.target}
                  rel={item.target ? "noopener noreferrer" : undefined}
                  className="block h-full"
                  variants={cardHoverVariants}
                >
                  <div className="h-full p-6 rounded-xl border border-border bg-white hover:bg-gradient-to-br hover:from-white hover:to-secondary/20 transition-all duration-300 shadow-sm hover:shadow-md">
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${item.bgGradient} mb-4`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground mb-3">{item.description}</p>
                    
                    <p className="font-semibold text-accent text-sm group-hover:underline">{item.content}</p>
                  </div>
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Primary CTA Section */}
      <section className="py-24 bg-gradient-to-r from-accent via-accent/90 to-accent/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -ml-48 -mb-48"></div>
        </div>

        <motion.div
          className="container relative z-10 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-5"
            variants={itemVariants}
          >
            Ready to Start?
          </motion.h2>
          <motion.p 
            className="text-lg text-white/90 mb-10 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Don't wait! Message us on WhatsApp for the quickest response and start your transformation today.
          </motion.p>
          
          <motion.div variants={itemVariants}>
            <Button
              onClick={() => window.open(whatsappLink, "_blank")}
              className="bg-white text-accent hover:bg-white/90 px-10 py-3 text-base font-semibold inline-flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp Now
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Map Section */}
      <section className="py-32 bg-white relative">
        <motion.div
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-5xl font-bold text-foreground mb-4">
              Visit Us at <span className="text-accent">Vertex Performance</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Our clinic is conveniently located in the heart of Ahmedabad, ready to serve you.</p>
          </motion.div>

          {/* Address Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <motion.div
              className="p-8 bg-white rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow"
              variants={itemVariants}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Our Address</h3>
                  <p className="text-foreground font-semibold text-sm mb-2">VERTEX PERFORMANCE CLINIC</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Shop 307, Ishan Square<br />
                    Nr Amrakunj Bunglow<br />
                    Chandkheda (M)<br />
                    Ahmedabad, Gujarat 380005<br />
                    India
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="p-8 bg-white rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow"
              variants={itemVariants}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Business Hours</h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-semibold text-foreground">Monday - Friday:</span><br /><span className="text-muted-foreground">9:00 AM - 6:00 PM</span></p>
                    <p><span className="font-semibold text-foreground">Saturday:</span><br /><span className="text-muted-foreground">10:00 AM - 4:00 PM</span></p>
                    <p><span className="font-semibold text-foreground">Sunday:</span><br /><span className="text-muted-foreground">By Appointment</span></p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div
            className="w-full rounded-xl border border-border overflow-hidden shadow-md"
            variants={itemVariants}
          >
            <iframe
              width="100%"
              height="450"
              frameBorder="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9425516854537!2d72.56340932346854!3d23.21827627731457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2ae24dc92637%3A0x1234567890abcdef!2sShop%20307%2C%20Ishan%20Square%2C%20Chandkheda%2C%20Ahmedabad!5e0!3m2!1sen!2sin!4v1234567890"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </motion.div>

          <motion.div 
            className="flex justify-center flex-wrap gap-4 mt-10"
            variants={itemVariants}
          >
            <Button 
              className="bg-accent hover:bg-accent/90 text-white px-8 py-2.5 inline-flex items-center gap-2"
              onClick={() => window.open("https://maps.google.com/?q=Shop+307+Ishan+Square+Chandkheda+Ahmadabad", "_blank")}
            >
              <MapPin className="w-5 h-5" />
              View on Google Maps
            </Button>
            <Button 
              variant="outline"
              className="px-8 py-2.5 inline-flex items-center gap-2"
              onClick={() => window.open("https://share.google/xj9x0yWQpVhiRW", "_blank")}
            >
              <MapPin className="w-5 h-5" />
              Get Directions
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer is now rendered globally via App.tsx */}
    </div>
  );
}

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Activity, Zap, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";

const heroImageUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663413234035/6fwYZU2bq8MxLHqGdTxvrZ/vertex-hero-new-jMA8BtifvfdxvSoKrtp7ki.webp";

const aboutImages = [
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663413234035/6fwYZU2bq8MxLHqGdTxvrZ/vertex-about-1-Q528oDcvnp5Xkfhw8bQAvi.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663413234035/6fwYZU2bq8MxLHqGdTxvrZ/vertex-about-2-C75UXqaK323tUc7eWLTiHQ.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663413234035/6fwYZU2bq8MxLHqGdTxvrZ/vertex-about-3-8ZCMzZ59japhpi2aSk9aFn.webp",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const scaleVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8 },
  },
};

const slideInVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
};

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % aboutImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pb-24 relative overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('${heroImageUrl}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-white/40 z-10" />

        <motion.div
          className="container relative z-20 flex flex-col items-center justify-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-2 text-foreground leading-tight"
            variants={itemVariants}
          >
            Vertex Performance Studio
          </motion.h1>
          <motion.p className="text-xl md:text-2xl text-accent font-semibold mb-6" variants={itemVariants}>
            Physio | Fitness | Rehab
          </motion.p>

          <motion.p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl" variants={itemVariants}>
            Personalized fitness and rehabilitation programs for every stage of life.
          </motion.p>

          <motion.div className="flex flex-col md:flex-row gap-4 mb-16" variants={itemVariants}>
            <Link href="/contact" asChild>
              <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg">
                Book Consultation
              </Button>
            </Link>
            <Link href="/services" asChild>
              <Button variant="outline" className="border-foreground text-foreground hover:bg-secondary px-8 py-6 text-lg">
                Explore Services
              </Button>
            </Link>
          </motion.div>

          {/* Service Icons */}
          <motion.div className="grid grid-cols-3 gap-8 md:gap-12 w-full max-w-3xl" variants={containerVariants}>
            {[
              { icon: Heart, label: "For all age groups" },
              { icon: Activity, label: "Semi-private coaching" },
              { icon: Zap, label: "Personalized programs" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-3 cursor-pointer"
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <motion.div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow" whileHover={{ rotate: 5 }}>
                  <item.icon className="w-8 h-8 text-accent" />
                </motion.div>
                <p className="text-sm font-medium text-foreground">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* About Vertex Section */}
      <section className="py-24 bg-secondary/30">
        <motion.div
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div className="space-y-6" variants={containerVariants}>
              <motion.h2 className="text-4xl md:text-5xl font-bold text-foreground" variants={itemVariants}>
                About <span className="text-accent">Vertex</span>
              </motion.h2>
              <motion.p className="text-lg text-muted-foreground leading-relaxed" variants={itemVariants}>
                Vertex represents the peak of health and performance where science, movement, and precision come together. We combine evidence-based physiotherapy with athletic performance training to help you reach your peak.
              </motion.p>

              <motion.div className="space-y-4 pt-4" variants={containerVariants}>
                {[
                  { title: "Physiotherapy", desc: "Healing injuries with expert care" },
                  { title: "Rehabilitation", desc: "Restoring movement and function" },
                  { title: "Fitness", desc: "Building long-term strength" },
                ].map((item, index) => (
                  <motion.div key={index} className="flex gap-4" variants={itemVariants}>
                    <div className="w-1 bg-accent rounded-full" />
                    <div>
                      <h3 className="font-bold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={itemVariants}>
                <Link href="/about" asChild>
                  <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
                    Learn More About Our Philosophy
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="h-96 rounded-lg overflow-hidden shadow-xl relative"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <motion.img
                key={currentImageIndex}
                src={aboutImages[currentImageIndex]}
                alt="Vertex Clinic"
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {aboutImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex ? "bg-accent w-6" : "bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Why Choose Vertex */}
      <section className="py-24 bg-white">
        <motion.div
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground" variants={itemVariants}>
            Why Choose <span className="text-accent">Vertex</span>
          </motion.h2>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants}>
            {[
              "Limited clients at a time",
              "Appointment-based sessions",
              "One-on-one expert supervision",
              "Physio-led training",
              "Calm premium environment",
              "Quality over quantity approach",
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 bg-secondary/50 rounded-lg border border-border hover:border-accent transition-colors shadow-premium-hover"
                variants={itemVariants}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <p className="text-foreground font-medium">{feature}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-secondary/30">
        <motion.div
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground" variants={itemVariants}>
            Our <span className="text-accent">Services</span>
          </motion.h2>

          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={containerVariants}>
            {[
              {
                title: "Physiotherapy",
                desc: "Manual therapy, corrective exercises, and movement retraining",
                icon: Heart,
              },
              {
                title: "Rehabilitation",
                desc: "Post-injury recovery and functional movement restoration",
                icon: Activity,
              },
              {
                title: "Strength & Conditioning",
                desc: "Evidence-based training programs with technique correction",
                icon: Zap,
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="p-8 bg-white rounded-lg border border-border shadow-lg hover:shadow-2xl hover:border-accent transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <motion.div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4" whileHover={{ rotate: 10, scale: 1.1 }}>
                  <service.icon className="w-6 h-6 text-accent" />
                </motion.div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.desc}</p>
                <Link href="/services" className="text-accent font-medium hover:underline inline-block">
                  Learn More →
                </Link>
              </motion.div>
            ))}
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
          <motion.h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground" variants={itemVariants}>
            Start Your Recovery and <br />
            <span className="text-accent">Performance Journey</span> Today
          </motion.h2>

          <motion.div className="flex flex-col md:flex-row gap-4 justify-center" variants={itemVariants}>
            <Link href="/contact" asChild>
              <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg">
                Book Consultation
              </Button>
            </Link>
            <Link href="/contact" asChild>
              <Button variant="outline" className="border-foreground text-foreground hover:bg-secondary px-8 py-6 text-lg">
                Contact Us
              </Button>
            </Link>
          </motion.div>
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

import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { motion } from "framer-motion";
import { Dumbbell, Heart } from "lucide-react";

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

const fitnessServices = [
  { title: "Functional Training", price: "₹1,200", duration: "45-60 min" },
  { title: "Strength & Conditioning", price: "₹1,200", duration: "60 min" },
  { title: "Athletic Development", price: "₹1,500", duration: "60 min" },
  { title: "Fat Loss Programs", price: "₹1,000/session", duration: "Customized" },
  { title: "Muscle Building", price: "₹1,200", duration: "60 min" },
  { title: "Mobility Training", price: "₹900", duration: "45 min" },
  { title: "Sports Conditioning", price: "₹1,500", duration: "60 min" },
];

const rehabServices = [
  { title: "Physiotherapy", price: "₹1,000", duration: "45-60 min" },
  { title: "Manual Therapy", price: "₹1,200", duration: "60 min" },
  { title: "Electrotherapy", price: "₹800", duration: "30 min" },
  { title: "Orthopedic Rehab", price: "₹1,200", duration: "60 min" },
  { title: "Post-Injury Recovery", price: "₹1,000/session", duration: "Customized" },
  { title: "Pain Management", price: "₹1,000", duration: "45 min" },
  { title: "Movement Correction", price: "₹1,100", duration: "50 min" },
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<"fitness" | "rehab">("fitness");

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
            Our <span className="text-accent">Services</span>
          </motion.h1>
          <motion.p className="text-xl text-muted-foreground max-w-2xl mx-auto" variants={itemVariants}>
            Comprehensive fitness and rehabilitation programs tailored to your needs.
          </motion.p>
        </motion.div>
      </section>

      {/* Services Image Section */}
      <section className="py-24 bg-white">
        <motion.div
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div
            className="h-96 rounded-lg overflow-hidden shadow-xl"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663413234035/6fwYZU2bq8MxLHqGdTxvrZ/vertex-services-carousel-KmJS6T3A7ytGtzYARaWSnY.webp"
              alt="Professional Services"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section with Category Tabs */}
      <section className="py-24 bg-secondary/30">
        <motion.div
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 className="text-4xl font-bold mb-12 text-foreground text-center" variants={itemVariants}>
            Choose Your <span className="text-accent">Category</span>
          </motion.h2>

          {/* Category Tabs */}
          <motion.div className="flex justify-center gap-4 mb-12" variants={itemVariants}>
            <button
              onClick={() => setActiveCategory("fitness")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeCategory === "fitness"
                  ? "bg-accent text-white shadow-lg"
                  : "bg-white text-foreground border border-border hover:border-accent"
              }`}
            >
              <Dumbbell className="w-5 h-5" />
              Fitness
            </button>
            <button
              onClick={() => setActiveCategory("rehab")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeCategory === "rehab"
                  ? "bg-accent text-white shadow-lg"
                  : "bg-white text-foreground border border-border hover:border-accent"
              }`}
            >
              <Heart className="w-5 h-5" />
              Physio & Rehab
            </button>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {(activeCategory === "fitness" ? fitnessServices : rehabServices).map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg border border-border hover:shadow-lg transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
                <div className="space-y-2 mb-6">
                  <p className="text-accent font-semibold text-lg">{service.price}</p>
                  <p className="text-sm text-muted-foreground">{service.duration}</p>
                </div>
                <Link href="/contact" asChild>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white">Book Now</Button>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <motion.div
          className="container text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground" variants={itemVariants}>
            Not sure which service is right for you?
          </motion.h2>
          <motion.p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto" variants={itemVariants}>
            Book a free consultation with our experts to discuss your goals and find the perfect program.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link href="/contact" asChild>
              <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg">
                Get Free Consultation
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <motion.div
          className="container text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.p className="text-sm text-white/70 mb-4" variants={itemVariants}>
            © 2026 Vertex Performance Studio. All rights reserved.
          </motion.p>
          <motion.div className="flex justify-center gap-6" variants={containerVariants}>
            {["Home", "About", "Programs", "Contact"].map((link) => (
              <motion.a
                key={link}
                href="#"
                className="text-sm text-white/70 hover:text-accent transition-colors"
                variants={itemVariants}
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </footer>
    </div>
  );
}

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

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

const fitnessApproach = [
  { title: "Functional Training", description: "Movement-based exercises for real-world strength" },
  { title: "Strength & Conditioning", description: "Progressive resistance training programs" },
  { title: "Performance Coaching", description: "Expert guidance for athletic development" },
  { title: "Mobility Training", description: "Flexibility and range of motion enhancement" },
  { title: "Personalized Fitness", description: "Customized programs based on individual goals" },
];

const rehabApproach = [
  { title: "Physiotherapy Treatment", description: "Clinical assessment and hands-on therapy" },
  { title: "Electrotherapy", description: "Advanced pain management techniques" },
  { title: "Pain Management", description: "Evidence-based strategies for pain relief" },
  { title: "Recovery-Focused Rehab", description: "Structured rehabilitation protocols" },
  { title: "Movement Restoration", description: "Restoring functional movement patterns" },
];

const methodSteps = [
  { step: "Step 1", title: "Assessment", description: "Movement screening, posture analysis, pain/performance evaluation." },
  { step: "Step 2", title: "Personalized Plan", description: "Customized rehab or fitness roadmap." },
  { step: "Step 3", title: "Guided Sessions", description: "Semi-private or one-on-one supervised sessions." },
  { step: "Step 4", title: "Progress Tracking", description: "Continuous monitoring and adjustments." },
  { step: "Step 5", title: "Long-Term Performance", description: "Improve strength, mobility, resilience, and overall movement quality." },
];

export default function About() {
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
            About <span className="text-accent">Vertex</span>
          </motion.h1>
          <motion.p className="text-xl text-muted-foreground max-w-2xl mx-auto" variants={itemVariants}>
            We don't just treat pain. We build stronger movement, performance, and long-term health.
          </motion.p>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-white">
        <motion.div
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 className="text-4xl font-bold mb-12 text-foreground" variants={itemVariants}>
            Our <span className="text-accent">Philosophy</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div className="space-y-6" variants={containerVariants}>
              <motion.p className="text-lg text-muted-foreground leading-relaxed" variants={itemVariants}>
                Everyone is an athlete in their own way. Whether you're recovering from injury, building strength, or optimizing performance, we believe in long-term mobility and strength development.
              </motion.p>
              <motion.p className="text-lg text-muted-foreground leading-relaxed" variants={itemVariants}>
                Our integrated approach combines rehabilitation and fitness expertise with evidence-based coaching. We provide personalized programs that address your unique needs—all under one roof.
              </motion.p>
              <motion.div className="space-y-3 pt-6" variants={containerVariants}>
                {["Functional fitness", "Strength & conditioning", "Manual therapy", "Rehab support", "Mobility improvement"].map((item, i) => (
                  <motion.div key={i} className="flex items-center gap-3" variants={itemVariants}>
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="h-96 rounded-lg overflow-hidden shadow-xl"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663413234035/6fwYZU2bq8MxLHqGdTxvrZ/vertex-about-1-Q528oDcvnp5Xkfhw8bQAvi.webp"
                alt="Vertex Studio"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Approach Section */}
      <section className="py-24 bg-secondary/30">
        <motion.div
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 className="text-4xl font-bold mb-12 text-foreground text-center" variants={itemVariants}>
            Our <span className="text-accent">Approach</span>
          </motion.h2>

          {/* Category Tabs */}
          <motion.div className="flex justify-center gap-4 mb-12" variants={itemVariants}>
            <button
              onClick={() => setActiveCategory("fitness")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === "fitness"
                  ? "bg-accent text-white shadow-lg"
                  : "bg-white text-foreground border border-border hover:border-accent"
              }`}
            >
              Fitness
            </button>
            <button
              onClick={() => setActiveCategory("rehab")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === "rehab"
                  ? "bg-accent text-white shadow-lg"
                  : "bg-white text-foreground border border-border hover:border-accent"
              }`}
            >
              Physio & Rehab
            </button>
          </motion.div>

          {/* Approach Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {(activeCategory === "fitness" ? fitnessApproach : rehabApproach).map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg border border-border hover:shadow-lg transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* The Vertex Method */}
      <section className="py-24 bg-white">
        <motion.div
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 className="text-4xl font-bold mb-12 text-foreground text-center" variants={itemVariants}>
            The <span className="text-accent">Vertex Method</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {methodSteps.map((item, index) => (
              <motion.div
                key={index}
                className="relative"
                variants={itemVariants}
              >
                <div className="bg-secondary/30 p-6 rounded-lg h-full">
                  <div className="text-accent font-bold text-sm mb-2">{item.step}</div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                {index < methodSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-accent transform -translate-y-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary/30">
        <motion.div
          className="container text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground" variants={itemVariants}>
            Ready to Start Your <span className="text-accent">Journey</span>?
          </motion.h2>
          <motion.p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto" variants={itemVariants}>
            Join us at Vertex Performance Studio and experience personalized fitness and rehabilitation like never before.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link href="/contact" asChild>
              <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg">
                Book Your Consultation
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
            {["Home", "Services", "Programs", "Contact"].map((link) => (
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

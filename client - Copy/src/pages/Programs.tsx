import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { motion } from "framer-motion";
import { Dumbbell, Heart, CheckCircle2 } from "lucide-react";

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

const fitnessJourney = [
  { phase: "Phase 1", title: "Assessment & Goal Setting", description: "Evaluate fitness level, identify goals, and create personalized roadmap." },
  { phase: "Phase 2", title: "Movement Foundation", description: "Build proper movement patterns and foundational strength." },
  { phase: "Phase 3", title: "Strength Development", description: "Progressive resistance training and performance enhancement." },
  { phase: "Phase 4", title: "Performance Training", description: "Advanced training for athletic performance and goals." },
];

const rehabJourney = [
  { phase: "Phase 1", title: "Pain & Injury Assessment", description: "Clinical evaluation and diagnosis of injury or condition." },
  { phase: "Phase 2", title: "Recovery & Mobility", description: "Pain management and restoration of movement range." },
  { phase: "Phase 3", title: "Strength Reintegration", description: "Gradual strengthening and functional restoration." },
  { phase: "Phase 4", title: "Return to Activity", description: "Safe return to normal activities and sports." },
];

const fitnessDurations = [
  { duration: "1 Month Foundation", sessions: "8-12 sessions", description: "Perfect for beginners to establish routine" },
  { duration: "3 Month Transformation", sessions: "24-36 sessions", description: "Build strength and see visible results" },
  { duration: "6 Month Performance Program", sessions: "48-60 sessions", description: "Advanced performance and athletic training" },
];

const rehabDurations = [
  { duration: "Short-Term Recovery", sessions: "8-12 sessions", description: "Acute injury or post-surgery recovery" },
  { duration: "Mid-Term Rehab", sessions: "20-30 sessions", description: "Chronic conditions and moderate injuries" },
  { duration: "Long-Term Corrective Rehab", sessions: "40-60 sessions", description: "Complex cases and preventive care" },
];

const fitnessMethodSteps = [
  { step: "Step 1", title: "Assessment", description: "Fitness evaluation, movement screening, and goal setting." },
  { step: "Step 2", title: "Personalized Plan", description: "Customized training roadmap based on fitness level." },
  { step: "Step 3", title: "Guided Sessions", description: "Semi-private or one-on-one supervised training sessions." },
  { step: "Step 4", title: "Progress Tracking", description: "Continuous monitoring and program adjustments." },
  { step: "Step 5", title: "Long-Term Performance", description: "Improve strength, mobility, and athletic performance." },
];

const rehabMethodSteps = [
  { step: "Step 1", title: "Clinical Assessment", description: "Comprehensive injury evaluation and diagnosis." },
  { step: "Step 2", title: "Personalized Rehab Plan", description: "Customized rehabilitation roadmap based on condition." },
  { step: "Step 3", title: "Guided Therapy Sessions", description: "Semi-private or one-on-one supervised therapy sessions." },
  { step: "Step 4", title: "Progress Monitoring", description: "Continuous assessment and treatment adjustments." },
  { step: "Step 5", title: "Return to Activity", description: "Safe return to normal activities and sports." },
];

const fitnessMethod = [
  "Progressive Overload Training",
  "Movement Pattern Optimization",
  "Strength & Conditioning Protocols",
  "Performance Tracking & Analytics",
  "Nutrition & Recovery Guidance",
  "Sport-Specific Programming",
];

const rehabMethod = [
  "Clinical Assessment & Diagnosis",
  "Evidence-Based Rehabilitation",
  "Manual Therapy Techniques",
  "Progressive Loading Protocols",
  "Functional Movement Restoration",
  "Return-to-Activity Planning",
];

export default function Programs() {
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
            Our <span className="text-accent">Programs</span>
          </motion.h1>
          <motion.p className="text-xl text-muted-foreground max-w-2xl mx-auto" variants={itemVariants}>
            Structured programs designed for your fitness and rehabilitation journey.
          </motion.p>
        </motion.div>
      </section>

      {/* Programs Image Section */}
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
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663413234035/6fwYZU2bq8MxLHqGdTxvrZ/vertex-programs-visual-CKqVvNNQT8YqVZKVqL9Zfx.webp"
              alt="Training Programs"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Program Journey Section */}
      <section className="py-24 bg-secondary/30">
        <motion.div
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 className="text-4xl font-bold mb-12 text-foreground text-center" variants={itemVariants}>
            The Vertex Program <span className="text-accent">Journey</span>
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

          {/* Journey Timeline */}
          <motion.div className="grid grid-cols-1 md:grid-cols-4 gap-4" variants={containerVariants}>
            {(activeCategory === "fitness" ? fitnessJourney : rehabJourney).map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg border border-border relative"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="text-accent font-bold text-sm mb-2">{item.phase}</div>
                <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                {index < (activeCategory === "fitness" ? fitnessJourney : rehabJourney).length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-accent transform -translate-y-1/2" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Vertex Method Section */}
      <section className="py-24 bg-white">
        <motion.div
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 className="text-4xl font-bold mb-12 text-foreground text-center" variants={itemVariants}>
            The Vertex <span className="text-accent">Method</span>
          </motion.h2>

          {/* Category Tabs for Method */}
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

          {/* Method Steps */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-5 gap-4"
            variants={containerVariants}
          >
            {(activeCategory === "fitness" ? fitnessMethodSteps : rehabMethodSteps).map((item, index) => (
              <motion.div
                key={index}
                className="bg-secondary/30 p-6 rounded-lg border border-border relative"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="text-accent font-bold text-sm mb-2">{item.step}</div>
                <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                {index < (activeCategory === "fitness" ? fitnessMethodSteps : rehabMethodSteps).length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-accent transform -translate-y-1/2" />
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Method Principles */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16" variants={containerVariants}>
            <motion.div
              className="p-8 bg-secondary/30 rounded-lg"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Dumbbell className="w-6 h-6 text-accent" />
                Fitness Principles
              </h3>
              <div className="space-y-4">
                {fitnessMethod.map((item, i) => (
                  <motion.div key={i} className="flex items-start gap-3" variants={itemVariants}>
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="p-8 bg-secondary/30 rounded-lg"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Heart className="w-6 h-6 text-accent" />
                Physio & Rehab Principles
              </h3>
              <div className="space-y-4">
                {rehabMethod.map((item, i) => (
                  <motion.div key={i} className="flex items-start gap-3" variants={itemVariants}>
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Program Duration Section */}
      <section className="py-24 bg-secondary/30">
        <motion.div
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 className="text-4xl font-bold mb-12 text-foreground text-center" variants={itemVariants}>
            Program <span className="text-accent">Duration</span>
          </motion.h2>

          {/* Category Tabs for Duration */}
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

          {/* Duration Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {(activeCategory === "fitness" ? fitnessDurations : rehabDurations).map((program, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg border border-border hover:shadow-lg transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-foreground mb-3">{program.duration}</h3>
                <p className="text-accent font-semibold mb-3">{program.sessions}</p>
                <p className="text-muted-foreground mb-6">{program.description}</p>
                <Link href="/contact" asChild>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white">Learn More</Button>
                </Link>
              </motion.div>
            ))}
          </motion.div>
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
            Ready to Transform Your <span className="text-accent">Performance</span>?
          </motion.h2>
          <motion.p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto" variants={itemVariants}>
            Choose the program that fits your goals and start your journey with Vertex.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link href="/contact" asChild>
              <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg">
                Start Your Program
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
            {["Home", "About", "Services", "Contact"].map((link) => (
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

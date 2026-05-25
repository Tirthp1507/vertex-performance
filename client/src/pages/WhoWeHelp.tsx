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

const fitnessClients = [
  { title: "Athletes", description: "Sports performance and athletic development" },
  { title: "Fitness Enthusiasts", description: "Goal-oriented fitness training" },
  { title: "Beginners", description: "Starting your fitness journey safely" },
  { title: "Weight Loss Clients", description: "Sustainable fat loss programs" },
  { title: "Sports Performance Clients", description: "Sport-specific conditioning" },
];

const rehabClients = [
  { title: "Post-Surgery Recovery", description: "Safe return after surgical procedures" },
  { title: "Chronic Pain Clients", description: "Long-term pain management" },
  { title: "Orthopedic Conditions", description: "Joint and bone-related issues" },
  { title: "Injury Recovery", description: "Acute and chronic injury rehabilitation" },
  { title: "Mobility Limitation Clients", description: "Restoring movement and function" },
];

const fitnessHelp = [
  "Goal-based training programs",
  "Strength progression tracking",
  "Mobility enhancement",
  "Performance tracking",
  "Sustainable fitness habits",
];

const rehabHelp = [
  "Clinical assessment and diagnosis",
  "Pain reduction strategies",
  "Movement restoration",
  "Rehab progression protocols",
  "Manual therapy techniques",
  "Recovery monitoring",
];

export default function WhoWeHelp() {
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
            Who We <span className="text-accent">Help</span>
          </motion.h1>
          <motion.p className="text-xl text-muted-foreground max-w-2xl mx-auto" variants={itemVariants}>
            Whether you're looking to improve fitness or recover from injury, we have programs for you.
          </motion.p>
        </motion.div>
      </section>

      {/* Who We Help Image */}
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
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&h=400&fit=crop"
              alt="Who We Help"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Client Categories */}
      <section className="py-24 bg-secondary/30">
        <motion.div
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 className="text-4xl font-bold mb-12 text-foreground text-center" variants={itemVariants}>
            Our <span className="text-accent">Clients</span>
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

          {/* Client Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
            variants={containerVariants}
          >
            {(activeCategory === "fitness" ? fitnessClients : rehabClients).map((client, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg border border-border hover:shadow-lg transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-foreground mb-3">{client.title}</h3>
                <p className="text-muted-foreground mb-6">{client.description}</p>
                <Link href="/contact" asChild>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white">Learn More</Button>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* How We Help Section */}
      <section className="py-24 bg-white">
        <motion.div
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 className="text-4xl font-bold mb-12 text-foreground text-center" variants={itemVariants}>
            How We <span className="text-accent">Help</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Fitness Column */}
            <motion.div
              className="p-8 bg-secondary/30 rounded-lg"
              variants={containerVariants}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Dumbbell className="w-6 h-6 text-accent" />
                Fitness
              </h3>
              <div className="space-y-4">
                {fitnessHelp.map((item, i) => (
                  <motion.div key={i} className="flex items-start gap-3" variants={itemVariants}>
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Rehab Column */}
            <motion.div
              className="p-8 bg-secondary/30 rounded-lg"
              variants={containerVariants}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Heart className="w-6 h-6 text-accent" />
                Physio & Rehab
              </h3>
              <div className="space-y-4">
                {rehabHelp.map((item, i) => (
                  <motion.div key={i} className="flex items-start gap-3" variants={itemVariants}>
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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
            Ready to Get <span className="text-accent">Started</span>?
          </motion.h2>
          <motion.p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto" variants={itemVariants}>
            Book a free consultation with our experts to discuss your goals and find the perfect program for you.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link href="/contact" asChild>
              <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg">
                Book Free Consultation
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer is now rendered globally via App.tsx */}
    </div>
  );
}

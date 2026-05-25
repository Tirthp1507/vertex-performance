import { useState } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    title: "Clinic Interior",
    category: "CLINIC INTERIOR",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413234035/6fwYZU2bq8MxLHqGdTxvrZ/gallery-clinic-interior-Fs47sxiqWJbxD4w8NbDBDN.webp",
    span: "col-span-2 row-span-2",
  },
  {
    id: 2,
    title: "Rehabilitation Exercises",
    category: "REHABILITATION EXERCISES",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413234035/6fwYZU2bq8MxLHqGdTxvrZ/gallery-rehabilitation-hCAVFur9vKyYT4quqMkTTw.webp",
    span: "col-span-1 row-span-1",
  },
  {
    id: 3,
    title: "Strength Floor",
    category: "EQUIPMENT & FACILITY",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413234035/6fwYZU2bq8MxLHqGdTxvrZ/gallery-strength-floor-XrKpV6hDPoRNGbWMEbzs3u.webp",
    span: "col-span-1 row-span-1",
  },
  {
    id: 4,
    title: "Mobility Studio",
    category: "CLINIC INTERIOR",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413234035/6fwYZU2bq8MxLHqGdTxvrZ/gallery-mobility-studio-7DYSBhVbmYUe7ZErVsPmvG.webp",
    span: "col-span-2 row-span-1",
  },
  {
    id: 5,
    title: "Recovery Bay",
    category: "REHABILITATION EXERCISES",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413234035/6fwYZU2bq8MxLHqGdTxvrZ/vertex-about-3-8ZCMzZ59japhpi2aSk9aFn.webp",
    span: "col-span-1 row-span-1",
  },
  {
    id: 6,
    title: "Athlete Training",
    category: "ATHLETE TRAINING",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413234035/6fwYZU2bq8MxLHqGdTxvrZ/vertex-about-2-C75UXqaK323tUc7eWLTiHQ.webp",
    span: "col-span-1 row-span-1",
  },
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

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

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
          <motion.div className="text-accent text-sm font-semibold tracking-wider mb-4" variants={itemVariants}>
            GALLERY
          </motion.div>
          <motion.h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground" variants={itemVariants}>
            A premium visual tour of our clinic, training, and rehabilitation environment
          </motion.h1>
          <motion.p className="text-xl text-muted-foreground max-w-2xl mx-auto" variants={itemVariants}>
            Explore our state-of-the-art facilities designed for optimal recovery and performance.
          </motion.p>
        </motion.div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-white">
        <motion.div
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]" variants={containerVariants}>
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                className={`${item.span} relative overflow-hidden rounded-lg shadow-lg cursor-pointer group`}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedImage(item.id)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex flex-col justify-end p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-white"
                  >
                    <p className="text-xs font-semibold tracking-wider text-accent mb-1">{item.category}</p>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                  </motion.div>
                </div>
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
            Ready to Experience <span className="text-accent">Vertex</span>?
          </motion.h2>
          <motion.p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto" variants={itemVariants}>
            Visit our premium clinic and discover the difference expert care and world-class facilities can make in your recovery and performance journey.
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

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative max-w-4xl w-full max-h-[90vh]"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={galleryItems.find((item) => item.id === selectedImage)?.image}
              alt="Gallery"
              className="w-full h-full object-contain rounded-lg"
            />
            <motion.div
              className="mt-4 text-white text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-sm font-semibold tracking-wider text-accent mb-2">
                {galleryItems.find((item) => item.id === selectedImage)?.category}
              </p>
              <h3 className="text-2xl font-bold">
                {galleryItems.find((item) => item.id === selectedImage)?.title}
              </h3>
            </motion.div>
          </motion.div>
        </motion.div>
      )}

      {/* Footer is now rendered globally via App.tsx */}
    </div>
  );
}

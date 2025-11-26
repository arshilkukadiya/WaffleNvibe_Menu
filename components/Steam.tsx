import { motion } from "framer-motion";

export default function Steam() {
  return (
    <motion.div
      className="absolute -top-6 left-1/2 -translate-x-1/2 w-8 h-8"
      animate={{ y: [-4, -14], opacity: [0.2, 1, 0] }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
    >
      <div className="w-2 h-2 bg-white/80 rounded-full blur-sm" />
    </motion.div>
  );
}

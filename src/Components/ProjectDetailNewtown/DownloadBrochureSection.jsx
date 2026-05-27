import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DownloadBrochureSection() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

  
    console.log("Lead Data:", formData);

    
    const link = document.createElement("a");
    link.href = "/brochure.pdf"; 
    link.download = "Project-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setOpen(false);
    setFormData({ name: "", phone: "" });
  };

  return (
    <section className="py-20 bg-white">
    
      <motion.div
        className="flex justify-center gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <button
          onClick={() => setOpen(true)}
          className="bg-black text-white px-7 py-2 font-light"
        >
          Download Brochure
        </button>

        <button className="bg-black text-white px-7 py-2 font-light">
          Enquire Now
        </button>
      </motion.div>

      
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-8 rounded-md w-[90%] max-w-md relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
           
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-4 text-xl"
              >
                ×
              </button>

              <h2 className="text-2xl font-semibold mb-6 text-center">
                Download Brochure
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full border px-4 py-2 outline-none"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />

                <input
                  type="tel"
                  placeholder="Mobile Number"
                  required
                  pattern="[0-9]{10}"
                  className="w-full border px-4 py-2 outline-none"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />

                <button
                  type="submit"
                  className="w-full bg-black text-white py-2 mt-2"
                >
                  Submit & Download
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

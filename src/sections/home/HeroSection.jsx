/* eslint-disable no-unused-vars */
import { ArrowRight, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${"https://ik.imagekit.io/bluezonerealty/landingpage/images/villa-in-mudichur/630235257O-1754651679423.jpg"}')`,
          }}
        ></div>
      </div>

      <div className="relative z-10 pt-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <AnimatePresence mode="wait">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                    <span className="text-sky-500">Bluezone</span>{" "}
                    <span>Realty</span>
                    <span className="block mt-2">Welcomes You.</span>
                    <span className="block text-xl md:text-2xl lg:text-3xl mt-3 text-sky-500 italic">
                      Strong, Safe, Comfortable.
                    </span>
                  </h1>
                </motion.div>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  className="text-md md:text-xl text-slate-300 max-w-2xl leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Bluezone Realty — Offering Safty and Comforts. We design and
                  build modern houses with quality, comfort, and value in every
                  detail. Find your futur home with us today.
                </motion.p>
              </AnimatePresence>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.button
                  className="group bg-rose-500 hover:bg-rose-600 text-white px-5 py-3 rounded-full font-semibold hidden md:flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/#properties")}
                >
                  <span>Explore Properties</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>

                <motion.a
                  href={`tel:+91${import.meta.env.VITE_BLUEZONE_MOBILE}`}
                  className="w-50 inline-flex items-center justify-center md:hidden px-6 py-2 text-md font-semibold rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 mx-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <PhoneCall className="w-4 h-4 mr-2" />
                  +91 {import.meta.env.VITE_BLUEZONE_MOBILE}
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

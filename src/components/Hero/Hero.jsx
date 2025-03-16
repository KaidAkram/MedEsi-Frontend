import React, { useEffect } from "react";
import PhoneImage from "../../assets/Phone.svg";
import Logo from "../../assets/Logo.svg";
import { motion } from "framer-motion";
import Bg from "../../assets/bg.svg";

const Hero = ({ showLogin, setShowLogin }) => {
  useEffect(() => {
    if (showLogin) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "visible";
    }
    return () => {
      document.body.style.overflow = "visible"; 
    };
  }, [showLogin]);

  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex flex-col justify-center"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-16 py-16 md:py-20 space-y-10 md:space-y-0">
        
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6 md:space-y-8">
          <h1 className="text-[38px] sm:text-[42px] md:text-[46px] font-bold leading-tight">
            <span className="bg-gradient-to-r from-[#2E00FF] via-[#2E00FF] to-[#2FD9FF] text-transparent bg-clip-text">
              Your
            </span>{" "}
            Health Your Future <br />
            With{" "}
            <span className="bg-gradient-to-r from-[#2FD9FF] via-[#2FD9FF] to-[#2E00FF] text-transparent bg-clip-text">
              MedEsi
            </span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed px-2 sm:px-0">
            Your well-being is our priority. MedEsi empowers you with cutting-edge healthcare
            solutions, ensuring a healthier and brighter future.
          </p>
          <button
            className="mt-6 px-6 py-3 text-white font-semibold text-lg bg-gradient-to-r from-[#2FD9FF] to-[#2E00FF] rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
            onClick={() => setShowLogin(true)}
          >
            Schedule Now
          </button>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <motion.img 
            src={PhoneImage} 
            alt="Phone Mockup" 
            className="w-[220px] sm:w-[270px] md:w-[320px] lg:w-[370px] xl:w-[420px] max-w-full sm:mb-6 h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] object-contain"
            animate={window.innerWidth >= 1024 ? { y: [0, -20, 0] } : {}}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </section>

      {showLogin && (
        <div
          className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50"
          onClick={() => setShowLogin(false)}
        >
          <div
            className="bg-white p-8 rounded-lg shadow-lg relative w-[90%] sm:w-[400px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center">
              <motion.img
                src={Logo}
                alt="MedEsi Logo"
                className="h-12 cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
              />
              <h2 className=" mt-4 text-2xl font-bold text-[#2E00FF]">Login</h2>
            </div>

            <div className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="SSN"
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E00FF] transition-all duration-300"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E00FF] transition-all duration-300"
              />
            </div>

            <button className="w-full mt-6 py-3 bg-[#2E00FF] text-white font-semibold rounded-md transition-all duration-500 ease-in-out 
  hover:scale-105 hover:shadow-lg 
  hover:bg-[#1500ffe7] ">
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;

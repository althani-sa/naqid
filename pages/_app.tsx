import { useEffect, useState } from "react";
import AppContext from "../AppContext";
import Footer from "../Components/Common/Footer";
import Header from "../Components/Common/Header";
import { GlobalProps } from "../public/Assets/Types/types";
import "../styles/globals.css";
import "@fontsource/cairo";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps }) {
  // Global Props Context
  let contextInitialValues: GlobalProps = {
    isArabic: null,
    screenWidth: null,
  };
  let [globalInfo, setGlobalInfo] = useState<GlobalProps>(contextInitialValues);
  // Fetch Global value then update the context
  useEffect(() => {
    // Fetch
    let fetchedGlobalProps: GlobalProps = {
      isArabic: null,
      screenWidth: window.innerWidth,
    };
    setGlobalInfo(fetchedGlobalProps);
  }, []);

  return (
    <AppContext.Provider value={globalInfo}>
      {globalInfo.screenWidth != null && (
        <motion.main
          className="font-cairo w-screen overflow-hidden"
          style={{ direction: "rtl" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.6,
          }}
        >
          <Header />
          <Component {...pageProps} />
          <Footer />
        </motion.main>
      )}
    </AppContext.Provider>
  );
}

export default MyApp;

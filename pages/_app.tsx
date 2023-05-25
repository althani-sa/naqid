import { useEffect, useState } from "react";
import AppContext from "../AppContext";
import Footer from "../Components/Common/Footer";
import Header from "../Components/Common/Header";
import { GlobalProps } from "../public/Assets/Types/types";
import "../styles/globals.css";
import "@fontsource/cairo";

function MyApp({ Component, pageProps }) {
  // Global Props Context
  let contextInitialValues: GlobalProps = {
    isArabic: null,
    screenWidth: 0,
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
      <main className="font-cairo" style={{ direction: "rtl" }}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </main>
    </AppContext.Provider>
  );
}

export default MyApp;

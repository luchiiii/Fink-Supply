import React, { useEffect, useState } from "react";
import Header from "./Header";
import Loading from "../Loading";
import AppRoutes from "./AppRoutes";
import Footer from "./Footer";
const Layout = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      if (window.location.pathname === "/") {
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      } else {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <main>
          <Header />
          <AppRoutes />
          <Footer />
        </main>
      )}
    </>
  );
};

export default Layout;

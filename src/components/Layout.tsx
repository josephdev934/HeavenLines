import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import SplashScreen from "./SplashScreen";

const Layout = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [shownPages, setShownPages] = useState<string[]>([]); // track pages that have shown splash

  useEffect(() => {
    if (!shownPages.includes(location.pathname)) {
      // Show splash only if this page hasn't shown it yet
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
        setShownPages(prev => [...prev, location.pathname]); // mark this page as shown
      }, 1500);

      return () => clearTimeout(timer);
    } else {
      setLoading(false); // already shown for this page
    }
  }, [location.pathname, shownPages]);

  return (
    <>
      {loading && <SplashScreen />}
      {!loading && <Outlet />}
    </>
  );
};

export default Layout;

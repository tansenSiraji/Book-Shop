import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export const ScrollToTop = () => {
  const pathName = useLocation();

  // console.log('INSIDE SCROLL TO TOP', pathName)

  useEffect(() => {
    // console.log('scroll to top')
   window.scrollTo(0, 0) 
  }, [pathName]);

  return null;
}

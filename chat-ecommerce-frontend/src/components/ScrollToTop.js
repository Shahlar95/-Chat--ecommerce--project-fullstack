import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {

    const {pahtname} = useLocation();
    useEffect(()=>{
        window.scrollTo(0,0);
    }, [pahtname])

  return null
    
  
}

export default ScrollToTop
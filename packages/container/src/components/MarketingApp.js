import { mount as mountMarketingApp } from "marketing/Marketing";
import React, { useEffect, useRef } from "react";

const MarketingApp = () => {
  const htmlElRef = useRef(null);

  useEffect(() => {
    mountMarketingApp(htmlElRef.current);
  }, []);

  return <div ref={htmlElRef}>Div</div>;
};

export default MarketingApp;

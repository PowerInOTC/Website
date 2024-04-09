import React, { useEffect } from "react";
import Script from "next/script";

const TripettoForm = () => {
  useEffect(() => {
    const initForm = () => {
      if (typeof window !== "undefined" && window.TripettoStudio) {
        window.TripettoStudio.form({
          runner: window.TripettoAutoscroll,
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiZUhBZmp1Z0owUkRhSlhVTjl6Qm9oVnlvOStodWgwZ01OdU4wc1NjYWZjND0iLCJkZWZpbml0aW9uIjoibWljZ3crai96cW44VDc5d2tTQk10NFpUSGhnZVZQbUlrbGNUMkR0WEdKND0iLCJ0eXBlIjoiY29sbGVjdCJ9.P4k3FFFkwAI-bG0RiAAXmpjX9wildEDPjYE4bxCykRQ",
          element: "tripetto-eebn3n",
          pausable: true,
          persistent: true,
        });
      }
    };

    initForm();
  }, []);

  return (
    <>
      <div id="tripetto-eebn3n"></div>

      <Script
        src="https://unpkg.com/@tripetto/runner"
        strategy="afterInteractive"
      />
      <Script
        src="https://unpkg.com/@tripetto/runner-autoscroll"
        strategy="afterInteractive"
      />
      <Script
        src="https://unpkg.com/@tripetto/studio"
        strategy="afterInteractive"
        onLoad={initForm}
      />
    </>
  );
};

export { TripettoForm };

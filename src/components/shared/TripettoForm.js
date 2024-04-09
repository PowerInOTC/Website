import React from "react";

const TripettoForm = () => {
  return (
    <>
      <div id="tripetto-eebn3n"></div>

      <script src="https://unpkg.com/@tripetto/runner"></script>
      <script src="https://unpkg.com/@tripetto/runner-autoscroll"></script>
      <script src="https://unpkg.com/@tripetto/studio"></script>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            TripettoStudio.form({
              runner: TripettoAutoscroll,
              token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiZUhBZmp1Z0owUkRhSlhVTjl6Qm9oVnlvOStodWgwZ01OdU4wc1NjYWZjND0iLCJkZWZpbml0aW9uIjoibWljZ3crai96cW44VDc5d2tTQk10NFpUSGhnZVZQbUlrbGNUMkR0WEdKND0iLCJ0eXBlIjoiY29sbGVjdCJ9.P4k3FFFkwAI-bG0RiAAXmpjX9wildEDPjYE4bxCykRQ",
              element: "tripetto-eebn3n",
              pausable: true,
              persistent: true
            });
          `,
        }}
      />
    </>
  );
};

export { TripettoForm };

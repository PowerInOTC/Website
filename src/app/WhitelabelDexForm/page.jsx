import { run } from "@tripetto/runner-autoscroll";
import { Services } from "@tripetto/studio";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import FooterUp from "../components/shared/FooterUp";

export default function WhitelabelDexForm() {
  return (
    <div>
      <Header />

      {run(
        Services.get({
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiZUhBZmp1Z0owUkRhSlhVTjl6Qm9oVnlvOStodWgwZ01OdU4wc1NjYWZjND0iLCJkZWZpbml0aW9uIjoibWljZ3crai96cW44VDc5d2tTQk10NFpUSGhnZVZQbUlrbGNUMkR0WEdKND0iLCJ0eXBlIjoiY29sbGVjdCJ9.P4k3FFFkwAI-bG0RiAAXmpjX9wildEDPjYE4bxCykRQ",
          pausable: true,
          persistent: true,
        })
      )}
      <FooterUp />
      <Footer />
    </div>
  );
}

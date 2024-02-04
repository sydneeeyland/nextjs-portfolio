import type { Metadata } from 'next';

import Logo from '../components/Logo';
import Contact from '../components/Contact';

export const metadata: Metadata = {
  title: 'Foreveryday Photography: Best Wedding Photographer',
  description:
    'Foreveryday Photography is one of the best wedding photographers in Manila, Philippines. Revel in romance with our beautiful & timeless wedding photographs.',
};

function LandingPage({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="App">
      {/* <Logo /> */}
      {children}
      {/* <Contact /> */}
    </div>
  );
}

export default LandingPage;

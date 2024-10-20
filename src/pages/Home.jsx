import React from 'react'
import { Hero } from '../components/Hero'
import { LatestCollection } from '../components/LatestCollection';
import { BestSeller } from '../components/BestSeller';
import { OurPolicy } from '../components/OurPolicy';
import { NewsletterBox } from '../components/NewsletterBox';

export const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsletterBox />
    </main>
  );
}

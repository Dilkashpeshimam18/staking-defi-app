import React from 'react';
import Hero from './Hero/Hero';
import WhyStake from './WhyStake/WhyStake';
import HowItWorks from '../HowItWork/HowItWork';
import Reviews from './Reviews/Reviews';
import FAQ from './Faq/Faq';

function HomePage() {
  return (
    <div>
      <Hero />
      <WhyStake />
      <HowItWorks />
      <Reviews />
      <FAQ />
    </div>
  );
}

export default HomePage;

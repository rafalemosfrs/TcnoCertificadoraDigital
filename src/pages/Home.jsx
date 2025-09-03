import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutCertificates from '../components/AboutCertificates';
import CertificateTypes from '../components/CertificateTypes';
import UsageExamples from '../components/UsageExamples';
import AnnualRenewal from '../components/AnnualRenewal';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutUs />
      <AboutCertificates />
      <CertificateTypes />
      <UsageExamples />
      <AnnualRenewal />
      <CallToAction />
      <Footer />
    </div>
  );
}

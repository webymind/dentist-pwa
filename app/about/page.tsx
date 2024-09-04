// app/about/page.tsx
import React from 'react';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">About Our Dental Practice</h1>
      <p className="mb-4">
        Welcome to our state-of-the-art dental practice. We are committed to providing
        the highest quality dental care in a comfortable and friendly environment.
      </p>
      <p className="mb-4">
        Our team of experienced dentists and staff use the latest technology and
        techniques to ensure that you receive the best possible treatment.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
      <p className="mb-4">
        Our mission is to improve the oral health of our community by providing
        comprehensive, personalized dental care and education to all our patients.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Our Services</h2>
      <ul className="list-disc list-inside mb-4">
        <li>General Dentistry</li>
        <li>Cosmetic Dentistry</li>
        <li>Orthodontics</li>
        <li>Pediatric Dentistry</li>
        <li>Emergency Dental Care</li>
      </ul>
    </div>
  );
}
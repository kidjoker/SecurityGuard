'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export function TestimonialsPartnersComponent() {
  const testimonials = [
    {
      name: 'John Doe',
      company: 'ABC Corporation',
      text: 'SecureGuard has been instrumental in enhancing our security infrastructure. Their professionalism and attention to detail are unmatched.',
    },
    {
      name: 'Jane Smith',
      company: 'XYZ Enterprises',
      text: "We've seen a significant reduction in security incidents since partnering with SecureGuard. Their team is responsive and always goes above and beyond.",
    },
    {
      name: 'Michael Johnson',
      company: '123 Industries',
      text: "The level of expertise SecureGuard brings to the table is impressive. They've helped us implement cutting-edge security solutions that give us peace of mind.",
    },
    {
      name: 'Emily Brown',
      company: 'Tech Innovators',
      text: "SecureGuard's proactive approach to security has been a game-changer for our organization. Their team is always one step ahead of potential threats.",
    },
    {
      name: 'David Lee',
      company: 'Global Solutions Inc.',
      text: "We appreciate SecureGuard's commitment to continuous improvement. They regularly update us on new security measures and industry best practices.",
    },
  ];

  const partners = [
    {
      name: 'stratawest_management',
      logo: 'https://blackbirdsecurity.ca/cdn/shop/files/stratawest_management_H-min_360x.png?v=1626831803',
    },
    {
      name: 'onni',
      logo: 'https://blackbirdsecurity.ca/cdn/shop/files/onni_H_360x.png?v=1613746295',
    },
    {
      name: 'Kevington',
      logo: 'https://blackbirdsecurity.ca/cdn/shop/files/Kevington_H-min_360x.png?v=1626831769',
    },
    {
      name: 'kekinow',
      logo: 'https://blackbirdsecurity.ca/cdn/shop/files/kekinow_360x.png?v=1680796030',
    },
    {
      name: 'UBC',
      logo: 'https://blackbirdsecurity.ca/cdn/shop/files/UBC_H-min_750x.png?v=1626825904',
    },
    {
      name: 'best-western-plus',
      logo: 'https://blackbirdsecurity.ca/cdn/shop/files/best-western-plus_750x.png?v=1680806960',
    },
    {
      name: 'EasyPark',
      logo: 'https://blackbirdsecurity.ca/cdn/shop/files/EasyPark-Logo-High-Resolution-removebg-preview_750x.png?v=1692991181',
    },
    {
      name: 'Sephora',
      logo: 'https://blackbirdsecurity.ca/cdn/shop/files/Sephora-Logo-Transparent_1500x.png?v=1687810291',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(1);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className='py-16 bg-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-bold text-center mb-12 text-blue-600'>
          What Our Clients Say
        </h2>
        <div className='relative mb-16 overflow-hidden'>
          <div className='flex items-center justify-center'>
            {[-1, 0, 1].map((offset) => {
              const index =
                (currentIndex + offset + testimonials.length) %
                testimonials.length;
              const testimonial = testimonials[index];
              return (
                <Card
                  key={index}
                  className={`transition-all duration-300 ${
                    offset === 0
                      ? 'w-full md:w-[600px] z-10 scale-100'
                      : 'w-3/4 md:w-[500px] opacity-50 scale-90'
                  } mx-4`}
                >
                  <CardHeader>
                    <CardTitle>{testimonial.name}</CardTitle>
                    <p className='text-sm text-gray-500'>
                      {testimonial.company}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className='italic'>{testimonial.text}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className='flex justify-center mt-4'>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-2 h-2 rounded-full mx-1 ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <h2 className='text-3xl font-bold text-center mb-12 text-blue-600'>
          Our Trusted Partners
        </h2>
        <div className='relative overflow-hidden bg-white py-10'>
          <div className='flex animate-scroll'>
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className='flex-shrink-0 mx-8'
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={150}
                  height={75}
                  className='grayscale hover:grayscale-0 transition-all duration-300'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

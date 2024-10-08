'use client';

import { ChevronRight, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';

const images = [
  {
    src: '/carousel-1.jpg',
    alt: 'Security personnel in action',
  },
  {
    src: '/carousel-2.jpg',
    alt: 'Secure facility entrance',
  },
];

export function HeroSectionComponent() {
  return (
    <section className='relative h-[100vh] md:block hidden'>
      <div className="hidden md:block">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          className='h-full'
          renderArrowPrev={() => null}
          renderArrowNext={() => null}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className='h-full'
            >
              <Image
                src={image.src}
                alt={image.alt}
                className='w-full h-full object-cover'
                style={{ maxHeight: '100vh' }}
                width={1920}
                height={1080}
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div
        id='hero-section'
        className='absolute inset-0 flex items-center justify-center'
      >
        <div className='container mx-auto'>
          <div className='max-w-3xl mx-auto text-center'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white'>
              <span>Protecting Your Assets,</span>
              <span className='block text-blue-400'>Always by Your Side</span>
            </h1>
            <p className='mt-4 text-xl text-gray-300'>
              We provide comprehensive security solutions tailored to your
              needs. From personnel deployment to cutting-edge surveillance
              systems, we&apos;ve got you covered.
            </p>
            <div className='mt-8 flex flex-col sm:flex-row justify-center gap-4'>
              <Button
                size='lg'
                className='w-full sm:w-auto bg-blue-600 hover:bg-blue-700'
              >
                Learn More
                <ChevronRight className='ml-2 h-4 w-4' />
              </Button>
              <Button
                size='lg'
                variant='outline'
                className='w-full sm:w-auto text-white border-white hover:bg-white hover:text-gray-900'
              >
                Contact Us Now
                <Shield className='ml-2 h-4 w-4' />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

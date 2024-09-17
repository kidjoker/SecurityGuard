import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HeroSectionComponent } from '@/components/hero-section';
import { NavBarComponent } from '@/components/nav-bar';
import { CoreServicesComponent } from '@/components/core-services';
import { TestimonialsPartnersComponent } from '@/components/testimonials-partners';
import { FooterComponent } from '@/components/footer';

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col'>
      <NavBarComponent/>
      <main className='flex-grow'>
        <HeroSectionComponent />
        <CoreServicesComponent />
        <TestimonialsPartnersComponent />
      </main>
      <FooterComponent />
    </div>
  );
}

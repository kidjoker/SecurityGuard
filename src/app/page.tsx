import { HeroSectionComponent } from '@/components/hero-section';
import { CoreServicesComponent } from '@/components/core-services';
import { TestimonialsPartnersComponent } from '@/components/testimonials-partners';

export default function Home() {
  return (
    <main className='flex-grow'>
      <HeroSectionComponent />
      <CoreServicesComponent />
      <TestimonialsPartnersComponent />
    </main>
  );
}

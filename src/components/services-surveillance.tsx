'use client';

import Image from 'next/image';
import { Camera, Shield, Eye, Cpu, BarChart, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export function ServicesSurveillanceComponent() {
  const services = [
    {
      title: 'CCTV Systems',
      description:
        'State-of-the-art closed-circuit television systems for comprehensive visual monitoring.',
      icon: Camera,
    },
    {
      title: 'Access Control',
      description:
        'Advanced access control systems to manage and monitor entry points.',
      icon: Shield,
    },
    {
      title: 'Remote Monitoring',
      description:
        '24/7 remote surveillance services for real-time threat detection and response.',
      icon: Eye,
    },
    {
      title: 'AI-Powered Analytics',
      description:
        'Cutting-edge artificial intelligence for predictive threat analysis and automated alerts.',
      icon: Cpu,
    },
  ];

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const startAnimation = () => {
      setAnimate(false);
      setTimeout(() => setAnimate(true), 2000);
    };

    startAnimation(); // Initial animation

    const intervalId = setInterval(startAnimation, 10000); // Repeat every 10 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  const performanceMetrics = [
    { title: 'Incident Detection Rate', value: 95, color: 'text-blue-600' },
    { title: 'System Uptime', value: 99.9, color: 'text-green-500' },
    { title: 'Customer Satisfaction', value: 98, color: 'text-yellow-400' },
  ];

  return (
    <div className='min-h-screen bg-gray-50'>
      <header className='bg-gray-900 text-white'>
        <div className='container mx-auto px-4 py-16 sm:px-6 lg:px-8'>
          <h1 className='text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-blue-400'>
            Surveillance Services
          </h1>
          <p className='mt-6 max-w-3xl text-xl'>
            Cutting-edge surveillance solutions to protect your assets and
            ensure comprehensive security coverage.
          </p>
        </div>
      </header>

      <main className='container mx-auto px-4 py-16 sm:px-6 lg:px-8'>
        <section className='mb-20'>
          <h2 className='text-3xl font-bold mb-8 text-blue-400'>
            Our Surveillance Services
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {services.map((service, index) => (
              <div
                key={index}
                className='bg-white p-6 rounded-lg shadow-md'
              >
                <service.icon className='h-12 w-12 text-blue-600 mb-4' />
                <h3 className='text-xl font-semibold mb-2 text-blue-400'>
                  {service.title}
                </h3>
                <p className='text-gray-600'>{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className='mb-20'>
          <div className='bg-blue-600 text-white rounded-lg overflow-hidden'>
            <div className='md:flex'>
              <div className='md:flex-1 p-8'>
                <h2 className='text-3xl font-bold mb-4'>
                  Why Choose Our Surveillance Solutions?
                </h2>
                <ul className='space-y-2'>
                  <li className='flex items-center'>
                    <ChevronRight className='h-5 w-5 mr-2' />
                    Customized solutions for your specific needs
                  </li>
                  <li className='flex items-center'>
                    <ChevronRight className='h-5 w-5 mr-2' />
                    Integration with existing security systems
                  </li>
                  <li className='flex items-center'>
                    <ChevronRight className='h-5 w-5 mr-2' />
                    24/7 technical support and maintenance
                  </li>
                  <li className='flex items-center'>
                    <ChevronRight className='h-5 w-5 mr-2' />
                    Regular software updates and system upgrades
                  </li>
                </ul>
                <Button
                  size='lg'
                  className='mt-6 bg-white text-blue-600 hover:bg-gray-100'
                >
                  Get a Free Consultation
                </Button>
              </div>
              <div className='md:flex-1 relative h-64 md:h-auto'>
                <Image
                  src='/consultation.jpg?height=400&width=600'
                  alt='Advanced surveillance system in action'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            </div>
          </div>
        </section>

        <section className='mb-20'>
          <h2 className='text-3xl font-bold mb-8 text-blue-400'>
            Our Surveillance Process
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <div className='text-3xl font-bold text-blue-600 mb-4'>01</div>
              <h3 className='text-xl font-semibold mb-2 text-blue-400'>
                Assessment
              </h3>
              <p className='text-gray-600'>
                We conduct a thorough assessment of your property and security
                needs to design the optimal surveillance solution.
              </p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <div className='text-3xl font-bold text-blue-600 mb-4'>02</div>
              <h3 className='text-xl font-semibold mb-2 text-blue-400'>
                Implementation
              </h3>
              <p className='text-gray-600'>
                Our expert technicians install and configure your customized
                surveillance system with minimal disruption to your operations.
              </p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <div className='text-3xl font-bold text-blue-600 mb-4'>03</div>
              <h3 className='text-xl font-semibold mb-2 text-blue-400'>
                Monitoring & Maintenance
              </h3>
              <p className='text-gray-600'>
                We provide ongoing monitoring, regular maintenance, and prompt
                support to ensure your system operates at peak performance.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className='text-3xl font-bold mb-8 text-blue-400'>
            Surveillance System Performance
          </h2>
          <div className='bg-white p-8 rounded-lg shadow-md'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
              {performanceMetrics.map((metric, index) => (
                <div
                  key={index}
                  className='flex flex-col items-center'
                >
                  <div className='relative w-64 h-64'>
                    <svg
                      className='w-full h-full'
                      viewBox='0 0 100 100'
                    >
                      <circle
                        className='text-gray-200 stroke-current'
                        strokeWidth='8'
                        cx='50'
                        cy='50'
                        r='45'
                        fill='transparent'
                      ></circle>
                      <circle
                        className={`${metric.color} stroke-current`}
                        strokeWidth='8'
                        strokeLinecap='round'
                        cx='50'
                        cy='50'
                        r='45'
                        fill='transparent'
                        strokeDasharray='282.7'
                        strokeDashoffset={
                          animate
                            ? `${282.7 - (metric.value / 100) * 282.7}`
                            : '282.7'
                        }
                        style={{
                          transition: 'stroke-dashoffset 2s ease-in-out',
                        }}
                      ></circle>
                    </svg>
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <span className={`text-5xl font-bold ${metric.color}`}>
                        {animate ? metric.value : 0}%
                      </span>
                    </div>
                  </div>
                  <h3 className='mt-6 text-2xl font-semibold text-center text-gray-600'>
                    {metric.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

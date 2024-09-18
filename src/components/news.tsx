'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Calendar, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const newsArticles = [
  {
    id: 1,
    title: 'SecureGuard Launches New AI-Powered Surveillance System',
    excerpt:
      'Our latest innovation in security technology combines artificial intelligence with high-resolution cameras for unparalleled threat detection.',
    date: '2023-06-15',
    image: '/aipowered.png?height=200&width=300',
    category: 'Technology',
  },
  {
    id: 2,
    title: 'SecureGuard Expands Operations to Southeast Asia',
    excerpt:
      "We're excited to announce our expansion into the Southeast Asian market, bringing our world-class security solutions to new territories.",
    date: '2023-05-22',
    image: '/seasia.png?height=200&width=300',
    category: 'Company News',
  },
  {
    id: 3,
    title:
      'The Rising Importance of Cybersecurity in Physical Security Systems',
    excerpt:
      "In this article, we explore the intersection of cybersecurity and physical security, and why it's crucial for modern businesses.",
    date: '2023-04-10',
    image: '/cybersecurity.png?height=200&width=300',
    category: 'Industry Insights',
  },
  {
    id: 4,
    title: "SecureGuard Wins 'Security Company of the Year' Award",
    excerpt:
      "We're honored to be recognized as the Security Company of the Year at the Annual Security Excellence Awards.",
    date: '2023-03-05',
    image: '/securitycompany.png?height=200&width=300',
    category: 'Awards',
  },
  {
    id: 5,
    title: '5 Essential Security Measures for Retail Businesses',
    excerpt:
      'Discover the key security strategies that every retail business should implement to protect their assets and customers.',
    date: '2023-02-18',
    image: '/retailsecurity.png?height=200&width=300',
    category: 'Tips & Advice',
  },
  {
    id: 6,
    title: 'SecureGuard Partners with Leading Smart Home Manufacturer',
    excerpt:
      'Our new partnership aims to integrate professional-grade security solutions with smart home technology for comprehensive home protection.',
    date: '2023-01-30',
    image: '/manufacturer.png?height=200&width=300',
    category: 'Partnerships',
  },
];

export function NewsComponent() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredArticles = newsArticles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='min-h-screen bg-gray-50'>
      <header className='bg-gray-900 text-white'>
        <div className='container mx-auto px-4 py-16 sm:px-6 lg:px-8'>
          <h1 className='text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-blue-600'>
            News & Insights
          </h1>
          <p className='mt-6 max-w-3xl text-xl'>
            Stay updated with the latest news, industry insights, and company
            announcements from SecureGuard.
          </p>
        </div>
      </header>

      <main className='container mx-auto px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mb-8'>
          <Input
            type='text'
            placeholder='Search news articles...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='max-w-md'
          />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className='bg-white rounded-lg shadow-md overflow-hidden'
            >
              <div className='relative h-48'>
                <Image
                  src={article.image}
                  alt={article.title}
                  layout='fill'
                  objectFit='cover'
                />
              </div>
              <div className='p-6'>
                <div className='flex items-center justify-between mb-2'>
                  <span className='text-sm text-blue-600 font-semibold'>
                    {article.category}
                  </span>
                  <div className='flex items-center text-sm text-gray-500'>
                    <Calendar className='h-4 w-4 mr-1' />
                    {article.date}
                  </div>
                </div>
                <h2 className='text-xl font-bold mb-2 text-blue-600'>
                  {article.title}
                </h2>
                <p className='text-gray-600 mb-4 h-20 overflow-hidden'>
                  {article.excerpt}
                </p>
                <Button className='w-full bg-blue-600 hover:bg-blue-700 text-white'>
                  Read More
                  <ChevronRight className='ml-2 h-4 w-4' />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-12 text-center'>
          <Button
            size='lg'
            className='bg-blue-600 hover:bg-blue-700 text-white'
          >
            Load More Articles
          </Button>
        </div>
      </main>
    </div>
  );
}

'use client';

import Image from 'next/image';
import { DeepSeek, Meta, Mistral, Moonshot, OpenAI } from '@lobehub/icons';

interface Brand {
  id: string;
  name: string;
  logo: React.ReactNode; 
}

const brands: Brand[] = [
  {
    id: 'brand2',   
    name: 'BullMQ',
    logo: <Meta size={60}/> 
  },
  {
    id: 'brand3',   
    name: 'Moonshoot',
    logo: <Moonshot size={60} />, 
  },
  {
    id: 'brand4',   
    name: 'Mistral',
    logo: <Mistral size={60} />, 
  },
  {
    id: 'brand5',   
    name: 'DeepSeek',
    logo: <DeepSeek size={60} />, 
  },
  {
    id: 'brand6',   
    name: 'OpenAI',
    logo: <OpenAI size={60} />, 
  },
];

export default function PoweredBy() {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <p className="text-center text-lg mb-8 md:mb-12">
          Trusted By
        </p>

        <div className="flex items-center justify-center gap-12 md:gap-20 flex-wrap">
          {brands.map((brand) => {
            return (
              <div
                key={brand.id}
                className="flex items-center justify-center min-h-[48px]"
              >
                <div className="flex items-center justify-center">
                  {brand.logo}
                </div>
              </div>
            );
          })}
        <span className='text-sm'>And many more</span>  
        </div>
      </div>
    </section>
  );
}

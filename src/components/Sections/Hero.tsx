import {ChevronDownIcon} from '@heroicons/react/24/outline';
import Image from 'next/image';
import {FC, memo} from 'react';

import {heroData, SectionId} from '../../data/data';
import Section from '../Layout/Section';


interface HeroProps {
  language: 'en' |'es';
}

const Hero: FC<HeroProps> = memo(({language}) => {
  const imageSrc = heroData.imageSrc[language];

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex h-screen w-full items-center justify-center">
        <Image
          alt="Hero Section"
          width={800}
          height={600}
          className="object-contain h-1/3 w-1/3 sm:h-2/4 sm:w-2/4"
          placeholder="blur"
          priority
          src={imageSrc}
        />

        <div className="absolute inset-x-0 bottom-6 flex justify-center">
          <a
            className="rounded-full bg-white p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
            href={`/#${SectionId.About}`}>
            <ChevronDownIcon className="h-5 w-5 bg-transparent sm:h-6 sm:w-6" />
          </a>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;

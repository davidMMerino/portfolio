import {FC, memo} from 'react';
import Image from 'next/image';
import {ChevronDownIcon} from '@heroicons/react/24/outline';
import {heroData, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import {useLanguage} from '../../context/LanguageContext';

const Hero: FC = memo(() => {
  const {language} = useLanguage();
  const imageSrc = heroData.imageSrc[language];

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex h-screen w-full items-center justify-center">
        <Image
          alt="Hero Section"
          width={800}
          height={600}
          className="object-contain h-3/4 w-3/4 sm:h-1/2 sm:w-1/2"
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

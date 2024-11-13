import { useRouter } from 'next/router';
import Image from 'next/image';
import { FC } from 'react';

import spanishFlag from './/images/spanish.png';
import englishFlag from './/images/english.png';

const LanguageSelector: FC = () => {
  const router = useRouter();
  const { locale, asPath } = router;

  const changeLanguage = (lng: string) => {
    const hash = window.location.hash;
    router.push(`${asPath.split('#')[0]}${hash}`, undefined, { locale: lng });
  };

  const alternativeLanguage = locale === 'en' ? 'es' : 'en';
  const flagImage = alternativeLanguage === 'en' ? englishFlag : spanishFlag;
  const altText = alternativeLanguage === 'en' ? 'Switch to English' : 'Cambiar a Español';

  return (
    <div className="flex gap-2">
      <button
        onClick={() => changeLanguage(alternativeLanguage)}
        className="p-2 hover:opacity-100 focus:outline-none"
        aria-label={altText}
      >
        <Image 
          src={flagImage} 
          alt={altText} 
          width={32} 
          height={32} 
          className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
        />
      </button>
    </div>
  );
};

export default LanguageSelector;

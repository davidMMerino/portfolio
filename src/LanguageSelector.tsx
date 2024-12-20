// components/LanguageSelector.tsx
import Image from 'next/image';
import spanishFlag from './images/spanish.png';
import englishFlag from './images/english.png';
import {useLanguage} from './context/LanguageContext';

interface LanguageSelectorProps {
  visible: boolean;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({visible}) => {
  if (!visible) return null;

  const {language, setLanguage} = useLanguage();
  const alternativeLanguage = language === 'en' ? 'es' : 'en';
  const flagImage = alternativeLanguage === 'en' ? englishFlag : spanishFlag;
  const altText = alternativeLanguage === 'en' ? 'Switch to English' : 'Cambiar a Español';

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setLanguage(alternativeLanguage)}
        className="p-2 hover:opacity-100 focus:outline-none"
        aria-label={altText}>
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

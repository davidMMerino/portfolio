import dynamic from 'next/dynamic';
import {FC, memo, useState} from 'react';

import Page from '../components/Layout/Page';
import About from '../components/Sections/About';
import Contact from '../components/Sections/Contact';
import Footer from '../components/Sections/Footer';
import Hero from '../components/Sections/Hero';
import Portfolio from '../components/Sections/Portfolio';
import Resume from '../components/Sections/Resume';
import LanguageSelector from '../LanguageSelector'
import {homePageMeta} from '../data/data';

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

const Home: FC = memo(() => {
  const {title, description} = homePageMeta;
  const [language, setLanguage] = useState<'en' | 'es'>('en');
  
  const handleLanguageChange = (lng: 'en' | 'es') => {
    setLanguage(lng);
  };

  return (
    <Page description={description} title={title}>
      <Header />
      <LanguageSelector language = {language} onChangeLanguage = {handleLanguageChange} />
      <Hero language = {language} />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
    </Page>
  );
});

export default Home;

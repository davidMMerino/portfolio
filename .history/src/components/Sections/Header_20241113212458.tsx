import { Dialog, Transition } from '@headlessui/react';
import { Bars3BottomRightIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Link from 'next/link';
import { FC, Fragment, memo, useCallback, useEffect, useState } from 'react';
import LanguageSelector from '../../LanguageSelector';
import { SectionId } from '../../data/data';
import { useNavObserver } from '../../hooks/useNavObserver'; // Asegúrate de que la ruta sea correcta

export const headerID = 'headerNav';

const Header: FC = memo(() => {
  const [currentSection, setCurrentSection] = useState<SectionId | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [texts, setTexts] = useState({ about: '', resume: '', portfolio: '', contact: '' });
  const [language, setLanguage] = useState<'en' | 'es'>('en'); // Idioma predeterminado

  const navSections = [
    { id: SectionId.About, label: texts.about },
    { id: SectionId.Resume, label: texts.resume },
    { id: SectionId.Portfolio, label: texts.portfolio },
    { id: SectionId.Contact, label: texts.contact },
  ];

  // Función para cargar textos según el idioma seleccionado
  const loadTexts = async (lng: 'en' | 'es') => {
    try {
      const response = await fetch(`/locales/${lng}.json`);
      const data = await response.json();
      setTexts(data);
    } catch (error) {
      console.error('Error loading texts:', error);
    }
  };

  // Hook para cargar textos cada vez que cambia el idioma
  useEffect(() => {
    loadTexts(language);
  }, [language]);

  // Hook personalizado para observar las secciones en el viewport y actualizar `currentSection`
  useNavObserver(
    navSections.map(section => `#${section.id}`).join(','),
    setCurrentSection
  );

  const toggleOpen = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  return (
    <>
      <MobileNav
        currentSection={currentSection}
        navSections={navSections}
        isOpen={isOpen}
        toggleOpen={toggleOpen}
        setLanguage={setLanguage}
        language={language}
      />
      <DesktopNav currentSection={currentSection} navSections={navSections} />
      {!isOpen && (
        <div className="fixed right-4 top-1 z-50 sm:block hidden">
          {/* Asegúrate de pasar el idioma actual correctamente */}
          <LanguageSelector onChangeLanguage={setLanguage} language={language} />
        </div>
      )}
    </>
  );
});

const DesktopNav: FC<{ navSections: { id: SectionId; label: string }[]; currentSection: SectionId | null }> = memo(
  ({ navSections, currentSection }) => {
    const baseClass =
      '-m-1.5 p-1.5 rounded-md font-bold first-letter:uppercase hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-800 sm:hover:text-violet-800 text-neutral-100';
    const activeClass = classNames(baseClass, 'text-violet-800');
    const inactiveClass = classNames(baseClass, 'text-neutral-100');

    return (
      <header className="fixed top-0 z-50 hidden w-full bg-neutral-900/50 p-4 backdrop-blur sm:block" id={headerID}>
        <nav className="flex justify-center gap-x-8">
          {navSections.map(({ id, label }) => (
            <NavItem
              activeClass={activeClass}
              current={id === currentSection}
              inactiveClass={inactiveClass}
              key={id}
              section={id}
              label={label}
            />
          ))}
        </nav>
      </header>
    );
  },
);

const MobileNav: FC<{
  navSections: { id: SectionId; label: string }[]; 
  currentSection: SectionId | null;
  isOpen: boolean;
  toggleOpen: () => void;
  setLanguage: (lng: 'en' | 'es') => void;
}> = memo(({ navSections, currentSection, isOpen, toggleOpen, setLanguage }) => {
  const baseClass =
    'p-2 rounded-md first-letter:uppercase transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-800';
  const activeClass = classNames(baseClass, 'bg-neutral-900 text-white font-bold');
  const inactiveClass = classNames(baseClass, 'text-neutral-200 font-medium');

  return (
    <>
      <button
        aria-label="Menu Button"
        className="fixed right-2 top-2 z-40 rounded-md bg-violet-800 p-2 ring-offset-gray-800/60 hover:bg-violet-800 focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-violet-800 focus-visible:ring-offset-2 sm:hidden"
        onClick={toggleOpen}>
        <Bars3BottomRightIcon className="h-8 w-8 text-white" />
        <span className="sr-only">Open sidebar</span>
      </button>
      <Transition.Root as={Fragment} show={isOpen}>
        <Dialog as="div" className="fixed inset-0 z-40 flex sm:hidden" onClose={toggleOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Dialog.Overlay className="fixed inset-0 bg-stone-900 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full">
            <div className="relative w-4/5 bg-stone-800 flex flex-col justify-between h-full">
              <nav className="mt-5 flex flex-col gap-y-2 px-2">
                {navSections.map(({ id, label }) => (
                  <NavItem
                    activeClass={activeClass}
                    current={id === currentSection}
                    inactiveClass={inactiveClass}
                    key={id}
                    section={id}
                    label={label}
                    onClick={toggleOpen}
                  />
                ))}
              </nav>
              <div className="mt-auto p-4 border-t border-gray-700">
                {/* También pasamos el idioma correcto */}
                <LanguageSelector onChangeLanguage={setLanguage} language={language} />
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </>
  );
});

const NavItem: FC<{
  section: SectionId;
  label: string;
  current: boolean;
  activeClass: string;
  inactiveClass: string;
  onClick?: () => void;
}> = memo(({ section, label, current, inactiveClass, activeClass, onClick }) => {
  return (
    <Link
      className={classNames(current ? activeClass : inactiveClass)}
      href={`/#${section}`}
      key={section}
      onClick={onClick}>
      {label}
    </Link>
  );
});

Header.displayName = 'Header';
export default Header;

import {
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import BehanceIcon from '../components/Icon/BehanceIcon';
import heroImageEnglish from '../images/heroImageEn.png';
import heroImageSpanish from '../images/heroImageEs.png';
import creacionJoven from '../images/portfolio/creacionJoven.jpg';
import cuentoInteractivo from '../images/portfolio/cuentoInteractivo.jpg';
import ilustraciones11 from '../images/portfolio/ilustraciones/ilustraciones11.jpeg';
import ilustraciones12 from '../images/portfolio/ilustraciones/ilustraciones12.jpg';
import ilustraciones13 from '../images/portfolio/ilustraciones/ilustraciones13.jpeg';
import ilustraciones14 from '../images/portfolio/ilustraciones/ilustraciones14.jpeg';
import ilustraciones15 from '../images/portfolio/ilustraciones/ilustraciones15.jpeg';
import pulp1 from '../images/portfolio/pulp/pulp1.jpg';
import pulp2 from '../images/portfolio/pulp/pulp2.jpg';
import pulp3 from '../images/portfolio/pulp/pulp3.jpg';
import pulp4 from '../images/portfolio/pulp/pulp4.jpg';
import pulp5 from '../images/portfolio/pulp/pulp5.jpg';
import damian1 from '../images/portfolio/damian/damian1.jpeg';
import damian2 from '../images/portfolio/damian/damian2.jpg';
import damian3 from '../images/portfolio/damian/damian3.jpg';
import damian4 from '../images/portfolio/damian/damian4.jpg';
import damian5 from '../images/portfolio/damian/damian5.jpg';
import damian6 from '../images/portfolio/damian/damian6.jpg';
import damian7 from '../images/portfolio/damian/damian7.jpeg';
import damian8 from '../images/portfolio/damian/damian8.jpg';
import damian9 from '../images/portfolio/damian/damian9.jpeg';
import caperucita1 from '../images/portfolio/caperucita/caperucita1.jpeg';
import caperucita2 from '../images/portfolio/caperucita/caperucita2.jpeg';
import caperucita3 from '../images/portfolio/caperucita/caperucita3.jpeg';
import caperucita4 from '../images/portfolio/caperucita/caperucita4.jpeg';
import caperucita5 from '../images/portfolio/caperucita/caperucita5.jpeg';
import saul1 from '../images/portfolio/betterCallSaul/saul1.jpg';
import saul2 from '../images/portfolio/betterCallSaul/saul2.jpg';
import saul3 from '../images/portfolio/betterCallSaul/saul3.jpg';
import encargo1 from '../images/portfolio/encargos/encargo1.jpg';
import encargo2 from '../images/portfolio/encargos/encargo2.jpg';
import encargo3 from '../images/portfolio/encargos/encargo3.jpg';
import encargo4 from '../images/portfolio/encargos/encargo4.jpg';
import encargo5 from '../images/portfolio/encargos/encargo5.jpg';
import ilustraciones21 from '../images/portfolio/ilustraciones/ilustraciones21.jpg';
import ilustraciones22 from '../images/portfolio/ilustraciones/ilustraciones22.jpg';
import ilustraciones23 from '../images/portfolio/ilustraciones/ilustraciones23.jpg';
import ilustraciones24 from '../images/portfolio/ilustraciones/ilustraciones24.jpg';
import ilustraciones25 from '../images/portfolio/ilustraciones/ilustraciones25.jpg';
import profileImage from '../images/profileImage.png'

import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'HSSullivan',
  description: "HSSullivan's page",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: {
    en: heroImageEnglish,
    es: heroImageSpanish,
  },
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
  ],
};

/**
 * About section
 */
export const aboutData = (translations: any): About  => ({

  profileImageSrc: profileImage,
  description: translations["data.about.description"],
  aboutItems: [
    {label: translations["data.about.aboutItems.location"], text: translations["data.about.aboutItems.locationTitle"], Icon: MapIcon},
    {label: translations["data.about.aboutItems.age"], text: translations["data.about.aboutItems.ageTitle"], Icon: CalendarIcon},
    {label: translations["data.about.aboutItems.interests"], text: translations["data.about.aboutItems.interestsTitle"], Icon: SparklesIcon},
    {label: translations["data.about.aboutItems.languages"], text: translations["data.about.aboutItems.languagesTitle"], Icon: BuildingOffice2Icon},
  ],
});

/**
 * Skills section
 */
export const getSkills = (translations: any): SkillGroup[] => [
  {
    name: translations["resume.skills.groups.1.name"],
    skills: [
      {
        name: 'Adobe Illustrator',
        level: 8,
      },
      {
        name: 'Adobe Photoshop',
        level: 7,
      },
      {
        name: 'Adobe InDesign',
        level: 7,
      },
      {
        name: 'Adobe After Effects',
        level: 6,
      },
      {
        name: 'Adobe Premiere',
        level: 6,
      },
    ],
  },
  {
    name: translations["resume.skills.groups.2.name"],
    skills: [
      {
        name: 'Javascript',
        level: 6,
      },
      {
        name: 'React',
        level: 5,
      },
      {
        name: 'Python',
        level: 5,
      },
    ],
  },
];

/**
 * Portfolio section
 */



export const getPortfolioItems = (translations: any): PortfolioItem[] => [
  {
    title: translations["portfolio.title1"],
    description: translations["portfolio.description1"],
    deepDescription: translations["portfolio.deepDescription1"],
    image: creacionJoven,
    images: [creacionJoven],
  },
  {
    title: translations["portfolio.title2"],
    description: translations["portfolio.description2"],
    deepDescription: translations["portfolio.deepDescription2"],
    image: caperucita1,
    images: [caperucita1, caperucita2, caperucita3, caperucita4, caperucita5],
  },
  {
    title: translations["portfolio.title3"],
    description: translations["portfolio.description3"],
    deepDescription: translations["portfolio.deepDescription3"],
    image: ilustraciones11, 
    images: [ilustraciones11, ilustraciones12, ilustraciones13, ilustraciones14, ilustraciones15],
  },
  {
    title: translations["portfolio.title4"],
    description: translations["portfolio.description4"],
    deepDescription: translations["portfolio.deepDescription4"],
    image: cuentoInteractivo,
    images: [cuentoInteractivo],
  },
  {
    title: translations["portfolio.title5"],
    description: translations["portfolio.description5"],
    deepDescription: translations["portfolio.deepDescription5"],
    image: pulp1, 
    images: [pulp1, pulp2, pulp3, pulp4, pulp5],
  },
  {
    title: translations["portfolio.title6"],
    description: translations["portfolio.description6"],
    deepDescription: translations["portfolio.deepDescription6"],
    image: damian1,
    images: [damian1, damian2, damian3, damian4, damian5, damian6, damian7, damian8, damian9]
  },
  {
    title: translations["portfolio.title7"],
    description: translations["portfolio.description"],
    deepDescription: translations["portfolio.deepDescription7"],
    image: saul1,
    images: [saul1, saul2, saul3],
  },
  {
    title: translations["portfolio.title8"],
    description: translations["portfolio.description8"],
    deepDescription: translations["portfolio.deepDescription8"],
    image: encargo1, 
    images: [encargo1, encargo2, encargo3, encargo4, encargo5],
  },
  {
    title: translations["portfolio.title9"],
    description: translations["portfolio.description9"],
    deepDescription: translations["portfolio.deepDescription9"],
    image: ilustraciones21, 
    images: [ilustraciones21, ilustraciones22, ilustraciones23, ilustraciones24, ilustraciones25],
  },     
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const getEducation = (translations: any): TimelineItem[] => [
  {
    date: translations["resume.education.items.1.date"],
    location: translations["resume.education.items.1.location"],
    title: translations["resume.education.items.1.title"],
    content: translations["resume.education.items.1.content"],
  },
  {
    date: translations["resume.education.items.2.date"],
    location: translations["resume.education.items.2.location"],
    title: translations["resume.education.items.2.title"],
    content: translations["resume.education.items.2.content"],},
  {
    date: translations["resume.education.items.3.date"],
    location: translations["resume.education.items.3.location"],
    title: translations["resume.education.items.3.title"],
    content: translations["resume.education.items.3.content"],},
];

export const getExperience = (translations: any): TimelineItem[] => [
  {
    date: translations["resume.experience.items.1.date"],
    location: translations["resume.experience.items.1.location"],
    title: translations["resume.experience.items.1.title"],
    content: translations["resume.experience.items.1.content"],
  },
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'If you are interested in discussing potential collaborations or opportunities, please feel free to contact me.',
  items: [
    {
      type: ContactType.Email,
      text: 'hssullivan27@gmail.com',
      href: 'mailto:hssullivan27@gmail.com',
    },
    {
      type: ContactType.Instagram,
      text: '@h.s.sullivan',
      href: 'https://www.instagram.com/h.s.sullivan/',
    },
    {
      type: ContactType.Github,
      text: 'davidMMerino',
      href: 'https://github.com/davidMMerino',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Behance', Icon: BehanceIcon, href: 'https://www.behance.net/6b893012'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/davidMMerino'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/h.s.sullivan/'},
];

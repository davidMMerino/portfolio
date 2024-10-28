import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import BehanceIcon from '../components/Icon/BehanceIcon';
import heroImage from '../images/header-background.webp';
import creacionJoven from '../images/portfolio/creacion-joven.jpg';
import cuentoInteractivo from '../images/portfolio/cuento-1.jpg';
import cuentoCaperucita from '../images/portfolio/cuento-2.jpeg';
import ilustracionesUno from '../images/portfolio/dibujos-1.jpeg';
import pulp from '../images/portfolio/pulp.jpg';
import damian from '../images/portfolio/damian.jpg';
import revista from '../images/portfolio/revista.jpeg';
import encargos from '../images/portfolio/encargos.jpg';
import ilustracionesDos from '../images/portfolio/dibujos-2.jpg';
import profilepic from '../images/profilepic.jpg';
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
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
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
  imageSrc: heroImage,
  name: `I'm Tim Baker.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Victoria based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Instant Domains</strong> helping build a modern, mobile-first, domain
        registrar and site builder.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">Muay Thai</strong>,
        plucking my <strong className="text-stone-100">banjo</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Vancouver Island</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a graphic designer with freelance experience and a background in programming. I am passionate about creating innovative and functional visual solutions.`,
  aboutItems: [
    {label: 'Location', text: 'Burgos, Spain', Icon: MapIcon},
    {label: 'Age', text: '28', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Spanish', Icon: FlagIcon},
    {label: 'Interests', text: 'Movies, Art & Books', Icon: SparklesIcon},
    {label: 'Study', text: 'Art and Design School, Soria', Icon: AcademicCapIcon},
    {label: 'Languages', text: 'Spanish & English', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Graphic Design',
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
    name: 'Programmer',
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
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Cartel festival Creación Joven',
    description: 'Give a short description of your project here.',
    image: creacionJoven,
    images: [creacionJoven],
  },
  {
    title: 'Cuento Interactivo',
    description: 'Give a short description of your project here.',
    image: cuentoInteractivo,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    image: cuentoCaperucita,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    image: ilustracionesUno,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    image: pulp,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    image: damian,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    image: revista,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    image: encargos,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    image: ilustracionesDos,
  },     
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Ongoing',
    location: 'Art & Design School, Soria',
    title: "Bachelor's Degree in Graphic Design",
    content: <p>I have learned to use image and video editing software such as Adobe Photoshop, Illustrator, and Premiere. Additionally, I acquired knowledge in typography, color theory, visual composition, UX/UI design, brand identity creation, editorial project development, and 2D animation. I have also worked on the production of printed and digital materials and developed skills to manage design projects from concept to completion.</p>,
  },
  {
    date: '2024',
    location: 'Samsung & EOI',
    title: 'Programming, Algorithms, and Data Structures in Python for Artificial Intelligence',
    content: <p>I developed a strong foundation in programming with Python, including creating efficient algorithms and data structures. I also gained skills in analyzing complex data using algorithmic logic and learned how to plan programs through pseudocode and flowcharts to optimize processes.</p>,
  },
  {
    date: '2024',
    location: 'Samsung & EOI',
    title: 'Artificial Intelligence',
    content: <p>I gained a solid understanding of the fundamentals of data science and machine learning. I studied linear algebra, probability, and statistics applied to AI. I learned techniques for processing textual data and how to build deep neural networks using libraries such as TensorFlow and Keras to implement advanced artificial intelligence models.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2020, Present',
    location: '',
    title: 'Freelance Designer & Illustrator',
    content: (
      <p>
        I have worked on a variety of projects for both individuals and companies, handling commissions such as illustrations for portraits, magazines, and posters. My experience includes illustration and layout for children's books and interactive novels, as well as creating visual assets for editorial projects. Throughout my freelance career, I have managed end-to-end design processes, ensuring high-quality results tailored to client needs.
      </p>
    ),
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

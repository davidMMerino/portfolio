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
import heroImage from '../images/heroImage.png';
import creacionJoven from '../images/portfolio/creacionJoven.jpg';
import cuentoInteractivo from '../images/portfolio/cuentoInteractivo.jpg';
import ilustraciones11 from '../images/portfolio/ilustraciones/ilustraciones11.jpeg';
import ilustraciones12 from '../images/portfolio/ilustraciones/ilustraciones12.jpg';
import ilustraciones13 from '../images/portfolio/ilustraciones/ilustraciones13.jpeg';
import ilustraciones14 from '../images/portfolio/ilustraciones/ilustraciones14.jpeg';
import ilustraciones15 from '../images/portfolio/ilustraciones/ilustraciones15.jpg';
import pulp1 from '../images/portfolio/pulp/pulp1.jpg';
import pulp2 from '../images/portfolio/pulp/pulp2.jpg';
import pulp3 from '../images/portfolio/pulp/pulp3.jpg';
import pulp4 from '../images/portfolio/pulp/pulp4.jpg';
import pulp5 from '../images/portfolio/pulp/pulp5.jpg';
import damian1 from '../images/portfolio/damian/damian1.jpg';
import damian2 from '../images/portfolio/damian/damian2.jpg';
import damian3 from '../images/portfolio/damian/damian3.jpg';
import damian4 from '../images/portfolio/damian/damian4.jpg';
import damian5 from '../images/portfolio/damian/damian5.jpg';
import damian6 from '../images/portfolio/damian/damian6.jpg';
import damian7 from '../images/portfolio/damian/damian7.jpg';
import damian8 from '../images/portfolio/damian/damian8.jpg';
import damian9 from '../images/portfolio/damian/damian9.jpeg';
import caperucita1 from '../images/portfolio/caperucita/caperucita1.jpeg';
import caperucita2 from '../images/portfolio/caperucita/caperucita2.jpeg';
import caperucita3 from '../images/portfolio/caperucita/caperucita3.jpeg';
import caperucita4 from '../images/portfolio/caperucita/caperucita4.jpeg';
import caperucita5 from '../images/portfolio/caperucita/caperucita5.jpeg';
import saul1 from '../images/portfolio/betterCallSaul/saul1.jpg';
import saul2 from '../images/portfolio/betterCallSaul/saul2.jpeg';
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
  imageSrc: heroImage,
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
  profileImageSrc: profileImage,
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
    name: 'Front End Developer',
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
    title: (<>Young Creation Festival Poster</>),
    description: (<>Finalist poster for the Young Creation Festival.</>),
    deepDescription: (<>This poster design for the 24th Young Creation Festival embodies the spirit of creativity and participation among young artists in Soria. The illustration merges the whimsical concept of a wooden puppet with the idea of cooking, symbolizing creativity and joy without relying on traditional artistic expressions. Using vibrant colors and vector-based construction, the design evokes a sense of originality and playfulness, reflecting the festival's aim to inspire and engage the community in cultural activities.</>),
    image: creacionJoven,
    images: [creacionJoven],
  },
  {
    title: (<>Interactive Story</>),
    description: (<>Collaborative project for an interactive story.</>),
    deepDescription: (<>This interactive story, inspired by the tale <em>Where the Wild Things Are</em>, offers readers a journey filled with mystery and multiple possible endings. Through a blend of childlike and slightly eerie illustrations, the story explores themes of confronting the unknown, which ultimately reveals itself as friendly. The visual style combines colored pencil textures and muted colors to create a cozy yet suspenseful atmosphere, inviting readers to engage with the story's twists and turns in an imaginative, interactive way.</>),
    image: cuentoInteractivo,
    images: [cuentoInteractivo],
  },
  {
    title: (<><em>Little Red Riding Hood</em> Story</>),
    description: (<>Series of illustrations for <em>Pons</em> magazine.</>),
    deepDescription: (<>This illustration series reimagines the classic <em>Little Red Riding Hood</em> tale for <em>Pons</em> magazine, blending a dark, atmospheric style with the story's inherent innocence. While the artwork conveys a sense of mystery and suspense, it retains a child-friendly quality that aligns with the original fairy tale. Through carefully chosen colors and shading, the illustrations create a balance between the tale's darker undertones and its whimsical, timeless charm.</>),
    image: caperucita1,
    images: [caperucita1, caperucita2, caperucita3, caperucita4, caperucita5],
  },
  {
    title: (<>HSSullivan Illustrations</>),
    description: (<>Series of illustrations I have created over the years.</>),
    deepDescription: (<>This series represents a collection of personal illustration projects I have created over the years, each reflecting my ongoing exploration and evolution as an artist. Constantly experimenting with new techniques and adapting my style, these pieces showcase a variety of approaches, themes, and visual expressions. This collection not only documents my artistic journey but also highlights my commitment to innovation and growth in my craft.</>),
    image: ilustraciones11, 
    images: [ilustraciones11, ilustraciones12, ilustraciones13, ilustraciones14, ilustraciones15],
  },
  {
    title: (<>Pulp Fanzine</>),
    description: (<>Fanzine project for the cultural youth event in Soria.</>),
    deepDescription: (<><em>Pulp</em> is a unique fanzine project that blends a vintage gazette-style layout with a modern exploration of cinematic culture. Inside, readers will find diverse content, including an insightful exploration of divine representation in film and an in-depth study of Stanley Kubricks work. This fanzine delves into both historical and contemporary cinema, offering a nostalgic yet fresh perspective on the seventh art. Printed on recycled paper with a newspaper-like texture (148 mm x 210 mm), <em>Pulp</em> provides an immersive experience for cinephiles, celebrating the legacy and ongoing evolution of film.</>),
    image: pulp2, 
    images: [pulp1, pulp2, pulp3, pulp4, pulp5],
  },
  {
    title: (<><em>Damian</em></>),
    description: (<>Series of illustrations featuring <em>Damian.</em></>),
    deepDescription: (<>Meet <em>Damian</em>, a cartoon character who has accompanied me throughout my journey as an illustrator. Damian serves as a canvas to showcase my creativity and artistic evolution. Over the years, I've illustrated him in various situations, each one highlighting a unique aspect of his personality while reflecting my own growth as an artist. From his early sketches to his latest iterations, Damian embodies my continuous exploration and refinement of technique. I hope you enjoy witnessing his development and transformation over time.</>),
    image: damian1,
    images: [damian1, damian2, damian3, damian4, damian5, damian6, damian7, damian8, damian9]
  },
  {
    title: (<>Illustrations for <em>Cine para Todos</em> Magazine</>),
    description: (<>Series of illustrations on the show <em>Better Call Saul.</em></>),
    deepDescription: (<>This series of illustrations captures iconic moments from the television show <em>Better Call Saul</em>, created for an article in <em>Cine para Todos</em> magazine. Each illustration delves into pivotal scenes that define the show's tone and complex characters, highlighting themes of moral ambiguity and transformation. The artwork aims to visually convey the tension and cinematic style of the series, offering fans a fresh perspective on memorable scenes while enhancing the magazine's in-depth analysis of the show.</>),
    image: saul2,
    images: [saul1, saul2, saul3],
  },
  {
    title: (<>Private Commissions</>),
    description: (<>Series of commissioned illustrations.</>),
    deepDescription: (<>This selection showcases some of my professional commissioned work over the years. Each portrait represents a personal interpretation, focusing on details and expressions to create a unique and authentic representation of each subject. I strive to make every piece special, capturing the unique characteristics and personality that define each individual. Many of these commissions were created for content creators, allowing me to bring their distinctive presence and style to life through illustration.</>),
    image: encargo1, 
    images: [encargo1, encargo2, encargo3, encargo4, encargo5],
  },
  {
    title: (<>HSSullivan Illustrations II</>),
    description: (<>Series of illustrations I have created over the years.</>),
    deepDescription: (<>An updated collection of my latest illustrations. As a freelance artist, I have the freedom to explore various techniques and themes, adapting to each client's unique needs while maintaining my artistic vision. This flexibility has allowed me to work on a wide range of projects, from caricatures and portraits to complex illustrations for publications and marketing campaigns. The diversity of this portfolio showcases not only my technical skills but also my ability to tell stories through my illustrations.</>),
    image: ilustraciones21, 
    images: [ilustraciones21, ilustraciones22, ilustraciones23, ilustraciones24, ilustraciones25],
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

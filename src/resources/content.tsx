import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Hasan",
  lastName: "KAHRAMAN",
  name: `Hasan Gökcan KAHRAMAN`,
  role: "AI-Assisted Developer",
  avatar: "/images/ai-avatar.jpg",
  email: "hgokcankahraman@gmail.com",
  location: "Europe/Istanbul", 
  languages: ["Turkish", "English"], 
  locale: "en", 
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/gokcank",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as an AI-Assisted Developer`,
  headline: <>Yapay zeka asistanları (AI-Assisted) ve modern teknolojiler kullanarak fikirleri uçtan uca Android uygulamalarına dönüştürüyorum.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">AI-Assisted</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured Project
        </Text>
      </Row>
    ),
    href: "/work/projects/astroyorum",
  },
  subline: <></>,
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: <></>,
  },
  work: {
    display: true, 
    title: "My Process",
    experiences: [
      {
        company: "AI-Assisted App Creation",
        timeframe: "2024 - Present",
        role: "Product Creator",
        achievements: [],
        images: [],
      },
    ],
  },
  studies: {
    display: false, 
    title: "Studies",
    institutions: [],
  },
  technical: {
    display: true, 
    title: "Technical Expertise (via AI)",
    skills: [
      {
        title: "AI Prompting & Logic",
        description: <></>,
        tags: [
          { name: "Prompt Engineering", icon: "brain" },
        ],
        images: [],
      },
      {
        title: "Android Native Development",
        description: <></>,
        tags: [
          { name: "Kotlin", icon: "android" },
          { name: "Jetpack Compose", icon: "layers" },
        ],
        images: [],
      },
      {
        title: "Firebase & AdMob Integration",
        description: <></>,
        tags: [
          { name: "Firebase", icon: "fire" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Under Construction",
  description: `This section is currently under construction.`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `AI-Assisted Android projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Under Construction`,
  description: `This section is currently under construction.`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };

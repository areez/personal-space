import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Areez Afsar",
  lastName: "Khan",
  name: "Areez Afsar Khan",
  role: "Entrepreneur & Tech Consultant",
  avatar: "/images/avatar.jpg",
  email: "hello@areezafsar.com",
  location: "Asia/Dhaka", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bengali"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about technology and creativity</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
    {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/areezafsar/",
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/areez",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@areez_afsar",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my thoughts and ideas as a ${person.role}`,
  headline: <>Benchmarking with the best globally to build better locally</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Areez</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured thoughts
        </Text>
      </Row>
    ),
    href: "/work/benchmark-talent-build-global",
  },
  subline: (
    <>
      I'm Areez, founder of{" "}
      <Logo
        dark
        icon="/trademarks/wordmark-dark.svg"
        style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}
      />
      , where i lead tech projects and build cloud-first solutions.
      Outside of work, i love experimenting with new ideas, writing
      about tech, and exploring ways to solve real-world problems.
    </>
  ),
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
    display: true,
    link: "https://outlook.office.com/bookwithme/user/48cc795072e74f5c997fec66dfc15db8@valiant.com.bd?anonymous&ismsaljsauthenabled&ep=plink",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
      Areez Afsar Khan is an entrepreneur, independent technology consultant, and
      brand strategist from Dhaka, Bangladesh. He is an IBM-certified Software
      Engineer with a Bachelor's degree in Business Administration from North South
      University.
      <br />
      With over fifteen years of professional experience, Areez has worked with
      leading local companies to develop innovative business models and startups in
      Agrotech, Legaltech, and TravelTech. His expertise spans SaaS, customer
      experience design, brand and product development, and campaign activations
      for both his own ventures and his clients.
      <br />
      In addition to his entrepreneurial journey, Areez has held notable leadership
      positions. He served as the 2023 National Vice President of JCI Bangladesh,
      co-chaired the Standing Committee on Software Products at BASIS (the national
      trade body for software and IT services), and is a founding member of the
      Bangladesh IT Pros Network (BITPN).
      <br />
      He remains actively engaged in mentoring and supporting professional
      communities, solidifying his reputation as an innovator, ecosystem builder, and
      industry leader.
    </>
    ),
  }, // Add this closing brace that was missing
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Valiant Technologies | Valiant Tech Ltd. ",
        timeframe: "2012 - Present",
        role: "Founder & Managing Director",
        achievements: [
          <>
            Founded Valiant Technologies in 2012, a software engineering and
            IT services firm delivering scalable, cloud-first solutions solving business challenges.
          </>,
          <>
            Expertise in EPC contracting, engineering services, system integration,
            and digital transformation for 200+ global clients.
          </>,
          <>
            Oversee cloud strategies, solution architectures, DevOps practices,
            and technical presales  of home-grown software products as well as
            services from partners like Microsoft, AWS, Google, Hoteza, and Odoo.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "CropRocket Limited",
        timeframe: "2021 - Present",
        role: "Director",
        achievements: [
          <>
            A modern agriculture company that works to improve crop seed markets in Bangladesh
            utilizing its own state-of-the-art seed testing labs, research, scientific expertise,
            nurseries, and cultivation farms.
          </>,
          <>
            Helping farmers get ready to grow crops by giving them expert pre-cultivation
            services and fulfill the commitment of building a sustainable agriculture ecosystem.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "North South University",
        description: <>Graduated with a Bachelor of Business Administration (BBA) degree majoring in Marketing.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Certifications",
    skills: [
      {
        title: "IBM DevOps & Software Engineering",
        description: (
          <>
            "Mastered DevOps, Agile/Scrum, CI/CD, TDD/BDD, and Cloud-Native development"<br/>
            "Built & deployed Python, microservices, using Docker, Kubernetes, OpenShift, Serverless"<br/>
            "Applied Git/GitHub, Linux scripting, automation, security, monitoring & observability"
          </>
        ),
        tags: [
          {
            name: "DevOps",
            icon: "workflow",
          },
          {
            name: "Cloud-Native",
            icon: "cloud",
          },
          {
            name: "CI/CD",
            icon: "repeat",
          },
          {
            name: "Python Development",
            icon: "code",
          },
          {
            name: "Docker & Kubernetes",
            icon: "container",
          },
          {
            name: "Agile & Scrum",
            icon: "users",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };

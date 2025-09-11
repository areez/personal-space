import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Areez Afsar",
  lastName: "Khan",
  name: "Areez Afsar Khan",
  role: "Entrepreneur & Tech Consultant",
  avatar: "/images/avatar.jpg",
  email: "hello@areezafsar.com",
  location: "Asia/Dhaka", // IANA time zone identifier
  languages: ["English", "Bengali"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}&apos;s Blogs</>,
  description: <>My monthly blog updates about technology, business, leadership and philosophy.</>,
};

const social: Social = [
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
    link: "https://www.threads.net/@areez_afsar", // updated URL format
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
  title: `${person.name}'s Personal Space`,
  description: `Portfolio website showcasing my thoughts and ideas as a ${person.role}`,
  headline: <>Benchmarking with the best globally, to build better locally</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Areez's</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured Thought
        </Text>
      </Row>
    ),
    href: "/case/benchmark-talent-build-global",
  },
  subline: (
    <>
      I&apos;m Areez, founder of{" "}
      <Logo
        dark
        icon="/trademarks/wordmark-dark.svg"
        style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}
      />
      , where I lead a team of product engineers and following a cloud-first approach to build
      scalable, secure, and user-centric solutions. Outside of work, I love experimenting with new
      ideas, writing about tech, engaging with the community, and exploring ways to solve real-world
      business problems.
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
        Areez Afsar Khan is an entrepreneur, independent technology consultant, and brand strategist
        from Dhaka, Bangladesh. He is an IBM-certified Software Engineer with a Bachelor&apos;s degree in
        Business Administration from North South University.
        <br />
        <br />
        With over fifteen years of professional experience, Areez has worked with leading local
        companies to develop innovative business models and startups in Agrotech, Legaltech, and
        TravelTech. His expertise spans SaaS, customer experience design, brand and product
        development, and campaign activations for both his own ventures and clients.
        <br />
        <br />
        In addition to his entrepreneurial journey, Areez has held notable leadership positions. He
        served as the 2023 National Vice President of JCI Bangladesh, co-chaired the Standing
        Committee on Software Products at BASIS (the national trade body for software and IT
        services), and is a founding member of the Bangladesh IT Professionals Network (BITPN).
        <br />
        <br />
      </>
    ),
  },
  work: {
    display: true,
    title: "Work",
    experiences: [
      {
        company: "Valiant Technologies / Valiant Tech Ltd.",
        logo: "/images/logos/valiant-technologies.svg", // Changed from .png to .svg
        timeframe: "2015 - Present",
        role: "Founder & Managing Director",
        achievements: [
          <>
            Founded Valiant Technologies in 2012 through an idea contest, which has now grown into a
            software engineering and IT services firm delivering scalable, cloud-first solutions to
            address business challenges for 200+ global clients.
          </>,
          <>
            Expertise in EPC contracting, engineering services, system integration, and digital
            transformation.
          </>,
          <>
            Oversees cloud strategies, solution architectures, DevOps practices, and technical
            presales for home-grown software products as well as partner solutions from Microsoft,
            AWS, Google, Hoteza, and Odoo.
          </>,
        ],
        images: [
          {
            src: "/images/case/project-01/cover-01.jpg",
            alt: "Valiant Technologies",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "FarmRoket™",
        logo: "/images/logos/farmroket.svg", // Changed from .png to .svg
        timeframe: "2024 - Present",
        role: "Founder",
        achievements: [
          <>
            An end-to-end farming supply chain solution hosted on blockchain, providing complete
            farm-to-fork traceability for consumers, farmers, exporters, traders, and regulators.
          </>,
          <>
            Platform is supported by market intelligence to enhance the value of fresh produce and
            ensure transparency.
          </>,
        ],
        images: [],
      },
      {
        company: "Starfare",
        logo: "/images/logos/shuktara-travels.svg", // Changed from .png to .svg
        timeframe: "2018 - Present",
        role: "Co-founder",
        achievements: [
          <>
            Co-founded a leading online travel agency providing efficient outbound travel solutions
            for B2B & B2C clients.
          </>,
          <>
            Utilizes aggregated flight APIs and offers reservation services for travel agents, SMEs,
            and corporate clients.
          </>,
        ],
        images: [],
      },
      {
        company: "CropRocket Limited",
        logo: "/images/logos/croprocket.svg", // Changed from .png to .svg
        timeframe: "2021 - Present",
        role: "Director",
        achievements: [
          <>
            Driving initiatives to improve crop seed markets in Bangladesh using state-of-the-art
            seed testing labs, research facilities, nurseries, and cultivation farms.
          </>,
          <>
            Helping farmers prepare for cultivation by offering expert pre-cultivation services and
            building a sustainable agriculture ecosystem.
          </>,
        ],
        images: [],
      },
      {
        company: "Ethics Advance Technology Ltd.",
        logo: "/images/logos/eatl.svg", // Changed from .png to .svg
        timeframe: "2014 - 2015",
        role: "Assistant Manager, Business Development",
        achievements: [
          <>
            Coordinated a nationwide campaign across 53 universities and organized the Bootcamp for
            the EATL&ndash;Prothom Alo App Development Contest 2014, raising USD 200k through proposals.
          </>,
          <>
            Contributed to the success of the &quot;National Mobile Application Trainer Program
            (2014&ndash;2015)&quot; for the ICT Division, Ministry of Post, Telecommunication & IT.
          </>,
          <>
            Contributed to the success of &quot;Learning & Earning Development Project (2015)&quot; under the
            ICT Division, Ministry of Post, Telecommunication & Technology.
          </>,
        ],
        images: [],
      },
      {
        company: "Microsoft Bangladesh",
        logo: "/images/logos/microsoft.svg", // Changed from .png to .svg
        timeframe: "Nov 2013 - June 2014",
        role: "Intern - Business Evangelist Support (Developer Experience)",
        achievements: [
          <>
            Engaged student developer communities across universities in mobile app idea generation,
            development, testing, and hackathons.
          </>,
          <>
            Promoted early mobile app development initiatives during the smartphone boom, mentoring
            communities and leading hackathons—one of which resulted in 100 apps published in a
            single day.
          </>,
          <>
            Managed the Microsoft DreamSpark partnership with universities, providing students with
            free Microsoft products.
          </>,
          <>
            Led and organized the Microsoft Imagine Cup Bangladesh 2014 - regional event, meeting
            the sponsorship target of USD 125k.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "North South University",
        logo: "/images/logos/north-south-university.svg", // Changed from .png to .svg
        description: (
          <>Earned a Bachelor of Business Administration (BBA) degree, majoring in Marketing.</>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Certification",
    skills: [
      {
        title: "IBM DevOps & Software Engineering",
        logo: "/images/logos/ibm.svg",
        description: [
          <>
            Completed a 6-month, 15-course IBM certification on DevOps, Agile/Scrum, CI/CD, and
            Cloud-Native Development, building and deploying Python microservices with Docker,
            Kubernetes, OpenShift, and Serverless, while applying Git/GitHub, Linux scripting,
            automation, security, monitoring, and observability practices.
          </>,
        ],
        credlyLink: "https://www.coursera.org/account/accomplishments/specialization/6FDPMUJNEGB5",
        tags: [
          { name: "DevOps", icon: "rocket" },
          { name: "Cloud-Native", icon: "globe" },
          { name: "CI/CD", icon: "arrowRight" },
          { name: "Python Development", icon: "python" },
          { name: "Docker & Kubernetes", icon: "grid" },
          { name: "Agile & Scrum", icon: "person" },
        ],
        images: [],
      },
      {
        title: "Microsoft Certified: Azure Fundamentals",
        logo: "/images/logos/microsoft-azure.svg",
        description: (
          <>
            Demonstrated foundational knowledge of cloud services and their delivery through
            Microsoft Azure.
          </>
        ),
        credlyLink:
          "https://www.credly.com/earner/earned/badge/05a8ee30-9ee5-4a14-99a9-7e996d25b806",
        tags: [
          { name: "Microsoft Azure", icon: "azure" },
          { name: "Cloud Services", icon: "cloud" },
          { name: "Cloud Computing", icon: "globe" },
          { name: "Azure Portal", icon: "document" },
        ],
        images: [],
      },
      {
        title: "Google IT Support Professional",
        logo: "/images/logos/google.svg",
        description: (
          <>
            Completed a five-course certification program developed by Google, including hands-on
            assessments. Gained proficiency in shell commands, networking, system administration,
            and security.
          </>
        ),
        credlyLink:
          "https://www.coursera.org/account/accomplishments/professional-cert/TE2YORAIR8HR",
        tags: [
          { name: "IT Support", icon: "google" },
          { name: "System Administration", icon: "systemAdmin" },
          { name: "Network Security", icon: "security" },
          { name: "Shell Commands", icon: "python" },
        ],
        images: [],
      },
    ],
  },
  leadership: {
    display: true,
    title: "Leadership",
    skills: [
      {
        title: "Co-chariman, Software Products & SaaS, BASIS",
        logo: "/images/logos/basis.svg",
        description: [
          <>
            Appointed to the Standing Committee for Software Products & SaaS at BASIS, the national
            trade body for Bangladesh’s software and IT-enabled services sector, representing 2,600+
            member organizations.
          </>,
        ],
        images: [],
      },
      {
        title: "Joint Member Secretary, NSUAA",
        logo: "/images/logos/nsuaa.svg",
        description: [
          <>
            Actively patronizing my alma mater - North South University Alumni Association as the
            appointed Joint Member Secretary (2025).
          </>,
        ],
        images: [],
      },
      {
        title: "2023 National Vice President, JCI Bangladesh",
        logo: "/images/logos/jcibd.svg",
        description: [
          <>
            Served in the national governing body of JCI Bangladesh, a global leadership
            organization for young professionals. Contributed to leadership development programs and
            served as a JCI Trainer.
          </>,
        ],
        images: [],
      },
      {
        title: "President (2011-2013), NSUCEC",
        logo: "/images/logos/nsucec.svg",
        description: [
          <>
            Served two years as President of NSUCEC, the only student activity club at North South
            University related to technology. Helped the department organized ACM-ICPC Programming
            Contests, led Robi-ICT Innovation Quest 2012, launched the flagship NSU Cybernauts
            event, and built strong relationships with IT industry stakeholders and academia.
          </>,
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Insights on technology, business, leadership and philosophy",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/case", // Changed from "/projects" to "/case"
  label: "Case Study",
  title: `Case Studies – ${person.name}`,
  description: `Design and dev case studies by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    { src: "/images/gallery/horizontal-1.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/vertical-4.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/horizontal-3.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/vertical-1.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/vertical-2.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/horizontal-2.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/horizontal-4.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/vertical-3.jpg", alt: "image", orientation: "vertical" },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };

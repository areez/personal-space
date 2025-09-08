import { IconName } from "@/resources/icons";
import { zones } from "tzdata";

/**
 * IANA time zone string (e.g., 'Asia/Calcutta', 'Europe/Vienna').
 * See: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
 */
export type IANATimeZone = Extract<keyof typeof zones, string>; // Narrow to string keys for React usage

/**
 * Represents a person featured in the portfolio.
 */
export type Person = {
  /** First name of the person */
  firstName: string;
  /** Last name of the person */
  lastName: string;
  /** The name you want to display, allows variations like nicknames */
  name: string;
  /** Role or job title */
  role: string;
  /** Path to avatar image */
  avatar: string;
  /** Email address */
  email: string;
  /** IANA time zone location */
  location: IANATimeZone;
  /** Languages spoken */
  languages?: string[];
};

/**
 * Newsletter Section
 * @description The below information will be displayed on the Home page in Newsletter block
 */
export type Newsletter = {
  /** Whether to display the newsletter section */
  display: boolean;
  /** Title of the newsletter   */
  title: React.ReactNode;
  /** Description of the newsletter */
  description: React.ReactNode;
};

/**
 * Social link configuration.
 */
export type Social = Array<{
  /** Name of the social platform */
  name: string;
  /** Icon for the social platform
   * The icons are a part of "src/resources/icons.ts" file.
   * If you need a different icon, import it there and reference it everywhere else
   */
  icon: IconName;
  /**
   * The link to the social platform
   *
   * The link is not validated by code, make sure it's correct
   */
  link: string;
}>;

/**
 * Base interface for page configuration with common properties.
 */
export interface BasePageConfig {
  /** Path to the page
   *
   * The path should be relative to the public directory
   */
  path: `/${string}` | string;
  /** Label for navigation or display */
  label: string;
  /** Title of the page */
  title: string;
  /** Description for SEO and metadata */
  description: string;
  /** OG Image should be put inside `public/images` folder */
  image?: `/images/${string}` | string;
}

/**
 * Home page configuration.
 */
export interface Home extends BasePageConfig {
  /** The image to be displayed in metadata
   *
   * The image needs to be put inside `/public/images/` directory
   */
  image: `/images/${string}` | string;
  /** The headline of the home page */
  headline: React.ReactNode;
  /** Featured badge, which appears above the headline */
  featured: {
    display: boolean;
    title: React.ReactNode;
    href: string;
  };
  /** The sub text which appears below the headline */
  subline: React.ReactNode;
}

/**
 * About page configuration.
 * @description Configuration for the About page, including sections for table of contents, avatar, calendar, introduction, work experience, studies, and technical skills.
 */
export interface About extends BasePageConfig {
  /** Table of content configuration */
  tableOfContent: {
    /** Whether to display table of contents */
    display: boolean;
    /** Whether to show sub-items in table of contents */
    subItems: boolean;
  };
  /** Avatar configuration */
  avatar: {
    /** Whether to display avatar */
    display: boolean;
  };
  /** Calendar configuration */
  calendar: {
    /** Whether to display calendar */
    display: boolean;
    /** Calendar booking link */
    link: string;
  };
  /** Introduction section */
  intro: {
    /** Whether to display intro section */
    display: boolean;
    /** Intro section title */
    title: string;
    /** Intro section description */
    description: React.ReactNode;
  };
  /** Work experience section */
  work: {
    /** Whether to display work section */
    display: boolean;
    /** Work section title */
    title: string;
    /** Array of work experiences */
    experiences: Array<{
      /** Company name */
      company: string;
      /** Company logo path */
      logo?: string;
      /** Employment timeframe */
      timeframe: string;
      /** Role or job title */
      role: string;
      /** Achievements at the company */
      achievements: React.ReactNode[];
      /** Images related to the experience */
      images?: Array<{
        /** Image source path */
        src: string;
        /** Image alt text */
        alt: string;
        /** Image width ratio */
        width: number;
        /** Image height ratio */
        height: number;
      }>;
    }>;
  };
  /** Education/Studies section */
  studies: {
    /** Whether to display studies section */
    display: boolean;
    /** Studies section title */
    title: string;
    /** Array of educational institutions */
    institutions: Array<{
      /** Institution name */
      name: string;
      /** Institution logo path */
      logo?: string;
      /** Description of studies */
      description: React.ReactNode;
    }>;
  };
  /** Technical skills section */
  technical: {
    display: boolean;
    title: string;
    skills: Array<{
      title: string;
      logo?: string;
      description?: React.ReactNode;
      credlyLink?: string; // Add this line
      tags?: Array<{
        name: string;
        icon?: string;
      }>;
      images?: Array<{
        src: string;
        alt: string;
        width: number;
        height: number;
      }>;
    }>;
  };
}

/**
 * Blog page configuration.
 * @description Configuration for the Blog page, including metadata and navigation label.
 */
export interface Blog extends BasePageConfig {}

/**
 * Work/projects page configuration.
 * @description Configuration for the Work/Projects page, including metadata and navigation label.
 */
export interface Work extends BasePageConfig {}

/**
 * Gallery page configuration.
 * @description Configuration for the Gallery page, including metadata, navigation label, and image list.
 */
export interface Gallery extends BasePageConfig {
  /** List of images in the gallery */
  images: Array<{
    /** Image source path */
    src: string;
    /** Image alt text */
    alt: string;
    /** Image orientation (horizontal/vertical) */
    orientation: string;
  }>;
}

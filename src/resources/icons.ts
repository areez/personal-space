import { IconType } from "react-icons";

// Add this import at the top with other HiOutline imports
import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineRocketLaunch,
  HiOutlineCommandLine,
  HiOutlineCloud,
  HiOutlineShieldCheck,
  HiOutlineCog6Tooth,
  HiOutlineExternalLink, // Add this line
} from "react-icons/hi2";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
} from "react-icons/pi";

import {
  SiJavascript,
  SiNextdotjs,
  SiFigma,
  SiSupabase,
  SiPython,
  // SiMicrosoftazure removed - no longer available in react-icons
  SiGoogle, // Added for Google
} from "react-icons/si";

import { FaDiscord, FaGithub, FaLinkedin, FaX, FaThreads, FaXTwitter, FaFacebook, FaPinterest, FaWhatsapp, FaReddit, FaTelegram, } from "react-icons/fa6";

export const iconLibrary: Record<string, IconType> = {
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  email: HiEnvelope,
  globe: HiOutlineGlobeAsiaAustralia,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: PiHouseDuotone,
  gallery: PiImageDuotone,
  discord: FaDiscord,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaX,
  twitter: FaXTwitter,
  threads: FaThreads,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare, // Add this line - using existing icon
  // OR use the dedicated external link icon:
  // external: HiOutlineExternalLink, // Alternative option

  // Also add missing tag icons:
  devops: HiOutlineRocketLaunch,
  cloudNative: HiOutlineGlobeAsiaAustralia,
  cicd: HiArrowRight,
  pythonDevelopment: SiPython,
  dockerKubernetes: PiGridFourDuotone,
  agileScrum: PiUserCircleDuotone,
  microsoftAzure: HiOutlineCloud,
  cloudServices: HiOutlineCloud,
  cloudComputing: HiOutlineGlobeAsiaAustralia,
  azurePortal: HiOutlineDocument,
  itSupport: SiGoogle,
  networkSecurity: HiOutlineShieldCheck,
  shellCommands: HiOutlineCommandLine,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;

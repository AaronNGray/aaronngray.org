import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://aaronngray.github.io/",
  author: "AaronNGray",
  desc: "Blog of AaronNGray, project status, updates, technology examples,and Ideas",
  title: "aaronngray.org",
  ogImage: "https://avatars.githubusercontent.com/u/85523?v=4",
  lightAndDarkMode: true,
  postPerPage: 10,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: true,
  svg: false,
  width: 48,
  height: 48,
};

export const LOGO_LABEL = {
  enable: true,
  text: "aaronngray.org",
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/aaronngray",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/aaronngray",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:mail@aaronngray.org",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "BSky",
    href: "https://bsky.app/profile/aaronngray.bsky.social",
    linkTitle: `${SITE.title} on bsky`,
    active: true,
  },
  {
    name: "Medium",
    href: "https://medium.com/@aaronngray",
    linkTitle: `${SITE.title} on Medium`,
    active: true,
  },
];

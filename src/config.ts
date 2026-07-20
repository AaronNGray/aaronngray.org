import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://aaronngray.github.io/",
  author: "AaronNGray",
  desc: "Blog of AaronNGray, project status, updates, technology examples,and Ideas",
  title: "aaronngray.org",
  ogImage: "https://avatars.githubusercontent.com/u/85523?v=4",
  lightAndDarkMode: true,
  postPerPage: 10,
  headerImage: false,
  headerImageSrc: "/public/images/header.gif",
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
    src: "/icons/socials/github.png",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Mastodon",
    href: "https://fosstodon.org/@aaronngray",
    src: "/icons/socials/mastodon.png",
    linkTitle: `${SITE.title} on Mastodon`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/aaronngray",
    src: "/icons/socials/linkedin.png",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "BlueSky",
    href: "https://bsky.app/profile/aaronngray.bsky.social",
    src: "/icons/socials/bluesky.png",
    linkTitle: `${SITE.title} on BlueSky`,
    active: true,
  },
  {
    name: "Medium",
    href: "https://medium.com/@aaronngray",
    src: "/icons/socials/medium.png",
    linkTitle: `${SITE.title} on Medium`,
    active: true,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@aaronngray",
    src: "/icons/socials/youtube.png",
    linkTitle: `${SITE.title} on YouTube`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:mail@aaronngray.org",
    src: "/icons/socials/mail.png",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
];

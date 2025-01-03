import React from 'react';
import { Button } from 'reactstrap';
import { socialLinks } from '../portfolio';

type SocialLinksStylesType = {
  [link: string]: {
    color: string;
    ariaLabel: string;
    icon: string;
  };
};

const socialLinksStyles: SocialLinksStylesType = {
  url: {
    color: 'white',
    ariaLabel: 'URL',
    icon: 'fa-link',
  },
  linkedin: {
    color: 'twitter',
    ariaLabel: 'Linkedin',
    icon: 'fa-linkedin',
  },
  github: {
    color: 'github',
    ariaLabel: 'Github',
    icon: 'fa-github',
  },
  instagram: {
    color: 'instagram',
    ariaLabel: 'Instagram',
    icon: 'fa-instagram',
  },
  facebook: {
    color: 'facebook',
    ariaLabel: 'Facebook',
    icon: 'fa-facebook',
  },
  twitter: {
    color: 'twitter',
    ariaLabel: 'Twitter',
    icon: 'fa-twitter',
  },
};

const SocialLinks = () => {
  return (
    <>
      {Object.keys(socialLinks).map((link) => (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color={socialLinksStyles[link].color}
          rel="noopener"
          aria-label={socialLinksStyles[link].ariaLabel}
          href={socialLinks[link]}
          target="_blank"
          key={link}
        >
          <span className="btn-inner--icon">
            <i className={`fa ${socialLinksStyles[link].icon}`} />
          </span>
        </Button>
      ))}
    </>
  );
};

export default SocialLinks;

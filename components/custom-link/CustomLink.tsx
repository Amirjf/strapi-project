import React from 'react';
import Link from 'next/link';

type CustomLinkProps = {
  label: string;
  href: string;
  locale: string;
  target: string;
  isExternal: boolean;
};

const CustomLink = ({
  label,
  href,
  locale,
  target,
  isExternal,
}: CustomLinkProps) => {
  if (isExternal) {
    return (
      <Link href={href}>
        <a target={target}>{label}</a>
      </Link>
    );
  } else {
    return (
      <Link href={`${href}`}>
        <a target={target}>{label}</a>
      </Link>
    );
  }
};

CustomLink.defaultProps = {};

export default CustomLink;

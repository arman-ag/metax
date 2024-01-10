'use client';

import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { breadCrumbTranslator } from '../_lib/translator';
import { BreadCrumbContainer } from './style';

const NextBreadcrumb = () => {
  const paths = usePathname();
  const pathNames = paths.split('/').filter((path) => path);

  return (
    <BreadCrumbContainer>
      <span>
        <Link href={'/dashboard'}>خانه </Link>
      </span>
      {pathNames.map((link, index) => {
        let href = `/${pathNames.slice(0, index + 1).join('/')}`;
        return (
          <React.Fragment key={index}>
            <span>
              <Link href={href}>
                &nbsp; / &nbsp; {breadCrumbTranslator(link)}
              </Link>
            </span>
          </React.Fragment>
        );
      })}
    </BreadCrumbContainer>
  );
};

export default NextBreadcrumb;

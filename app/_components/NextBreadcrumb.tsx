'use client';

import React from 'react';

import { usePathname } from 'next/navigation';
import { breadCrumbTranslator } from '../_lib/translator';
import { BreadCrumbContainer, BreadcrumbItem } from './style';

const NextBreadcrumb = () => {
  const paths = usePathname();
  const pathNames = paths.split('/').filter((path) => path);

  return (
    <BreadCrumbContainer>
      <span>خانه</span>
      {pathNames.map((link, index) => {
        return (
          <React.Fragment key={index}>
            <span>
              &nbsp; / &nbsp;
              <BreadcrumbItem
                lastName={pathNames[pathNames.length - 1] === link}
              >
                {breadCrumbTranslator(link)}
              </BreadcrumbItem>
            </span>
          </React.Fragment>
        );
      })}
    </BreadCrumbContainer>
  );
};

export default NextBreadcrumb;

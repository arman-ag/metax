'use client';

import ServiceIcon from '@/app/_assets/icon/service';
import * as Accordion from '@radix-ui/react-accordion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AccordionContent } from '../accordion';
import { AccordionContainer, ChildItem, ParentItem } from './stylesAcorddion';

const AccordionService = () => {
  const paths = usePathname();
  const [openParent, setOpenParent] = useState('');
  useEffect(() => {
    if (paths.search('audio-service') > 0) {
      setOpenParent('item-1');
    } else if (paths.search('text-service') > 0) {
      setOpenParent('item-1');
    } else if (paths.search('image-service') > 0) {
      setOpenParent('item-1');
    } else {
      setOpenParent('');
    }
  }, [paths]);
  return (
    <AccordionContainer>
      <Accordion.Root
        onValueChange={(value) => setOpenParent(value)}
        className='AccordionRoot'
        value={openParent}
        type='single'
        collapsible
      >
        <Accordion.Item className='AccordionItem' value='item-1'>
          <ParentItem
            path={paths.search('service') > 0}
            className='AccordionItem'
          >
            <div>
              <ServiceIcon className='service-Icon' />
              سرویس ها
            </div>
          </ParentItem>
          <AccordionContent>
            <Link href='/audio-service'>
              <ChildItem
                path={paths.search('audio-service') > 0}
                className='content'
              >
                سرویس صوت
              </ChildItem>
            </Link>
          </AccordionContent>
          <AccordionContent>
            <Link href='/text-service'>
              <ChildItem
                path={paths.search('text-service') > 0}
                className='content'
              >
                سرویس متن
              </ChildItem>
            </Link>
          </AccordionContent>
          <AccordionContent>
            <Link href='/image-service'>
              <ChildItem
                path={paths.search('image-service') > 0}
                className='content'
              >
                سرویس تصویر
              </ChildItem>
            </Link>
          </AccordionContent>
        </Accordion.Item>
      </Accordion.Root>
    </AccordionContainer>
  );
};

export default AccordionService;

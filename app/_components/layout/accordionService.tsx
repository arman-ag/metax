'use client';

import ServiceIcon from '@/app/_assets/icon/service';
import * as Accordion from '@radix-ui/react-accordion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AccordionContent, AccordionTrigger } from '../accordion';
import { AccordionContainer, ChildItem, ParentItem } from './stylesAcorddion';

const AccordionService = () => {
  const paths = usePathname();
  const [openChild, setOpenChild] = useState('');
  const [openParent, setOpenParent] = useState('');
  useEffect(() => {
    if (paths.search('audio-service') > 0) {
      setOpenParent('item-1');
      setOpenChild('item-2');
    } else if (paths.search('text-service') > 0) {
      setOpenParent('item-1');
      setOpenChild('item-3');
    } else if (paths.search('image-service') > 0) {
      setOpenParent('item-1');
      setOpenChild('item-4');
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
            <Accordion.Root
              onValueChange={(value) => setOpenChild(value)}
              className='AccordionRoot'
              value={openChild}
              type='single'
              collapsible
            >
              <Accordion.Item className='AccordionItem' value='item-2'>
                <AccordionTrigger>سرویس صوت</AccordionTrigger>
                <AccordionContent>
                  <Link href='/audio-service/denoiser'>
                    <ChildItem
                      path={paths.search('denoiser') > 0}
                      className='content'
                    >
                      دینویزر
                    </ChildItem>
                  </Link>
                </AccordionContent>
                {/* <AccordionContent>
                  <Link href='/audio-service/music-separator'>
                    <ChildItem
                      path={paths.search('music-separator') > 0}
                      className='content'
                    >
                      جدا سازی موسیقی و خواننده
                    </ChildItem>
                  </Link>
                </AccordionContent> */}
                <AccordionContent>
                  <Link href='/audio-service/asr'>
                    <ChildItem
                      path={paths.search('asr') > 0}
                      className='content'
                    >
                      تبدیل صوت به متن
                    </ChildItem>
                  </Link>
                </AccordionContent>
              </Accordion.Item>

              <Accordion.Item className='AccordionItem' value='item-3'>
                <AccordionTrigger>سرویس متن</AccordionTrigger>
                <Accordion.Content className='AccordionContent'>
                  <Link href='/text-service/tts'>
                    <ChildItem
                      path={paths.search('tts') > 0}
                      className='content'
                    >
                      تبدیل متن به صوت
                    </ChildItem>
                  </Link>
                </Accordion.Content>
                <Accordion.Content className='AccordionContent'>
                  <Link href='/text-service/correct-dictation'>
                    <ChildItem
                      path={paths.search('correct-dictation') > 0}
                      className='content'
                    >
                      غلط املایی
                    </ChildItem>
                  </Link>
                </Accordion.Content>
                <Accordion.Content className='AccordionContent'>
                  <Link href='/text-service/recognize-insult'>
                    <ChildItem
                      path={paths.search('recognize-insult') > 0}
                      className='content'
                    >
                      تشخیص توهین
                    </ChildItem>
                  </Link>
                </Accordion.Content>
              </Accordion.Item>
              <Accordion.Item className='AccordionItem' value='item-4'>
                <AccordionTrigger>سرویس تصویر</AccordionTrigger>
                <Accordion.Content className='AccordionContent'>
                  <Link href='/image-service/plaque-diagnose'>
                    <ChildItem
                      path={paths.search('image-service') > 0}
                      className='content'
                    >
                      تشخیص پلاک
                    </ChildItem>
                  </Link>
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          </AccordionContent>
        </Accordion.Item>
      </Accordion.Root>
    </AccordionContainer>
  );
};

export default AccordionService;

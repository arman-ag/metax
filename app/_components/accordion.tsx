import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import classNames from 'classnames';
type accordionProps = {
  children?: React.ReactNode;
  className?: string;
};
const AccordionTrigger = ({
  children,
  className,
  ...props
}: accordionProps) => (
  <Accordion.Header className='AccordionHeader'>
    <Accordion.Trigger
      className={classNames('AccordionTrigger', className)}
      {...props}
    >
      {children}
      <ChevronDownIcon className='AccordionChevron' aria-hidden />
    </Accordion.Trigger>
  </Accordion.Header>
);

const AccordionContent = ({
  children,
  className,
  ...props
}: accordionProps) => (
  <Accordion.Content
    className={classNames('AccordionContent', className)}
    {...props}
  >
    <div>{children}</div>
  </Accordion.Content>
);
export { AccordionContent, AccordionTrigger };

import styled from 'styled-components';
import { AccordionTrigger } from '../accordion';

const AccordionContainer = styled.div`
  .AccordionRoot {
    width: 100%;
    background-color: white;
  }
  button,
  h3 {
    all: unset;
  }
  .AccordionItem {
    overflow: hidden;
    margin-top: 1px;
  }

  .AccordionItem:first-child {
    margin-top: 0;
  }

  .AccordionItem:focus-within {
    position: relative;
    z-index: 1;
  }

  .AccordionHeader {
    display: flex;
  }

  .AccordionTrigger {
    display: flex;
    height: 4.062rem;
    cursor: pointer;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    font-size: 0.75rem;
    line-height: 1;
    color: black;
    background-color: white;
    font-size: 0.75rem;
    line-height: 1.25rem;
    padding: 0 1rem;
  }

  .AccordionTrigger:hover {
    background-color: #f3ecfa;
  }

  .AccordionContent {
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.25rem;

    overflow: hidden;
    color: black;
    background-color: white;
    cursor: pointer;
  }

  .AccordionContent[data-state='open'] {
    animation: slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }
  .AccordionContent[data-state='closed'] {
    animation: slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }

  .AccordionContentText {
    padding: 15px 20px;
  }

  .AccordionChevron {
    color: black;

    transition: transform 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }
  .AccordionTrigger[data-state='open'] > .AccordionChevron {
    transform: rotate(180deg);
  }

  @keyframes slideDown {
    from {
      height: 0;
    }
    to {
      height: var(--radix-accordion-content-height);
    }
  }

  @keyframes slideUp {
    from {
      height: var(--radix-accordion-content-height);
    }
    to {
      height: 0;
    }
  }
  .content {
    height: 4.062rem;
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.25rem;
  }
`;
const ChildItem = styled.div`
  background-color: ${({ path }) => (path ? '#f3ecfa' : 'white')};
  &:hover {
    background-color: #f3ecfa !important;
  }
`;
const ParentItem = styled(AccordionTrigger)`
  background-color: ${({ path }) => {
    console.log('path===>', path);
    return path ? '#E8D9F4 !important' : 'white';
  }};
  border-right: ${({ path }) =>
    path ? '0.35rem solid #8c43c9 !important' : '0'};
  height: 4.062rem;
  cursor: pointer;
  flex: 1;
  align-items: center;
  font-size: 0.75rem;
  line-height: 1;
  color: black;
  font-size: 0.75rem;
  line-height: 1.25rem;
  div {
    display: flex;
    font-weight: 600;

    .service-Icon {
      margin-left: 0.5rem;
    }
  }
`;
export { AccordionContainer, ChildItem, ParentItem };

import { mauve } from '@radix-ui/colors';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { keyframes, styled } from '@stitches/react';
const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const contentStyles = {
  minWidth: '12.5rem',
  backgroundColor: '#FBF7FD',
  borderRadius: '0rem 0rem 1rem 1rem',
  boxShadow:
    '0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  '&[data-state="open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
};

const DropdownMenuContent = styled(DropdownMenu.Content, contentStyles);

const itemStyles = {
  all: 'unset',
  borderRadius: ' 0rem 0rem 1rem 1rem',
  color: 'black',
  display: 'flex',
  alignItems: 'center',
  height: '4.37rem',
  padding: '0 1rem',
  position: 'relative',
  userSelect: 'none',
  justifyContent: 'center',
  fontSize: '0.75rem',
  fontWeight: 400,
  lineHeight: '1.25rem',
  backgroundColor: '#ffffff',
  cursor: 'pointer',

  '&[data-disabled]': {
    color: mauve.mauve8,
    pointerEvents: 'none',
  },
  '&:hover': {
    borderRadius: ' 0rem 0rem .8rem .8rem',

    backgroundColor: '#FBF7FD',
  },
  '&:active': {
    borderRadius: ' 0rem 0rem .8rem .8rem',

    backgroundColor: '#FBF7FD',
  },
};

const DropdownMenuItem = styled(DropdownMenu.Item, itemStyles);

export { DropdownMenuContent, DropdownMenuItem };

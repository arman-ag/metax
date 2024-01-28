import { mauve } from '@radix-ui/colors';
import * as ContextMenu from '@radix-ui/react-context-menu';
import { styled } from '@stitches/react';

const contentStyles = {
  minWidth: 200,
  backgroundColor: 'white',
  borderRadius: 6,
  overflow: 'hidden',
  padding: 5,
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
};

const ContextMenuContent = styled(ContextMenu.Content, contentStyles);

const itemStyles = {
  fontSize: '.8rem',
  color: 'black',
  display: 'flex',
  alignItems: 'center',
  height: 25,
  padding: '0 5px',
  paddingLeft: 25,

  '&[data-disabled]': {
    color: mauve.mauve8,
    pointerEvents: 'none',
  },

  '&[data-highlighted]': {
    backgroundColor: '#FBF7FD',
  },
};

const ContextMenuItem = styled(ContextMenu.Item, itemStyles);

const RightSlot = styled('div', {
  marginLeft: 'auto',
  paddingLeft: 20,
  color: mauve.mauve11,
  '[data-highlighted] > &': { color: 'white' },
  '[data-disabled] &': { color: mauve.mauve8 },
});
const MusicIconContainer = styled('div', {
  display: 'flex',
  justifyContent: 'start',
});
export { ContextMenuContent, ContextMenuItem, MusicIconContainer, RightSlot };

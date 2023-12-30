import * as ContextMenu from '@radix-ui/react-context-menu';
import { ReactNode } from 'react';
import { ContextMenuContent, ContextMenuItem } from './rightClickStyle';
type ContextMenuContainerProps = { children: ReactNode };
const ContextMenuContainer = ({
  children,
  focusElement,
}: ContextMenuContainerProps) => {
  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger>{children}</ContextMenu.Trigger>

      <ContextMenuContent>
        <ContextMenuItem onClick={focusElement}>ویرایش فایل</ContextMenuItem>
        <ContextMenuItem>حذف فایل</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu.Root>
  );
};

export default ContextMenuContainer;

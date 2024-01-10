import * as ContextMenu from '@radix-ui/react-context-menu';
import { ReactNode } from 'react';
import { ContextMenuContent, ContextMenuItem } from './rightClickStyle';
type ContextMenuContainerProps = { children: ReactNode };
const ContextMenuContainer = ({
  children,
  handleContextRename,
  handleDeleteAction,
}: ContextMenuContainerProps) => {
  return (
    <ContextMenu.Root modal={true}>
      <ContextMenu.Trigger>{children}</ContextMenu.Trigger>
      <ContextMenuContent>
        <ContextMenuItem asChild>
          <div onClick={handleContextRename}>ویرایش فایل</div>
        </ContextMenuItem>
        <ContextMenuItem asChild>
          <div onClick={handleDeleteAction}>حذف فایل</div>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu.Root>
  );
};

export default ContextMenuContainer;

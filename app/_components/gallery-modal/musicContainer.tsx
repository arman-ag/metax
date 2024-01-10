import MusicIcon from '@/app/_assets/icon/musicIcon';
import { useRef, useState } from 'react';
import ContextMenuContainer from './contextMenuContainer';
import { FileNameDivision, MusicContainerStyle } from './style';
type MusicContainerProps = {
  fileName: string;
  id: string;
  rename: boolean;
};
const MusicContainer = ({
  item,
  diagnosisFocusItem,
  rename,
  renameAction,
  deleteAction,
}: MusicContainerProps) => {
  const [value, setValue] = useState(item.file_name);
  const inputRef = useRef();
  const handleContextRename = (event) => {
    diagnosisFocusItem(event, item.id);
    renameAction(event);
  };
  const handleDeleteAction = (event) => {
    deleteAction(event, item.id);
  };
  const handleTextAreaValue = (e) => {
    setValue(e.target.value);
  };
  const handleSubmitTextArea = (e) => {
    e.preventDefault();
    renameAction(e, item.id, value);
  };
  // useEffect(() => {
  //   const indexOfDot = value.indexOf('.');
  //   if (indexOfDot !== -1) {
  //     inputRef.current.selectionStart = indexOfDot;
  //     inputRef.current.selectionEnd = inputRef.current.value.length;
  //   }

  //   inputRef.current;
  // }, [value]);

  return (
    <div>
      <ContextMenuContainer
        handleContextRename={handleContextRename}
        handleDeleteAction={handleDeleteAction}
      >
        <MusicContainerStyle
          focus={item.focus}
          onClick={(event) => diagnosisFocusItem(event, item.id)}
        >
          <MusicIcon />
          {!(rename && item.focus) ? (
            <span>{item.file_name}</span>
          ) : (
            <FileNameDivision
              ref={inputRef}
              autoFocus
              onBlur={(event) => handleSubmitTextArea(event)}
              onChange={(event) => handleTextAreaValue(event)}
              value={value}
            />
          )}
        </MusicContainerStyle>
      </ContextMenuContainer>
    </div>
  );
};

export default MusicContainer;

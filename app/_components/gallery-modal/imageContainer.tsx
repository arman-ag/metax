import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@haip/design-system';
import { useEffect, useRef, useState } from 'react';
import ContextMenuContainer from './contextMenuContainer';
import {
  FileNameContainer,
  FileNameDivision,
  GalleryImage,
  MusicContainerStyle,
} from './style';
type MusicContainerProps = {
  fileName: string;
  id: string;
  rename: boolean;
};
const ImageContainer = ({
  item,
  diagnosisFocusItem,
  rename,
  renameAction,
  deleteAction,
}: MusicContainerProps) => {
  const [value, setValue] = useState();
  const [fileFormat, setFileFormat] = useState();

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
    const { id } = item;
    renameAction(e, id, value + fileFormat);
    console.log({ e, id, value });
  };
  //remove file format when music item mount
  useEffect(() => {
    const { file_name } = item;
    let formatIndex = file_name.lastIndexOf('.');
    let output = file_name.slice(0, formatIndex);
    let format = file_name.slice(formatIndex, file_name.length);
    setFileFormat(format);
    setValue(output);
  }, []);
  console.log('itemmmm===>', item);
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
          <GalleryImage alt='uploaded image' src={item.image_file} />

          {!(rename && item.focus) ? (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <FileNameContainer>{value}</FileNameContainer>
                </TooltipTrigger>
                <TooltipContent>
                  <span>{value}</span>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <form
              onSubmit={(event) => {
                handleSubmitTextArea(event);
              }}
            >
              <FileNameDivision
                ref={inputRef}
                autoFocus
                onBlur={(event) => handleSubmitTextArea(event)}
                onChange={(event) => handleTextAreaValue(event)}
                value={value}
              />
            </form>
          )}
        </MusicContainerStyle>
      </ContextMenuContainer>
    </div>
  );
};

export default ImageContainer;

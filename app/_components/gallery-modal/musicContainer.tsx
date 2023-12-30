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
  fileName,
  id,
  rename,
  SetRename,
}: MusicContainerProps) => {
  const [value, setValue] = useState(fileName);
  const inputRef = useRef(null);
  const [focus, setFocus] = useState(false);

  // useEffect(() => {
  //   if (true) {
  //     inputRef?.current?.focus();
  //     console.log('active=>', active);
  //   }
  // }, [inputRef?.current, active]);
  const focusElement = () => {
    SetRename();
    inputRef?.current?.focus();
    console.log('focused');
  };
  const handleMusicContainerAction = (event) => {
    event?.preventDefault();
    setFocus(true);
  };
  return (
    <div>
      <ContextMenuContainer focusElement={focusElement}>
        <MusicContainerStyle
          focus={focus}
          onClick={handleMusicContainerAction}
          id={id}
        >
          <MusicIcon />
          <FileNameDivision
            ref={inputRef}
            disabled={rename && focus}
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
        </MusicContainerStyle>
        <button style={{ marginTop: '50px' }} onClick={focusElement}>
          focus
        </button>
      </ContextMenuContainer>
    </div>
  );
};

export default MusicContainer;

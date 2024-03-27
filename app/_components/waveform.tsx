import pauseIcon from '@/app/_assets/image/pause.png';
import playIcon from '@/app/_assets/image/playe.png';
import Image from 'next/image';
import { memo, useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import {
  AudioPlayerBox,
  AudioPlayerButton,
  AudioPlayerProgressBar,
  MusicTimeRemainingContainer,
  PlayerContainerItems,
} from './style';

const Waveform = ({ audio }) => {
  const containerRef = useRef();
  const [isPlaying, toggleIsPlaying] = useState(false);
  const [audioTime, setAudioTime] = useState({});
  const [waveSurferComponent, setWaveSurferComponent] = useState(null);
  const [showMusicPlayer, setShowMusicPlayer] = useState(false);
  const waveSurferRef = useRef({
    isPlaying: () => false,
  });
  useEffect(() => {
    const waveSurfer = WaveSurfer.create({
      container: containerRef.current,
      responsive: true,
      cursorWidth: 0,
      progressColor: '#8c43c9',
      barWidth: 2.5,
      barHeight: 0.8,
      barGap: 2,
      barRadius: 40,
      backend: 'WebAudio',
      height: 45,
      width: 370,
      mediaControls: true,
    });
    if (audio) {
      waveSurfer.load(audio);
      waveSurfer.on('ready', (args) => {
        waveSurferRef.current = waveSurfer;
        setWaveSurferComponent(waveSurfer);
      });
      setShowMusicPlayer(true);
    } else {
      setShowMusicPlayer(false);
    }
    return () => {
      waveSurfer.destroy();
    };
  }, [audio]);
  useEffect(() => {
    if (waveSurferComponent) {
      const totalTime = waveSurferComponent?.getDuration() / 60;
      const currentTime = waveSurferComponent?.getCurrentTime() / 60;
      const roundTotallTime = totalTime.toFixed(2);
      const roundCurrentTime = currentTime.toFixed(2);
      setAudioTime({
        totalTime: roundTotallTime,
        currentTime: roundCurrentTime,
      });
    }
  }, [waveSurferComponent]);
  return (
    <AudioPlayerBox>
      <PlayerContainerItems>
        <AudioPlayerProgressBar ref={containerRef} />
        <AudioPlayerButton>
          <button
            disabled={!showMusicPlayer}
            onClick={() => {
              toggleIsPlaying((boolean) => !boolean);
              waveSurferRef?.current?.playPause();
            }}
            type='button'
          >
            {isPlaying ? (
              <Image width={40} height={40} src={pauseIcon} />
            ) : (
              <Image width={40} height={40} src={playIcon} />
            )}
          </button>
        </AudioPlayerButton>
        {showMusicPlayer && (
          <MusicTimeRemainingContainer>
            {audioTime?.totalTime}
          </MusicTimeRemainingContainer>
        )}
      </PlayerContainerItems>
    </AudioPlayerBox>
  );
};

export default memo(Waveform);

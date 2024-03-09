import pauseIcon from '@/app/_assets/image/pause.png';
import playIcon from '@/app/_assets/image/playe.png';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { AudioPlayerBox, AudioPlayerProgressBar } from './style';

const Waveform = ({ audio }) => {
  const containerRef = useRef();
  const [isPlaying, toggleIsPlaying] = useState(false);
  const [audioTime, setAudioTime] = useState({});
  const [waveSurferComponent, setWaveSurferComponent] = useState(null);
  const [showMusicPlayer, setShowMusicPlayer] = useState(true);
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
      barHeight: 0.6,
      barGap: 2,
      barRadius: 40,
      backend: 'WebAudio',
      height: 60,
      width: 350,
      mediaControls: true,
    });
    waveSurfer.load(audio);

    waveSurfer.on('ready', (args) => {
      waveSurferRef.current = waveSurfer;
      setWaveSurferComponent(waveSurfer);
    });
    return () => {
      waveSurfer.destroy();
    };
  }, [audio]);
  useEffect(() => {
    const totalTime = waveSurferComponent?.getDuration() / 60;
    const currentTime = waveSurferComponent?.getCurrentTime() / 60;

    const roundTotallTime = totalTime.toFixed(2);
    const roundCurrentTime = currentTime.toFixed(2);
    setShowMusicPlayer(false);
    setAudioTime({
      totalTime: roundTotallTime,
      currentTime: roundCurrentTime,
    });
  }, []);
  return (
    <>
      <AudioPlayerBox>
        <div>
          <button
            disabled={showMusicPlayer}
            style={{ marginLeft: '1.8rem' }}
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
          <AudioPlayerProgressBar ref={containerRef} />
          {showMusicPlayer && (
            <div>
              {audioTime.currentTime}/{audioTime.totalTime}
            </div>
          )}
        </div>
      </AudioPlayerBox>
    </>
  );
};

export default Waveform;

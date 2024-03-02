import pauseIcon from '@/app/_assets/image/pause.png';
import playIcon from '@/app/_assets/image/playe.png';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { AudioPlayerBox, AudioPlayerProgressBar } from './style';

const Waveform = ({ audio }) => {
  const containerRef = useRef();
  const [isPlaying, toggleIsPlaying] = useState(false);
  const [audioPlayerTime, setAudioPlayerTime] = useState();
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
      barHeight: 0.7,
      barGap: 2,
      barRadius: 40,
      backend: 'WebAudio',
      height: 60,
      width: 300,
      media: audioPlayerTime,
      mediaControls: true,
    });
    waveSurfer.load(audio);
    waveSurfer.on('ready', (args) => {
      waveSurferRef.current = waveSurfer;
      console.log('wavesurfe=====', waveSurfer.getCurrentTime());
    });

    return () => {
      waveSurfer.destroy();
    };
  }, [audio]);
  return (
    <>
      <AudioPlayerBox>
        <button
          style={{ marginLeft: '1.8rem' }}
          onClick={() => {
            toggleIsPlaying((boolean) => !boolean);
            waveSurferRef.current.playPause();
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
        {/* <span>ca:{audioPlayerTime}</span> */}
      </AudioPlayerBox>
    </>
  );
};

export default Waveform;

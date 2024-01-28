type bellProps = { className?: string };
const BellIcon = ({ className }: bellProps) => {
  return (
    <svg
      className={className}
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='bell'>
        <path
          id='Vector'
          d='M20.0007 22.6667H26.6673L24.794 20.7933C24.5424 20.5417 24.3429 20.243 24.2067 19.9142C24.0706 19.5855 24.0006 19.2331 24.0007 18.8773V14.6667C24.0009 13.0119 23.4881 11.3978 22.533 10.0465C21.5778 8.69525 20.2273 7.67329 18.6673 7.12133V6.66667C18.6673 5.95942 18.3864 5.28115 17.8863 4.78105C17.3862 4.28095 16.7079 4 16.0007 4C15.2934 4 14.6151 4.28095 14.115 4.78105C13.6149 5.28115 13.334 5.95942 13.334 6.66667V7.12133C10.2273 8.22 8.00065 11.184 8.00065 14.6667V18.8787C8.00065 19.596 7.71532 20.2853 7.20732 20.7933L5.33398 22.6667H12.0007M20.0007 22.6667H12.0007M20.0007 22.6667V24C20.0007 25.0609 19.5792 26.0783 18.8291 26.8284C18.0789 27.5786 17.0615 28 16.0007 28C14.9398 28 13.9224 27.5786 13.1722 26.8284C12.4221 26.0783 12.0007 25.0609 12.0007 24V22.6667'
          stroke='#111928'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  );
};

export default BellIcon;

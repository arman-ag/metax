const ArrowBackIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M8 16L26 16'
        stroke='#8C43C9'
        strokeWidth='2'
        strokeLinecap='round'
      />
      <path
        d='M18 5L7.60834 14.5257C6.7436 15.3184 6.7436 16.6816 7.60834 17.4743L18 27'
        stroke='#8C43C9'
        strokeWidth='2'
        strokeLinecap='round'
      />
    </svg>
  );
};

export default ArrowBackIcon;

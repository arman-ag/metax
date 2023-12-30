type cloudIconProps = {
  className?: string;
};
const CloudIcon = ({ className }: cloudIconProps) => {
  return (
    <svg
      className={className}
      width='33'
      height='32'
      viewBox='0 0 33 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M11.2144 22.5H9.57842C6.84733 22.5 4.62152 20.3086 4.57902 17.5778V17.5778C4.53558 14.7863 6.78656 12.5 9.57842 12.5H10.6865C10.9755 12.5 11.2098 12.2657 11.2098 11.9767V10.9644C11.2098 7.67036 13.8801 5 17.1742 5H17.4596C20.5942 5 23.136 7.53983 23.1384 10.6744V10.6744C23.1385 10.9095 23.3292 11.1 23.5643 11.1H23.8381C26.4151 11.1 28.5042 13.1891 28.5042 15.7662V16.8C28.5042 19.948 25.9523 22.5 22.8042 22.5H22.5046'
        stroke='#F4F4F4'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M13.1675 18.4444L16.7441 15.5832C16.9267 15.4371 17.1862 15.4371 17.3688 15.5832L20.9453 18.4444'
        stroke='#F4F4F4'
        stroke-width='2'
        stroke-linecap='round'
      />
      <path
        d='M17 15.5V24'
        stroke='#F4F4F4'
        stroke-width='2'
        stroke-linecap='round'
      />
    </svg>
  );
};

export default CloudIcon;

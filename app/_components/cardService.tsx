import Image from 'next/image';
import {
  CardContainer,
  CardHeaderContainer,
  EmptyLogoContainer,
} from './style';

const CardService = ({ serviceDescription }) => {
  return (
    <CardContainer href={serviceDescription?.address}>
      <CardHeaderContainer>
        {serviceDescription?.logo ? (
          <Image src={serviceDescription.logo} />
        ) : (
          <EmptyLogoContainer />
        )}
        <h1>{serviceDescription.title}</h1>
      </CardHeaderContainer>
      <p>{serviceDescription.description}</p>
    </CardContainer>
  );
};

export default CardService;

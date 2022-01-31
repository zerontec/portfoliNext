import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding>
   <LeftSection>
  <SectionTitle main center>

    Bienvenido  <br/>
    A my Portafolio Personal 

  </SectionTitle>
  <SectionText>
  Puedes conocer algunos de mis trabajos como desarrolador Full Stack 
  </SectionText>
  <Button onClick={() => window.location= ''}>Conoce Más</Button>

   </LeftSection>



 </Section>
);

export default Hero;
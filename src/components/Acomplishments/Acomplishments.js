import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { texta:'Tecnologías', text: 'React Redux Angular express Mongodb Postgres'},
  { texta: 'Preparación', text: 'Univesidad, Bootcamp, Cursos', },
  { texta: 'LifeHack', text: 'Constancia Preparación, Equipo ' },
 
];

const Acomplishments = () => (
<Section> 

<SectionTitle>
  personal 
</SectionTitle>
<Boxes>

  {data.map((card, index) => (

    <Box key={index}>

      <BoxNum>{card.texta}+</BoxNum>
      <BoxText>{card.text}</BoxText>


    </Box>
  ))}
</Boxes>
</Section>
);

export default Acomplishments;

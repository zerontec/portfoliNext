import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 
 <Section id='tech'>

<SectionDivider/>
<SectionTitle>Tecnologias</SectionTitle>
<SectionText>
  Desarrollo con varias tecnologias Tanto del frontend como del backend
</SectionText>
<List>


  <ListItem>
    <DiReact size='3rem'/>
    <ListContainer>
    <ListTitle>Front-End</ListTitle>
    <ListParagraph>
      Desarrollo con <br/>
      React.js, Redux
    </ListParagraph>
    </ListContainer>
  </ListItem>

  <ListItem>
    <DiFirebase size='3rem'/>
    <ListContainer>
    <ListTitle>Back-End</ListTitle>
    <ListParagraph>
      Desarrollo con <br/>
      Nodejs Express Mongodb Postgres sequelize
    </ListParagraph>
    </ListContainer>
  </ListItem>

  <ListItem>
    <DiZend size='3rem'/>
    <ListContainer>
    <ListTitle>UI/UX</ListTitle>
    <ListParagraph>
      Desarrollo con <br/>
     Herramientas como Figma
    </ListParagraph>
    </ListContainer>
  </ListItem>
</List>

 </Section>
);

export default Technologies;

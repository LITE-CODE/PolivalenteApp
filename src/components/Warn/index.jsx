import React, { useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';

import { Container, Title, TitleContainer, Type, Date, Description, Content, DateContainer, OpenButton, OpenText, FooterContainer } from './styles';
import { LightTheme } from '../../styles/themes/light';
import formatDate from '../../utils/formatDate';

const Warn = ({ title, description, date, type = 'todos' }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <Container>
      <Content>
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
        <Description numberOfLines={expanded ? 0 : 1}>
          {description}
        </Description>
      </Content>
      <FooterContainer>
        <DateContainer>
          <Feather color={LightTheme.colors.secondaryText} size={20} name='clock' />
          <Date>
            {formatDate(date, true)}
          </Date>
        </DateContainer>
        <OpenButton onPress={toggleExpansion}>
          <OpenText>{expanded ? 'Fechar' : 'Expandir'}</OpenText>
        </OpenButton>
      </FooterContainer>
    </Container>
  );
};

export default Warn;

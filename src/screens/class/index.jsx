import Feather from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import Constants from 'expo-constants';


import Backnav from '../../components/backnav';
import { Container, Content, ValueContainer, ValueText, Label } from './styles';


const Classe = () => {

  const classe = useSelector((state) => state.class);

  
  return (
    <Container statusBarHeight={Constants.statusBarHeight}>
      <Backnav text='TURMA'/>
      <Content>
        <Label>Nome</Label>
        <ValueContainer>
          <ValueText>
            {classe.name}
          </ValueText>
        </ValueContainer>

        <Label>Descrição</Label>
        <ValueContainer>
          <ValueText>
            {classe.description}
          </ValueText>
        </ValueContainer>

        <Label>Ano</Label>
        <ValueContainer>
          <ValueText>
            {classe.yearly}° ano
          </ValueText>
        </ValueContainer>

        <Label>Identificador da turma</Label>
        <ValueContainer>
          <ValueText>
            {classe.identifier}
          </ValueText>
        </ValueContainer>

        <Label>Turno</Label>
        <ValueContainer>
          <ValueText>
            {classe.shift}
          </ValueText>
        </ValueContainer>

        <Label>Alunos</Label>
        <ValueContainer>
            {
              classe.students && classe.students.map((user, index) => {
                return (
                  <ValueText key={index}>{user.name}</ValueText>
                )
              })
            }
        </ValueContainer>

        <Label>Professores</Label>
        <ValueContainer>
            {
              classe.teachers && classe.teachers.map((user, index) => {
                return (
                  <ValueText key={index}>{user.name}</ValueText>
                )
              })
            }
        </ValueContainer>

      </Content>
    </Container>
  );
  
};

export default Classe;

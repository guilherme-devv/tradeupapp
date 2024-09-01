import React, { useState } from 'react';
import {
  Container,
  HideButton,
  HideText,
  Icon,
  HideIcon,
  InputContainer,
  TInput,
  Title,
} from './styles';
import IInput from './typescript'; // Corrigido: Assumindo que IInput seja a interface correta

const Inp = (props: IInput) => {
  const [hide, setHide] = useState<boolean>(true); // Tipo booleano para hide

  return (
    <Container>
      <Title color={props.color}>{props.title}</Title>
      <InputContainer>
        <Icon name={props.icon} color={props.color} />
        <TInput
          value={props.value}
          placeholder={props.hide ? 'Senha' : 'E-mail'}
          autoCapitalize="none"
          onChangeText={props.set}
          keyboardType={props.keyboardType}
          color={props.color}
          secureTextEntry={props.hide ? hide : false}
        />
      </InputContainer>
      {props.hide && (
        <HideButton onPress={() => setHide(!hide)}>
          <HideText>{hide ? 'Mostrar senha' : 'Ocultar Senha'}</HideText>
          <HideIcon name={hide ? 'eye' : 'eye-off'} />
        </HideButton>
      )}
    </Container>
  );
};

export default Inp;

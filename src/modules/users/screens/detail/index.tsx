import React from 'react';
import {Safe} from '../../../styles';
import {
  Body,
  Card,
  Container,
  Header,
  TextContainer,
  TextItem,
  TextTitle,
} from './styles';
import { IList } from '../../../../context/typescript';

export interface DetailProps {
  route: {
    params: {
      costumer: IList;
    };
  };
}


const Detail = (props: DetailProps) => {
  const {route} = props;
  const {costumer} = route.params;

  return (
    <Safe>
      <Container>
        <Header source={{uri: `${costumer.avatar}`}}/>
        <Body>
          <Card>
            <TextContainer>
              <TextTitle>Nome</TextTitle>
              <TextItem>{costumer.first_name} {costumer.last_name}</TextItem>
            </TextContainer>
            <TextContainer>
              <TextTitle>E-mail</TextTitle>
              <TextItem>{costumer.email}</TextItem>
            </TextContainer>
          </Card>
        </Body>
      </Container>
    </Safe>
  );
};

export default Detail;

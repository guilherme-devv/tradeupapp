import React from 'react';
import colors from '../../assets/colors';
import {Container, Ldg, Logo} from './styles';
import { useGeral } from '../../context';

const Loading = () => {
  const {cLoading} = useGeral();
  const {visible} = cLoading;
  if(visible){
    return (
      <Container>
        <Logo source={require('../../assets/images/logotradeup.png')} resizeMode="contain" />
        <Ldg size={100} color={colors.font_light} />
      </Container>
    );
  }else{
    return null;
  }
};

export default Loading;

import styled from 'styled-components/native';
import colors from '../../../assets/colors';

export const Container = styled.View`
    width: 100%;
    height: 100%;
    background-color: ${colors.background_dark};
    align-items: center;
    justify-content: center;
`;
export const Ldg = styled.ActivityIndicator`
    color: blue;
`;

export const Logo = styled.Image`
    height: 60px;
`;
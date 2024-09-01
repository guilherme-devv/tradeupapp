import styled from 'styled-components/native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../../../../assets/colors';
import { Fonts } from '../../../../../assets/constants';

type PropsColor = {
    color: string;
}


export const Container = styled.View`
    width: 100%;
    margin-bottom: 30px;
`;
export const Title = styled.Text<PropsColor>`
    font-family: ${Fonts.family};
    font-weight: bold;
    margin-bottom: 16px;
    color: ${props => props.color ? props.color : colors.background_dark};
`;
export const InputContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const TInput = styled.TextInput<PropsColor>`
    border-width: 1px;
    border-radius: 8px;
    border-color: ${props => props.color ? props.color : colors.button_dark};
    width: 100%;
    padding-left: 50px;
    padding-top: 6px;
    padding-bottom: 8px;
    font-size: ${Fonts.normal}px;
`;
export const Icon = styled(Icons)<PropsColor>`
    font-size: ${Fonts.titles}px;
    color: ${props => props.color ? props.color : colors.background_dark};
    margin-right: 50px;
    margin-left: 16px;
    position: absolute;
`;

export const HideIcon = styled(Icons)`
    font-size: ${Fonts.titles}px;
    color: ${colors.background_dark};
`;

export const HideButton = styled.TouchableOpacity` 
    align-self: flex-end;
    margin-top: 20px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const HideText = styled.Text`
    font-family: ${Fonts.family};
    color: ${colors.text_blue};
    margin-right: 5px;
`;
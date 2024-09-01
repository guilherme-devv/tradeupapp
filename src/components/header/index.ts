import colors from '../../assets/colors';
import {INoHeader,IHeader} from './typescript';
import LogoTitle from './LogoTitle';

export const noHeader: INoHeader = {
  headerShown: false,
};

export const Header: IHeader = {
  headerStyle: {
    backgroundColor: colors.background_dark,
  },
  headerTintColor: 'blue',
  headerTitleContainerStyle:{
    left: 0,
  },
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
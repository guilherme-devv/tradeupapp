import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {noHeader, Header} from '../../components/header';
import SBar from '../../components/statusbar';

import SignIn from '../../modules/signin';
import List from '../../modules/users/screens/list';
import Detail from '../../modules/users/screens/detail';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <SBar />
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} options={noHeader} />
        <Stack.Screen name="List" component={List} options={{...Header, title: "Lista de Usuários"}} />
        <Stack.Screen name="Detail" component={Detail} options={{...Header, title:"Detalhe do Usuário"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

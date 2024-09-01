import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

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
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false  }} />
        <Stack.Screen name="List" component={List} options={{ title: "Lista de Usuários"}} />
        <Stack.Screen name="Detail" component={Detail} options={{ title:"Detalhe do Usuário"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

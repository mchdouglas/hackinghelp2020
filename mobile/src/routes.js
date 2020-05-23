import React from ' react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home/index.js';
import CadastroUse from './pages/Cadastros/Usuarios.js';

const Stack = createStackNavigator();

() => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CadastroUse" component={CadastroUse} />
    </Stack.Navigator>
  );
};

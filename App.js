import * as React from 'react';
import { MenuProvider } from 'react-native-popup-menu';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './src/navegation/NavegationStack';
import { initDatabase } from './database-service';

function App() {
  /* Este código solo se usa cuando se cambia la base de datos constantemente pues borra el archivo guardado. */
  //initDatabase();
  
  return (
    <SafeAreaProvider>
      <MenuProvider>
        <NavigationContainer>
          <NavigationStack />
        </NavigationContainer>
      </MenuProvider>
    </SafeAreaProvider>
  );
}

export default App;

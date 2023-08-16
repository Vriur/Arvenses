import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TaxonomyCategory from '../screens/TaxonomicCategory';
import TaxonomySubCategory from '../screens/TaxonomicSubCategory';
import TaxonomyAttributes from '../screens/TaxonomicAttributes';
import TaxonomyIconInformation from '../screens/TaxonomicIconInformation';

const TaxonomyStack = createNativeStackNavigator();

const NavigationTaxonomyStack = () => {
  return (
    <TaxonomyStack.Navigator screenOptions = {{headerShown: false}}>
      <TaxonomyStack.Screen name = 'TaxonomicCategory' component = {TaxonomyCategory} />
      <TaxonomyStack.Screen name = 'TaxonomicSubCategory' component = {TaxonomySubCategory} />
      <TaxonomyStack.Screen name = 'TaxonomicAttributes' component = {TaxonomyAttributes} />
      <TaxonomyStack.Screen name = 'TaxonomicIconInformation' component = {TaxonomyIconInformation} />
    </TaxonomyStack.Navigator>
  );
};

export default NavigationTaxonomyStack;
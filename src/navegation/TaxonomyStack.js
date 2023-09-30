import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TaxonomyCategory from '../screens/TaxonomicCategory';
import TaxonomySubCategory from '../screens/TaxonomicSubCategory';
import TaxonomyAttributes from '../screens/TaxonomicAttributes';
import TaxonomyIconInformation from '../screens/TaxonomicIconInformation';
import TaxonomyMissingInformation from '../screens/TaxonomicMissingInformation';
import TaxonomicMarks from '../screens/TaxonomicMarks';
import TaxonomyFlowerCategories from '../screens/TaxonomyFlowerCategories';
import TaxonomicResults from '../screens/TaxonomicResults';

const TaxonomyStack = createNativeStackNavigator();

const NavigationTaxonomyStack = () => {
  return (
    <TaxonomyStack.Navigator screenOptions = {{headerShown: false, animation: 'none'}}>
      <TaxonomyStack.Screen name = 'TaxonomicCategory' component = {TaxonomyCategory} />
      <TaxonomyStack.Screen name = 'TaxonomicSubCategory' component = {TaxonomySubCategory} />
      <TaxonomyStack.Screen name = 'TaxonomicFlowerCategories' component = {TaxonomyFlowerCategories} />
      <TaxonomyStack.Screen name = 'TaxonomicAttributes' component = {TaxonomyAttributes} />
      <TaxonomyStack.Screen name = 'TaxonomicIconInformation' component = {TaxonomyIconInformation} />
      <TaxonomyStack.Screen name = 'TaxonomicMissingInformation' component = {TaxonomyMissingInformation} />
      <TaxonomyStack.Screen name = 'TaxonomicMarks' component = {TaxonomicMarks} />
      <TaxonomyStack.Screen name = 'TaxonomicResults' component = {TaxonomicResults} />
    </TaxonomyStack.Navigator>
  );
};

export default NavigationTaxonomyStack;
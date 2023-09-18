import { configureStore } from '@reduxjs/toolkit';
import TaxonomicOptionsReducer from './TaxonomicOptionsSlice';

/**
 * El desarrollo de este archivo se llevo a cabo para administrar el estado de las opciones taxonómicas 
 * elegidas a lo largo de la aplicación. La documentación utilizada para esta sección se encuenta en 
 * https://redux.js.org/tutorials/essentials/part-3-data-flow.
 */
export default configureStore({
    reducer: {
        taxonomicOptions: TaxonomicOptionsReducer
    }
});
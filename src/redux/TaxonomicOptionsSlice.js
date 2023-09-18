import { createSlice } from '@reduxjs/toolkit';

/**
 * El desarrollo de este archivo se llevo a cabo para administrar el estado de las opciones taxonómicas 
 * elegidas a lo largo de la aplicación. La documentación utilizada para esta sección se encuenta en 
 * https://redux.js.org/tutorials/essentials/part-3-data-flow.
 */
const initialState = [];

const TaxonomicOptionsSlice = createSlice({
    name: 'taxonomicOptions',
    initialState,
    reducers: {
        AddTaxonomicOption(state, action){
            state.push(action.payload)
        },

        DeleteTaxonomicOption(state, action){
            return state.filter((item) => item.route != action.payload);
        },

        DeleteAllTaxonomicOptions(state){
            return [];
        },
    }
});

export const { AddTaxonomicOption, DeleteTaxonomicOption, DeleteAllTaxonomicOptions, ExistTaxonomicOption } = TaxonomicOptionsSlice.actions
export default TaxonomicOptionsSlice.reducer;
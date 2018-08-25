import { createSelector } from 'reselect';

/**
 * Direct selector to the Homepage state domain
 */
const selectHomepage = (state) => state.get('homepage');

const makeSelectLoading = () =>
  createSelector(selectHomepage, (substate) => substate.get('loading'));

const makeSelectIngredients = () =>
  createSelector(selectHomepage, (substate) =>
    substate.get('ingredients').toJS()
  );

export {
  selectHomepage,
  makeSelectLoading,
  makeSelectIngredients,
};
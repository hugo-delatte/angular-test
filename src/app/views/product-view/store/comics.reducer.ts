import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {createFeature, createFeatureSelector, createReducer, createSelector, on} from "@ngrx/store";
import {getComics, getComicsSuccess} from "./product.actions";
import {Comics} from "../../../model/Comics";

export const COMICS_FEATURE_KEY = 'Comics';

export interface ComicsState extends EntityState<Comics> {
  comicsLoading: boolean;
}

export const comicsAdapter = createEntityAdapter<Comics>({
  selectId : (e) => e.title as string
});

export const initialState = comicsAdapter.getInitialState();
export const comicsFeature = createFeature(
  {
    name: COMICS_FEATURE_KEY,
    reducer: createReducer(
      initialState,
      on(getComics, state => ({...state, comicsLoading: true})),
      on(getComicsSuccess, (state, {comics}) => {
        //TODO: return the state updated with comics
      })),
    extraSelectors: ({selectComicsState}) => ({
      ...comicsAdapter.getSelectors(selectComicsState)
    })
  }
);

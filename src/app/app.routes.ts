import {Routes} from '@angular/router';
import {ProductViewComponent} from "./views/product-view/product-view.component";
import {provideState} from "@ngrx/store";
import {comicsFeature} from "./views/product-view/store/comics.reducer";
import {provideEffects} from "@ngrx/effects";
import {ComicsEffects} from "./views/product-view/store/comics.effects";

export const routes: Routes = [
  {
    path: 'products',
    providers: [
      provideState(comicsFeature),
      provideEffects(ComicsEffects)
    ],
    component: ProductViewComponent
  }
];

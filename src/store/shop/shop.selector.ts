import { createSelector } from 'reselect';
import { ShopState } from './shop.reducer';
import { Product, Products } from './shop.types';

const selectShopSlice = (state: any): ShopState => state.shop;

export const selectIsShowSpiciness = createSelector(
  [selectShopSlice],
  (shop: ShopState): boolean => shop.isShowSpiciness
);

export const selectError = createSelector(
  [selectShopSlice],
  (shop: ShopState): Error | null => shop.error
);

export const selectIsLoading = createSelector(
  [selectShopSlice],
  (shop: ShopState): boolean => shop.isLoading
);

export const selectIsLoaded = createSelector(
  [selectShopSlice],
  (shop: ShopState): boolean => shop.isLoaded
);

export const selectShopDatabase = createSelector(
  [selectShopSlice],
  (shop: ShopState): Products => shop.shopDatabase
);

export const selectProducts = createSelector(
  [selectShopDatabase],
  (shopDatabase: Products): Product[] => shopDatabase.items
);

export const selectCategories = createSelector(
  [selectShopDatabase],
  (shopDatabase: Products): string[] => shopDatabase.items
    .map((product: Product): string => product.category.toLowerCase())
    .reduce((filterOffDuplicates: string[], entry: string) =>
      filterOffDuplicates.includes(entry)
        ? filterOffDuplicates
        : [...filterOffDuplicates, entry], [])
);
import { createSelector } from 'reselect';

const selectShopSlice = state => state.shop;

export const selectIsShowSpiciness = createSelector(
  [selectShopSlice],
  shop => shop.isShowSpiciness
);

export const selectError = createSelector(
  [selectShopSlice],
  shop => shop.error
);

export const selectIsLoading = createSelector(
  [selectShopSlice],
  shop => shop.isLoading
);

export const selectIsLoaded = createSelector(
  [selectShopSlice],
  shop => shop.isLoaded
);

export const selectShopDatabase = createSelector(
  [selectShopSlice],
  shop => shop.shopDatabase
);

export const selectProducts = createSelector(
  [selectShopDatabase],
  shopDatabase => {
    const [products] = shopDatabase
      .map(_ => _)
      .filter(databaseCategory => databaseCategory.title.toLowerCase() === 'products')
    return products.items
  }
);

export const selectCategories = createSelector(
  [selectProducts],
  products => products
    .map(product => product.category.toLowerCase())
    .reduce((filterOffDuplicates, entry) =>
      filterOffDuplicates.includes(entry)
        ? filterOffDuplicates
        : [...filterOffDuplicates, entry], [])
);
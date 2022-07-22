import { createSelector } from 'reselect';

export const selectIsShowSpiciness = state => state.shop.isShowSpiciness;

export const selectIsLoaded = state => state.shop.isLoaded;

export const selectIsLoading = state => state.shop.isLoading;

const selectShopDatabase = state => state.shop.shopDatabase;

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
import type { ReduxState } from "@/lib/redux";

export const productsSelector = (state: ReduxState) => state.products;
export const productsItemsSelector = (state: ReduxState) =>
  state.products.items;
export const activeProductSelector = (state: ReduxState) => {
  const products = state.products;

  if (products.active) {
    return products.items.find((product) => {
      return product.id === products.active;
    });
  }
};

export const isFormOpenSelector = (state: ReduxState) =>
  state.products.isFormOpen;

// export const filterByIdSelector = (state: ReduxState) => {
//   const products = state.products;
//   return products.items.filter((item) => {
//     return item.id !== products.id;
//   });
// };

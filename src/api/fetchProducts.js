const URL_ALLPRODUCTS = "https://api.mercadolibre.com/sites/MLB/search?q=";

const URL_PRODUCTBYID = "https://api.mercadolibre.com/items/";

export const fetchProducts = async (query) => {
  const response = await fetch(`${URL_ALLPRODUCTS}${query}`);
  const data = await response.json();

  return data.results;
};

export const fetchProductsByID = async (id) => {
  const response = await fetch(`${URL_PRODUCTBYID}${id}`);
  const data = await response.json();

  return data;
};

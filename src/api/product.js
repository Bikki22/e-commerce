import { apiClient } from "./apiClient";

async function getProduct() {
  try {
    return await apiClient.customFetch("/products");
  } catch (error) {
    console.log("failed to fetch products:", error);
  }
}

async function getProductById(id) {
  try {
    return await apiClient.customFetch(`/products/${id}`);
  } catch (error) {
    console.log("failed to fetch products:", error);
  }
}

export { getProduct, getProductById };

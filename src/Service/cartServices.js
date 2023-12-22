import apiClient from "../utils/api-client";

export function addToCartAPI(id, quantity) {
  return apiClient.post(`/cart/${id}`, { quantity });
}

export async function getCartAPI() {
  return await apiClient.get("/cart");
}

export function removeFromCartAPI(id) {
  return apiClient.patch(`/cart/remove/${id}`);
}

// increase 는 카트페이지의 상품 증가
export function increaseProductAPI(id) {
  return apiClient.patch(`/cart/increase/${id}`);
}
// decrease 는 카트페이지의 상품 감소
export function decreaseProductAPI(id) {
  return apiClient.patch(`/cart/decrease/${id}`);
}

import apiClient from "../utils/api-client";

export async function signup(user, profile) {
  const body = new FormData();
  body.append("name", user.name);
  body.append("email", user.email);
  body.append("password", user.password);
  body.append("deliveryAddress", user.deliveryAddress);
  body.append("profilePic", profile);

  await apiClient.post("/user/signup", body);
}

export async function login(user) {
  const body = new FormData();
  body.append("email", user.email);
  body.append("password", user.password);

  await apiClient.post("/user/login", body);
}

import apiClient from "../utils/api-client";

export async function signup(user, profile) {
  const body = new FormData();
  body.append("name", user.name);
  body.append("email", user.email);
  body.append("password", user.password);
  body.append("deliveryAddress", user.deliveryAddress);
  body.append("profilePic", profile);

  const { data } = await apiClient.post("/user/signup", body);
  localStorage.setItem("token", data.token);
  // 회원가입하면 홈으로 이동
  window.location = "/";
}

export async function login(user) {
  const body = new FormData();
  body.append("email", user.email);
  body.append("password", user.password);

  const { data } = await apiClient.post("/user/login", user);
  localStorage.setItem("token", data.token);
  // 로그인하면 홈으로 이동
  window.location = "/";
}

import axios from "axios";

// axios에 미리 백엔드 앞부분 주소를 저장함
export default axios.create({
  baseURL: "http://localhost:5000/api",
});

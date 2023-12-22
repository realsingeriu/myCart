import { Navigate, Outlet } from "react-router-dom";

// 유저인증 됬으면 요청한 자식 컴포넌트
const ProtectedRoute = ({ user }) => {
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;

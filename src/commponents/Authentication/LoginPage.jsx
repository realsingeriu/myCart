import { useRef, useState } from "react";
import "./LoginPage.css";

const LoginPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);

    // submit 버튼 누르면 상태 초기화
    setUser({ email: "", password: "" });
  };

  // 리액트에서 특정 태그를 선택하는 방법
  const passwordRef = useRef(null);
  return (
    <section className="align_center form_page">
      <form className="authentication_form">
        <h2>로그인 폼</h2>
        <div className="form_inputs">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form_text_input"
              placeholder="이메일 입력..."
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              ref={passwordRef}
              id="password"
              className="form_text_input"
              placeholder="패스워드 입력..."
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          {/* <button
            type="button"
            onClick={() => console.log(passwordRef.current.type = "password")}
          >
            비밀번호 숨기기
          </button>
          <button
            type="button"
            onClick={() => (passwordRef.current.type = "text")}
          >
            비밀번호 보이게
          </button> */}
          <button type="submit" className="search_button form_submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;

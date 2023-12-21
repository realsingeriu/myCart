import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import "./LoginPage.css";
import { login } from "../../Service/useService";

const LoginPage = () => {
  // // 리액트에서 특정 태그를 선택하는 방법
  // const passwordRef = useRef(null);

  const [formError, setFormError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitData = async (formData) => {
    try {
      await login(formData);

      window.location = "/";
    } catch (err) {
      setFormError(err.response.data.message);
    }
  };

  return (
    <section className="align_center form_page">
      <form onSubmit={handleSubmit(submitData)} className="authentication_form">
        <h2>로그인 폼</h2>
        <div className="form_inputs">
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="form_text_input"
              placeholder="이메일 입력..."
              {...register("email", { required: "이메일을 입력해주세요" })}
            />
            {errors.email && (
              <em className="form_error">{errors.email.message}</em>
            )}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              className="form_text_input"
              placeholder="패스워드 입력..."
              {...register("password", {
                required: "패스워드를 입력해주세요",
                minLength: { value: 8, message: "패스워드는 최소 8자 이상." },
              })}
            />
            {errors.password && (
              <em className="form_error">{errors.password.message}</em>
            )}
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
          {formError && <em className="form_error">{formError}</em>}

          <button type="submit" className="search_button form_submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;

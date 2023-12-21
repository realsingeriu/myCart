import { useForm } from "react-hook-form";

import "./SignupPage.css";
import user from "../../assets/user.webp";
import { useState } from "react";
import { signup } from "../../Service/useService";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();
  // 프로필 이미지 상태 관리
  const [profilePic, setProfilePic] = useState(null);
  const [formError, setFormError] = useState("");
  // react-hook-form 에서 제공하는 hook 사용
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  // 폼입력창에 작성한 데이터 객체 formData와 이미지파일을 signup 함수에 전달
  const submitData = async (formData) => {
    try {
      await signup(formData, profilePic);
    } catch (error) {
      setFormError(error.response.data.message);
    }
  };

  // 프로필 이미지 상태 확인
  //console.log(profilePic);

  return (
    <section className="align_center form_page">
      <form
        className="authentication_form signup_form"
        onSubmit={handleSubmit(submitData)}
      >
        <h2>회원가입 폼</h2>
        {/* 이미지 업로드 섹션 */}
        <div className="image_input_section">
          {/* 이미지 미리 보기  */}
          <div className="image_preview">
            <img
              src={profilePic ? URL.createObjectURL(profilePic) : user}
              id="file-ip-1-preview"
              alt="Profile Preview"
            />
          </div>
          {/* 이미지 업로드 레이블  */}
          <label htmlFor="file-ip-1" className="image_label">
            이미지 업로드
          </label>
          {/* 이미지 업로드 입력 필드  */}
          <input
            onChange={(e) => setProfilePic(e.target.files[0])}
            type="file"
            id="file-ip-1"
            className="image_input"
          />
        </div>

        {/* 폼 입력 항목*/}
        <div className="form_inputs signup_form_input">
          {/* 이름 입력 */}
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              className="form_text_input"
              type="text"
              placeholder="이름 입력..."
              {...register("name", {
                required: "이름을 입력해주세요.",
                minLength: { value: 2, message: "이름은 최소 2자 이상" },
                maxLength: { value: 10, message: "이름은 최대 10자 이하" },
              })}
            />
            {errors.name && (
              <em className="form_error">{errors.name.message}</em>
            )}
          </div>

          {/* 이메일 입력 */}
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="form_text_input"
              type="email"
              placeholder="이메일 입력..."
              {...register("email", {
                required: "이메일을 입력해주세요.",
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "올바른 이메일 주소를 입력하세요.",
                },
              })}
            />
            {errors.email && (
              <em className="form_error">{errors.email.message}</em>
            )}
          </div>
          {/* 패스워드 입력 */}
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              className="form_text_input"
              type="password"
              placeholder="패스워드 입력..."
              {...register("password", {
                required: "패스워드를 입력해주세요.",
                minLength: { value: 4, message: "패스워드는 최소 4자 이상." },
              })}
            />
            {errors.password && (
              <em className="form_error">{errors.password.message}</em>
            )}
          </div>
          {/* 패스워드 확인 입력  */}
          <div>
            <label htmlFor="cpassword">Confirm Password</label>
            <input
              id="cpassword"
              className="form_text_input"
              type="password"
              placeholder="패스워드 확인 입력..."
              {...register("confirmPassword", {
                required: true,
                validate: (value) => {
                  if (watch("password") != value) {
                    return "패스워드가 맞지 않습니다.";
                  }
                },
              })}
            />
            {errors.confirmPassword && (
              <em className="form_error">{errors.confirmPassword.message}</em>
            )}
          </div>
          {/* 배송주소 입력 */}
          <div className="signup_textares_section">
            <label htmlFor="address">Delivery Address</label>
            <textarea
              id="address"
              className="input_textarea"
              placeholder="배송주소 입력..."
              {...register("deliveryAddress", {
                required: "배송주소를 입력해주세요.",
                minLength: { value: 10, message: "배송주소는 최소 10자 이상." },
              })}
            />
            {errors.deliveryAddress && (
              <em className="form_error">{errors.deliveryAddress.message}</em>
            )}
          </div>
        </div>
        {/* 가입 에러 발생시 표시하기 */}
        {formError && <em className="form_error">{formError}</em>}

        {/* 입력 완료 버튼  */}
        <button className="search_button form_submit" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default SignupPage;

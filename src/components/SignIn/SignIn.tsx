import { FC, useState } from "react";
import "./SignIn.scss";
import ReactPlayer from "react-player";
import { Formik } from "formik";
import * as Yup from "yup";

const SignIn: FC = () => {
  const [isRegister, setIsRegister] = useState(false);
  const regOrLogin = isRegister ? "Регистрация" : "Авторизация";

  const switchClickHandler = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div className="signIn-container">
      <div className="signIn-container--inner">
        <div className="signIn-container--left">
          <div className="signIn-overlay">
            <div className="signIn-overlay_title">{isRegister ? "Добро Пожаловать!" : "С Возвращением!"}</div>
            <div className="signIn-overlay_subtitle">тут нужно придумать классную надпись, чтобы было вкусно!</div>
          </div>
          <ReactPlayer
            className="signIn-video"
            url="http://94.142.139.111/preview.mp4"
            playing
            loop
            volume={0}
            muted
            controls={false}
            width="890px"
            height="501px"
          />
          <div className="signIn-video"></div>
        </div>
        <div className="signIn-container--right">
          <div className="signIn-form-title">{regOrLogin} пользователя</div>
          <Formik
            initialValues={{ nickName: "", email: "", password: "", repeatPassword: "" }}
            validationSchema={Yup.object({
              nickName: isRegister ? Yup.string().required("Required") : Yup.string(),
              email: Yup.string().email("Invalid email address").required("Required"),
              password: Yup.string().max(20, "Must be 20 characters or less").required("Required"),
              repeatPassword: isRegister
                ? Yup.string()
                    .required("Required")
                    .oneOf([Yup.ref("password")], "Пароли не совпадают")
                : Yup.string(),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                console.log(JSON.stringify(values, null, 2));
                setSubmitting(false);
                resetForm();
              }, 400);
            }}
          >
            {(formik) => (
              <form onSubmit={formik.handleSubmit}>
                <div className="signIn-fields">
                  {isRegister && (
                    <div className="signIn-fields_field">
                      <input
                        type="text"
                        className="signIn-fields_field-input"
                        id="nickName"
                        placeholder="Имя пользователя"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.nickName}
                      />
                      {formik.touched.nickName && formik.errors.nickName ? <div className="signIn-formik_error">{formik.errors.nickName}</div> : null}
                    </div>
                  )}
                  <div className="signIn-fields_field">
                    <input
                      type="email"
                      className="signIn-fields_field-input"
                      id="email"
                      placeholder="E-mail"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? <div className="signIn-formik_error">{formik.errors.email}</div> : null}
                  </div>
                  <div className="signIn-fields_field">
                    <input
                      type="password"
                      className="signIn-fields_field-input"
                      id="password"
                      placeholder="Пароль"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? <div className="signIn-formik_error">{formik.errors.password}</div> : null}
                  </div>
                  {isRegister && (
                    <div className="signIn-fields_field">
                      <input
                        type="password"
                        className="signIn-fields_field-input"
                        id="repeatPassword"
                        placeholder="Повторите пароль"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.repeatPassword}
                      />
                      {formik.touched.repeatPassword && formik.errors.repeatPassword ? (
                        <div className="signIn-formik_error">{formik.errors.repeatPassword}</div>
                      ) : null}
                    </div>
                  )}
                </div>
                <div className="signIn-buttons">
                  <div className="signIn-buttons_submit">
                    <button className="signIn-buttons_submit-button" type="submit">
                      {regOrLogin}
                    </button>
                  </div>
                  <div className="signIn-buttons_switch">
                    <div className="signIn-buttons_switch-title">{isRegister ? "Уже есть аккаунт?" : "Ещё нет аккаунта?"}</div>
                    <div className="signIn-buttons_switch-subtitle" onClick={switchClickHandler}>
                      {isRegister ? "Авторизоваться" : "Зарегистрироваться"}
                    </div>
                  </div>
                </div>
              </form>
            )}
          </Formik>
          <div className="signIn-bottom">
            <div className="signIn-bottom_circle">
              <div className="signIn-bottom_circle-text">ИЛИ</div>
            </div>
            <div className="signIn-bottom_servises">
              <div className="signIn-bottom_servises-item">G</div>
              <div className="signIn-bottom_servises-item">VK</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

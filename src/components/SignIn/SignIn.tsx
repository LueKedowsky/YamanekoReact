import { FC, useState } from "react";
import "./SignIn.scss";
import ReactPlayer from "react-player";
import { Formik } from "formik";
import * as Yup from "yup";

const SignIn: FC = () => {
  const [isRegister, setIsRegister] = useState(false);
  const regOrLogin = isRegister ? "Регистрация" : "Авторизация";

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
              nickName: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
              email: Yup.string().email("Invalid email address").required("Required"),
              password: Yup.string().max(20, "Must be 20 characters or less").required("Required"),
              repeatPassword: Yup.string().max(20, "Must be 20 characters or less").required("Required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {(formik) => (
              <form onSubmit={formik.handleSubmit}>
                <div className="signIn-fields">
                  {isRegister && (
                    <div className="signIn-fields_field">
                      <input type="text" className="signIn-fields_field-input" placeholder="Имя пользователя" />
                    </div>
                  )}
                  <div className="signIn-fields_field">
                    <input type="email" className="signIn-fields_field-input" placeholder="E-mail" />
                  </div>
                  <div className="signIn-fields_field">
                    <input type="password" className="signIn-fields_field-input" placeholder="Пароль" />
                  </div>
                  {isRegister && (
                    <div className="signIn-fields_field">
                      <input type="password" className="signIn-fields_field-input" placeholder="Порторите пароль" />
                    </div>
                  )}
                </div>
                <div className="signIn-buttons">
                  <div className="signIn-buttons_submit">
                    <button className="signIn-buttons_submit-button">{regOrLogin}</button>
                  </div>
                  <div className="signIn-buttons_switch">
                    <div className="signIn-buttons_switch-title">{isRegister ? "Уже есть аккаунт?" : "Ещё нет аккаунта?"}</div>
                    <div className="signIn-buttons_switch-subtitle">{isRegister ? "Авторизоваться" : "Зарегистрироваться"}</div>
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

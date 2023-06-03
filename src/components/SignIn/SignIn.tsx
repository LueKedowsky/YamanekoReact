import { FC, useState } from 'react';
import './SignIn.scss';
import ReactPlayer from 'react-player';
import { Formik } from 'formik';
import * as Yup from 'yup';

const SignIn: FC = () => {
  const [isRegister, setIsRegister] = useState(false);
  const regOrLogin = isRegister ? 'Регистрация' : 'Авторизация';

  const switchClickHandler = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div className="signIn-container">
      <div className="signIn-container--inner">
        <div className="signIn-container--left">
          <div className="signIn-overlay">
            <div className="signIn-overlay_title">
              {isRegister ? 'Добро Пожаловать!' : 'С Возвращением!'}
            </div>
            <div className="signIn-overlay_subtitle">
              тут нужно придумать классную надпись, чтобы было вкусно!
            </div>
          </div>
          <ReactPlayer
            className="signIn-video"
            url="https://yamaneko.fun/files/preview.mp4"
            playing
            loop
            volume={0}
            muted
            controls={false}
            width="890px"
            height="501px"
          />
          <div className="signIn-video" />
        </div>
        <div className="signIn-container--right">
          <div className="signIn-form-title">{regOrLogin} пользователя</div>
          <Formik
            initialValues={{
              nickName: '',
              email: '',
              password: '',
              repeatPassword: '',
            }}
            validationSchema={Yup.object({
              nickName: isRegister
                ? Yup.string().required('🠕 заполните поле выше 🠕')
                : Yup.string(),
              email: Yup.string()
                .matches(
                  /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                  'E-mail должен быть в формате "my@email.ru"'
                )
                .required('🠕 заполните поле выше 🠕'),
              password: Yup.string()
                .required('🠕 заполните поле выше 🠕')
                .min(6, 'Введите минимум 6 символов пароля'),
              repeatPassword: isRegister
                ? Yup.string()
                    .required('🠕 заполните поле выше 🠕')
                    .oneOf([Yup.ref('password')], 'Пароли не совпадают')
                : Yup.string(),
            })}
            validateOnBlur={false}
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
                        className={
                          formik.touched.nickName && formik.errors.nickName
                            ? 'signIn-fields_field-input error'
                            : 'signIn-fields_field-input'
                        }
                        id="nickName"
                        placeholder="Имя пользователя"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.nickName}
                      />
                      {formik.touched.nickName && formik.errors.nickName ? (
                        <div className="signIn-formik_error">
                          {formik.errors.nickName}
                        </div>
                      ) : null}
                      {/* <div className="signIn-formik_error">
                        {formik.errors.nickName}
                      </div> */}
                    </div>
                  )}
                  <div className="signIn-fields_field">
                    <input
                      type="email"
                      className={
                        formik.touched.email && formik.errors.email
                          ? 'signIn-fields_field-input error'
                          : 'signIn-fields_field-input'
                      }
                      id="email"
                      placeholder="E-mail"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="signIn-formik_error">
                        {formik.errors.email}
                      </div>
                    ) : null}
                  </div>
                  <div className="signIn-fields_field">
                    <input
                      type="password"
                      className={
                        formik.touched.password && formik.errors.password
                          ? 'signIn-fields_field-input error'
                          : 'signIn-fields_field-input'
                      }
                      id="password"
                      placeholder="Пароль"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <div className="signIn-formik_error">
                        {formik.errors.password}
                      </div>
                    ) : null}
                  </div>
                  {isRegister && (
                    <div className="signIn-fields_field">
                      <input
                        type="password"
                        className={
                          formik.touched.repeatPassword &&
                          formik.errors.repeatPassword
                            ? 'signIn-fields_field-input error'
                            : 'signIn-fields_field-input'
                        }
                        id="repeatPassword"
                        placeholder="Повторите пароль"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.repeatPassword}
                      />
                      {formik.touched.repeatPassword &&
                      formik.errors.repeatPassword ? (
                        <div className="signIn-formik_error">
                          {formik.errors.repeatPassword}
                        </div>
                      ) : null}
                    </div>
                  )}
                </div>
                <div className="signIn-buttons">
                  <button
                    className="signIn-buttons_submit-button"
                    type="submit"
                  >
                    {regOrLogin}
                  </button>
                  <div className="signIn-buttons_switch">
                    <div className="signIn-buttons_switch-title">
                      {isRegister ? 'Уже есть аккаунт?' : 'Ещё нет аккаунта?'}
                    </div>
                    <div
                      className="signIn-buttons_switch-subtitle"
                      role="button"
                      tabIndex={0}
                      onClick={switchClickHandler}
                    >
                      {isRegister ? 'Авторизоваться' : 'Зарегистрироваться'}
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

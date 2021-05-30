import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import MaskedInput from 'react-text-mask';

import sendIconImg from '../../../../assets/img/send_icon.svg';

import './UserForm.module.scss';
import style from './UserForm.module.scss';

const phoneNumberMask = [
    '+',
    '7',
    ' ',
    /[1-9]/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/
];

const UserForm = () => (
    <div className={style.userForm}>
        <p>Оставьте заявку, и мы позвоним вам в ближайшее время</p>
        <Formik
            initialValues={{ phone: '' }}

            validationSchema={Yup.object().shape({
                phone: Yup.string()
                    .matches(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/, {
                        message: 'Проверьте набранный номер'
                    })
            })}

            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 500);
            }}
        >
            {props => {
                const {
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit
                } = props;
                console.log(props);
                const x = props.values.phone.split('');
                return (
                    <Form
                        onSubmit={handleSubmit}
                    >
                        <Field
                            name='phone'
                            render={({ field }) => (
                                <MaskedInput
                                    {...field}
                                    mask={phoneNumberMask}
                                    id='phone'
                                    type='text'
                                    showMask
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        errors.phone && touched.phone
                                            ? `${style.input} ${style.error}`
                                            : style.input
                                    }
                                />
                            )}
                        />

                        {errors.phone && touched.phone && (
                            <div className={style.inputFeedback}>
                                <div className={style.errorAttention}>
                                    !
                                </div>
                                <p>{errors.phone}</p>
                            </div>
                        )}

                        <div className={style.userForm__button}>
                            <div className={style.userForm__buttonBottom}>
                                <button type='submit' disabled={isSubmitting} className={style.userForm__buttonTop}>
                                    <p>Отправить заявку</p>
                                    <img src={sendIconImg} alt="svg" />
                                </button>
                            </div>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    </div>
);

export default UserForm;

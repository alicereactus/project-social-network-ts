import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

const LoginForm: React.FC<InjectedFormProps> = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'Login'} component={'input'} name={'login'} />
            </div>
            <div>
                <Field placeholder={'Password'} component={'input'} name={'password'} />
            </div>
            <div>
                <Field component={'input'} type={'checkbox'} name={'rememberMe'} />Remember me
            </div>
            <div>
                <button>Sign in</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login: React.FC = () => {
    const onSubmit = (formData: any) => {
        console.log(formData)
    }

    return <div style={{ color: 'white' }}>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

export default Login;
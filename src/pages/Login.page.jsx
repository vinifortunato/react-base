import { Link, useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import DefaultInput from '../components/DefaultInput';
import { Header } from '../components';
import userActions from '../store/modules/user/user.actions';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: 'teste@teste.com',
      password: '123',
    },
  });

  const onSubmit = (data) => {
    const { email, password } = data;
    dispatch(userActions.setUser('Vinicius', email, password));

    navigate('/lobby');
  };

  return (
    <div>
      <Header />
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="email"
          render={({ field }) => {
            const { name, onChange, value } = field;
            return (
              <DefaultInput name={name} onChange={onChange} value={value} />
            );
          }}
        />
        <Controller
          control={control}
          name="password"
          render={({ field }) => {
            const { name, onChange, value } = field;
            return (
              <DefaultInput name={name} onChange={onChange} value={value} type="password" />
            );
          }}
        />
        <button type="submit">Entrar</button>
      </form>
      <Link to="/register">Não possui uma conta? Cadastre-se</Link>
    </div>
  );
};

export default LoginPage;

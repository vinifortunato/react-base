import { Link } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import DefaultInput from '../components/DefaultInput';
import { Header } from '../components';

const LoginPage = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: 'teste@teste.com',
      password: '123',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
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

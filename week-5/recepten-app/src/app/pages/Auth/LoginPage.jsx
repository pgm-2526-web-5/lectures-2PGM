import { login } from "@core/modules/auth/auth.api";
import Button from "@design/Button/Button";
import Container from "@design/Container/Container";
import ErrorMessage from "@design/Error/ErrorMessage";
import Input from "@design/Form/Input/Input";
import PageTitle from "@design/Typography/PageTitle";
import useAuth from "@functional/Auth/useAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import * as zod from "zod";

const schema = zod
  .object({
    email: zod.email(),
    password: zod.string().min(2),
  })
  .required();

const LoginPage = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const { mutate, isPending, error } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setUser(data);
      navigate("/", { replace: true });
    },
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <Container>
      <PageTitle>Login</PageTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ErrorMessage message={error?.message} />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              label="E-mail"
              type="email"
              error={errors.email?.message}
              disabled={isPending}
              {...field}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input
              label="Wachtwoord"
              type="password"
              error={errors.password?.message}
              disabled={isPending}
              {...field}
            />
          )}
        />

        <Button disabled={isPending} type="submit">
          Log in
        </Button>
      </form>
    </Container>
  );
};

export default LoginPage;

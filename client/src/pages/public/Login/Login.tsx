import React, { type SubmitEventHandler } from "react";
import styles from "./Login.module.css";
import axios from "axios";
import { useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = React.useState<string | null>("")
  const [password, setPassword] = React.useState<string | null>("")
  const navigate = useNavigate()

  const handleSubmit : SubmitEventHandler<HTMLFormElement> = async (event) =>{
    event.preventDefault()
    try{
       const dataLogin = await axios.post("http://localhost:3333/login",{
        email,
        password
      })
      localStorage.setItem("token", dataLogin.data.loginResult.token)
      navigate("/")
    }
    catch(error){
      console.log(error)
    }
  }
  return (
    <>
      <div className={styles.header}>
        <span className={styles.badge}>Sentinel Search</span>

        <h1>Entrar na conta</h1>

        <p>
          Acesse sua conta para continuar usando a plataforma.
        </p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label htmlFor="email">E-mail</label>
          <input
            onChange={(e)=>setEmail(e.target.value)}
            id="email"
            type="email"
            placeholder="Digite seu e-mail"
          />
        </div>

        <div className={styles.field}>
          <div className={styles.labelRow}>
            <label htmlFor="password">Senha</label>
            <a href="/forgot-password">Esqueci minha senha</a>
          </div>

          <input
            onChange={(e)=>setPassword(e.target.value)}
            id="password"
            type="password"
            placeholder="Digite sua senha"
          />
        </div>

        <button className={styles.button} type="submit">
          Entrar
        </button>
      </form>

      <div className={styles.footer}>
        <p>
          Ainda não tem uma conta? <a href="/register">Criar conta</a>
        </p>
      </div>
    </>
  );
};

export default Login;
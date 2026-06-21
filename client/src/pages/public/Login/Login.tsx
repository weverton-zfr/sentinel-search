import styles from "./Login.module.css";

const Login = () => {
  return (
    <>
      <div className={styles.header}>
        <span className={styles.badge}>Sentinel Search</span>

        <h1>Entrar na conta</h1>

        <p>
          Acesse sua conta para continuar usando a plataforma.
        </p>
      </div>

      <form className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="email">E-mail</label>
          <input
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
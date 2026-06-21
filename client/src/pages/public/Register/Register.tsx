import React, { useState } from "react";
import type { SubmitEventHandler } from "react";
import axios from "axios";
import styles from "./Register.module.css";

const Register = () => {
    const [name, setName] = React.useState<string | null>(null)
    const [email, setEmail] = React.useState<string | null>(null)
    const [password, setPassword] = React.useState<string | null>(null)

    const handleSubmit: SubmitEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault()
        try{
            const registerUser = await axios.post("http://localhost:3333/register",
            {
                name,
                email,
                password
            }
        )
        console.log(registerUser.data)
        }
        catch(error){
            console.log("Erro ao cadastrar usuário", error)
        }
    }

  return (
        <>
            <div className={styles.header}>
            <span className={styles.badge}>Sentinel Search</span>

            <h1>Criar conta</h1>

            <p>
                Cadastre-se para acessar o painel e começar a usar os recursos da
                plataforma.
            </p>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
                <label htmlFor="name">Nome</label>
                <input
                onChange={(e)=> setName(e.target.value)}
                id="name"
                type="text"
                placeholder="Digite seu nome"
                />
            </div>

            <div className={styles.field}>
                <label htmlFor="email">E-mail</label>
                <input
                onChange={(e)=> setEmail(e.target.value)}
                id="email"
                type="email"
                placeholder="Digite seu e-mail"
                />
            </div>

            <div className={styles.field}>
                <label htmlFor="password">Senha</label>
                <input
                onChange={(e)=> setPassword(e.target.value)}
                id="password"
                type="password"
                placeholder="Crie uma senha"
                />
            </div>

            <button className={styles.button} type="submit">
                Criar conta
            </button>
            </form>

            <div className={styles.footer}>
            <p>
                Já possui uma conta? <a href="/login">Entrar</a>
            </p>
            </div>
        </>
  );
};

export default Register;
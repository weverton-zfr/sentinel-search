import { useState, type SubmitEventHandler } from "react"
import { useNavigate } from "react-router"
import styles from "./Settings.module.css"
import {
  LuUser,
  LuMail,
  LuLock,
  LuShieldCheck,
  LuSave,
  LuLogOut,
  LuTrash2,
  LuSettings
} from "react-icons/lu"

const Settings = () => {
  const [name, setName] = useState("Weverton Pereira")
  const [email, setEmail] = useState("weverton@email.com")
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")

  const navigate = useNavigate()

  const handleProfileSubmit: SubmitEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()

    console.log({
      name,
      email
    })
  }

  const handlePasswordSubmit : SubmitEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()

    console.log({
      currentPassword,
      newPassword
    })
  }

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }

  return (
    <section className={styles.settingsPage}>
      <div className={styles.header}>
        <span className={styles.badge}>Configurações</span>

        <h1>Minha conta</h1>

        <p>
          Gerencie suas informações pessoais, senha e segurança da conta.
        </p>
      </div>

      <div className={styles.grid}>
        <main className={styles.main}>
          <form className={styles.card} onSubmit={handleProfileSubmit}>
            <div className={styles.cardHeader}>
              <div>
                <span>Perfil</span>
                <h2>Dados pessoais</h2>
              </div>

              <LuUser />
            </div>

            <div className={styles.avatarArea}>
              <div className={styles.avatar}>
                <LuUser />
              </div>

              <div>
                <strong>{name}</strong>
                <p>Usuário Sentinel Search</p>
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="name">Nome</label>

              <div className={styles.inputBox}>
                <LuUser />

                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Digite seu nome"
                />
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="email">E-mail</label>

              <div className={styles.inputBox}>
                <LuMail />

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Digite seu e-mail"
                />
              </div>
            </div>

            <button className={styles.primaryButton} type="submit">
              <LuSave />
              Salvar perfil
            </button>
          </form>

          <form className={styles.card} onSubmit={handlePasswordSubmit}>
            <div className={styles.cardHeader}>
              <div>
                <span>Segurança</span>
                <h2>Alterar senha</h2>
              </div>

              <LuLock />
            </div>

            <div className={styles.field}>
              <label htmlFor="currentPassword">Senha atual</label>

              <div className={styles.inputBox}>
                <LuLock />

                <input
                  id="currentPassword"
                  type="password"
                  value={currentPassword}
                  onChange={(event) => setCurrentPassword(event.target.value)}
                  placeholder="Digite sua senha atual"
                />
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="newPassword">Nova senha</label>

              <div className={styles.inputBox}>
                <LuShieldCheck />

                <input
                  id="newPassword"
                  type="password"
                  value={newPassword}
                  onChange={(event) => setNewPassword(event.target.value)}
                  placeholder="Digite sua nova senha"
                />
              </div>
            </div>

            <button className={styles.primaryButton} type="submit">
              <LuSave />
              Atualizar senha
            </button>
          </form>
        </main>

        <aside className={styles.side}>
          <div className={styles.statusCard}>
            <div className={styles.statusIcon}>
              <LuShieldCheck />
            </div>

            <h3>Conta protegida</h3>

            <p>
              Seu acesso está protegido por autenticação JWT.
            </p>

            <div className={styles.statusList}>
              <div>
                <span>Status</span>
                <strong>Ativo</strong>
              </div>

              <div>
                <span>Plano</span>
                <strong>Free</strong>
              </div>

              <div>
                <span>Último login</span>
                <strong>Hoje</strong>
              </div>
            </div>
          </div>

          <div className={styles.actionsCard}>
            <div className={styles.cardHeader}>
              <div>
                <span>Sessão</span>
                <h2>Ações da conta</h2>
              </div>

              <LuSettings />
            </div>

            <button
              className={styles.logoutButton}
              type="button"
              onClick={handleLogout}
            >
              <LuLogOut />
              Sair da conta
            </button>

            <button className={styles.deleteButton} type="button">
              <LuTrash2 />
              Excluir conta
            </button>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Settings
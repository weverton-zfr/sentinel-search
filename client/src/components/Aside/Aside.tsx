import styles from "./Aside.module.css"
import { NavLink, useNavigate } from "react-router"
import {
  LuLayoutDashboard,
  LuSearch,
  LuShieldCheck,
  LuHistory,
  LuSettings,
  LuLogOut,
  LuSparkles
} from "react-icons/lu"

const Aside = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }

  return (
    <aside className={styles.aside}>
      <div className={styles.logoArea}>
        <div className={styles.logoIcon}>
          <LuShieldCheck />
        </div>

        <div>
          <h2>Sentinel</h2>
          <span>Search Platform</span>
        </div>
      </div>

      <nav className={styles.nav}>
        <span className={styles.navLabel}>Menu</span>

        <NavLink
          to="/"
          className={({ isActive }) =>
            `${styles.navItem} ${isActive ? styles.active : ""}`
          }
        >
          <LuLayoutDashboard />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/search"
          className={({ isActive }) =>
            `${styles.navItem} ${isActive ? styles.active : ""}`
          }
        >
          <LuSearch />
          <span>Pesquisar</span>
        </NavLink>

        <NavLink
          to="/history"
          className={({ isActive }) =>
            `${styles.navItem} ${isActive ? styles.active : ""}`
          }
        >
          <LuHistory />
          <span>Histórico</span>
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `${styles.navItem} ${isActive ? styles.active : ""}`
          }
        >
          <LuSettings />
          <span>Configurações</span>
        </NavLink>
      </nav>

      <div className={styles.proCard}>
        <div className={styles.proIcon}>
          <LuSparkles />
        </div>

        <h3>Plano Pro</h3>
        <p>Desbloqueie buscas avançadas e recursos exclusivos.</p>

        <button type="button">Atualizar plano</button>
      </div>

      <button className={styles.logout} type="button" onClick={handleLogout}>
        <LuLogOut />
        <span>Sair</span>
      </button>
    </aside>
  )
}

export default Aside
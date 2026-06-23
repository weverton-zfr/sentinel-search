import styles from "./Dashboard.module.css"
import {
  LuSearch,
  LuUsers,
  LuShieldCheck,
  LuTrendingUp,
  LuDatabase,
  LuActivity,
  LuArrowUpRight
} from "react-icons/lu"

const Dashboard = () => {
  return (
    <section className={styles.dashboard}>
      <div className={styles.hero}>
        <div>
          <span className={styles.badge}>Dashboard</span>

          <h1>Bem-vindo ao Sentinel Search</h1>

          <p>
            Monitore buscas, acompanhe atividades recentes e acesse rapidamente
            os principais módulos da plataforma.
          </p>
        </div>

        <button className={styles.heroButton} type="button">
          <LuSearch />
          Nova busca
        </button>
      </div>

      <div className={styles.statsGrid}>
        <article className={styles.statCard}>
          <div className={styles.statIcon}>
            <LuSearch />
          </div>

          <div>
            <span>Buscas realizadas</span>
            <strong>1.284</strong>
            <p>
              <LuTrendingUp />
              +18% este mês
            </p>
          </div>
        </article>

        <article className={styles.statCard}>
          <div className={styles.statIcon}>
            <LuUsers />
          </div>

          <div>
            <span>Usuários encontrados</span>
            <strong>842</strong>
            <p>
              <LuTrendingUp />
              +11% esta semana
            </p>
          </div>
        </article>

        <article className={styles.statCard}>
          <div className={styles.statIcon}>
            <LuDatabase />
          </div>

          <div>
            <span>Fontes ativas</span>
            <strong>12</strong>
            <p>
              <LuActivity />
              Sistema operacional
            </p>
          </div>
        </article>

        <article className={styles.statCard}>
          <div className={styles.statIcon}>
            <LuShieldCheck />
          </div>

          <div>
            <span>Status da conta</span>
            <strong>Protegida</strong>
            <p>
              <LuShieldCheck />
              Token ativo
            </p>
          </div>
        </article>
      </div>

      <div className={styles.contentGrid}>
        <article className={styles.panel}>
          <div className={styles.panelHeader}>
            <div>
              <span>Atividade</span>
              <h2>Buscas recentes</h2>
            </div>

            <button type="button">
              Ver tudo
              <LuArrowUpRight />
            </button>
          </div>

          <div className={styles.searchList}>
            <div className={styles.searchItem}>
              <div className={styles.searchIcon}>
                <LuUsers />
              </div>

              <div>
                <strong>Consulta por nome</strong>
                <span>Weverton Pereira Ribeiro</span>
              </div>

              <p>Agora</p>
            </div>

            <div className={styles.searchItem}>
              <div className={styles.searchIcon}>
                <LuSearch />
              </div>

              <div>
                <strong>Consulta por e-mail</strong>
                <span>usuario@email.com</span>
              </div>

              <p>12 min</p>
            </div>

            <div className={styles.searchItem}>
              <div className={styles.searchIcon}>
                <LuDatabase />
              </div>

              <div>
                <strong>Consulta avançada</strong>
                <span>Base integrada</span>
              </div>

              <p>36 min</p>
            </div>
          </div>
        </article>

        <article className={styles.panel}>
          <div className={styles.panelHeader}>
            <div>
              <span>Resumo</span>
              <h2>Status do sistema</h2>
            </div>
          </div>

          <div className={styles.systemList}>
            <div className={styles.systemItem}>
              <span>API</span>
              <strong className={styles.online}>Online</strong>
            </div>

            <div className={styles.systemItem}>
              <span>Banco de dados</span>
              <strong className={styles.online}>Conectado</strong>
            </div>

            <div className={styles.systemItem}>
              <span>Autenticação</span>
              <strong className={styles.online}>JWT ativo</strong>
            </div>

            <div className={styles.systemItem}>
              <span>Última atualização</span>
              <strong>Hoje</strong>
            </div>
          </div>

          <div className={styles.securityBox}>
            <LuShieldCheck />

            <div>
              <strong>Ambiente protegido</strong>
              <p>
                Suas rotas privadas estão protegidas por autenticação via token.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Dashboard
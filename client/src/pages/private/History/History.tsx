import { useState } from "react"
import styles from "./History.module.css"
import {
  LuClock3,
  LuSearch,
  LuUser,
  LuMail,
  LuPhone,
  LuDatabase,
  LuShieldCheck,
  LuFilter,
  LuEye,
  LuTrash2,
  LuDownload,
  LuCalendarDays,

  LuRefreshCw
} from "react-icons/lu"

const filters = [
  {
    id: "all",
    label: "Todas"
  },
  {
    id: "name",
    label: "Nome"
  },
  {
    id: "email",
    label: "E-mail"
  },
  {
    id: "phone",
    label: "Telefone"
  },
  {
    id: "advanced",
    label: "Avançada"
  }
]

const historyItems = [
  {
    id: 1,
    type: "name",
    label: "Consulta por nome",
    value: "Weverton Pereira Ribeiro",
    source: "Sentinel DB",
    date: "Hoje, 14:32",
    status: "success",
    statusText: "Encontrado",
    Icon: LuUser
  },
  {
    id: 2,
    type: "email",
    label: "Consulta por e-mail",
    value: "usuario@email.com",
    source: "Base integrada",
    date: "Hoje, 13:18",
    status: "success",
    statusText: "Encontrado",
    Icon: LuMail
  },
  {
    id: 3,
    type: "phone",
    label: "Consulta por telefone",
    value: "(00) 00000-0000",
    source: "Fonte pública",
    date: "Ontem, 21:44",
    status: "warning",
    statusText: "Parcial",
    Icon: LuPhone
  },
  {
    id: 4,
    type: "advanced",
    label: "Consulta avançada",
    value: "Busca em múltiplas bases",
    source: "Sentinel Engine",
    date: "Ontem, 18:09",
    status: "success",
    statusText: "Encontrado",
    Icon: LuDatabase
  },
  {
    id: 5,
    type: "name",
    label: "Consulta por nome",
    value: "João da Silva",
    source: "Sentinel DB",
    date: "22/06/2026, 10:12",
    status: "danger",
    statusText: "Sem resultado",
    Icon: LuUser
  }
]

const History = () => {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredHistory =
    activeFilter === "all"
      ? historyItems
      : historyItems.filter((item) => item.type === activeFilter)

  const getStatusIcon = (status: string) => {
    if (status === "success") {
      return <LuCalendarDays />
    }

    if (status === "warning") {
      return <LuCalendarDays />
    }

    return <LuCalendarDays />
  }

  const getStatusClass = (status: string) => {
    if (status === "success") {
      return styles.success
    }

    if (status === "warning") {
      return styles.warning
    }

    return styles.danger
  }

  return (
    <section className={styles.historyPage}>
      <div className={styles.statsGrid}>
        <article className={styles.statCard}>
          <div className={styles.statIcon}>
            <LuSearch />
          </div>

          <div>
            <span>Total de consultas</span>
            <strong>1.284</strong>
            <p>+18% este mês</p>
          </div>
        </article>

        <article className={styles.statCard}>
          <div className={styles.statIcon}>
            <LuCalendarDays />
          </div>

          <div>
            <span>Resultados encontrados</span>
            <strong>842</strong>
            <p>65% de precisão</p>
          </div>
        </article>

        <article className={styles.statCard}>
          <div className={styles.statIcon}>
            <LuDatabase />
          </div>

          <div>
            <span>Bases consultadas</span>
            <strong>12</strong>
            <p>Fontes ativas</p>
          </div>
        </article>

        <article className={styles.statCard}>
          <div className={styles.statIcon}>
            <LuShieldCheck />
          </div>

          <div>
            <span>Segurança</span>
            <strong>Ativa</strong>
            <p>Consultas autenticadas</p>
          </div>
        </article>
      </div>

      <div className={styles.contentGrid}>
        <main className={styles.mainPanel}>
          <div className={styles.panelHeader}>
            <div>
              <span>Registros</span>
              <h2>Consultas recentes</h2>
            </div>

            <div className={styles.headerActions}>
              <button type="button">
                <LuRefreshCw />
                Atualizar
              </button>

              <button type="button">
                <LuDownload />
                Exportar
              </button>
            </div>
          </div>

          <div className={styles.filters}>
            <div className={styles.filterLabel}>
              <LuFilter />
              <span>Filtrar por:</span>
            </div>

            <div className={styles.filterActions}>
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  className={`${styles.filterButton} ${
                    activeFilter === filter.id ? styles.activeFilter : ""
                  }`}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.historyList}>
            {filteredHistory.map((item) => {
              const Icon = item.Icon

              return (
                <article key={item.id} className={styles.historyItem}>
                  <div className={styles.itemLeft}>
                    <div className={styles.itemIcon}>
                      <Icon />
                    </div>

                    <div className={styles.itemContent}>
                      <strong>{item.label}</strong>
                      <p>{item.value}</p>

                      <div className={styles.itemMeta}>
                        <span>{item.source}</span>
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.itemRight}>
                    <span
                      className={`${styles.statusBadge} ${getStatusClass(
                        item.status
                      )}`}
                    >
                      {getStatusIcon(item.status)}
                      {item.statusText}
                    </span>

                    <div className={styles.itemActions}>
                      <button type="button" title="Visualizar">
                        <LuEye />
                      </button>

                      <button type="button" title="Excluir">
                        <LuTrash2 />
                      </button>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </main>

        <aside className={styles.sidePanel}>
          <div className={styles.summaryCard}>
            <div className={styles.summaryIcon}>
              <LuCalendarDays />
            </div>

            <h3>Resumo do período</h3>

            <p>
              Hoje você realizou <strong>12 consultas</strong>. A maior parte
              delas foi por nome e e-mail.
            </p>
          </div>

          <div className={styles.detailsCard}>
            <div className={styles.detailsHeader}>
              <div>
                <span>Atividade</span>
                <h3>Tipos mais usados</h3>
              </div>

              <LuDatabase />
            </div>

            <div className={styles.detailsList}>
              <div className={styles.detailItem}>
                <span>Nome</span>
                <strong>48%</strong>
              </div>

              <div className={styles.detailBar}>
                <div style={{ width: "48%" }} />
              </div>

              <div className={styles.detailItem}>
                <span>E-mail</span>
                <strong>27%</strong>
              </div>

              <div className={styles.detailBar}>
                <div style={{ width: "27%" }} />
              </div>

              <div className={styles.detailItem}>
                <span>Telefone</span>
                <strong>15%</strong>
              </div>

              <div className={styles.detailBar}>
                <div style={{ width: "15%" }} />
              </div>

              <div className={styles.detailItem}>
                <span>Avançada</span>
                <strong>10%</strong>
              </div>

              <div className={styles.detailBar}>
                <div style={{ width: "10%" }} />
              </div>
            </div>
          </div>

          <div className={styles.securityCard}>
            <LuShieldCheck />

            <div>
              <strong>Logs protegidos</strong>
              <p>
                O histórico fica disponível apenas para usuários autenticados.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default History
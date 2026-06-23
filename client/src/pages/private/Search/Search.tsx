import { useState, type SubmitEventHandler } from "react"
import styles from "./Search.module.css"
import { searchTypes } from "./searchTypes.ts"
import {
  LuSearch,
  LuUser,
  LuMail,
  LuPhone,
  LuDatabase,
  LuShieldCheck,
  LuClock3,
  LuSparkles,
  LuArrowRight,
  LuFilter
} from "react-icons/lu"

const Search = () => {
  const [selectedType, setSelectedType] = useState("name")
  const [query, setQuery] = useState("")
  const [result, setResult] = useState("")

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()

    if (!query.trim()) {
      return
    }

    setResult(query)
  }

  const selectedSearch = searchTypes.find((item) => item.id === selectedType)

  return (
    <section className={styles.searchPage}>
      <div className={styles.contentGrid}>
        <main className={styles.mainContent}>
          <div className={styles.searchCard}>
            <div className={styles.cardHeader}>
              <div>
                <span>Tipo de consulta</span>
                <h2>Escolha uma modalidade</h2>
              </div>

              <LuFilter />
            </div>

            <div className={styles.typeGrid}>
              {searchTypes.map((item) => {
                const Icon = item.Icon
                const isActive = selectedType === item.id

                return (
                  <button
                    key={item.id}
                    type="button"
                    className={`${styles.typeButton} ${
                      isActive ? styles.activeType : ""
                    }`}
                    onClick={() => setSelectedType(item.id)}
                  >
                    <div className={styles.typeIcon}>
                      <Icon />
                    </div>

                    <div>
                      <strong>{item.label}</strong>
                      <span>{item.description}</span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          <form className={styles.searchBox} onSubmit={handleSubmit}>
            <div className={styles.inputHeader}>
              <div>
                <span>Buscar por {selectedSearch?.label}</span>
                <h2>Digite os dados da consulta</h2>
              </div>

              <div className={styles.modeTag}>
                <LuSparkles />
                {selectedSearch?.label}
              </div>
            </div>

            <div className={styles.inputWrapper}>
              <LuSearch />

              <input
                type="text"
                value={query}
                placeholder="Digite sua busca aqui..."
                onChange={(event) => setQuery(event.target.value)}
              />

              <button type="submit">
                Buscar
                <LuArrowRight />
              </button>
            </div>

            <div className={styles.quickFilters}>
              <button type="button">Últimas 24h</button>
              <button type="button">Alta precisão</button>
              <button type="button">Bases públicas</button>
              <button type="button">Resultado completo</button>
            </div>
          </form>

          <div className={styles.resultCard}>
            <div className={styles.cardHeader}>
              <div>
                <span>Resultado</span>
                <h2>Prévia da consulta</h2>
              </div>

              <LuDatabase />
            </div>

            {result ? (
              <div className={styles.resultContent}>
                <div className={styles.resultIcon}>
                  <LuSearch />
                </div>

                <div>
                  <strong>Consulta realizada</strong>
                  <p>{result}</p>

                  <div className={styles.resultMeta}>
                    <span>Tipo: {selectedSearch?.label}</span>
                    <span>Status: Encontrado</span>
                    <span>Fonte: Sentinel DB</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles.emptyState}>
                <LuSearch />

                <strong>Nenhuma busca realizada ainda</strong>

                <p>
                  Escolha um tipo de consulta e faça sua primeira busca para
                  visualizar os resultados aqui.
                </p>
              </div>
            )}
          </div>
        </main>

        <aside className={styles.sidePanel}>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <LuShieldCheck />
            </div>

            <h3>Busca protegida</h3>

            <p>
              Todas as consultas privadas devem passar por autenticação antes de
              acessar dados sensíveis.
            </p>
          </div>

          <div className={styles.historyCard}>
            <div className={styles.historyHeader}>
              <div>
                <span>Histórico</span>
                <h3>Buscas recentes</h3>
              </div>

              <LuClock3 />
            </div>

            <div className={styles.historyList}>
              <div className={styles.historyItem}>
                <LuUser />

                <div>
                  <strong>Nome</strong>
                  <span>Weverton Pereira</span>
                </div>
              </div>

              <div className={styles.historyItem}>
                <LuMail />

                <div>
                  <strong>E-mail</strong>
                  <span>usuario@email.com</span>
                </div>
              </div>

              <div className={styles.historyItem}>
                <LuPhone />

                <div>
                  <strong>Telefone</strong>
                  <span>(00) 00000-0000</span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Search
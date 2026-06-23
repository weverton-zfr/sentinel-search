import { useState } from "react"
import styles from "./Plans.module.css"
import {
  LuBadgeCheck,
  LuCheck,
  LuCreditCard,
  LuCrown,
  LuDatabase,
  LuGem,
  LuMinus,
  LuShieldCheck,
  LuSparkles,
  LuTrendingUp,
  LuUsers,
  LuZap
} from "react-icons/lu"

const plans = [
  {
    name: "Free",
    subtitle: "Para começar",
    description: "Ideal para testar a plataforma e explorar os recursos básicos.",
    monthlyPrice: "R$ 0",
    yearlyPrice: "R$ 0",
    icon: LuShieldCheck,
    highlighted: false,
    current: true,
    features: [
      "Dashboard privado",
      "Buscas básicas",
      "Histórico limitado",
      "Autenticação com JWT"
    ],
    limits: {
      searches: "50 buscas/mês",
      history: "7 dias",
      users: "1 usuário"
    },
    button: "Plano atual"
  },
  {
    name: "Pro",
    subtitle: "Mais recomendado",
    description: "Para quem precisa de buscas avançadas e histórico completo.",
    monthlyPrice: "R$ 39,90",
    yearlyPrice: "R$ 399,00",
    icon: LuSparkles,
    highlighted: true,
    current: false,
    features: [
      "Buscas avançadas",
      "Histórico completo",
      "Mais fontes de consulta",
      "Exportação de resultados",
      "Prioridade nas pesquisas"
    ],
    limits: {
      searches: "2.000 buscas/mês",
      history: "Ilimitado",
      users: "1 usuário"
    },
    button: "Assinar Pro"
  },
  {
    name: "Business",
    subtitle: "Para equipes",
    description: "Para empresas, equipes e operações com uso profissional.",
    monthlyPrice: "R$ 99,90",
    yearlyPrice: "R$ 999,00",
    icon: LuCrown,
    highlighted: false,
    current: false,
    features: [
      "Tudo do Pro",
      "Múltiplos usuários",
      "Permissões por equipe",
      "Suporte prioritário",
      "Limites personalizados"
    ],
    limits: {
      searches: "10.000 buscas/mês",
      history: "Ilimitado",
      users: "Até 5 usuários"
    },
    button: "Assinar Business"
  }
]

const comparison = [
  {
    feature: "Dashboard privado",
    free: true,
    pro: true,
    business: true
  },
  {
    feature: "Buscas básicas",
    free: true,
    pro: true,
    business: true
  },
  {
    feature: "Buscas avançadas",
    free: false,
    pro: true,
    business: true
  },
  {
    feature: "Histórico completo",
    free: false,
    pro: true,
    business: true
  },
  {
    feature: "Exportar resultados",
    free: false,
    pro: true,
    business: true
  },
  {
    feature: "Múltiplos usuários",
    free: false,
    pro: false,
    business: true
  },
  {
    feature: "Suporte prioritário",
    free: false,
    pro: false,
    business: true
  }
]

const faqs = [
  {
    question: "Posso começar grátis?",
    answer:
      "Sim. O plano Free permite testar o Sentinel Search antes de assinar um plano pago."
  },
  {
    question: "O plano Pro libera buscas avançadas?",
    answer:
      "Sim. O plano Pro é pensado para quem precisa de mais consultas, histórico completo e recursos avançados."
  },
  {
    question: "Consigo mudar de plano depois?",
    answer:
      "Sim. A estrutura já está preparada visualmente para upgrade ou downgrade de plano."
  }
]

const Plans = () => {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly")

  return (
    <section className={styles.plansPage}>
      <div className={styles.hero}>
        <div>
          <span className={styles.badge}>Planos</span>

          <h1>Escolha o plano ideal para sua operação</h1>

          <p>
            Comece com o plano gratuito e evolua para recursos avançados conforme
            sua necessidade dentro do Sentinel Search.
          </p>
        </div>

        <div className={styles.currentPlanCard}>
          <div className={styles.currentIcon}>
            <LuGem />
          </div>

          <span>Plano atual</span>
          <strong>Free</strong>
          <p>Você está usando o plano inicial.</p>
        </div>
      </div>

      <div className={styles.billingBar}>
        <div>
          <span>Forma de cobrança</span>
          <strong>Escolha entre mensal ou anual</strong>
        </div>

        <div className={styles.billingToggle}>
          <button
            type="button"
            className={billing === "monthly" ? styles.activeBilling : ""}
            onClick={() => setBilling("monthly")}
          >
            Mensal
          </button>

          <button
            type="button"
            className={billing === "yearly" ? styles.activeBilling : ""}
            onClick={() => setBilling("yearly")}
          >
            Anual
            <span>Economize</span>
          </button>
        </div>
      </div>

      <div className={styles.plansGrid}>
        {plans.map((plan) => {
          const Icon = plan.icon
          const price =
            billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice

          return (
            <article
              key={plan.name}
              className={`${styles.planCard} ${
                plan.highlighted ? styles.highlighted : ""
              }`}
            >
              {plan.highlighted && (
                <div className={styles.recommended}>
                  <LuZap />
                  Mais recomendado
                </div>
              )}

              {plan.current && (
                <div className={styles.currentBadge}>
                  <LuBadgeCheck />
                  Atual
                </div>
              )}

              <div className={styles.planTop}>
                <div className={styles.planIcon}>
                  <Icon />
                </div>

                <div>
                  <span>{plan.subtitle}</span>
                  <h2>{plan.name}</h2>
                </div>
              </div>

              <p className={styles.description}>{plan.description}</p>

              <div className={styles.price}>
                <strong>{price}</strong>

                {price !== "R$ 0" && (
                  <span>{billing === "monthly" ? "/mês" : "/ano"}</span>
                )}
              </div>

              <div className={styles.limitBox}>
                <div>
                  <LuTrendingUp />
                  <span>{plan.limits.searches}</span>
                </div>

                <div>
                  <LuDatabase />
                  <span>Histórico: {plan.limits.history}</span>
                </div>

                <div>
                  <LuUsers />
                  <span>{plan.limits.users}</span>
                </div>
              </div>

              <ul className={styles.features}>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <LuCheck />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={
                  plan.highlighted ? styles.primaryButton : styles.secondaryButton
                }
              >
                <LuCreditCard />
                {plan.button}
              </button>
            </article>
          )
        })}
      </div>

      <div className={styles.comparisonSection}>
        <div className={styles.sectionHeader}>
          <span>Comparativo</span>
          <h2>Compare os recursos</h2>
          <p>Veja rapidamente o que cada plano libera dentro da plataforma.</p>
        </div>

        <div className={styles.comparisonTable}>
          <div className={styles.tableHeader}>
            <span>Recurso</span>
            <span>Free</span>
            <span>Pro</span>
            <span>Business</span>
          </div>

          {comparison.map((row) => (
            <div className={styles.tableRow} key={row.feature}>
              <span>{row.feature}</span>

              <span>{row.free ? <LuCheck /> : <LuMinus />}</span>
              <span>{row.pro ? <LuCheck /> : <LuMinus />}</span>
              <span>{row.business ? <LuCheck /> : <LuMinus />}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.bottomGrid}>
        <div className={styles.securityCard}>
          <LuShieldCheck />

          <div>
            <span>Segurança</span>
            <h3>Todos os planos usam autenticação protegida</h3>
            <p>
              As rotas privadas continuam protegidas por token e podem evoluir
              depois para permissões, roles e controle por plano.
            </p>
          </div>
        </div>

        <div className={styles.faqCard}>
          <div className={styles.sectionHeader}>
            <span>Dúvidas</span>
            <h2>Perguntas rápidas</h2>
          </div>

          <div className={styles.faqList}>
            {faqs.map((faq) => (
              <div className={styles.faqItem} key={faq.question}>
                <LuShieldCheck />

                <div>
                  <strong>{faq.question}</strong>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Plans
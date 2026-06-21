import styles from "./AuthLayout.module.css"
import { Outlet } from "react-router"

const AuthLayout = () => {
    return(
        <main className={styles.page}>
            <section className={styles.card}>
                <Outlet/>
            </section>
        </main>
    )
}

export default AuthLayout
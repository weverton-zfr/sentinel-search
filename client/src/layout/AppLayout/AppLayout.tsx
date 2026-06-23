import { Outlet } from "react-router"
import { ProtectedRoute } from "../../routes/ProtectedRoute"
import Aside from "../../components/Aside/Aside"
import styles from "./AppLayout.module.css"

const AppLayout = () => {
    return(
        <ProtectedRoute>
            <main className={styles.AppContainer}>
                <Aside/>
                <section className={styles.AppContent}>
                    <Outlet/>
                </section>
            </main>
        </ProtectedRoute>
    )
}

export default AppLayout
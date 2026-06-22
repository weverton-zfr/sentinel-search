import { Outlet } from "react-router"
import { ProtectedRoute } from "../../routes/ProtectedRoute"

const AppLayout = () => {
    return(
        <ProtectedRoute>
            <Outlet/>
        </ProtectedRoute>
    )
}

export default AppLayout
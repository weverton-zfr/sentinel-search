import { Route, Routes } from "react-router"
import AppLayout from "../layout/AppLayout/AppLayout"
import Dashboard from "../pages/private/Dashboard/Dashboard"
import AuthLayout from "../layout/AuthLayout/AuthLayout"
import Login from "../pages/public/Login/Login"
import Register from "../pages/public/Register/Register"

const AppRoutes = () => {
    return(
        <Routes>
            <Route element={<AuthLayout/>}>
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
            </Route>
            <Route element={<AppLayout/>}>
                <Route path="/" element={<Dashboard/>}/>
            </Route>
        </Routes>
    )
}

export default AppRoutes
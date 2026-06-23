import { Route, Routes } from "react-router"
import AppLayout from "../layout/AppLayout/AppLayout"
import Dashboard from "../pages/private/Dashboard/Dashboard"
import AuthLayout from "../layout/AuthLayout/AuthLayout"
import Login from "../pages/public/Login/Login"
import Register from "../pages/public/Register/Register"
import Search from "../pages/private/Search/Search"
import History from "../pages/private/History/History"
import Settings from "../pages/private/Settings/Settings"

const AppRoutes = () => {
    return(
        <Routes>
            <Route element={<AuthLayout/>}>
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
            </Route>
            <Route element={<AppLayout/>}>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="search" element={<Search/>}/>
                <Route path="history" element={<History/>}/>
                <Route path="settings" element={<Settings/>}/>
            </Route>
        </Routes>
    )
}

export default AppRoutes
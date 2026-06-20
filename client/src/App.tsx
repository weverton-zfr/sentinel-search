import { BrowserRouter } from "react-router"
import AppRoutes from "./routes/AppRoutes"
import "./styles/global.css"
import "./styles/variables.css"

const App = () => {
    return(
        <BrowserRouter>
            <AppRoutes/>
        </BrowserRouter>
    )
}

export default App
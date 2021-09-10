import Home from "./pages/Home"
import theme from './theme'
import { ThemeProvider } from "styled-components"
import { Reset } from "styled-reset"
import { Provider } from "react-redux"
import store from './redux/store'

export default function () {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Reset />
                <Home />
            </ThemeProvider>
        </Provider>)
}
import { useState, useEffect } from "react"
import Board from "./components/Board.jsx"
import "./styles/App.scss"

function App() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "dark"
    })
    useEffect(() => {
        document.body.className = theme
        localStorage.setItem("theme", theme)
    }, [theme])

    function toggleTheme() {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"))
    }
    return (
        <div>
            <header>
                <h1>Dashboard</h1>
                <button onClick={toggleTheme}>
                    {" "}
                    {theme === "dark" ? "☀️ Claro" : "🌙 Escuro"}
                </button>
            </header>
            <Board />
        </div>
    )
}

export default App

import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "./components/layout/MainLayout"
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";


function Home() {
    return <h2>Home fungerer</h2>
}

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />


                </Route>
            </Routes>
        </BrowserRouter>
    )
}

import { NavLink } from "react-router-dom"

const links = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
]

export default function NavBar() {
    return (
        <header className="boder-bl">
            <nav className={"container mx-auto px-6 py-4 flex justify-between items-center"}>
                <NavLink to={"/"} className="font-bold text-lg">
                    Alexander
                </NavLink>

                <ul className={"flex gap-6"}>
                    {links.map((link) => (
                        <li key={link.name}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    isActive
                                        ? "font-medium text-black"
                                        : "text-gray-500 hover:text-black"
                                }
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <ul>
                </ul>
        </header>
    )
}

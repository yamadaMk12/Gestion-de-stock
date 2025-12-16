import { Link } from "react-router-dom"

export default function Navbar() {
    return <>
        <nav className="navbar">
            <Link to="/Vente">Vente</Link>
            <Link to="/Client">Client</Link>
            <Link to="/Stock">Stock</Link>
            <Link to="/Test">Test</Link>
        </nav>
    </>
}
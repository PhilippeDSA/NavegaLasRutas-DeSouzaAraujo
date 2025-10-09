import { Link, NavLink } from "react-router-dom"

const Menu = () => {
    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: "black",
    }

    const headerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem",
        backgroundColor: "#f0f0f0"
    }

    const navStyle = {
        marginTop: "0.5rem"
    }

    return (
        <header style={headerStyle}>
            <Link to="/" style={{ textDecoration: "none" }}>
            </Link>
            <nav style={navStyle}>
                <ul style={{ listStyle: "none", display: "flex", padding: 0 }}>
                    <li><NavLink to="/Cart" style={linkStyle}>Carrito</NavLink></li>
                    <li><NavLink to="/" style={linkStyle}>Home</NavLink></li>
                    <li><NavLink to="/productos" style={linkStyle}>Productos</NavLink></li>
                    <li><NavLink to="/categoria/guacamole" style={linkStyle}>Guacamole</NavLink></li>
                    <li><NavLink to="/categoria/palta" style={linkStyle}>Palta</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Menu

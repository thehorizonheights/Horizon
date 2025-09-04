import { Link, useMatch, useResolvedPath } from "react-router-dom"
import olive from './assets/horizon.png';

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className= "site-title">
            <div>
                <img class="olive" src={olive} alt="logo" height="70px"/>            
            </div>    
            </Link>
            <div className="site-name">
                THE HORIZON HEIGHTS
            </div>
            <ul className="links">
                <CustomLink to="/">Who Are We</CustomLink>
                <CustomLink to="/">Our Work</CustomLink>
            </ul>
        </nav>
    )
}
            //<img src={title} alt="logo" width="180px" height="40px"/>

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}
//<CustomLink to="/about">Who Are We</CustomLink>
//<CustomLink to="/work">Our Work</CustomLink>
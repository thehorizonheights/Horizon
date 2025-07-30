import { Link, useMatch, useResolvedPath } from "react-router-dom"
import title from './assets/websiteTitle.png';
import olive from './assets/olive.png';

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className= "site-title">
            <div>
                <img class="olive" src={olive} alt="logo" height="40px"/>            
            </div>    
            <div>
                Youth Ministry International
            </div>
            </Link>
            <ul className="links">
                <CustomLink to="/about">Who Are We</CustomLink>
                <CustomLink to="/work">Our Work</CustomLink>
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
import { Link } from "react-router";

export default function Menu() {
    return (
        <>
            <div>
                <div className="menu">
                    <ul>
                        <li>
                            <img src="" alt="" />
                            <Link to="/">
                                <span>dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <img src="" alt="" />
                            <Link to="/projects">
                                <span>projects</span>
                            </Link>
                        </li>
                        <li>
                            <img src="" alt="" />
                            <Link to="/teams">
                                <span>teams</span>
                            </Link>
                        </li>
                        <li>
                            <img src="" alt="" />
                            <Link to="/analytics">
                                <span>analytics</span>
                            </Link>
                        </li>
                        <li>
                            <img src="" alt="" />
                            <Link to="/messages">
                                <span>messages</span>
                            </Link>
                        </li>
                        <li>
                            <img src="" alt="" />
                            <Link to="/integrations">
                                <span>intergrations</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
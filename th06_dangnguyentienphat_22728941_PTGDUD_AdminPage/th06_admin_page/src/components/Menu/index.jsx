import { NavLink } from "react-router";
import btnDashBoard from "../../assets/images/Squares four 1.png"
import btnProject from "../../assets/images/Folder.png"
import btnTeam from "../../assets/images/Groups.png"
import btnAnalytic from "../../assets/images/Pie chart.png"
import btnMessage from "../../assets/images/Chat.png"
import btnIntegration from "../../assets/images/Code.png"

export default function Menu() {
    return (
        <>
            <div>
                <div className="menu">
                    <ul className="flex flex-col gap-5">
                        <li className="flex gap-2">
                            <img src={btnDashBoard} alt="" />
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "text-white bg-pink-500 font-bold pl-3 w-full rounded" : ""
                                }
                            >
                                Dashboard
                            </NavLink>
                        </li>
                        <li className="flex gap-2">
                            <img src={btnProject} alt="" />

                            <NavLink
                                to="/projects"
                                className={({ isActive }) =>
                                    isActive ? "text-white bg-pink-500 font-bold pl-3 w-full rounded" : ""
                                }
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li className="flex gap-2">
                            <img src={btnTeam} alt="" />

                            <NavLink
                                to="/teams"
                                className={({ isActive }) =>
                                    isActive ? "text-white bg-pink-500 font-bold pl-3 w-full rounded" : ""
                                }
                            >
                                Teams
                            </NavLink>
                        </li>
                        <li className="flex gap-2">
                            <img src={btnAnalytic} alt="" />

                            <NavLink
                                to="/analytics"
                                className={({ isActive }) =>
                                    isActive ? "text-white bg-pink-500 font-bold pl-3 w-full rounded" : ""
                                }
                            >
                                Analytics
                            </NavLink>
                        </li>
                        <li className="flex gap-2">
                            <img src={btnMessage} alt="" />

                            <NavLink
                                to="/messages"
                                className={({ isActive }) =>
                                    isActive ? "text-white bg-pink-500 font-bold pl-3 w-full rounded" : ""
                                }
                            >
                                Messages
                            </NavLink>
                        </li>
                        <li className="flex gap-2">
                            <img src={btnIntegration} alt="" />

                            <NavLink
                                to="/integrations"
                                className={({ isActive }) =>
                                    isActive ? "text-white bg-pink-500 font-bold pl-3 w-full rounded" : ""
                                }
                            >
                                Intergrations
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
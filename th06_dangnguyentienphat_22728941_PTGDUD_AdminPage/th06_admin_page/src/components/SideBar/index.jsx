export default function SideBar() {
    return (
        <>
            <div className="side_bar col-span-1 row-span-3 border p-4 flex flex-col gap-10">
                <div className="logo">
                    <img src="" alt="" />
                    <p>logo</p>
                </div>
                <div className="menu">
                    <ul>
                        <li>
                            <img src="" alt="" />
                            <a href="">
                                <span>dashboard</span>
                            </a>
                        </li>
                        <li>
                            <img src="" alt="" />
                            <a href="">
                                <span>projects</span>
                            </a>
                        </li>
                        <li>
                            <img src="" alt="" />
                            <a href="">
                                <span>teams</span>
                            </a>
                        </li>
                        <li>
                            <img src="" alt="" />
                            <a href="">
                                <span>analytics</span>
                            </a>
                        </li>
                        <li>
                            <img src="" alt="" />
                            <a href="">
                                <span>messages</span>
                            </a>
                        </li>
                        <li>
                            <img src="" alt="" />
                            <a href="">
                                <span>intergrations</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="verson">
                    <img src="" alt="" />
                    <p>V2.0 is available</p>
                    <button>Try now</button>
                </div>
            </div>
        </>
    )
}
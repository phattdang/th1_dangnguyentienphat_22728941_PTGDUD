import Menu from "../Menu";

export default function SideBar() {
    return (
        <>
            <div className="side_bar col-span-1 row-span-3 border p-4 flex flex-col gap-10">
                <div className="logo">
                    <img src="" alt="" />
                    <p>logo</p>
                </div>
                <Menu />
                <div className="verson">
                    <img src="" alt="" />
                    <p>V2.0 is available</p>
                    <button>Try now</button>
                </div>
            </div>
        </>
    )
}
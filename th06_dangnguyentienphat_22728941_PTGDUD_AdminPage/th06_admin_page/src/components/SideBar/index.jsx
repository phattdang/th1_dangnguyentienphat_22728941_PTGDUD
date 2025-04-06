import Menu from "../Menu";
import logo from "../../assets/images/Image 1858.png";
import group from "../../assets/images/Group.png";

export default function SideBar() {
    return (
        <>
            <div className="side_bar col-span-1 row-span-3 border-r border-gray-300 p-4 flex flex-col gap-10">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <Menu />
                <div className="verson flex flex-col gap-5 justify-between items-center mt-30 bg-blue-50 p-5">
                    <img src={group} alt="" />
                    <p className="font-black text-xl">V2.0 is available</p>
                    <button className="border border-blue-500 w-full py-1 round-md">Try now</button>
                </div>
            </div>
        </>
    )
}
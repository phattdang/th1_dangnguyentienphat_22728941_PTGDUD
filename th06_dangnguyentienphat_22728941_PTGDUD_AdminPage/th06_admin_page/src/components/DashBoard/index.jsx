import logoNotify from "../../assets/images/Bell 1.png";
import logoSupport from "../../assets/images/Question 1.png";
import avatar from "../../assets/images/Avatar.png";
import searchImg from "../../assets/images/Search.png";

export default function Dashboard() {
    return (
        <>
            <div className="dash_board p-4 flex justify-between border-b border-gray-300">

                <div className="title">
                    <p className="font-bold text-pink-500 text-2xl">Dashboard</p>
                </div>
                <div className="personal flex gap-5 items-center">
                    <img className="w-full object-contain h-7" src={searchImg} alt="" />
                    <input className="px-3 bg-gray-100 py-1" type="text" name="" id="" placeholder="Search" />
                    <a className="w-full object-contain" href="/">
                        <img src={logoNotify} alt="" />
                    </a >

                    <a className="w-full object-contain" href="/">
                        <img className="w-full object-contain" src={logoSupport} alt="" />
                    </a>
                    <a className="w-full h-8 object-contain" href="/">
                        <img className="w-full h-8 object-contain" src={avatar} alt="" />
                    </a>
                </div>
            </div>
        </>
    )
}
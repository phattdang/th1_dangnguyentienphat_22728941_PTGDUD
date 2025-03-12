import { useEffect, useState } from "react";
import Item from "../Item";

export default function Products() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://67c7c86ec19eb8753e7aba01.mockapi.io/foods")
            .then((res) => res.json())  // <-- Phải gọi res.json()
            .then((data) => {
                setData(data);
            })
            .catch((error) => console.error("Fetch error:", error)); // Bắt lỗi nếu có
    }, []);


    console.log(data);

    var page_item = "border border-gray-1 p-2 py-1 rounded-md";

    return (
        <>
            <div className="products px-30 mb-10">
                <div className="menu my-5">
                    <ul className="flex gap-5 font-bold text-gray-500">
                        <li className="text-pink-400">Saved Recipes</li>
                        <li>Folders</li>
                        <li>Recipes By Genevieve</li>
                    </ul>
                </div>
                <div className="items grid grid-cols-4 grid-rows-2 gap-3">
                    {data.map((item, index) => (
                        <div className="col-span-1">
                            <Item data={item} />
                        </div>
                    ))}
                </div>

                <div className="page flex justify-end mr-5">
                    <ul className="flex gap-3 items-center text-gray-400">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z" />
                            </svg>
                        </li>
                        <li><button className="border border-gray-1 p-2 py-1 rounded-md bg-pink-500 text-white font-bold">1</button></li>
                        <li><button className="border border-gray-1 p-2 py-1 rounded-md">2</button></li>
                        <li><button className="border border-gray-1 p-2 py-1 rounded-md">3</button></li>
                        <li><button className="border border-gray-1 p-2 py-1 rounded-md">4</button></li>
                        <li><button className="border border-gray-1 p-2 py-1 rounded-md">...</button></li>
                        <li><button className="border border-gray-1 p-2 py-1 rounded-md">8</button></li>
                        <li><button className="border border-gray-1 p-2 py-1 rounded-md">9</button></li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
                            </svg>

                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
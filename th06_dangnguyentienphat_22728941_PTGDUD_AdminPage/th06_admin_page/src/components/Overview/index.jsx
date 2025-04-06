import { useEffect, useState } from "preact/hooks";
import fetchOverviewData from "../../api/overview";
import OverviewItem from "../OverviewItem";
import Dashboard from "../DashBoard";
import overviewBtn from "../../assets/images/Squares four 1.png";

export default function Overview() {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetchOverviewData()
            .then(data => setData(data));
    }, []);

    console.log(data)

    return (
        <>
            <div className="header col-span-3 row-span-1 ">
                <Dashboard />
                <div className="flex gap-3 pl-4 mt-10 ml-3">
                    <img src={overviewBtn} alt="" />
                    <p className="font-semibold text-xl">Overview</p>
                </div>
                <div className="over_view grid grid-cols-3 gap-4 p-4 pb-0">
                    {data.map((item, index) => {
                        return <OverviewItem key={index} data={item} />
                    })}

                </div>
            </div>
        </>
    )
}
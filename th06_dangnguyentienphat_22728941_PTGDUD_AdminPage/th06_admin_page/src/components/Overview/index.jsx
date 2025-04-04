import { useEffect, useState } from "preact/hooks";
import fetchOverviewData from "../../api/overview";
import OverviewItem from "../OverviewItem";

export default function Overview() {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetchOverviewData()
        .then(data => setData(data));
    }, []);

    console.log(data)

    return (
        <>
            <div className="header col-span-3 row-span-1">
                <div className="dash_board p-4">
                    <h2>Dashboard</h2>
                </div>
                <div className="over_view grid grid-cols-3 gap-4 p-4">
                    {data.map((item, index)=>{
                        return <OverviewItem key={index} data={item}/>
                    })}
                </div>
            </div>
        </>
    )
}
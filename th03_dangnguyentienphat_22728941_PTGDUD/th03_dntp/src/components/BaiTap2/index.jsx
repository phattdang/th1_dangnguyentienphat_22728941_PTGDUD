import { useState } from "react";

function BaiTap2() {
    const [money, setMoney] = useState(0);
    const [rate, setRate] = useState(0);
    const [goal, setGoal] = useState(0);
    const [year, setYear] = useState(0);

    return (
        <>
            <img src="/invest.png" alt="" />
            <div>
                <span>input your invest money</span>
                <input type="text" name="" id="" />
            </div>
            <div>
                <span>input your rate</span>
                <input type="text" name="" id="" />
            </div>
            <div>
                <span>input your goal</span>
                <input type="text" name="" id="" />
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">year</th>
                        <th scope="col">money</th>
                        <th scope="col">rate</th>
                        <th scope="col">end year</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>{year}</th>
                        <td>{money}</td>
                        <td>{rate}</td>
                        <td>{goal}</td>
                    </tr>
                </tbody>
            </table>

            <div>
                <button>click</button>
            </div>
        </>
    )
}

export default BaiTap2;
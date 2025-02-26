import { useState } from "react";

function BaiTap2() {
    const [money, setMoney] = useState(0);
    const [rate, setRate] = useState(0);
    const [goal, setGoal] = useState(0);
    const [year, setYear] = useState(new Date().getFullYear());
    const [history, setHistory] = useState([]); // Thêm state để lưu lịch sử

    const handleClick = () => {
        const newYear = year + 1;
        const profit = money * (1 + rate / 100); // Tính tiền cuối năm dựa trên lãi suất
        setYear(newYear);
        setMoney(profit); // Cập nhật số tiền mới
        setHistory([...history, { year: newYear, money, rate, profit }]); // Thêm vào lịch sử
    };

    const moneyChange = (e) => {
        setMoney(parseFloat(e.target.value) || 0); // Chuyển thành số
    };
    const rateChange = (e) => {
        setRate(parseFloat(e.target.value) || 0); // Chuyển thành số
    };
    const goalChange = (e) => {
        setGoal(parseFloat(e.target.value) || 0); // Chuyển thành số
    };

    return (
        <>
            <img src="/invest.png" alt="Investment" />
            <div>
                <span>Input your invest money</span>
                <input onChange={moneyChange} type="number" />
            </div>
            <div>
                <span>Input your rate (%)</span>
                <input onChange={rateChange} type="number" />
            </div>
            <div>
                <span>Input your goal</span>
                <input onChange={goalChange} type="number" />
            </div>

            <div>
                <button onClick={handleClick}>Click</button>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Year</th>
                        <th scope="col">Money</th>
                        <th scope="col">Rate (%)</th>
                        <th scope="col">End Year</th>
                    </tr>
                </thead>
                <tbody>
                    {history.map((item, index) => (
                        <tr key={index}>
                            <th>{item.year}</th>
                            <td>{item.money.toFixed(2)}</td>
                            <td>{item.rate}</td>
                            <td>{item.profit.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default BaiTap2;
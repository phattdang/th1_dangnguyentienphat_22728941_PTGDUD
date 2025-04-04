export default function DetailReport() {
    return (
        <>
            <div className="detail col-span-3 row-span-2 p-4">
                <table className='table-auto border-collapse w-full'>
                    <thead>
                        <tr>
                            <th className="border border-gray-300 px-5 py-2">State</th>
                            <th className="border border-gray-300 px-10 py-2">Custom name</th>
                            <th className="border border-gray-300 px-10 py-2">Company</th>
                            <th className="border border-gray-300 px-10 py-2">Order value</th>
                            <th className="border border-gray-300 px-10 py-2">Order date</th>
                            <th className="border border-gray-300 px-10 py-2">Status</th>
                            <th className="border border-gray-300 px-10 py-2">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 px-5 py-2">✔</td>
                            <td className="border border-gray-300 px-10 py-2">John Doe</td>
                            <td className="border border-gray-300 px-10 py-2">Company X</td>
                            <td className="border border-gray-300 px-10 py-2">$100</td>
                            <td className="border border-gray-300 px-10 py-2">2025-04-02</td>
                            <td className="border border-gray-300 px-10 py-2">Active</td>
                            <td className="border border-gray-300 px-10 py-2">Edit</td>
                        </tr>
                        {/* Thêm các hàng khác nếu cần */}
                    </tbody>
                </table>
            </div>
        </>
    )
}
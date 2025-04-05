export default function OverviewItem({ data }) {
    return (
        <>
            {data.name === "Turnover" ? (
                <div className="item col-span-1 row-span-1 border p-4 flex flex-col gap-3 relative rounded-sm bg-pink-100">
                    <p className="font-bold text-xl">{data.name}</p>
                    <p className="font-bold text-4xl">${data.value}</p>
                    <p className="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3 text-green-600 font-bold">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                        </svg>

                        <span className="font-bold text-green-600">{data.rate}%</span>
                        <span className="text-gray-500"> period of change</span>
                    </p>
                    <button className="hover:bg-gray-200 rounded-xl absolute top-5 right-5">
                        <img src={data.imgBtn} alt="img" />
                    </button>
                </div>
            ) : (
                <div className="item col-span-1 row-span-1 border p-4 flex flex-col gap-3 relative rounded-sm bg-blue-100">
                    <p className="font-bold text-xl">{data.name}</p>
                    <p className="font-bold text-4xl">${data.value}</p>
                    <p className="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3 text-green-600 font-bold">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                        </svg>

                        <span className="font-bold text-green-600">{data.rate}%</span>
                        <span className="text-gray-500"> period of change</span>
                    </p>
                    <button className="hover:bg-gray-200 rounded-xl absolute top-5 right-5">
                        <img src={data.imgBtn} alt="img" />
                    </button>
                </div>
            )}

        </>
    )
}
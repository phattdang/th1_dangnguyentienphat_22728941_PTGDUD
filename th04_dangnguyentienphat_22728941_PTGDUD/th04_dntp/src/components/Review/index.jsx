export default function Review() {
    return (
        <>
            <div className="main px-30">
                <div className="title mt-10">
                    <h5 className="text-3xl">Emma Gonzales's Recipe Box</h5>
                </div>
                <div className="content flex gap-10 my-5">
                    <div className="avatar">
                        <img className="w-70" src="/avatar.png" alt="" />
                    </div>
                    <div className="desc">
                        <div className="text">
                            <span>
                                Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as a former cooking editor at The Los Angeles Times. She is also an accomplished author, contributing to numerous cookbooks and food publications. Originally from East Los Angeles, Emma now resides in New York City, where she explores a wide range of culinary delights.
                            </span>
                        </div>
                        <div className="flex gap-5 mt-5">
                            <span className=" text-pink-400 p-1 rounded-md">6.5 Subscribes</span>
                            <a className="bg-pink-500 text-white p-2 px-3 px-2 rounded-xl flex gap-3 items-center" href="">
                                Share
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                                </svg>

                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
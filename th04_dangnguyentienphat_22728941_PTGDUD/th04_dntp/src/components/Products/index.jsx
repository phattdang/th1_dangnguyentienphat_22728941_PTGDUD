import Item from "../Item";

export default function Products() {
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
                    <div className="col-span-1">
                        <Item />
                    </div>
                    <div className="col-span-1">
                        <Item />
                    </div>
                    <div className="col-span-1">
                        <Item />
                    </div>
                    <div className="col-span-1">
                        <Item />
                    </div>
                    <div className="col-span-1">
                        <Item />
                    </div>
                    <div className="col-span-1">
                        <Item />
                    </div>
                    <div className="col-span-1">
                        <Item />
                    </div>
                    <div className="col-span-1">
                        <Item />
                    </div>
                </div>
                <div className="pages">

                </div>
            </div>
        </>
    )
}
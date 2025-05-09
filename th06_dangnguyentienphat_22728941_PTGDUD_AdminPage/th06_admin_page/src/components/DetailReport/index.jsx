import { useEffect, useState } from "preact/hooks"
import fetchPersonAPI from "../../api/person";
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import btnCreate from "../../assets/images/create.png"
import fileText from "../../assets/images/File text 1.png"
import importBtn from "../../assets/images/Download.png"
import exportBtn from "../../assets/images/Move up.png"
import Modal from 'react-modal';
import EditModal from "../Modal";

export default function DetailReport() {
    const [isOpen, setIsOpen] = useState(false);

    const [modalType, setModalType] = useState("");

    const openModal = (row) => {
        setSelectedRow(row);
        setIsOpen(true);
        setModalType("update")
        console.log(row)
    };

    const [data, setData] = useState([]);

    const [selectedRow, setSelectedRow] = useState(null);

    useEffect(() => {
        fetchPersonAPI()
            .then(data => setData(data));
    }, []);

    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
            cell: row => (
                <div className="flex items-center space-x-2">
                    <img src={row.img} alt={row.name} className="w-8 h-8 rounded-full object-cover" />
                    <span>{row.name}</span>
                </div>
            )
        },
        { name: 'Company', selector: row => row.company },
        { name: 'Order Value', selector: row => row.orderValue },
        { name: 'Order Date', selector: row => row.orderDate },
        {
            name: 'Status', selector: row => {
                if (row.status)
                    return <p className="p-2 py-1 bg-green-100 text-green-700 rounded-2xl">Completed</p>;
                else return <p className="p-2 py-1 bg-blue-100 text-blue-700 rounded-2xl">New</p>;;
            }
        },
        {
            name: '',
            cell: (row) => (
                <button onClick={() => openModal(row)} className="hover:bg-gray-300 p-3 rounded-2xl">
                    <img src={btnCreate} alt="" />
                </button>
            )
        }
    ];

    const tableData = {
        columns,
        data
    };

    const fakeData = {
        name: "Ruth Toy",
        company: "Schaden Group",
        orderValue: 75,
        orderDate: "1951-09-03T08:21:23.146Z",
        status: "New"
    };

    const handleAddCustomer = () => {
        setModalType("add");
        setIsOpen(true);
    }

    return (
        <div className="detail col-span-3 row-span-2 p-4 pt-0 mt-10 ">
            <DataTable
                    className="border border-gray-300"
                    title={
                        <div className="flex items-center space-x-2">
                            <img src={fileText} alt="Logo" className="w-6 h-6" />
                            <span className="text-xl font-semibold">Detail Report</span>
                        </div>
                    }
                    columns={columns}
                    data={data}
                    pagination
                    paginationPerPage={6}
                    highlightOnHover
                    selectableRows
                    striped
                    persistTableHead
                    actions={
                        <div className="flex space-x-5">
                            <button onClick={handleAddCustomer} className="bg-blue-400 text-white p-2 px-4 
                        text-sm rounded-md hover:bg-blue-600 tran
                        hover:scale-115
                        transition ease-out duration-300
                        ">
                                Add
                            </button>
                            <button className="border border-pink-500 text-pink-500 p-2 px-3 
                        text-sm rounded-md  
                        hover:scale-115
                        transition ease-out duration-300
                        flex gap-3
                        font-semibold
                        ">
                            <img src={importBtn} alt="" />
                                Import
                            </button>
                            <button className="border border-pink-500 text-pink-500 p-2 px-3 
                        text-sm rounded-md 
                        hover:scale-115
                        transition ease-out duration-300
                        flex gap-3
                        font-semibold
                        ">
                            <img src={exportBtn} alt="" />
                                Export
                            </button>
                        </div>

                    }
                />
            <EditModal
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                selectedRow={modalType === "update" ? selectedRow : null}
                setData={setData}
                modalType={modalType}
            />
        </div>

    )
}

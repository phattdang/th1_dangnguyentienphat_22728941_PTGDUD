import { useEffect, useState } from "preact/hooks"
import fetchPersonAPI from "../../api/person";
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import btnCreate from "../../assets/images/create.png"
import Modal from 'react-modal';

export default function DetailReport() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchPersonAPI()
            .then(data => setData(data));
    }, []);

    const columns = [
        { name: 'Name', selector: row => row.name, sortable: true },
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
            name: '', selector: () => (
                <><button onClick={openModal} className="hover:bg-gray-300 p-3 rounded-2xl"><img src={btnCreate} alt="" /></button></>
            )
        }
    ];

    // Định nghĩa tableData ở đây
    const tableData = {
        columns,
        data
    };

    return (
        <div className="detail col-span-3 row-span-2 p-4 pt-0">
            <DataTableExtensions {...tableData}>
                <DataTable
                    title="Detail Report"
                    columns={columns}
                    data={data}
                    pagination
                    paginationPerPage={6}
                    highlightOnHover
                    selectableRows
                    striped
                    persistTableHead
                />
            </DataTableExtensions>
            <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Example Modal">
                <h2>Hello, this is a modal!</h2>
                <button onClick={closeModal}>Close</button>
            </Modal>
        </div>

    )
}

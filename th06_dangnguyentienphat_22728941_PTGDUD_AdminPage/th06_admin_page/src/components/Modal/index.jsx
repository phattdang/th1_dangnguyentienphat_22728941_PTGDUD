import Modal from 'react-modal';
import { useState, useEffect } from 'react';

Modal.setAppElement('#app');

export default function EditModal({ isOpen, onRequestClose, selectedRow, setData, modalType }) {

    const [formData, setFormData] = useState({
        id: '',
        name: '',
        company: '',
        orderValue: '',
        orderDate: '',
        status: 'New'
    });

    useEffect(() => {
        if (selectedRow) {
            setFormData(selectedRow);
        }
    }, [selectedRow]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`https://67ecb918aa794fb3222e975f.mockapi.io/admin/person/${formData.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Cập nhật thành công');
                refreshData();
                onRequestClose();
            } else {
                console.error('Lỗi cập nhật dữ liệu:', response.statusText);
            }
        } catch (error) {
            console.error('Có lỗi xảy ra:', error);
        }
    };

    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://67ecb918aa794fb3222e975f.mockapi.io/admin/person', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (response.ok) {
                console.log('Thêm thành công');
                refreshData(); 
                onRequestClose();
            } else {
                console.error('Lỗi khi thêm dữ liệu:', response.statusText);
            }
        } catch (error) {
            console.error('Lỗi khi thêm người dùng:', error);
        }
    };    

    const refreshData = async () => {
        const response = await fetch('https://67ecb918aa794fb3222e975f.mockapi.io/admin/person');
        const newData = await response.json();
        setData(newData);
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Chi tiết đơn hàng"
            style={{
                content: {
                    width: '600px',
                    height: 'auto',
                    maxHeight: '90vh',
                    margin: 'auto',
                    borderRadius: '12px',
                    padding: '20px'
                },
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.4)'
                }
            }}
        >
            <h2>Chi tiết đơn hàng</h2>
            {formData && (
                <form onSubmit={(e) => {
                    if (modalType === "update") {
                        handleSubmit(e);
                    } else {
                        handleAdd(e);
                    }
                }} className="space-y-4">
                    <div>
                        <label>Name:</label><br />
                        <input
                            type="text"
                            name="name"
                            value={formData.name || ''}
                            onChange={handleChange}
                            className="border p-1 w-full"
                        />
                    </div>

                    <div>
                        <label>Company:</label><br />
                        <input
                            type="text"
                            name="company"
                            value={formData.company || ''}
                            onChange={handleChange}
                            className="border p-1 w-full"
                        />
                    </div>

                    <div>
                        <label>Order Value:</label><br />
                        <input
                            type="number"
                            name="orderValue"
                            value={formData.orderValue || ''}
                            onChange={handleChange}
                            className="border p-1 w-full"
                        />
                    </div>

                    <div>
                        <label>Order Date:</label><br />
                        <input
                            type="datetime-local"
                            name="orderDate"
                            value={formData.orderDate ? new Date(formData.orderDate).toISOString().slice(0, 16) : ''}
                            onChange={handleChange}
                            className="border p-1 w-full"
                        />
                    </div>

                    <div>
                        <label>Status:</label><br />
                        <select
                            name="status"
                            value={formData.status ? "Completed" : "New"}
                            onChange={handleChange}
                            className="border p-1 w-full"
                        >
                            <option value="New">New</option>
                            <option value="In-progress">In-progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>

                    <div className="flex justify-end space-x-2">
                        {modalType === "update" ? (
                            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Cập nhật</button>
                        ) : (
                            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Thêm</button>
                        )}
                        <button type="button" onClick={onRequestClose} className="bg-gray-300 px-4 py-2 rounded">Đóng</button>
                    </div>
                </form>
            )}
        </Modal>
    );
}

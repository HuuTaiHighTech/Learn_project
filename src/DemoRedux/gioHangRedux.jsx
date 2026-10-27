import React from 'react'


const gioHangRedux = () => {

  

    const renderGioHang = () => {
        return gioHang.map((item) => {
            return (
                <tr key={item.maSP}>
                    <th>{item.maSP}</th>
                    <th>{item.tenSP}</th>
                    <th>{item.giaBan.toLocaleString()} VND</th>

                    <th>
                        <button onClick={() => {
                            tangGiamSL(item.maSP, -1)
                        }} className="btn btn-primary">-</button>
                        <button onClick={() => {
                            tangGiamSL(item.maSP, 1)
                        }} className="btn btn-primary">+</button>
                    </th>

                    <th>{(item.giaBan * item.soLuong).toLocaleString()} VND</th>

                    <th>
                        <button className="btn btn-danger" onClick={() => xoaGioHang(item.maSP)}> Xóa </button>
                    </th>

                </tr>
            )

        });
        // return render;
    }

    return (
        <div>
            <h3 className="text-center">Giỏ Hàng</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Stt</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>shortDescription</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{renderGioHang()}</tbody>
            </table>
            </div>
    )
}

export default gioHangRedux

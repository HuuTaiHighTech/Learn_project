import React from 'react'

const GioHang = () => {
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
                {/* <tbody>{renderGioHang()}</tbody> */}
            </table>



        </div>
    )
}

export default GioHang

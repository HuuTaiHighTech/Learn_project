import React from 'react'

const ProductList = () => {
    return (
        <div className='container'>
            <table className='table'>
                <thead>
                    <tr>
                    <th scope="col">#</th>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">price</th>
                        <th scope="col">shortDescription</th>
                        <th scope="col">quantity</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                        <td>1</td>
                        <td>iPhone 17</td>
                        <td>25000000</td>
                        <td>Điện thoại Apple</td>
                        <td>10</td>
                        <td>
                            <button className="btn-solid theme-primary">Edit</button>
                            <button className="btn-solid theme-danger">Delete</button>
                        </td>
                    </tr>
                    <tr>
                    <th scope="row">1</th>
                        <td>1</td>
                        <td>iPhone 17</td>
                        <td>25000000</td>
                        <td>Điện thoại Apple</td>
                        <td>10</td>
                        <td>
                            <button className="btn-solid theme-primary">Edit</button>
                            <button className="btn-solid theme-danger">Delete</button>
                        </td>
                    </tr>
                    <tr>
                    <th scope="row">1</th>
                        <td>1</td>
                        <td>iPhone 17</td>
                        <td>25000000</td>
                        <td>Điện thoại Apple</td>
                        <td>10</td>
                        <td>
                            <button className="btn-solid theme-primary">Edit</button>
                            <button className="btn-solid theme-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ProductList

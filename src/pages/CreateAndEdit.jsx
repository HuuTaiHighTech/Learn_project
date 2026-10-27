import React from 'react'

const CreateAndEdit = () => {
    return (
        <div className='container'>
            <form>
                <div className='row d-flex flex-column'>
                    <div className='col'>
                        <label for="datepicker1" class="form-label">Datepicker</label>
                        <input type='text' className=' w-12' id="datepicker1" data-bs-toggle="datepicker" autocomplete="off" placeholder="Choose date…"></input>
                    </div>
                    <div className='col'>
                        <span>name</span>
                        <input type='text' placeholder="Nhập tên của bạn"></input>
                    </div>
                    <div className='col'>
                        <span>price</span>
                        <input type='number' inputMode='numeric'></input>
                    </div>
                    <div className='col'>
                        <span>Short description</span>
                        <textarea placeholder="Mô tả ngắn"></textarea>
                    </div>
                    <div className='col'>
                        <span>quantity</span>
                        <input type='number' placeholder="Nhập số lượng sản phẩm"></input>
                    </div>
                    <div className='col'>
                        <select class="form-select form-select-lg mb-3" aria-label="Large select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateAndEdit

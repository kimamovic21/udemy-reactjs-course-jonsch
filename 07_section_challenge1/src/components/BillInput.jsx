import React from 'react'

const BillInput = ({ bill, onSetBill }) => {
    return (
        <div>
            <label>How mush was the bill ?</label>
            <input 
                type="text" 
                placeholder='Bill value'
                value={bill}
                onChange={(e) => onSetBill(Number(e.target.value))}
            />
        </div>
    )
}

export default BillInput
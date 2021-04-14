import React, { useState} from 'react'

function InputSample() {
    const [value, setValue] = useState("");
    const onReset = () => {
        
        setValue("");
    }
    return (
        <div>
            <input />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
            </div>
        </div>
    )

}

export default InputSample
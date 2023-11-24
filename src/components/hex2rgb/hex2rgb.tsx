import React, { useRef, useState } from 'react'

export default function HexToRgb() {
    const bg = useRef<HTMLDivElement>(null);
    const [value, setValue] = useState<string>("");

    const handlerInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const hexReg = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
        const result = value.match(hexReg);
        let rgbString = "";

        if (value.length === 7 && bg.current && !result) {
            setValue('error!')
            bg.current.style.backgroundColor = 'red';
        } else if (bg.current && result) {
            rgbString = `rgb(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)})`
            setValue(rgbString)
            bg.current.style.backgroundColor = rgbString
        }
    }

    return (
        <div className='wrapper'ref={bg}>
            <div className="inputs">
                <input onChange={handlerInputChange} />
                <input value={value} readOnly />
            </div>
        </div>
    )
}

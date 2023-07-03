import React, { useEffect, useState } from 'react'
import style from '../../styles/edit.module.scss'
import { Idata, Iinput } from '@/utils/types'

function Input({ data, reason, cancelEditHandler, formUpdate, handleCreate }: Iinput) {
    let [inputData, setInputData] = useState<Idata>({
        id: data.id,
        name: data.name,
        description: data.description
    })
    const saveButtonStyle: React.CSSProperties = reason === 'create' ? {
        marginRight: "20%"
    } : {}

    function updateInputDataName(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault()
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value,
        })
    }
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (reason === "update") formUpdate(inputData)
        else if (reason === "create") handleCreate(inputData)
    }
    function handleCancel() {
        if (reason === "update") cancelEditHandler()
        else if (reason === "create") {
            setInputData({
                id: data.id,
                name: data.name,
                description: data.description
            })
        }
    }

    // useEffect(() => {
    //     console.log(inputData)
    // }, [inputData])

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className={style.inputContainer}>
                <div className={style.inputBox} >
                    <div className={style.input} >
                        <label htmlFor="name">Name</label>
                        <input value={inputData.name} onChange={(e) => updateInputDataName(e)} type="text" name="name" id="name" />
                    </div>
                </div>
                <div className={style.inputBox} >
                    <div className={style.input} >
                        <label htmlFor="description">Description</label>
                        <input value={inputData.description} onChange={(e) => updateInputDataName(e)} type="text" name='description' id="description" />
                    </div>
                </div>
            </div>
            <div className={style.buttons}>
                <button className={style.saveButton} style={saveButtonStyle} type="submit">Confirm</button>
                <button className={style.cancelButton} onClick={() => handleCancel()}>Cancel</button>
            </div>
        </form>
    )
}

export default Input
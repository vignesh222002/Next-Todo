import React, { useEffect, useState } from 'react'
import { Idata } from '../tabel/TabelRows'
import style from '../../styles/edit.module.scss'

type Iinput = {
    reason: 'create' | 'update',
    data: Idata,
    cancelEditHandler: () => void,
    formUpdate: (data: Idata) => void,
    handleCreate: (data: Idata) => void
}

function Input({ data, reason, cancelEditHandler, formUpdate, handleCreate }: Iinput) {
    let [inputData, setInputData] = useState<Idata>({
        id: data.id,
        name: data.name,
        description: data.description
    })

    function updateInputDataName(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault()
        setInputData({
            ...inputData,
            name: e.target.value,
        })
    }
    function updateInputDataDes(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault()
        setInputData({
            ...inputData,
            description: e.target.value
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
                        <input value={inputData.description} onChange={(e) => updateInputDataDes(e)} type="text" name='description' id="description" />
                    </div>
                </div>
            </div>
            <div className={style.buttons}>
                <button className={style.saveButton} type="submit">Confirm</button>
                <button className={style.cancelButton} onClick={() => handleCancel()}>Cancel</button>
            </div>
        </form>
    )
}

export default Input
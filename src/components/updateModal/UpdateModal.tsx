import React from 'react'
import style from '../../styles/edit.module.scss'
import { Idata } from '../tabel/TabelRows'
import Input from './Input'

type IupdateModal = {
    data: Idata,
    formUpdate: (data: Idata) => void
    cancelEditHandler: () => void
}

function UpdateModal({ data, cancelEditHandler, formUpdate }: IupdateModal) {
    const reason = 'update'

    return (
        <div className={style.updateModalContainer}>
            <div className={style.updateModal}>
                <h2 className={style.modalHead}>{reason} Todo</h2>
                <Input reason={reason} data={data} cancelEditHandler={cancelEditHandler} formUpdate={formUpdate} handleCreate={() => {}} />
            </div>
        </div>
    )
}

export default UpdateModal
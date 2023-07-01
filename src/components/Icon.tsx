import React, { Fragment, memo } from 'react'
import style from '../styles/edit.module.scss'
import { Idata } from './tabel/TabelRows'


type IconType = {
    data: Idata,
    editIconActive: boolean,
    editPopup: number | null,
    handler1: (id: number) => void,
    handler2: () => void,
    editClick: (data: Idata) => void
}

function Icon({ editIconActive, editPopup, handler1, handler2, data, editClick }: IconType) {
    return (
        <div className={style.action}>
            <div style={{ maxWidth: "20px" }} onMouseOver={() => handler1(data.id)} onMouseLeave={() => handler2()}>
                <svg width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
                {editIconActive && (editPopup === data.id) && (
                    <div className={style.edit} onClick={() => editClick(data)}>Edit</div>
                )}
            </div>
        </div>
    )
}

export default memo(Icon)
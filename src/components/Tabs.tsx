import React, { useEffect, useState } from 'react'
import style from '../styles/tabs.module.scss'
import { useRouter } from 'next/router'
import { tabChooser } from '@/utils'

function Tabs() {
    const [active, setActive] = useState("")
    const router = useRouter()
    const activeStyle: React.CSSProperties = {
        color: "#001d35",
        backgroundColor: "#c2e7ff"
    }

    useEffect(() => {
        if (router.pathname == "/" || router.pathname == "/list") {
            setActive("list")
        }
        else if (router.pathname == "/create") {
            setActive("create")
        }
    }, [router.pathname])

    const linkStyle: React.CSSProperties = (active === "list") ? activeStyle : {}
    const createStyle: React.CSSProperties = (active === "create") ? activeStyle : {}

    return (
        <div className={style.nav}>
            <div className={style.navbar}>
                <div className={style.navContent}>
                    <div className={style.navLink} style={linkStyle} onClick={() => tabChooser('list', router)}>List</div>
                    <div className={style.navLink} style={createStyle} onClick={() => tabChooser('create', router)}>Create</div>
                </div>
            </div>
        </div>
    )
}

export default Tabs
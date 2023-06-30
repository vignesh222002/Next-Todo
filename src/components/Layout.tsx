import React, { Fragment, memo } from 'react'
import HeadTodo from './HeadTodo'
import Tabs from './Tabs'
import { useRouter } from 'next/router'

interface ILayout {
    children : JSX.Element
}

function Layout({children} : ILayout) {

    const route = useRouter()

    if(route.pathname === "/list" || "/create") {
        return (
            <Fragment>
                    <HeadTodo />
                    <Tabs />
                {
                    children
                }
            </Fragment>
          )
    }
    else {
        return (
            <Fragment>
                {children}
            </Fragment>
        )
    }


  
}

export default memo(Layout)
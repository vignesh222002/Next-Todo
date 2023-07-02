import React, { Fragment, memo, useContext, useEffect, useState } from 'react'
import HeadTodo from './HeadTodo'
import Tabs from './Tabs'
import { useRouter } from 'next/router'

import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PulseLoader } from 'react-spinners';
import { Data } from './contextApi/ContextAPI';

interface ILayout {
    children: JSX.Element
}

export const createToast = (val: string) => {
    console.log("Toast Achieved")
    toast.success(val, {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
    })
}

function Layout({ children }: ILayout) {
    const { loading } = useContext(Data)
    const route = useRouter()
    const loadingStyle: React.CSSProperties = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
    }

    if (route.pathname === "/list" || "/create") {
        return (
            <Fragment>
                {loading ? (
                    <>
                        <div style={loadingStyle}>
                            <PulseLoader
                                color="#36d7b7"
                                loading={loading}
                                size={15}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                                speedMultiplier={1}
                            />
                        </div>
                    </>

                ) : (
                    <>
                        <HeadTodo />
                        <Tabs />
                        {
                            children
                        }
                        <ToastContainer />
                    </>
                )}
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
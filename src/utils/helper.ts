import { NextRouter } from "next/router";

export function tabChooser(path: string, router: NextRouter) {
    router.push(`/${path}`)
}

export function loader(setLoading: React.Dispatch<React.SetStateAction<boolean>>) {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
}
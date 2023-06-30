import { NextRouter } from "next/router";

export function tabChooser(path: string, router: NextRouter) {
    router.push(`/${path}`)
}
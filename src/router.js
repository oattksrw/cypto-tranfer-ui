import React, { lazy } from "react"
import { Loader } from './apps/loaders'

export const MarketPage = Loader(lazy(() => import("./views/MarketPage")))

export const Error404 = Loader(lazy(() => import("./views/Error404")))

export const defaultRouters = [
    {
        path: '/',
        children: [
            {
                path: 'Market',
                element: <MarketPage />
            },
            {
                path: 'Market/:id',
                element: <MarketPage />
            },
            {
                path: '*',
                element: <Error404 />
            }
        ]
    }
]
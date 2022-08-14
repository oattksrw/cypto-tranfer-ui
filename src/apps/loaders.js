import React, { Suspense } from 'react'
import { InfinitySpin } from 'react-loader-spinner'
import './style.scss'

export const Loader = (Component) => (props) => {
    return <Suspense
        fallback={
            <div className='center'>
                <InfinitySpin
                    width='200'
                    color='#4fa94d'
                />
            </div>
        }
    >
        <Component {...props} />
    </Suspense>
}


import React from 'react'
import Footer from '../elements/Footer'

type ContainerBaseType = {
    children: React.ReactNode
    className?: string
}

export default function ContainerBase(props: ContainerBaseType) {
    return (
        <div className={`${props.className}`}>
            {props.children}
            <Footer />
        </div>
    )
}

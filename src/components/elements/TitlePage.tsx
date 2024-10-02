import Link from 'next/link'
import React from 'react'

type TitlePageProps = {
    title: string
}

export default function TitlePage(props: TitlePageProps) {
    return (
        <div>
            <div className="flex flex-col gap-5 items-center justify-center">
                <h1 className="text-5xl">{props.title}</h1>
                <Link href={"/"} className="text-blue-500 underline">Back to Home</Link>
            </div>
        </div>
    )
}

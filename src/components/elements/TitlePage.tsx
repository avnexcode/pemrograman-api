import Link from 'next/link'
import React from 'react'
import TypingText from './TypingText'

type TitlePageProps = {
    title: string
    link?: boolean
}

export default function TitlePage(props: TitlePageProps) {
    const { link = true } = props
    const typingText = [
        props.title, 1000
    ]
    return (
        <div className="flex flex-col gap-5 items-center justify-center py-20">
            <TypingText typingText={typingText} className="text-5xl font-sans font-bold uppercase"/>
            {link && <Link href={"/"} className="text-blue-500 underline">Back to Home</Link>}
        </div>
    )
}
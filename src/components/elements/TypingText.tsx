import React from 'react'
import { TypeAnimation } from 'react-type-animation';

type TypingTextProps = {
    typingText: (string | number)[]
    className?: string
}

export default function TypingText(props: TypingTextProps) {
    return <TypeAnimation
        sequence={props.typingText}
        wrapper="span"
        speed={50}
        className={props.className}
        repeat={Infinity}
    />
        ;
}

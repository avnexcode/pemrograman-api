import React from "react"
type CardListProps = {
    children: React.ReactNode
}
export default function CardList(props: CardListProps) {
    return (
        <div className="w-full p-4">
            {props.children}
        </div>
    )
}
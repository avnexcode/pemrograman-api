"use client"
import React from "react"

import CardList from "@/components/CardList"
import ViewUserButton from "@/components/ViewUserButton"
import { usePosts } from "@/features/post"
import TitlePage from "@/components/elements/TitlePage"
import { Post } from "@/types/post"



const renderElement = (posts: Post[]) => posts?.map((post) => {
    return (
        <CardList key={post.id}>
            <p>{post.id}</p>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <ViewUserButton userId={post.userId} />
        </CardList>
    )
})

export default function Posts() {
    const { data } = usePosts()
    return (
        <>
            {/* <p>{new Date().toLocaleTimeString()}</p> */}
            <TitlePage title="Post Page"/>
            {renderElement(data?.data)}
        </>
    )
}

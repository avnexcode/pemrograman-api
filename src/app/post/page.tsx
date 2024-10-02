"use client"
import React from "react"
import dynamic from 'next/dynamic'

import CardPost from "@/components/elements/CardPost"
import TitlePage from "@/components/elements/TitlePage"
const LiveDate = dynamic(() => import('@/components/elements/LiveDate'), {
  ssr: false,
})

import { usePosts } from "@/features/post"
import { Post } from "@/types/post"
import ContainerBase from "@/components/layouts/ContainerBase"
import Loader from "@/components/elements/Loader"

const renderElement = (posts: Post[]) => posts?.map(post => <CardPost key={post.id} data={post} />)

export default function Posts() {
  const { data, isLoading } = usePosts()
  return (
    <ContainerBase>
      <LiveDate />
      <TitlePage title="Post Page" />
      <div className="px-10 flex flex-col gap-10">
        {isLoading ? <Loader/> : renderElement(data)}
      </div>
    </ContainerBase>
  )
}

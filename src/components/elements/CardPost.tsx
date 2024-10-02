import { Post } from "@/types/post"
import React from "react"
import ViewUserButton from "../ViewUserButton"
import { MessageSquare } from "lucide-react"

type CardPostProps = {
    data: Post
}

const CardHeader = ({ title, id }: { title: string, id: number }) => (
    <div className="flex justify-between items-start mb-4">
        <div>
            <h2 className="text-xl font-bold text-gray-800 mb-1">
                {title}
            </h2>
            <p className="text-sm text-gray-500">
                Post ID: {id}
            </p>
        </div>
        <MessageSquare className="h-6 w-6 text-blue-500 flex-shrink-0" />
    </div>
)

const CardBody = ({ body }: { body: string }) => (
    <div className="mb-4">
        <p className="text-gray-600 leading-relaxed">
            {body}
        </p>
    </div>
)

const CardFooter = ({ userId }: { userId: number }) => (
    <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
        <span className="text-sm text-gray-500">
            User ID: {userId}
        </span>
        <ViewUserButton userId={userId} />
    </div>
)

export default function CardPost(props: CardPostProps) {
    return (
        <div className="w-full bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="p-5">
                <CardHeader title={props.data.title} id={props.data.id} />
                <CardBody body={props.data.body} />
                <CardFooter userId={props.data.userId} />
            </div>
        </div>
    )
}
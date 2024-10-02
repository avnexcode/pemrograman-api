import Link from 'next/link'
import React from 'react'

type HomeLinkProps = {
    href: string
}

export default function HomeLink(props: HomeLinkProps) {
  return <Link href={props.href} className="text-blue-500 hover:text-blue-700 font-medium text-lg uppercase underline">{props.href} PAGE</Link>
}

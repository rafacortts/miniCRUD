import Link from 'next/link'
import { ElementType } from 'react'

export interface MenuItemProps {
    icone: ElementType
    texto: string
    url: string
}

export default function MenuItem(props: MenuItemProps) {
    return (
        <Link href={props.url} className="flex gap-2 px-4 py-2 hover:bg-zinc-800">
            <props.icone className="text-white" size={24}/>
            <span className="text-white">{props.texto}</span>
        </Link>
    )
}

import { IconBrandProducthunt, IconHome, IconPackage, IconUser } from '@tabler/icons-react'
import Link from 'next/link'
import MenuItem from './MenuItem'

export default function Menu() {
    return (
        <aside className="w-72  h-screen">
            <nav className="flex flex-col gap-1 py-7">
                <MenuItem icone={IconHome} texto="Início" url="/" />
                <MenuItem icone={IconUser} texto="Criar Usuário" url="/usuarios"/>
                <MenuItem icone={IconPackage} texto="Produtos" url="/produtos" />
            </nav>
        
               
        </aside>
    )
}

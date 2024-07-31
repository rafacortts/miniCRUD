import { Usuario } from '@/core/model/Usuario'
import InputTexto from '../shared/InputTexto'
import { IconCheck, IconX, IconTrash } from '@tabler/icons-react' // Importando ícones

export interface FormularioUsuarioProps {
    usuario: Partial<Usuario>
    onChange: (usuario: Partial<Usuario>) => void
    salvar: () => void
    cancelar: () => void
    excluir: () => void
}

export default function FormularioUsuario(props: FormularioUsuarioProps) {
    return (
        <div className="flex flex-col gap-5">
            <InputTexto
                label="Nome"
                type="text"
                value={props.usuario.nome}
                onChange={(e) => props.onChange?.({ ...props.usuario, nome: e.target.value })}
            />
            <InputTexto
                label="E-mail"
                type="email"
                value={props.usuario.email}
                onChange={(e) => props.onChange?.({ ...props.usuario, email: e.target.value })}
            />
            <InputTexto
                label="Senha"
                type="password"
                value={props.usuario.senha}
                onChange={(e) => props.onChange?.({ ...props.usuario, senha: e.target.value })}
            />
            <div className="flex justify-between">
                <div className="flex gap-5">
                    <button 
                        className="border border-black bg-transparent text-black px-4 py-2 rounded-md flex items-center gap-2 hover:bg-black hover:text-white transition duration-200" 
                        onClick={props.salvar}
                    >
                        <IconCheck size={16} /> {/* Ícone de salvar */}
                        Salvar
                    </button>
                    <button 
                        className="border border-black bg-transparent text-black px-4 py-2 rounded-md flex items-center gap-2 hover:bg-black hover:text-white transition duration-200" 
                        onClick={props.cancelar}
                    >
                        <IconX size={16} /> {/* Ícone de cancelar */}
                        Cancelar
                    </button>
                </div>
                <button 
                    className="border border-black bg-transparent text-black px-4 py-2 rounded-md flex items-center gap-2 hover:bg-black hover:text-white transition duration-200" 
                    onClick={props.excluir}
                >
                    <IconTrash size={16} /> {/* Ícone de excluir */}
                    Excluir
                </button>
            </div>
        </div>
    )
}

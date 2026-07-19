import Imagem from './imagem/Imagem'
import Titulo from './titulo/Titulo'
import Descricao from './descricao/Descricao'
import Botao from './botao/Botao'

interface CartaoProps {
  caminho_da_imagem: string
  descricao_da_imagem: string
  texto_do_titulo: string
  texto_da_descricao: string
  rotulo_do_botao: string
  destino_do_botao: string
}

export default function Cartao(props: CartaoProps) {
  return (
    <div className="flex h-80 w-60 flex-col rounded-lg 
                    border border-slate-300 bg-slate-50 
                    p-3 shadow-sm">
      <Imagem
        caminho={props.caminho_da_imagem}
        descricao={props.descricao_da_imagem}
      />
      <div className="mt-2 flex flex-1 flex-col">
        <Titulo texto={props.texto_do_titulo} />
        <Descricao texto={props.texto_da_descricao} />
      </div>
      <Botao
        rotulo={props.rotulo_do_botao}
        destino={props.destino_do_botao}
      />
    </div>
  )
}

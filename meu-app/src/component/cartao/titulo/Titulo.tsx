interface TituloProps {
  texto: string
}

export default function Imagem(props: TituloProps) {
  return <h1 className="mb-2 mt-2 text-2xl font-bold text-slate-800">{props.texto}</h1>
}
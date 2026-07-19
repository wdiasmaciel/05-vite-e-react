interface DescricaoProps {
  texto: string
}

export default function Descricao(props: DescricaoProps) {
  return (
    <p className="text-sm text-slate-600 mb-2">
      {props.texto}
    </p>
  )
}

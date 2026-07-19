interface DescricaoProps {
  texto: string
}

export default function Descricao(props: DescricaoProps) {
  return (
    <p className="text-sm leading-relaxed text-slate-600">
      {props.texto}
    </p>
  )
}
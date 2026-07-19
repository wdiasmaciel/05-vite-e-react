interface ImagemProps {
  caminho: string
  descricao: string
}

export default function Imagem(props: ImagemProps) {
  return (
    <img
      className="aspect-[2/1.3] h-auto w-full rounded-md object-cover"
      src={props.caminho}
      alt={props.descricao}
    />
  )
}
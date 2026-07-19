interface BotaoProps {
  rotulo: string
  destino: string
}

export default function Botao(props: BotaoProps) {
  return (
    <a
      className="mt-auto inline-flex w-full 
                 items-center justify-center 
                 rounded-md bg-blue-600 px-3 py-2 
                 text-center font-semibold text-slate-50 
                 no-underline 
                 transition-colors duration-200 hover:bg-blue-700"
      href={props.destino}
    >
      {props.rotulo}
    </a>
  )
}

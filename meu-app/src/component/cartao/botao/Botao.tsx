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

/*
OBS:
No Tailwind CSS, a classe:
1) inline-flex: aplica a propriedade CSS "display: inline-flex". Isso 
   transforma o elemento em um contêiner flexível que flui junto com o 
   texto (comportando-se como um elemento inline), mas que permite 
   alinhar e organizar seus elementos filhos usando as regras do Flexbox.
   Ela é usada principalmente para alinhar pequenos grupos de elementos 
   (como um ícone ao lado de um texto) na mesma linha, sem que o contêiner 
   empurre os próximos elementos para a linha debaixo. Faz com que o 
   elemento ocupe apenas a largura dos seus elementos filhos e fique na 
   mesma linha que outros elementos ao seu redor. 


*/
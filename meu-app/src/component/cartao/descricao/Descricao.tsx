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

/*
OBS:
No Tailwind CSS, a classe "leading-relaxed" define a altura da 
linha (espaçamento vertical entre as linhas de um parágrafo) 
para o valor de 1.625. Isso significa que o espaço entre as linhas 
será 162,5% do tamanho da fonte, criando um "respiro" maior que 
melhora a legibilidade, principalmente, em textos longos.
*/
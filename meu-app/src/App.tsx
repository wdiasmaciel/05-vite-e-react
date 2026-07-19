import Painel from './component/painel/Painel'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 p-3 
                    text-slate-700 antialiased"
    >
      <Painel />
    </div>
  )
}

/*
OBS:
No framework Tailwind CSS, a classe:
* antialiased: aplica a propriedade CSS "font-smoothing: antialiased". 
  Isso melhora a qualidade do texto renderizado, tornando as bordas 
  dos caracteres mais suaves e menos pixeladas. Ela controla a 
  suavização de fontes (font smoothing) do elemento. Ela aplica escala 
  de cinza para suavizar as bordas do texto, deixando as letras mais 
  nítidas e finas, melhorando a legibilidade. A sua principal vantagem 
  aparece quando o texto é renderizado no macOS ou em telas Retina, 
  onde o antialiased previne que fontes pesadas ou finas fiquem com um 
  aspecto "borrado" ou excessivamente espesso.
*/

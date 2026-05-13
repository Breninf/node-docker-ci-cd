import React from 'react'

export default function App() {
  const backgroundImageUrl = 'https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2022/05/11/adriano_imperador_e_comando_vermelho-21001806.jpg' 

  const appStyle = {
    backgroundImage: backgroundImageUrl ? `url(${backgroundImageUrl})` : 'none',
  }

  return (
    <div className="app" style={appStyle}>
      <header>
        <h1>TÁ FEITO TROPA!!!</h1>
        <p>Marcha nos progresso</p>
      </header>
    </div>
  )
}

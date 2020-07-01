function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemGameOver = loadImage('imagens/assets/game-over.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
  imagemTelaInicial = loadImage('imagens/assets/telaInicial.png');
  fonteTelaInicial = loadFont('imagens/cenario/fonteTelaInicial.otf');
  imagemVida = loadImage('imagens/assets/coracao.png');
  fita = loadJSON('fita/fita.json')
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
}
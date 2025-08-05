console.log('Olá mundo!');

// Criando um título
let titulo = document.createElement('h1');
titulo.innerText = 'Hello, World! English! (Inglês) Ok?!';
titulo.style.backgroundColor = 'blue';
titulo.style.color = 'yellow';
titulo.style.padding = '20px';
titulo.style.borderRadius = '10px';
titulo.style.fontFamily = 'Arial';
titulo.style.textAlign = 'center';
document.body.appendChild(titulo);

// Criando um relógio digital
let relogio = document.createElement('div');
relogio.style.fontSize = '2rem';
relogio.style.marginTop = '20px';
relogio.style.fontFamily = 'monospace';
relogio.style.textAlign = 'center';
document.body.appendChild(relogio);

function atualizarRelogio() {
  const agora = new Date();
  const horas = agora.getHours().toString().padStart(2, '0');
  const minutos = agora.getMinutes().toString().padStart(2, '0');
  const segundos = agora.getSeconds().toString().padStart(2, '0');
  relogio.innerText = `🕒 ${horas}:${minutos}:${segundos}`;
}
setInterval(atualizarRelogio, 1000);
atualizarRelogio();

// Criando um botão que muda a cor de fundo
let botao = document.createElement('button');
botao.innerText = '🎨 Mudar Cor de Fundo';
botao.style.marginTop = '30px';
botao.style.padding = '10px 20px';
botao.style.fontSize = '1rem';
botao.style.cursor = 'pointer';
botao.style.border = 'none';
botao.style.borderRadius = '5px';
botao.style.backgroundColor = '#333';
botao.style.color = 'white';
botao.style.display = 'block';
botao.style.marginLeft = 'auto';
botao.style.marginRight = 'auto';
document.body.appendChild(botao);

botao.addEventListener('click', () => {
  const corAleatoria = '#' + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = corAleatoria;
});
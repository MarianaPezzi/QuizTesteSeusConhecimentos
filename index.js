const perguntas = [
  {
    pergunta: 'O que significa a sigla "DOM" em JavaScript?',
    respostas: [
      'Documento de Objeto Móvel',
      'Modelo de Objeto do Documento',
      'Domínio de Objetos Múltiplos'
    ],
    correta: 1
  },
  {
    pergunta:
      'Qual função é usada para imprimir algo no console em JavaScript?',
    respostas: ['console.print()', 'print.log()', 'console.log()'],
    correta: 2
  },
  {
    pergunta: 'O que é closure em JavaScript?',
    respostas: [
      'Uma função que não retorna valor',
      'Um bloco de código condicional',
      'Uma função que mantém acesso a variáveis de seu escopo pai'
    ],
    correta: 2
  },
  {
    pergunta: 'Como se declara uma variável em JavaScript?',
    respostas: ['var myVar;', 'variable myVar;', 'let myVar;'],
    correta: 2
  },
  {
    pergunta: 'O que é o evento "click" em JavaScript?',
    respostas: [
      'Um evento de teclado',
      'Um evento de mouse',
      'Um evento de carregamento da página'
    ],
    correta: 1
  },
  {
    pergunta: 'Qual é a finalidade do método "parseInt()" em JavaScript?',
    respostas: [
      'Converter uma string em número inteiro',
      'Arredondar um número decimal',
      'Converter um número em string'
    ],
    correta: 0
  },
  {
    pergunta: 'Qual é a diferença entre "==" e "===" em JavaScript?',
    respostas: [
      'Ambos comparam valores e tipos',
      '==" compara apenas valores, "===" compara valores e tipos',
      '"===" compara apenas valores, "==" compara valores e tipos'
    ],
    correta: 1
  },
  {
    pergunta: 'O que é AJAX em JavaScript?',
    respostas: [
      'Uma biblioteca de gráficos',
      'Um método de comunicação assíncrona com o servidor',
      'Um framework para animações em JavaScript'
    ],
    correta: 1
  },
  {
    pergunta: 'Qual é a função do operador "this" em JavaScript?',
    respostas: [
      'Referenciar o objeto global',
      'Referenciar o objeto pai',
      'Referenciar o objeto atual'
    ],
    correta: 2
  },
  {
    pergunta: 'O que é o JSON em JavaScript?',
    respostas: [
      'Uma linguagem de programação',
      'Um formato de dados para troca de informações',
      'Um método de manipulação de strings'
    ],
    correta: 1
  }
]
const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalPerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalPerguntas

for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute(
      'name',
      'pergunta-' + perguntas.indexOf(item)
    )
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = event => {
      const estaCorreta = event.target.value == item.correta

      corretas.delete(item)
      if (estaCorreta) {
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + ' de ' + totalPerguntas
    }

    quizItem.querySelector('dl').appendChild(dt)
  }
  quizItem.querySelector('dl dt').remove()

  quiz.appendChild(quizItem)
}

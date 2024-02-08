const perguntas = [
	{
		pergunta: "O que o método 'indexOf()' faz em JavaScript?",
		respostas: [
			"Retorna o índice do elemento especificado em um array",
			"Adiciona um elemento ao final de um array",
			"Remove o último elemento de um array"
		],
		correta: 0
	},
	{
		pergunta:
			"Qual é a maneira correta de comparar duas variáveis em JavaScript?",
		respostas: ["x == y", "x = y", "x === y"],
		correta: 0
	},
	{
		pergunta:
			"Qual método é usado para remover o último elemento de um array em JavaScript?",
		respostas: ["pop()", "remove()", "delete()"],
		correta: 0
	},
	{
		pergunta: "Qual é a função do método 'toFixed()' em JavaScript?",
		respostas: [
			"Arredonda um número para a quantidade especificada de casas decimais",
			"Retorna a parte inteira de um número",
			"Retorna o maior número em uma lista de argumentos"
		],
		correta: 0
	}
];
const quiz = document.querySelector("#quiz");
const template = document.querySelector("template");

for (const item of perguntas) {
	const quizItem = template.content.cloneNode(true);
	quiz.appendChild(quizItem);
	alert(item.pergunta);
}

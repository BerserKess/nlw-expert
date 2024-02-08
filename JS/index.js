const questions = [
	{
		question:
			"Qual é o nome do diretor da Escola de Magia e Bruxaria de Hogwarts periodo em que se passa os filmes?",

		answers: ["Alvo Dumbledore", "Severo Snape", "Remo Lupin"],
		correct: 0
	},
	{
		question: "Qual é o animal de estimação de Rubeus Hagrid?",

		answers: ["Cachorro", "Coruja", "Hipogrifo"],
		correct: 0
	},
	{
		question:
			"Qual é o nome do fantasma que assombra o banheiro feminino da Escola de Magia e Bruxaria de Hogwarts?",

		answers: ["Nick Quase Sem Cabeça", "Murta Que Geme", "Fred Weasley"],
		correct: 0
	},
	{
		question:
			"Qual é o nome do professor(a) que ensina Transfiguração em Hogwarts?",

		answers: ["Minerva McGonagall", "Filius Flitwick", "Pomona Sprout"],
		correct: 0
	},
	{
		question:
			"Qual é o verdadeiro nome do vilão principal nos filmes de Harry Potter?",

		answers: ["Lúcio Malfoy", "Bellatrix Lestrange", "Tom Riddle"],
		correct: 2
	},
	{
		question: "Qual é a posição de quadribol de Harry Potter?",

		answers: ["Batedor", "Apanhador", "Goleiro"],
		correct: 1
	},
	{
		question: "Qual é o nome do elfo doméstico que é fiel a Harry Potter?",

		answers: ["Dobby", "Winky", "Monstro"],
		correct: 0
	},
	{
		question:
			"Qual é a casa em que Harry Potter é selecionado em sua primeira cerimônia de seleção?",

		answers: ["Sonserina", "Grifinória", "Lufa-Lufa"],
		correct: 1
	},
	{
		question: "Quem é o melhor amigo de Harry Potter?",

		answers: ["Ron Weasley", "Hermione Granger", "Draco Malfoy"],
		correct: 0
	},
	{
		question: "Qual é o nome do terceiro livro da série Harry Potter?",

		answers: [
			"A Ordem da Fênix",
			"O Prisioneiro de Azkaban",
			"O Cálice de Fogo"
		],
		correct: 1
	}
];

const quiz = document.querySelector("#quiz");
const template = document.querySelector("template");

const answerCorrect = new Set();
const questionsTotal = questions.length;
const showTotal = document.querySelector("#hits span");
showTotal.textContent = `Acertos ${answerCorrect.size} de ${questionsTotal}`;

questions.forEach((iten) => {
	const quizIten = template.content.cloneNode(true);

	quizIten.querySelector("h3").textContent = iten.question;

	iten.answers.forEach((answer) => {
		const definitionList = quizIten.querySelector("dl dt").cloneNode(true);
		definitionList.querySelector("span").textContent = answer;

		// COLOCAR NAME NO INPUT E MUDAR OS VALORES
		definitionList
			.querySelector("input")
			.setAttribute("name", `pergunta-${questions.indexOf(iten)}`);
		definitionList.querySelector("input").value =
			iten.answers.indexOf(answer);

		// VERIFICAR SE ESTÁ CORRETO A ALTERNATIVA SELECIONADA
		definitionList.querySelector("input").onchange = (event) => {
			const isCorrect = event.target.value == iten.correct;

			// ARMAZENAR AS ALTERNATIVAS CORRETAS
			answerCorrect.delete(iten);
			if (isCorrect) {
				answerCorrect.add(iten);
			}

			// ATUALIZAR O NUMERO DE ACERTOS NA PÁGINA
			showTotal.textContent = `Acertos ${answerCorrect.size} de ${questionsTotal}`;
		};

		quizIten.querySelector("dl").appendChild(definitionList);
	});

	// REMOVER A RESPOSTA PADRÃO
	quizIten.querySelector("dl dt").remove();

	// COLOCA A PERGUNTA NA TELA
	quiz.appendChild(quizIten);
});

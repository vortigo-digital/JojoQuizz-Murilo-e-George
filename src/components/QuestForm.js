import React, { useState } from 'react';
import './QuestForm.css';
import Modal from './Modal';

const QuestForm = () => {
    const [isModalVisible, setModalVisibility] = useState(false); 
    const [currentQuestion, setCurrentQuestion] = useState(0); 
    const [userAnswers, setUserAnswers] = useState([]); 

    function modalClickHandler() {
        setModalVisibility(true); //essa função seta a visibilidade do modal como true, exibindo ele na tela. O modal, fica sempre invisível, até que terminem as questões.
    }

    function handleAnswerClick(answerId) {
        setUserAnswers([...userAnswers, answerId]);
        if (currentQuestion + 1 < questions.length) { 
            setCurrentQuestion(currentQuestion + 1);
        } else {
            modalClickHandler();
        }
    }

    const reloadPage = () => {
        window.location.reload(); //variavél de reload da página
    };

    const questions = [
        {
            questionText: 'Quando confrontado com um problema, você tende a:',
            answerOptions: [
                { id: 0, answerText: 'Abordá-lo de frente e tentar resolvê-lo imediatamente.' },
                { id: 1, answerText: 'Refletir sobre ele antes de tomar uma decisão.' },
                { id: 2, answerText: 'Procurar aconselhamento de outras pessoas antes de agir.' },
            ],
        },
        {
            questionText: 'Como você se sente em relação a grandes multidões?',
            answerOptions: [
                { id: 0, answerText: 'Adoro estar no meio de grandes grupos de pessoas.' },
                { id: 1, answerText: 'Prefiro interagir com algumas pessoas de cada vez.' },
                { id: 2, answerText: 'Evito grandes multidões sempre que possível.' },
            ],
        },
        {
            questionText: 'Como você lida com situações estressantes?',
            answerOptions: [
                { id: 0, answerText: 'Fico calmo e focado, resolvendo problemas um de cada vez.' },
                { id: 1, answerText: 'Procuro apoio emocional de amigos ou familiares.' },
                { id: 2, answerText: 'Às vezes, fico sobrecarregado e tenho dificuldade em lidar com o estresse.' },
            ],
        },
        {
            questionText: 'Como você se descreveria em situações sociais?',
            answerOptions: [
                { id: 0, answerText: 'Extrovertido e sociável, gosto de conhecer novas pessoas.' },
                { id: 1, answerText: 'Introvertido, prefiro conversas profundas com amigos próximos.' }, 
                { id: 2, answerText: 'Uma mistura dos dois, dependendo do ambiente e da minha disposição.' },
            ],
        },
        {
            questionText: 'Qual é a sua opinião sobre trabalhar em equipe?',
            answerOptions: [
                { id: 0, answerText: 'Adoro trabalhar em equipe e colaborar com colegas.' },
                { id: 1, answerText: 'Prefiro trabalhar de forma independente na maioria das vezes.' },
                { id: 2, answerText: 'Depende da situação, posso trabalhar bem tanto em equipe quanto sozinho.' },
            ],
        },
        {
            questionText: 'Como você costuma lidar com críticas?',
            answerOptions: [
                { id: 0, answerText: 'Levo as críticas como uma oportunidade para aprender e crescer.' },   //Array de objetos de questões, cada uma com um ID.
                { id: 1, answerText: 'Às vezes, fico defensivo, mas tento considerar o feedback.' },
                { id: 2, answerText: 'Posso ficar desconfortável com críticas, mas tento melhorar com elas.' },
            ],
        },
    ];
    

    return ( 
        <div>
            <div className="question-section">
                <div className="question-text">{questions[currentQuestion].questionText}</div>
                <div className="answer-section">
                    {questions[currentQuestion].answerOptions.map((answerOption) => (
                        <button key={answerOption.id} onClick={() => handleAnswerClick(answerOption.id)}>  
                            {answerOption.answerText}
                        </button>
                    ))}
                </div>
            </div>
            <button className="reload" onClick={reloadPage}>Reiniciar</button>
            {isModalVisible && <Modal answers={userAnswers} close={() => setModalVisibility(false)} />} 
        </div>
    );
};

export default QuestForm;

// Aqui no return retornamos as seções para mostrar a pergunta e uma seção para as respostas. Imprimimos as respostas na tela usando o método map. Cada resposta é salva no array userAnswers pelo id. Se tiverem acabado as perguntas, o modal com o resultado aparece. 
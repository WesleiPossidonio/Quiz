import { useContext } from "react";

import { QuizContext } from "../context/quiz";

import WellDone from "../img/ImageEnd.svg";

import "./GameOver.css";

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="gameover">
      <h2>Fim de jogo!</h2>
      <p>Pontuação: {quizState.score}</p>
      <p>
        Você acertou {quizState.score} de {quizState.questions.length}{" "}
        perguntas.
      </p>
      <p>Bom esses são uns dos pontos que eu admiro em vc. 
        Você é inclivel amor!!! muito mais do que eu pedi a Deus... <br />
        As vezes talvez não demonstrando mas a cada dia me apaixono mais... <br /> A cada dia descubro algo novo sobre vc e eu amo muito isso, <br /> 
        amo estar ao seu lado, amo estar olhando os seus olhos na igreja, quando estou tocando e te olho ali sentada eu fico tão feliz, te procuro todos os cultos... fico pensando do porque vc me escolheu pq não sou la aquelas coisas... e mesmo assim ando falhando... 
        Amor prometo que te farei a mais feliz do mundo.... vc é o objetivo que eu não tinha achado.... vc é o Amor da minha Vida. E vou demonstrar a cada dia mais isso!!!   <br /><br />
        <strong>EU TE AMO MUIITOOO!</strong>   
      </p>
      <img src={WellDone} alt="Fim do Quiz" />
      <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button>
    </div>
  );
};

export default GameOver;

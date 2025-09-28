'use client';

import React, { useState, useEffect, useCallback } from 'react';

// --- Lista de Palavras e Função de Seleção ---
const WORDS = [
  "ALGORITMO",
  "API",
  "ARRAY",
  "BANCODEDADOS",
  "BACKEND",
  "BOOTSTRAP",
  "BUG",
  "CACHE",
  "CHIP",
  "CLOUD",
  "CODIGO",
  "COMPILADOR",
  "CSS",
  "CYBERSEGURANCA",
  "DEPLOY",
  "DESENVOLVEDOR",
  "DOMINIO",
  "DOWNLOAD",
  "FIREWALL",
  "FIRMWARE",
  "FRAMEWORK",
  "FRONTEND",
  "FULLSTACK",
  "GITHUB",
  "HTML",
  "HTTP",
  "HTTPS",
  "IA",
  "INTELIGENCIAARTIFICIAL",
  "IP",
  "JAVASCRIPT",
  "LINUX",
  "LOGICA",
  "MACHINELEARNING",
  "NODE",
  "PIXEL",
  "PROCESSADOR",
  "PROGRAMA",
  "PYTHON",
  "REACT",
  "REDES",
  "REDUX",
  "ROTEADOR",
  "SERVIDOR",
  "SOFTWARE",
  "SQL",
  "SSH",
  "STACK",
  "TECNOLOGIA",
  "UPLOAD",
  "URL",
  "VERCEL",
  "VITE",
  "VIRTUALIZACAO",
  "WIRELESS"
];


const getRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * WORDS.length);
  return WORDS[randomIndex].toUpperCase();
};

const MAX_MISTAKES = 6;

// --- Componente para o Desenho da Forca ---
const HangmanFigure = ({ mistakes }) => {
  return (
    <div className="hangman-figure">
      <div className="scaffold">
        <div className="post"></div>
        <div className="beam"></div>
        <div className="rope"></div>
      </div>
      {mistakes >= 1 && <div className="head"></div>}
      {mistakes >= 2 && <div className="body"></div>}
      {mistakes >= 3 && <div className="left-arm"></div>}
      {mistakes >= 4 && <div className="right-arm"></div>}
      {mistakes >= 5 && <div className="left-leg"></div>}
      {mistakes >= 6 && <div className="right-leg"></div>}

      <p className="mistakes-count">
        Erros: {mistakes} / {MAX_MISTAKES}
      </p>
    </div>
  );
};

// --- Componente Principal do Jogo da Forca ---
const HangmanGame = () => {
  const [wordToGuess, setWordToGuess] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [mistakes, setMistakes] = useState(0);
  const [gameStatus, setGameStatus] = useState('playing');

  const resetGame = useCallback(() => {
    setWordToGuess(getRandomWord());
    setGuessedLetters([]);
    setMistakes(0);
    setGameStatus('playing');
  }, []);

  useEffect(() => {
    resetGame();
  }, [resetGame]);

  const handleGuess = (letter) => {
    const upperLetter = letter.toUpperCase();

    if (guessedLetters.includes(upperLetter) || gameStatus !== 'playing') {
      return;
    }

    setGuessedLetters(prev => [...prev, upperLetter]);

    if (!wordToGuess.includes(upperLetter)) {
      setMistakes(prev => prev + 1);
    }
  };

  useEffect(() => {
    if (mistakes >= MAX_MISTAKES) {
      setGameStatus('lost');
      return;
    }

    const wordGuessed = wordToGuess.split('').every(letter => guessedLetters.includes(letter));
    if (wordToGuess.length > 0 && wordGuessed) {
      setGameStatus('won');
    }
  }, [guessedLetters, mistakes, wordToGuess]);

  const displayWord = wordToGuess.split('').map((letter, index) => (
    <span key={index} className="letter">
      {guessedLetters.includes(letter) ? letter : '_'}
    </span>
  ));

  const correctGuesses = guessedLetters.filter(l => wordToGuess.includes(l));
  const wrongGuesses = guessedLetters.filter(l => !wordToGuess.includes(l));

  // Renderização do Teclado
  const renderKeyboard = () => {
    return (
      <div className="keyboard">
        {Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)).map(letter => {
          const isGuessed = guessedLetters.includes(letter);
          const isCorrect = wordToGuess.includes(letter);

          let buttonClass = 'button';
          if (isGuessed) {
            buttonClass = isCorrect ? 'button guessed-correct' : 'button guessed-wrong';
          }

          return (
            <button
              key={letter}
              onClick={() => handleGuess(letter)}
              disabled={isGuessed || gameStatus !== 'playing'}
              className={buttonClass}
            >
              {letter}
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <div className="hangman-container">
      <h1 className="title">Jogo da Forca (React/Next.js)</h1>

      {/* Novo Container Flex/Grid para as Duas Colunas */}
      <div className="game-content-wrapper">

        {/* Coluna Esquerda: Forca */}
        <div className="game-column hangman-column">
          <HangmanFigure mistakes={mistakes} />
        </div>

        {/* Coluna Direita: Palavra e Teclado */}
        <div className="game-column main-game-column">

          {/* Exibição da Palavra */}
          <div className="word-display-area">
            <div className="word-display">
              {displayWord}
            </div>

            {/* Lista de Tentativas Anteriores */}
            <div className="guesses-list">
              <p>Tentativas (Erradas): <span className="wrong-text">{wrongGuesses.join(', ')}</span></p>
              <p>Tentativas (Corretas): <span className="correct-text">{correctGuesses.join(', ')}</span></p>
            </div>
          </div>

          {/* Interface de Vitória/Derrota */}
          {(gameStatus === 'won' || gameStatus === 'lost') && (
            <div className={`game-end-message ${gameStatus === 'won' ? 'won' : 'lost'}`}>
              {gameStatus === 'won' ? (
                <h2>🏆 Parabéns! Você Venceu!</h2>
              ) : (
                <h2>💀 Você Perdeu!</h2>
              )}
              <p className="word-revealed">A palavra era: **{wordToGuess}**</p>

              {/* Botão Reiniciar */}
              <button onClick={resetGame} className="restart-button">
                Reiniciar Jogo
              </button>
            </div>
          )}

          {/* Teclado (Visível apenas durante o jogo) */}
          {gameStatus === 'playing' && renderKeyboard()}
        </div>
      </div>
    </div>
  );
};

export default HangmanGame;

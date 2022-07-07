import React, {useState, useEffect} from 'react'
import Option from '../components/Option'
import { StyledBg } from "../components/styledComponents/HomeStyles"
import Confetti  from "react-confetti";

export default function Quiz(props){

    function shuffle(arr) {
        let array = arr
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex !== 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }

    const [questions, setQuestions] = useState([])
    const [generatedQuestions, setGeneratedQuestions] = useState([])
    const [submitted, setSubmitted] = useState(false)
    const [score, setScore] = useState(0)
    const [allCorrect , setAllCorrect] = React.useState(false)




    useEffect(() => {
            fetch(`https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple`)
             .then((res) => res.json())
                .then((data) => (data.results))
                    .then(data => setQuestions(data))
                        .catch((err) => console.log(err))  
        
        
    }, [])

    useEffect(() => {
        setGeneratedQuestions(questions.map(question => {
            return {...question, options: shuffle([...question.incorrect_answers, question.correct_answer]), selectedOption: ""}
        }))
    }, [questions])

    function selectOption(q, answer){
        setGeneratedQuestions(prevQuestions => prevQuestions.map(question => {
            return question.question === q ?
                 {...question, selectedOption: answer }
                :question
        }))
    }

    function markScore(){
        setSubmitted(!submitted)
        let _score = 0
        for (let question of generatedQuestions){
            if(question.correct_answer === question.selectedOption)
            _score+=1
        }
        setScore(_score)

        if(_score === generatedQuestions.length){
            setAllCorrect(true)
        }
    }

    function restartQuiz(){
        props.displayQuiz()
        setAllCorrect(false)
    }

    



    return (
        <StyledBg>
            {allCorrect && <Confetti />}
            <div className="top-bubble">
                <svg width="126" height="131" viewBox="0 0 126 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M63.4095 71.3947C35.1213 40.8508 -2.68211 11.7816 1.17274 -29.6933C5.43941 -75.599 39.854 -115.359 82.4191 -133.133C122.797 -149.994 170.035 -140.256 205.822 -115.149C235.947 -94.0141 236.823 -53.8756 246.141 -18.271C256.17 20.0508 282.521 60.8106 260.501 93.7792C237.538 128.159 188.991 133.432 147.931 128.768C112.318 124.723 87.7505 97.6768 63.4095 71.3947Z" fill="#FFFAD1"/>
                </svg>
            </div>
            <div className='quiz-field'>
            {generatedQuestions.map((question, index) => {
                let displayQ = (question.question).replace(/&#039;/g, "'").replace(/&quot;/g, '"').replace(/&eacute;/g,"e").replace(/&ouml;/g, "o")
                return (
                <div key={index} className='question'>
                    <h4>{displayQ}</h4>
                    <div className='options'>
                        {question.options.map(
                            (answer, idx) => 
                            <Option 
                                style = {submitted
                                    ? answer === question.correct_answer
                                      ? "correct-submit"
                                      : answer === question.selectedOption
                                      ? "wrong-submit"
                                      : "after-submit"
                                    : answer === question.selectedOption
                                    ? "selected"
                                    : ""} 
                                key = {idx}
                                answer = {answer}
                                handleClick = {() => selectOption(question.question, answer)}
                            />
                        )}
                    </div>
                </div>

        )
        })}

        <div className='result'>
            {submitted && <h4>You scored {score}/{generatedQuestions.length} correct answers</h4>}
            <button className='submit' onClick= {submitted ? restartQuiz : markScore}>{submitted ? "Play again": "Check Scores"}</button>
        </div>

            </div>        
            <div className="down-bubble">
                <svg width="65" height="62" viewBox="0 0 65 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path fillRule="evenodd" clipRule="evenodd" d="M-38.919 2.96445C-10.8241 1.07254 20.4975 -5.87426 40.8434 11.5469C63.3629 30.8293 69.9281 62.0589 61.4141 88.8747C53.3376 114.313 28.2818 132.992 -0.0909882 140.475C-23.9759 146.775 -45.6063 132.093 -68.3914 123.11C-92.9153 113.441 -125.606 110.575 -133.794 87.7612C-142.333 63.9714 -124.677 39.0277 -104.912 21.3621C-87.7687 6.03978 -63.0936 4.59238 -38.919 2.96445Z" fill="#DEEBF8"/>
                </svg>
            </div>
        </StyledBg>
    )
}
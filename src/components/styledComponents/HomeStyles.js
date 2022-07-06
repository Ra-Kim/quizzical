import styled from "styled-components";

export const StyledBg = styled.div`
 background-color: #EEE;
 /* background-color: #F5F7FB; */
 height: 100vh;
 width: 60%;
 margin:auto;
 position: relative;
 border: 1px solid #DDD;
 box-shadow: 1rem;

 button {
    font-family: Inter , 'sans-serif';
        margin-top: 19px;
        padding: 20px 65px;
        border-radius: 15px;
        border: none;
        cursor: pointer;
        letter-spacing: 0.1rem;
        font-family: 'Inter';
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #F5F7FB;
        background-color: #4D5B9E;
    }

 .top-bubble{
    width: fit-content;
    position: absolute;
    right: 0;
}

.prompt {
    position: absolute;
    left: 37.5%;
    top: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        font-weight: 700;
        font-size: 31px;
        line-height: 37px;
        color: #293264;
    }

    p {
        margin-top: 0;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #293264;
    }

    
}

.down-bubble{
    width: fit-content;
    position: absolute;
    left: 0;
    bottom: 0;
}

.quiz-field{
    width: 75%;
    margin: auto;
    margin-top: 5%;
}

.question {
    margin-bottom: 4%;

    h4{
        font-weight: bolder;
        font-size: 16px;
        line-height: 19px;
        color: #293264;
    }

    span {
        padding: 5px;
        margin-right: 2%;
        border: 0.794239px solid #4D5B9E;
        border-radius: 7.94239px;
        font-weight: bold;
        font-size: 12px;
        line-height: 12px;
        color: #293264;
    }

    .selected {
        background: #D6DBF5;
        border: none;
    }

    .after-submit{
        opacity: 0.5;
    }

    .correct-submit{
        background: #94D7A2;
        border-radius: 7.71045px;
        border: none;
    }

    .wrong-submit{
        background: #F8BCBC;
        border-radius: 7.71045px;
        opacity: 0.5
    }
}


.options{
    display: flex;
}

.result{
    display: flex;
    justify-content: space-around;
    width: 70%;
    margin: auto;

    h4{
        font-weight: bolder;
        font-size: 17px;
        line-height: 19px;
        color: #293264;
    }
}

.submit{
    /* position: relative;
    left: 40%; */
    width: 120px;
    height: 35px;
    border-radius: 10px;
    font-weight: 600;
    font-size: 11px;
    line-height: 12px;
    padding: 0;
    letter-spacing: 0;
}

@media only screen and (max-width: 600px) {
        width: 100%;
        height: 160vh;
        display: flex;
        justify-content: center;

        .prompt {
            position: absolute;
            left: 20%;   
         }

         .quiz-field{
            margin-top: 20%;
        }

        .options{
            display: flex;
            flex-direction: column;
        }

        .question{
            span{
                margin-bottom: 1%;
            }
        }

        .result{
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 90%;
            margin-bottom: 2%;

            h4{
                margin: 0 auto;
            }
        }
            
        }
`

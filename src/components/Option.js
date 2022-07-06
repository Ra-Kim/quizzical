

export default function Option(props){
    return(
        <span 
            className= {props.style}
            key={props.idx} 
            onClick={props.handleClick}>
                {props.answer}
        </span>
    )
}
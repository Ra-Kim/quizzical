

export default function Option(props){

    let displayO = (props.answer).replace(/&#039;/g, "'").replace(/&quot;/g, '"').replace(/&eacute;/g,"e").replace(/uuuml;/g, "u").replace(/&iacute;/g, "i")
    return(
        <span 
            className= {props.style}
            key={props.idx} 
            onClick={props.handleClick}>
                {displayO}
        </span>
    )
}
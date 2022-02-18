const MinMax = (props) => {
    console.log(props)
    let result = props.min + props.max
    return(
        <div>
             <h2>O Valor de {props.max} é maior que o Valor de {props.min}</h2>
            <h3>{result}</h3>
        </div>
    )
}
export default MinMax;
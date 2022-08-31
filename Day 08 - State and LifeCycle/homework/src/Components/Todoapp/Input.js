function Input(props){
    return(
            <input type={props.type} className={props.className} onChange={props.onChange} size={props.size} placeholder={props.placeholder} name={props.name} value={props.value}/>
    )
}
export default Input;
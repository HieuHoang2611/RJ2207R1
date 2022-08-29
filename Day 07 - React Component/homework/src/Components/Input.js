function Input(props){
    return(
        <div className="form-control ">
            <label className="form-label">{props.label}</label><br/>
            <input type={props.type} className={props.className} onChange={props.onChange} size={props.size} placeholder={props.placeholder} name={props.name} value={props.value} name={props.name}/>
        </div>
    )
}
export default Input;
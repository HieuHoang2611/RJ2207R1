export default function Button(props){
    console.log(props);
    return(
        <button className={props.className} onClick={props.onClick}> {props.label}</button>
    )
}
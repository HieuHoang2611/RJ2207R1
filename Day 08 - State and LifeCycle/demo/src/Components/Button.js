export default function button(props) {
  return (
      <button type="button" onClick={props.onClick}>{props.title}</button>
  );
}

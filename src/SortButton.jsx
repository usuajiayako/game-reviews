import "./App.css";

function SortButton(props){
  return (
    <section className="sortbuttons">Sort_by:
      <button className="button" onClick={() => {props.sort_by("created_at")}}>Date</button>
      <button className="button" onClick={() => {props.sort_by("comment_count")}}>Comment count</button>
      <button className="button" onClick={props.order}>Change order : ⬆️⬇️</button>
    </section>
    );
}

export default SortButton;
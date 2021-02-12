import "./App.css";

function SortButton(props){
  return (
    <section className="sortbutton">Sort_by:
      <button className="sortby-date" onClick={() => {props.sort_by("created_at")}}>Date</button>
      <button className="sortby-commentCount" onClick={() => {props.sort_by("comment_count")}}>Comment count</button>
      <button className="order" onClick={props.order}>⬆️⬇️</button>
    </section>
    );
}

export default SortButton;
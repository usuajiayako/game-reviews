import "./App.css";

function SortButton(props){
  return (
    <section className="sortbutton">Sortby:
      <button className="sortby-date" onClick={() => {props.sortby("created_at")}}>Date</button>
      <button className="sortby-commentCount" onClick={() => {props.sortby("comment_count")}}>Comment count</button>
      <button className="sortby-changeOrder">⬆️⬇️</button>
    </section>
    );
}

export default SortButton;
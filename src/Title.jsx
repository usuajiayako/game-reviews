import "./App.css"

const Title = (props) => {
  return (
    <>
    <h1 className="title">Game Reviews</h1>
    <div className="login">
    <p>Logged in as : {props.user.username}</p>
    <button onClick={props.logout}>Logout</button>
    </div>
    </>
    );
}
 
export default Title;
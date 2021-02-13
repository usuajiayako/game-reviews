import "./App.css"

const Title = (props) => {
  return (
    <header>
    <h1 className="title">Game Reviews</h1>
    <div className="login">
    <p>Logged in as : {props.user.username}</p>
    {props.user.isLoggedIn === true ? <button onClick={props.logout} className="button">Logout</button> : <button onClick={props.logout} className="button">LogIn</button>}
    </div>
    <h3>Category</h3>
    </header>
    );
}
 
export default Title;
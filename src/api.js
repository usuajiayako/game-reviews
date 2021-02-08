import axios from "axios";

export const getCategories = () => {
 return axios.get("https://game-reviews-ayakobland.herokuapp.com/api/categories")
 .then((res) => console.log(res))
}


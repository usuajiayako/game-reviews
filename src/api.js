import axios from "axios";

export const getCategories = () => {
 return axios.get("https://game-reviews-ayakobland.herokuapp.com/api/categories")
 .then(res => res.data)
}

export const getReviews = (category) => {
  console.log(category)
  if(category) {
    return axios.get(`https://game-reviews-ayakobland.herokuapp.com/api/reviews?category=${category}`).then(res => res.data)
  } else {
    return axios.get(`https://game-reviews-ayakobland.herokuapp.com/api/reviews`).then(res => res.data)
  }
}

export const getReviewById = (review_id) => {
  return axios.get(`https://game-reviews-ayakobland.herokuapp.com/api/reviews/${review_id}`)
  .then(res => res.data)
}
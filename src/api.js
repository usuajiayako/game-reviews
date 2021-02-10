import axios from "axios";

export const getCategories = () => {
 return axios.get("https://game-reviews-ayakobland.herokuapp.com/api/categories")
 .then(res => res.data)
}

export const getReviews = (category) => {
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

export const getComments = (review_id) => {
  return axios.get(`https://game-reviews-ayakobland.herokuapp.com/api/reviews/${review_id}/comments`)
  .then(res => res.data)
}

export const updateVotes = (num, id, from) => { 
  if(from === "singleReview") {
    return axios.patch(`https://game-reviews-ayakobland.herokuapp.com/api/reviews/${id}`, {"inc_votes": num})
    .then(console.log("success"))
   .catch((err) => err)
  } else if (from === "comments") {
    return axios.patch(`https://game-reviews-ayakobland.herokuapp.com/api/comments/${id}`, {"inc_votes": num})
    .then(console.log("success"))
   .catch((err) => err)
  }
}
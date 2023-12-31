import axios from 'axios'

const API=axios.create({baseURL:'http://localhost:5000'})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('Profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }
    return req  // very important Line when using api.interceptors.request.use
})

export const logIn=(authData)=>API.post('/user/login',authData,{headers:{"Content-Type" : "application/json"}})
export const signUp=(authData)=>API.post('/user/signup',authData,{headers:{"Content-Type" : "application/json"}})

export const getAllQuestions=(questionData)=>API.get('/questions/get',questionData)
export const postQuestion=(questionData)=>API.post('/questions/Ask',questionData)
export const deleteQuestion = (id)=>API.delete(`/questions/delete/${id}`)

export const postAnswer = (id, noOfAnswers, answerBody, userAnswered, userId)=> API.patch(`/answer/post/${id}`, {noOfAnswers, answerBody, userAnswered, userId})
export const deleteAnswer = (id, answerId, noOfAnswers)=>API.patch(`/answer/delete/${id}`, { answerId, noOfAnswers})

export const voteQuestion = (id, value, userId)=>API.patch(`/questions/vote/${id}`,{value, userId})

export const fetchAllUsers = ()=> API.get('/user/getAllUsers')

// let data = JSON.stringify({
//     username: this.state.username,
//     password: password
//   });
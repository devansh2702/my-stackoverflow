const questionsReducer=(state={data:null},action)=>{
    switch(action.type){
        case "POST_QUESTION":
            return { ...state  }
        case "POST_ANSWER":
            console.log("in questions reducer");
            return {...state }
        case "FETCH_ALL_QUESTIONS":
            return { ...state ,data:action.payload }
        default:
            return state
    }
}

export default questionsReducer
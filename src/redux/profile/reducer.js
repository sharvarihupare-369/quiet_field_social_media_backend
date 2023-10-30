import { ADD_SUCCESS_PROFILE, DELETE_SUCCESS_PROFILE, GET_FAILURE_PROFILE,  GET_REQUEST_PROFILE, GET_SUCCESS_PROFILE, UPDATE_SUCCESS_PROFILEPIC } from "./actionTypes"

const initialState = {
    isLoading : false,
    isError : false,
    getprofile : {},
    isProfileAdded : false,
    isProfileDeleted : false,
    isUpdatePic : false
}

export const reducer = (state=initialState,{type,payload}) => {
      switch(type){
        case GET_REQUEST_PROFILE : {
            return {
                ...state,
                isLoading : true,
                isError : false,
                isProfileAdded : false,
                isProfileDeleted : false,
                isUpdatePic : false
            }
        }

        case GET_FAILURE_PROFILE : {
            return {
                ...state,
                isLoading : false,
                isError : true,
                isProfileAdded : false,
                isProfileDeleted : false
            }
        }
        
        case  GET_SUCCESS_PROFILE: {
            // console.log(payload)
            return {
                ...state,
                isLoading : false,
                isError : false,
                getprofile : payload
            }
        }
     
        case ADD_SUCCESS_PROFILE : {
            return {
                ...state,
                isLoading : false,
                isError : false,
                isProfileAdded : true
            }
        }
     
        case DELETE_SUCCESS_PROFILE : {
            return {
                ...state,
                isLoading : false,
                isError : false,
                isProfileDeleted : true
            }
        }

        case UPDATE_SUCCESS_PROFILEPIC : {
            return {
                ...state,
                isLoading :false,
                isError:false,
                isUpdatePic : true,
            }
        }

       
        default : {
            return state
        }
      }
}

const movieInitialvalue=[]


const movieReducer=(state=movieInitialvalue, action)=>{
    
    switch(action.type){
        
        case "ADD_MOVIE":{
        return   [...state,action.payload]        
        
    }

    case "SET_MOVIE":{
        return   [...state,action.payload]        
        
    }


    default:{
        return [...state]
    }
}

}


export default movieReducer
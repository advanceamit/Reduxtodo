
const initialdata=[]
const Reducer =(state=initialdata,action)=>{
    
    switch (action.type) {
        case 'add':
            const data =action.payload
            state.push(data)
            return state
            default:return state

    }
   


}
export default Reducer
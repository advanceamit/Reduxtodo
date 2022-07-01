//import Nav from "./component/nav";
//import {useEffect} from 'react'

//import Routing from "./component/Routes";
//import {Assign,Assign2} from './assign'

// import Signup from "./geeks/Signup";
// import Reduxapp from "./Redux/reduxapp";
import Mai from "./Reduxtodo/component/main";
import { Provider } from "react-redux";
import store from "./Reduxtodo/store/store";


const App =()=>{
  console.log(store);

  return (
    <>
    <Provider store={store}>
    <Mai/>
    </Provider>
    {/* <Reduxapp/> */}
    {/* <Signup/> */}
    {/* //<Nav/>
    //<Routing/> */}
   {/* <Assign/>
   <Assign2/> */}



    </>
    
  )
}

export default App;

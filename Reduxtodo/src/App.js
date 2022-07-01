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
    



    </>
    
  )
}

export default App;

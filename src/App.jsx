
import Counter from "./components/Counter";
import UserPage from "./components/UserPage";

import UserProvider from "./components/context/UserProvider";


// const UserContext = React.createContext();


function App() {


  return (
    <>
        <h1>in this component used useReducer hook and context</h1>
        <h3>usereducer example </h3>
        <Counter/>

        <hr />
        <h3>context example </h3>
        <UserProvider>
            <UserPage/>
        </UserProvider>
    </>
  )
}

export default App

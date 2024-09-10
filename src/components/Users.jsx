
import {useEffect , useState} from 'react'

function Users() {
    const [users, setUsers] = useState([]);
    const [error , setError] = useState(false);

    useEffect( ()=> {
        const contoller = new AbortController();

        const fetchusers = async () => {
            try {
            const res = await fetch("https://jsonplaceholder.typicode.com/users", {signal: contoller.signal})
            const json = await res.json();
            setUsers(json);
            } catch (error)
            {
                setError(true);
            }
        }
        fetchusers()
    } ,[] )

  return (
    <div>
        {!users.length && !error &&<h3>Loading . . .</h3>}
        <ul>
            {users.map((user) => <li key={user.id} > {user.name} </li>)}
        </ul>
        {error && <h2>somting went wrong</h2>}
    </div>
  )
}

export default Users
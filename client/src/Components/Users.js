import React, {useEffect , useState} from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_USERS } from '../GraphQL/Queries';

function Users() {
	const {error, loading, data} = useQuery(LOAD_USERS);
	const [user, setUser] = useState([]);
    useEffect(()=> {
        if(data){
            setUser(data.getAllUsers);
        }
    })
	return (<div>
		<h3>User List</h3>
		<hr />
		{user.map((item, index) => {
			return (<p key={index + item.first_name}>{item.first_name}</p>)
		})}
	</div>);
}

export default Users;

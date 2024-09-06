const User=()=>{
    const UserData = [
        {
            name:'John',
            email:'john@email.com'
        },
        {
            name:'Smith',
            email:'smith@email.com'
        }
    ]

    return(
        <>
        <h2>Users List</h2>
      
               <table>
                <thead>
                    <th>Name</th>
                    <th>Email</th>
                </thead>
                <tbody>
                    {UserData.map((user,i)=>{
                        return(
                            <tr key={user.email}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            </tr>
                        )
                    })}
                </tbody>
               </table>
        

        </>
    )
}

export default User
const UserList = ({ user }: any) => {
    return (
        <div>
            {user.map((res: { username: any; result: any}) => {
                const { username, result } = res;
                return (
                    <ul key = { 'list' }>
                        <li>{ username }</li>
                        <li>{ result }</li>
                    </ul>
                )
                
            })}
        </div>
    );
};

export default UserList;
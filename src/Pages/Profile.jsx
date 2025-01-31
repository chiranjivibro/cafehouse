import { useAuth0 } from "@auth0/auth0-react"

function Profile() {
    const {user, isAuthenticated} = useAuth0();
    return(
        <div>
            <h2>my profile</h2>
        {
            isAuthenticated && (
                <div>
                    <h2>Name: {user.name}</h2>
                    <h2>email: {user.email}</h2>
                    <img src={user.picture} alt=""/>
                </div>
            )
        }
        </div>
    );
}
export default Profile
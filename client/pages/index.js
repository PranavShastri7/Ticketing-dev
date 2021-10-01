 import axios from 'axios'
 const LandingPage=({currentUser} )=>{
    
    console.log(currentUser);
    return <h1>{currentUser}Landing Page</h1>;

}

LandingPage.getInitialProps= async ({req})=>
{
    if( typeof window ==='undefined' )
    {
    }
    else
    {
        //browser
        const response = await axios.get('http://localhost:5000/api/users/currentuser');
        return response.data;
    }
   
}

export default LandingPage;
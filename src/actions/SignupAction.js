const setUser = (userObj) => {
  return  async dispatch => {
      return dispatch({type: 'SET_USER', payload: userObj})
    }
}

export const SignupUser =  async (user) => {
   
        const headers = new Headers();
        headers.append('Content-Type', 'application/json')
        headers.append('X-CSRF-Token', document.cookie.split('=')[1])

        
        const formData = {user: {
            username: user.username,
            email: user.email,
            password: user.password,
            password_confirmation: user.password_confirmation 
        }};

        const options = {
            method: 'POST',
            headers,
            body: JSON.stringify(formData)
        };
    
        try{
            const request = new Request('http://localhost:3000/api/v1/signup', options)
            const response = await fetch(request);
            const status = response.status;
            
            const userObj = await response.json();
            if (status === 200) {
                console.log("inside try", userObj)
                setUser(userObj)
            }
        } catch(data) {
            console.log(data)
        };
    
};

// export const SignupUser = (u) => {
//     return  dispatch => {
//         const userData = { user: {
//             username: u.username,
//             email: u.email,
//             password: u.password,
//             password_confirmation: u.password_confirmation 
//         }}
//         const response =  fetch('http://localhost:3000/api/v1/signup', {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json', 
//                 'X-CSRF-Token': document.cookie.split('=')[1]},
//             body: JSON.stringify(userData)
//         })
//         const returnedData =  response.json()
//         dispatch({ type: 'SET_USER', payload: returnedData })

//     }
// }

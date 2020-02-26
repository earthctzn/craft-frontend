export const SignupUser = async (user) => {

    console.log(user)

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
        console.log(status)
        
        if (status === 200) {
          const userObj = await response.json();
            console.log(userObj);
        }
    } catch(data) {
        console.log(data)
    };

};


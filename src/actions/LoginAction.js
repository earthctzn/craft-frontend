
export const LoginUser = async (email, pass) => {

    const headers = new Headers();
    headers.append('Content-Type', 'application/json')
    headers.append('X-CSRF-Token', document.cookie.split('=')[1])
    const formData = { user: {
        email: email,
        password: pass
    }};
    
    const options = {
        method: 'POST',
        headers,
        body: JSON.stringify(formData)

    };

    try{
        
        const request = new Request('http://localhost:3000/api/v1/login', options)
        const response = await fetch(request);
        const status = response.status;

        if (status === 201) {
            console.log(response)
        }
    } catch(data) {
        console.log(data)
    };

};

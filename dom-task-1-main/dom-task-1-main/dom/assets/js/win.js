let btn = document.getElementById("btn")

btn.addEventListener("click", () => {
    
    const getApi = () =>{
            try {
                axios.get("https://655f2b37879575426b44b8f7.mockapi.io/products")
                // user.filter(user => user.email === email && user.password === password);
                    if(user => user.email === email && user.password === password){
                        window.location.href = './assets/main.html';
                    }
            } catch (error) {
                console.log(error);
            }
        }
        getApi()
   
   

})




const API_CONFIG = {
    //baseUrl: "https://api.codesplus.online/api/v1/",
    baseUrl: "http://localhost:4500/api/v1/",
    secretKey:"",
    endpoints: {
        auth: {
            login: "auth/login",
            signup: "auth/signup",
            resendCode: "auth/",
            confirmEmail:"auth/",
            forgetPassword: "auth/forgetPassword",
            setPassword: "auth/setPassword",
            isTokenValid: "auth/istokenvalid",
            googleAuth: "auth/googleauth",
            logout: "auth/logout",
        },
    },
};

export default API_CONFIG;
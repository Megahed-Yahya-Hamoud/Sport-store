
const API_CONFIG = {
    baseUrl: "https://e-commerce-proejct.vercel.app/api/v1/",
    //baseUrl: "http://localhost:4500/api/v1/",
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
        products:{
            createProduct:"product/createproduct",// type = formData
            updateProduct:"product/updateproduct", // + the id  type = formData
            allProducts:"product/allproducts",
            productById:"product/product-by-id",// + the id
            categoryProduct:"product/category-product", // + category id
            latestProducts:"product/latestproducts"
        },
        brands:{
            createBrand:"brand/createbrand",// type = formData
            updateBrand:"brand/updatebrand",// + the id      type  = formData
            trustedBrands:"brand/trustedbrands"
        },
        categories:{
            createCategory:"category/createcategory",
            updateCategory:"category/updatecategory",//+ the id
            allCategories:"category/allcategories"
        },
        user:{

        }
    },
};

export default API_CONFIG;
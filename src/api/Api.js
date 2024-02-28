// import axios from "axios";


// export async function productsData(){
//         const products=await axios.get("https://fakestoreapiserver.reactbd.com/walmart")
//         return products
// }

// const men="women's clothing";
export async function productsData(){
        const res=await fetch('https://fakestoreapi.com/products');
        const data=await res.json();
        return data
}
productsData();

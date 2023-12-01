import axios from 'axios';


const getSearchData = async (params) =>{
 console.log(typeof params)
 const options = {
   method: "GET",
   url: "https://api.jikan.moe/v4/anime",
   params: {
     q: `${params}`,
     limit: 25,
     
   },
 };
   try {
     const response = await axios.request(options);
     console.log(response.data)
     return response.data.data;
   } catch (err) {
     console.log(err);
   }
 };
export default getSearchData;
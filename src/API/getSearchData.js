import React from 'react';
import axios from 'axios';


const getSearchData = async ({searchQuery:params, pageQuery}) =>{
 console.log(typeof params)
 const options = {
   method: "GET",
   url: "https://api.jikan.moe/v4/anime",
   params: {
     q: `${params}`,
     limit: 25,
     page: `${pageQuery !== null ? pageQuery : 1}`,
     
   },
 };
   try {
     const response = await axios.request(options);
     console.log(response)
     return { response: response.data.data, pageData: response.data.pagination };
   } catch (err) {
     console.log(err);
   }
 };
export default getSearchData;
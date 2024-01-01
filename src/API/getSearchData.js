import axios from 'axios';


const getSearchData = async ({searchQuery:params, pageQuery, filterBy}) =>{
 console.log(typeof params)
 console.log(filterBy === '' ? 'empty string': filterBy)
 const options = {
   method: "GET",
   url: "https://api.jikan.moe/v4/anime",
   params: {
     q: `${params}`,
     limit: 25,
     page: `${pageQuery !== null ? pageQuery : 1}`
   },
 };
 if(filterBy !== ''){
  options.params.type = filterBy;
 }
   try {
     const response = await axios.request(options);
     console.log(response)
     return { response: response.data.data, pageData: response.data.pagination };
   } catch (err) {
     console.log(err);
   }
 };
export default getSearchData;
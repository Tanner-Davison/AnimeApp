import axios from 'axios';

const getForumData = async (animeId) => {
 console.log(typeof animeId)
 const options = {
   method: "GET",
   url: `https://api.jikan.moe/v4/anime/${animeId}/reviews`,
   params: {
     page: 1,
     preliminary: true,
     spoiler: true,
     
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


export default getForumData

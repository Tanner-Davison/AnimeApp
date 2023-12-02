import React from 'react'
import axios from 'axios';

const getForumData = async (animeId) => {
 console.log(typeof animeId)
 const options = {
   method: "GET",
   url: `https://api.jikan.moe/v4/anime/${animeId}/forum`,
   params: {
     id: `${animeId}`,
       filter: 'all',
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


export default getForumData

import React from "react";
import axios from "axios";

const checkLinkAvailability = async (videoId) => {
    
	try {
		const response = await axios.get(`http://localhost:3001/youtube-video?videoId=${videoId}`);
		console.log(response.data); // or do something with the response data
		return response.data; // Return the data if needed
	} catch (error) {
		console.error("Error fetching data:", error);
		throw error; // Rethrow the error or handle it accordingly
	}
};

export default checkLinkAvailability;

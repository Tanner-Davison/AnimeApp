import React from "react";
import axios from "axios";
const getChars = async (animeId) => {
	const options = {
		method: "GET",
		url: `https://api.jikan.moe/v4/anime/${animeId}/characters`,
	};
	try {
		const response = await axios.request(options);
		console.log(response.data.data);
		return response.data.data;
	} catch (err) {
		console.log(err);
	}
};

export default getChars;

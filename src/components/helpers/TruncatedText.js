import React, { useState, useEffect } from "react";


const MaxCharParagraph = ({ text, maxLength }) => {
	const [truncatedText, setTruncatedText] = useState(text);

	useEffect(() => {
		if (text.length > maxLength) {
			setTruncatedText(text.slice(0, maxLength) + "..."); // truncate text if it exceeds maxLength
		} else {
			setTruncatedText(text);
		}
	}, [text, maxLength]);

	return <p>{truncatedText}</p>;
};

export default MaxCharParagraph;



import React from "react";

const VideoItem = ({ singleRenderedVideo }) => {
	return (
		<div>
			<img src={singleRenderedVideo.snippet.thumbnails.medium.url} alt="img" />
			{singleRenderedVideo.snippet.title}
		</div>
	);
};

export default VideoItem;

import React from "react";
import { VideoGame } from "../../utils/features/VideoGameList";
import "./VideoGameCard.css";

interface VideoGameCardProps {
  game: VideoGame;
}

const VideoGameCard: React.FC<VideoGameCardProps> = ({ game }) => {
	return (
		<>
			<div key={game.id} className="video-game-card_Block">
				<img src={game.background_image} className="game-card-picture" alt="game-card-picture"/>
				<div className="game-card-text">
					<div className="game-card-name">{game.name}</div>
					<div className="game-card-rating">rated: {game.rating}/5</div>
				</div>

			</div>
		</>
	);
};

export default VideoGameCard;
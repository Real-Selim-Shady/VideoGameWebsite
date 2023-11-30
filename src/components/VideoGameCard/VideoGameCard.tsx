import React from "react";
import { VideoGame } from "../../utils/features/VideoGameList";
import "./VideoGameCard.css";
import { getGameDetails } from "../../utils/services/APICalls";
import { useAppDispatch } from "../../utils/store/store";

interface VideoGameCardProps {
  game: VideoGame;
}

const VideoGameCard: React.FC<VideoGameCardProps> = ({ game }) => {

	const dispatch = useAppDispatch();

	const goToGameDetails = async()=>{
		const gameId:number = game.id;
		await getGameDetails(dispatch, gameId);
		//next step: ajouter le navigate vers le component gameDetails
	}

	return (
		<>
			<div onClick={goToGameDetails} key={game.id} className="video-game-card_Block">
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
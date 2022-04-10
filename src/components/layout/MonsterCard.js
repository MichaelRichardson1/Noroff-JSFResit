import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function MonsterCard({ id, name, imageUrl, types, hp, artist, rarity }) {
	const { content } = ({ id, name, imageUrl, types, hp, artist, rarity })
    return (
		<Col>
			
				<Card style={{ width: "18rem" }}>
					<Card.Img variant="top" src={imageUrl} />
					<Card.Body>
						<Card.Title>{name}</Card.Title>
						<div>
							{content}
						</div>
					</Card.Body>
				</Card>
			
		</Col>
	);
}

MonsterCard.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	imageUrl: PropTypes.string,
	types: PropTypes.array,
	hp: PropTypes.string,
    artist: PropTypes.string,
    rarity: PropTypes.string,
};

export default MonsterCard;

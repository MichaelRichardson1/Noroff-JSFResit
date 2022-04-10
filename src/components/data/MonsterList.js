import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { API } from "../../constants/api";
import MonsterCard from "../layout/MonsterCard";
import Heading from "../layout/Heading";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function MonsterList() {
	const [monsters, setMonsters] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(function () {
		async function fetchData() {
			try {
				const response = await fetch(API);

				if (response.ok) {
					const json = await response.json();
					console.log(json);
					setMonsters(json.cards);
				} else {
					setError("A server error occured");
				}
			} catch (error) {
				setError(error.toString());
			} finally {
				setLoading(false);
			}
		}
		fetchData();
	}, []);

	if (loading) {
		return <Spinner animation="grow" variant="info" className="loader" />;
	}

	if (error) {
		return <Alert variant="danger">An error occured: {error}</Alert>;
	}

	return (
		<Container>
			<Heading content="Pokémon" />
			<Row>
				{monsters.map(function (monster) {
					const { id, name, imageUrl, types, hp, artist, rarity } = monster;
					return (
                    <>
                    <MonsterCard key={id} name={name} imageUrl={imageUrl} types={types} hp={hp} artist={artist} rarity={rarity} />
                    <Link to={`monster/${id}`}><Button>Details Page</Button></Link>
                    </>
                )})}
			</Row>
		</Container>
	);
}

export default MonsterList;

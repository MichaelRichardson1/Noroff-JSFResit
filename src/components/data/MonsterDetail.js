import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../layout/Loader";
import ErrorMessage from "../layout/ErrorMessage";
import { API } from "../../constants/api";
import MonsterCard from "../layout/MonsterCard";
import ReadMore from "../grass-types/ReadMore";

function MonsterDetail() {
	const [monster, setMonster] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	let history = useNavigate();

	const { id } = useParams();

	if (!id) {
		history.push("/");
	}

	const url = API + "/" + id;

	useEffect(
		function () {
			async function fetchData() {
				try {
					const response = await fetch(url);

					if (response.ok) {
						const json = await response.json();
						console.log(json);
						setMonster(json);
					} else {
						setError("An error occured");
					}
				} catch (error) {
					setError(error.toString());
				} finally {
					setLoading(false);
				}
			}
			fetchData();
		},
		[url]
	);

	if (loading) {
		return <Loader />;
	}

	if (error) {
		return <ErrorMessage message={`Error: ${error}`} />;
	}

	return (
		<>
			<MonsterCard />
			<ReadMore />
		</>
	);
}

export default MonsterDetail;

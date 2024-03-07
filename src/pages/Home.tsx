import { useQuery } from "react-query";
import { fetchAllCharacters } from "../api/api";

function Home() {
	const {
		data: allCharacters,
		isLoading,
		isError,
	} = useQuery(["characters"], async () => {
		const characters = await fetchAllCharacters();

		return characters.slice(0, 50);
	});

	console.log(allCharacters);

	return <div>1</div>;
}

export default Home;

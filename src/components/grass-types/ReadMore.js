import { useState } from "react";

function ReadMore({ id, name, imageUrl, types, hp, artist, rarity }) {
	const [open, toggleOpen] = useState(false);

	function toggle() {
		toggleOpen(!open);
	}

	return (
		
			<>
                <div>                
                    <button onClick={toggle}>{open ? "Close" : "Open"}Read More</button>
                </div>
                <div className={`menu ${open ? "" : "closed"}`}>
                    <p>Types: {types}</p>
				    <p>Hp: {hp}</p>
                    <p>Artist: {artist}</p>
                    <p>Rarity: {rarity}</p>
                </div>
            </>
		
	);
}

export default ReadMore;

import React from 'react';
import {Link} from "gatsby"

const MainMenu = (props) => {
	const data = props.menu.edges[0].node.items
	// console.log("MAIN_MENU", data)
	return (
			<div>
				<ul>
					{
						data.map(item =>
								<li key={item.object_id}>
									<Link to={item.url}>{item.title}</Link>
								</li>
						)
					}
				</ul>
			</div>
	);
};

export default MainMenu;

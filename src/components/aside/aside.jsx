import Indications from "./indications"
import Settings from "./settings";
import User from "./user";

export default function Aside(props) {
	const {
		image,
		username,
		name
	} = props;

	return (
		<aside className="sidebar">
			<User image={image} username={username} name={name} />
			<Indications />
			<Settings />
		</aside>
	);
}

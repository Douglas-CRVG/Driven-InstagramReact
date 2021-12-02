import Story from "./story";

export default function Stories() {
	const stories = [
		{
			img: "scott.jpg",
			name: "Scoot"
		},
		{
			img: "Jean.jpg",
			name: "Jean Grey"
		},
		{
			img: "Alex.png",
			name: "Alex Summers"
		},
		{
			img: "Kitty.jpg",
			name: "Kitty"
		},
		{
			img: "wanda.jpg",
			name: "Wanda"
		},
		{
			img: "noturno.jpg",
			name: "Noturno"
		},
		{
			img: "mística.jpg",
			name: "Mística"
		},
		{
			img: "wolverine.jpg",
			name: "Wolverine"
		},
		{
			img: "scott.jpg",
			name: "Nicolino"
		},
		{
			img: "scott.jpg",
			name: "Nicolino"
		}
	];

	return (
    <div class="stories">
		{stories.map(story =>{
			const {
				img,
				name
			} = story;

			return(
				<Story image={img} name={name} />
			)
		})}
		<ion-icon name="chevron-forward-circle"></ion-icon>
    </div>
  	);
}
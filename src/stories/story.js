export default function Story(props) {
    const {
        image,
        name
    } = props;

    return (
        <div class="storie">
            <img class="background" src="assets/stories_background.jpg" />
            <img class="photo" src={`assets/${image}`}></img>
            <p class="name">{name}</p>
        </div>
    );
}

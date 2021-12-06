export default function Story(props) {
    const {
        image,
        name,
        key
    } = props;

    return (
        <div className="storie" id={`${key}`}>
            <img className="background" src="assets/stories_background.jpg" />
            <img className="photo" src={`assets/${image}`}></img>
            <p className="name">{name}</p>
        </div>
    );
}

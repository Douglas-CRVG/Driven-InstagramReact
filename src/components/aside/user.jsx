export default function User(props){
    const {
        image,
        username,
        name
    } = props;

    return (
        <div className="user">
            <img src={`assets/${image}`}></img>
            <div>
            <p>{username}</p>
            <p>{name}</p>
            </div>
        </div>
    );
}
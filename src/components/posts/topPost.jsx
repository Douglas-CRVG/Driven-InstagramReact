export default function TopPost(props){
    const {
        name,
        image
    } = props;

    return (
        <div className="top-post">
            <div>
                <img src={`assets/${image}`} alt={name}></img>
                <strong>{name}</strong>
            </div>
            <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
    );
}
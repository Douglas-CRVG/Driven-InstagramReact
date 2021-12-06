export default function Indication(props) {
    const {
        image,
        name,
        condition,
        key
    } = props;

    return (
        <div className="indication" id={key}>
            <div className="indicated">
                <img src={`assets/${image}`}></img>
                <div>
                    <p>{name}</p>
                    <p>{condition}</p>
                </div>
            </div>
            <p className="follow">Seguir</p>
        </div>
    );
}

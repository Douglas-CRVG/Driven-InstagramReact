export default function Indication(props) {
    const {
        image,
        name,
        condition,
        key
    } = props;

    return (
        <div class="indication" id={key}>
            <div class="indicated">
                <img src={`assets/${image}`}></img>
                <div>
                    <p>{name}</p>
                    <p>{condition}</p>
                </div>
            </div>
            <p class="follow">Seguir</p>
        </div>
    );
}

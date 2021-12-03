export default function BottomPost(props){
    const {
        imageLike,
        nameLike,
        qntLikes
    } = props;
    return (
        <div class="bottom-post">
            <div class="menu-post">
                <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>
            <div class="like">
                <img src={`assets/${imageLike}`} alt={nameLike}></img> Curtido por
                <strong>{nameLike}</strong> e <strong>outras {qntLikes} pessoas</strong>
            </div>
        </div>
    );
}
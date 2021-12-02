import Stories from "../stories/stories";

export default function Timeline(){
    return(
        <div class="timeline">
        <Stories />
        <div class="post">
            <div class="top-post">
                <div>
                    <img src="assets/scott.jpg" alt=""></img>
                    <strong>scoot</strong>
                </div>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
            <img src="assets/prova.jpg" alt=""></img>
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
                    <img src="assets/Jean.jpg" alt=""></img> Curtido por <strong>Jean</strong> e <strong>outras 98.709
                        pessoas</strong>
                </div>

            </div>
            <div class="comment">
                <ion-icon name="happy-outline"></ion-icon>
                <input type="text" placeholder="Adicione um comentário..."></input>
                <strong>Publicar</strong>
            </div>
        </div>
        <div class="post">
            <div class="top-post">
                <div>
                    <img src="assets/Alex.png" alt=""></img>
                    <strong>Alex Summers</strong>
                </div>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
            <img src="assets/morfeu.jpg" alt=""></img>
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
                    <img src="assets/Kitty.jpg" alt=""></img> Curtido por <strong>Kitty</strong> e <strong>outras 23.798
                        pessoas</strong>
                </div>

            </div>
            <div class="comment">
                <ion-icon name="happy-outline"></ion-icon>
                <input type="text" placeholder="Adicione um comentário..."></input>
                <strong>Publicar</strong>
            </div>
        </div>
        <div class="post">
            <div class="top-post">
                <div>
                    <img src="assets/scott.jpg" alt=""></img>
                    <strong>Scoot</strong>
                </div>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
            <video autoplay muted>
                <source src="assets/video.mp4" type="video/mp4" />
                <source src="assets/video.ogg" type="video/ogg" />
                Seu navegador não suporta vídeos.
            </video>
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
                    <img src="assets/Vampira.jpg" alt=""></img> Curtido por <strong>Vampira</strong> e <strong>outras 23.798
                        pessoas</strong>
                </div>

            </div>
            <div class="comment">
                <ion-icon name="happy-outline"></ion-icon>
                <input type="text" placeholder="Adicione um comentário..."></input>
                <strong>Publicar</strong>
            </div>
        </div>
        <div class="post">
            <div class="top-post">
                <div>
                    <img src="assets/scott.jpg" alt=""></img> <strong>Scoot</strong>
                </div>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
            <img src="assets/lapis.jpg" alt=""></img>
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
                    <img src="assets/Vampira.jpg" alt=""></img> Curtido por <strong>Vampira</strong> e <strong>outras 23.798
                        pessoas</strong>
                </div>

            </div>
            <div class="comment">
                <ion-icon name="happy-outline"></ion-icon>
                <input type="text" placeholder="Adicione um comentário..."></input>
                <strong>Publicar</strong>
            </div>
        </div>
    </div>
    );
}
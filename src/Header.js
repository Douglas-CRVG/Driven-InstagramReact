export default function Header(){
    
    return(
        <header>
            <nav>
                <div class="logo">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div></div>
                    <img src="assets/logo.png" alt=""></img>
                    <ion-icon class="ion-icon" name="paper-plane-outline"></ion-icon>
                </div>
                <input type="text" placeholder="Pesquisar" class="search"></input>
                <div class="menu">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>
            </nav>
        </header>
    );
}
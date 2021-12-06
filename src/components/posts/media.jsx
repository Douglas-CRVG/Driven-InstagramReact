export default function Media(props){
    const {
        media,
        typeMedia
    } = props;

    if(typeMedia === "image"){
        return (
            <img src={`assets/${media}`} alt=""></img>
        );
    } else {
        return(
            <video autoplay muted>
                <source src={`assets/${media}.mp4`} type="video/mp4" />
                <source src={`assets/${media}.ogg`} type="video/ogg" />
                Seu navegador não suporta vídeos.
            </video>
        );
    }
}
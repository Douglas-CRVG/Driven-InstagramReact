import BottomPost from "./bottomPost";
import Comment from "./comment";
import Media from "./media";
import TopPost from "./topPost";

export default function Post(props) {
    const {
        name,
        image,
        media,
        typeMedia,
        imageLike,
        nameLike,
        qntLikes
    } = props;

    return (
        <div className="post">
            <TopPost name={name} image={image} />
            <Media media={media} typeMedia={typeMedia} />
            <BottomPost imageLike={imageLike} nameLike={nameLike} qntLikes={qntLikes} />
            <Comment />
        </div>
    );
}

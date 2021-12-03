import Post from "./post";

export default function Posts(){
    const posts = [
        {
            name: "scott",
            image: "scott.jpg",
            media: "prova.jpg",
            typeMedia: "image",
            imageLike: "Jean.jpg",
            nameLike: "Jean",
            qntLikes: "98.709"
        },
        {
            name: "alex summers",
            image: "Alex.png",
            media: "morfeu.jpg",
            typeMedia: "image",
            imageLike: "Kitty.jpg",
            nameLike: "Kitty",
            qntLikes: "81.015"
        },
        {
            name: "jean",
            image: "Jean.jpg",
            media: "video",
            typeMedia: "video",
            imageLike: "Kitty.jpg",
            nameLike: "Kitty",
            qntLikes: "18.801"
        },
        {
            name: "scott",
            image: "scott.jpg",
            media: "lapis.jpg",
            typeMedia: "image",
            imageLike: "Vampira.jpg",
            nameLike: "Vampira",
            qntLikes: "23.798"
        },
    ];
    return (
        <>
            {posts.map((post) => {
            const {
                name,
                image,
                media,
                typeMedia,
                imageLike,
                nameLike,
                qntLikes,
            } = post;

            return (
                <Post
                name={name}
                image={image}
                media={media}
                typeMedia={typeMedia}
                imageLike={imageLike}
                nameLike={nameLike}
                qntLikes={qntLikes}
                />
            );
            })}
        </>
    );
}
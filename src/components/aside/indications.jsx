import Title from "./title"
import Indication from "./indication";

export default function Indications() {
    const indications = [
        {
            image: "Pietro.jpeg",
            name: "Pietro",
            condition: "Segue você"
        },
        {
            image: "X.jpg",
            name: "Xavier",
            condition: "Novo no Instagram"
        },
        {
            image: "vasco.png",
            name: "Vascão",
            condition: "Novo no Instagram"
        },
        {
            image: "Apocalypse.jpg",
            name: "Apocalypse",
            condition: "Segue você"
        },
        {
            image: "wolverine.jpg",
            name: "Wolverine",
            condition: "Segue você"
        }
    ];
    
    return (
        <div class="indications">
            <Title />
            {indications.map((indication, id) => {
            const {
                image,
                name,
                condition
            } = indication;

            return (
                <Indication
                image={image}
                name={name}
                condition={condition}
                key={id}
                />
            );
            })}
        </div>
    );
}
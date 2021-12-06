import Posts from "../posts/posts";
import Stories from "../stories/stories";

export default function Timeline(){
    return(
        <div className="timeline">
            <Stories />
            <Posts />
        </div>
    );
}
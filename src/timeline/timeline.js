import Posts from "../posts/posts";
import Stories from "../stories/stories";

export default function Timeline(){
    return(
        <div class="timeline">
            <Stories />
            <Posts />
        </div>
    );
}
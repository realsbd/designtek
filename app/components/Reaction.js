import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faThumbsUp} from "@fortawesome/free-solid-svg-icons";

export default function Reaction() {
    return(
        <div className="flex justify-left my-8 gap-4">
            <div className="flex gap-3 items-center my-2">
                <FontAwesomeIcon icon={faThumbsUp} />
                <p>25</p>
            </div>
            <div className="flex gap-3 items-center my-2">
                <FontAwesomeIcon icon={faHeart} color="red" />
                <p>3.1k</p>
            </div>
        </div>
    )
}
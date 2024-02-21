import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faCircleCheck, faCircleXmark, faClock} from "@fortawesome/free-solid-svg-icons";

export default function FilterPosts(){
    return  (
        <div className={'flex flex-wrap justify-between items-center m-3'}>
            <div className={'flex items-center'}>
                <FontAwesomeIcon icon={faBars} />
                <div className={'pl-2'}>All posts</div>
            </div>
            <div className={'flex items-center'}>
                <FontAwesomeIcon icon={faCircleCheck} />
                <div className={'pl-2'}>Approved posts</div>
            </div>
            <div className={'flex items-center'}>
                <FontAwesomeIcon icon={faClock} />
                <div className={'pl-2'}>Pending posts</div>
            </div>
            <div className={'flex items-center'}>
                <FontAwesomeIcon icon={faCircleXmark} />
                <div className={'pl-2'}>Disapproved posts</div>
            </div>
        </div>
    )
}
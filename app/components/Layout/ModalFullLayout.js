import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

export default function Waitings({ children }) {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="absolute top-0 right-0 w-20 h-20 flex justfiy-center items-center">
                <FontAwesomeIcon icon={faCircleXmark} size='2x' />
            </div>
            {children}
        </div>
    )
}
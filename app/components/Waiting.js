export default function Waiting(props) {
    return (
        <div className="flex items-center justify-center h-screen">
            <p className="text-3xl" style={{color: "#02A29E"}}>
                {props.text}
            </p>
        </div>
    )
}
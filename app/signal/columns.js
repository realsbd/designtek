import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCheck} from "@fortawesome/free-solid-svg-icons";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export const columns = [
    {
        accessorKey: "proTrader",
        header: "Pro Trader",
        cell: ({row}) => {
            const logo = row.getValue('logo')
            const trader = row.getValue('proTrader')

            return <div className={"flex gap-2 flex-nowrap"}>
                <Image src={logo} width={50} height={50} alt={'proTrader'}/>
                <div>{trader}</div>
            </div>
        }
    },
    {
        accessorKey: "time",
        header: "Time (GMT)",
        cell: ({row}) => {
            const timestamp = row.getValue('time');

            // Handle invalid timestamps
            if(!timestamp || isNaN(timestamp)) {
                return <div>Invalid date</div>;
            }

            // Convert to number if stored as string
            const timeNum = Number(timestamp);

            // Create Date object
            const date = new Date(timeNum * 1000);

            // Format date
            const formatted = new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                timeZone: 'GMT'
            }).format(date);

            return <div>{formatted}</div>;
        }
    },
    {
        accessorKey: "order",
        header: "Order"
    },
    {
        accessorKey: "symbol",
        header: "Symbol"
    },
    {
        accessorKey: "price",
        header: "Price"
    },
    {
        accessorKey: "outcome",
        header: "Outcome",
        cell: ({row}) => {
            const outcome = row.getValue('outcome')

            if (outcome) {
                return <FontAwesomeIcon icon={faCheck} color="#02A29E"/>
            } else {
                return <FontAwesomeIcon icon={faTimes} color="red"/>
            }
        }
    },
]
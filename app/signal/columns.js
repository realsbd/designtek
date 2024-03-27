import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCheck} from "@fortawesome/free-solid-svg-icons";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import {formatDateTimeGMT} from "@/lib/utils";

export const columns = [
    {
        accessorKey: "proTraderAndLogo",
        header: "Pro Trader",
        cell: ({row}) => {
            const proTraderAndLogo = row.getValue('proTraderAndLogo')
            if (!proTraderAndLogo) return null; // Add a check for undefined

            return <div className={"flex gap-2 flex-nowrap"}>
                <Image src={proTraderAndLogo.logo} width={50} height={50} alt={'proTrader'}/>
                <div>{proTraderAndLogo.proTrader}</div>
            </div>
        }
    },
    {
        accessorKey: "time",
        header: "Time (GMT)",
        cell: ({ row }) => {
            const time = row.getValue('time');

            if (!time || !time.from || !time.till) {
                return <div>Invalid date</div>;
            }

            const fromNum = Number(time.from);
            const tillNum = Number(time.till);

            if (isNaN(fromNum) || isNaN(tillNum)) {
                return <div>Invalid date</div>;
            }

            const fromDate = new Date(fromNum * 1000);
            const tillDate = new Date(tillNum * 1000);

            const formattedTime = time.time; // Use this directly
            const formattedFrom = formatDateTimeGMT(fromDate);
            const formattedTill = formatDateTimeGMT(tillDate);

            return (
                <div>
                    <div>{formattedTime}</div>
                    <div className={''}>From: {formattedFrom}</div>
                    <div className={''}>Till: {formattedTill}</div>
                </div>
            );
        },
    },
    {
        accessorKey: "order",
        header: "Orders"
    },
    {
        accessorKey: "symbol",
        header: "Market"
    },
    {
        accessorKey: "price",
        header: "Price",
        cell: ({row}) => {
            const price = row.getValue('price')

        return <div>
            <div>Entry: {price.entry}</div>
            <div>Stop Loss: {price.stop}</div>
            <div>Profit: {price.profit}</div>
        </div>
        }
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
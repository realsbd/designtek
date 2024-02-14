import React from "react";
import Image from 'next/image'
import Link from 'next/link'

export default function Blurb(props) {
    return (
        <div className="self-stretch w-full md:w-1/3 md:justify-between lg:justify-between lg:w-1/4 my-6 mx-4">
            <div>
                <Link href={props.link}>
                    <Image src={props.img} width={500} height={227} alt="blurb" />
                </Link>
            </div>
            <div>
                <Link href={props.link}><h3 className="text-2xl font-semibold my-3 hover:underline">{props.title}</h3></Link>
                <p>{props.text}</p>
            </div>
        </div>
    )
}
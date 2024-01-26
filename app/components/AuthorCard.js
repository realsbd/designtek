import Image from 'next/image'

export default function AuthorCard() {
    return (
        <div className="flex mb-10 mt-3 gap-6">
            <div style={{ width: '62px', height: '62px' }}>
                <Image src="/img/author.jpg" width={62} height={62} alt="Author" style={{ objectFit: 'fit', height: '62px' }} className="rounded-full" />
            </div>
            <div>
                <h2 className="text-xl font-normal">David Nelson</h2>
                <p className="font-light">Simply dummy text of the printing and typesetting industry. </p>
            </div>
        </div>
    )
}
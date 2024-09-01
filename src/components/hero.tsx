import Image from 'next/image'
export default function Hero() {

    return (
        <div className="hero bg-base-100 h-[90vh]">
            <div className="hero-content flex-col lg:flex-row">
                <Image
                    width={400}
                    height={550}
                    src="/images/3180_Abel-Slemmer.jpg"
                    className="max-w-sm rounded-lg shadow-2xl"
                    alt="Ábel Slemmer portrait"
                />
                <div>
                    <h1 className="text-5xl font-bold">Ábel Slemmer</h1>
                    <p className="py-6">
                    </p>
                </div>
            </div>
        </div>


    )
}
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface HighlightedProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    articles?: Array<any>;
}

const Highlighted: React.FC<HighlightedProps> = ({ articles }) => {

    return (
        <div className="block md:flex md:space-x-2 px-2 lg:p-0">
            {
                articles?.map((article, index) => (<span key={index}>{article.title}</span>))
            }
            <Link className="mb-4 md:mb-0 w-full md:w-2/3 relative rounded inline-block" style={{ height: '24em' }} href="#">
                <div className="absolute left-0 bottom-0 w-full h-full z-10" style={{ backgroundImage: 'linear-gradient(180deg,transparent,rgba(0,0,0,.7))' }}></div>
                <Image width={10} height={10} alt="" src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2100&amp;q=80" className="absolute left-0 top-0 w-full h-full rounded z-0 object-cover" />
                <div className="p-4 absolute bottom-0 left-0 z-20">
                    <span className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">Nutrition</span>
                    <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                        Pellentesque a consectetur velit, ac molestie ipsum. Donec sodales, massa et auctor.
                    </h2>
                    <div className="flex mt-3">
                        <Image width={10} height={10} src="https://randomuser.me/api/portraits/men/97.jpg" className="h-10 w-10 rounded-full mr-2 object-cover" alt="" />
                        <div>
                            <p className="font-semibold text-gray-200 text-sm"> Mike Sullivan </p>
                            <p className="font-semibold text-gray-400 text-xs"> 14 Aug </p>
                        </div>
                    </div>
                </div>
            </Link>
            <Link className="w-full md:w-1/3 relative rounded" style={{ height: '24em' }} href="#">
                <div className="absolute left-0 top-0 w-full h-full z-10" style={{ backgroundImage: 'linear-gradient(180deg,transparent,rgba(0,0,0,.7))' }}></div>
                <Image width={10} height={10} src="https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1301&amp;q=80" className="absolute left-0 top-0 w-full h-full rounded z-0 object-cover" alt="" />
                <div className="p-4 absolute bottom-0 left-0 z-20">
                    <span className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">Science</span>
                    <h2 className="text-3xl font-semibold text-gray-100 leading-tight">Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit.</h2>
                    <div className="flex mt-3">
                        <Image width={10} height={10} src="https://images-na.ssl-images-amazon.com/images/M/MV5BODFjZTkwMjItYzRhMS00OWYxLWI3YTUtNWIzOWQ4Yjg4NGZiXkEyXkFqcGdeQXVyMTQ0ODAxNzE@._V1_UX172_CR0,0,172,256_AL_.jpg" className="h-10 w-10 rounded-full mr-2 object-cover" alt="" />
                        <div>
                            <p className="font-semibold text-gray-200 text-sm"> Chrishell Staus </p>
                            <p className="font-semibold text-gray-400 text-xs"> 15 Aug </p>
                        </div>
                    </div>
                </div>
            </Link></div>
    )
};

export default Highlighted;

import { HighlightedProps } from "@/app/interfaces";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Highlighted: React.FC<HighlightedProps> = ({ articles }) => {

    return (
        <div className="block md:flex md:space-x-2 px-2 lg:p-0">
            {
                articles?.map((article, index) => (
                    <Link key={index} className={`mb-4 md:mb-0 w-full ${index === 0 ? 'md:w-2/3' : 'md:w-1/3'} relative rounded inline-block`} style={{ height: '24em' }} href="#">
                        <div className="absolute left-0 bottom-0 w-full h-full z-10" style={{ backgroundImage: 'linear-gradient(180deg,transparent,rgba(0,0,0,.7))' }}></div>
                        {
                            article.image &&
                            <Image width={100}
                                height={100}
                                alt={article.image.alt}
                                src={article.image.url}
                                className="absolute left-0 top-0 w-full h-full rounded z-0 object-cover" />
                        }
                        <div className="p-4 absolute bottom-0 left-0 z-20">
                            <span className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">{article.tags.join('; ')}</span>
                            <h2 className="text-4xl font-semibold text-gray-100 leading-tight">{article.title}</h2>
                            <div className="flex mt-3">
                                <div>
                                    <p className="font-semibold text-gray-200 text-sm">{article.author}</p>
                                    <p className="font-semibold text-gray-400 text-xs">{dayjs(article.changed).format('MMM DD, YYYY')}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
};

export default Highlighted;

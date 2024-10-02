import { CardListProps } from "@/app/interfaces";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardList: React.FC<CardListProps> = ({ articles }) => {

    return (
        <div className="w-full lg:w-2/3">
            {
                articles?.map((article, index) => (
                    <Link key={index} className="block rounded w-full lg:flex mb-10" href="#">
                        {article.image && <div className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75" style={{ backgroundImage: `url(${article.image.url})` }} title={article.image.alt}></div>}
                        <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
                            <div>
                                <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">{article.title}</div>
                                {article.summary && <p className="text-gray-700 text-base">{article.summary.substring(0, 250)}</p>}
                            </div>
                            <div className="flex my-3">
                                {article.image && <Image width={10} height={10} alt={article.image.alt} src={article.image.url} className="h-10 w-10 rounded-full mr-2 object-cover" />}
                                <div>
                                    <p className="font-semibold text-gray-700 text-sm capitalize">{article.author}</p>
                                    <p className="text-gray-600 text-xs">{dayjs(article.changed).format('MMM DD, YYYY')}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    );
};

export default CardList;

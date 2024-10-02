'use client';

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Highlighted from "@/components/Highlighted";
import axios from "axios";
import { useEffect, useState } from "react";
import { IArticle } from "./interfaces";

const Home = () => {

  const [articles, setArticles] = useState<Array<IArticle>>([]);

  useEffect(() => {
    axios.get('/api/articles').then(response => {
      setArticles(response.data.articles)
    })
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto">
      <Header />
      <main className="mt-10">
        <Highlighted articles={articles.slice(0, 2)} />
        <div className="block lg:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10">
          
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;

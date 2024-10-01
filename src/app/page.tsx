'use client';

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Highlighted from "@/components/Highlighted";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {

  const [articles, setArticles] = useState([]);

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
      </main>
      <Footer />
    </div>
  );
}

export default Home;

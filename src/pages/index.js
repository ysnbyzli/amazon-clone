import Head from "next/head";

import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon Clone</title>
        <link rel="shortcut icon" href="https://iconarchive.com/download/i94399/bokehlicia/captiva/web-amazon.ico" />
      </Head>

      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* BANNER */}
        <Banner />
        {/* PRODUCTS */}
        <ProductFeed />
      </main>

    </div>
  );
}

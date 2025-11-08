// pages/index.js
import { useState } from "react";
import Head from "next/head";  // it is used for head section of Page
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import Filters from "../components/Filters";

// Helper to create SEO-friendly URLs
const toSeoName = (title) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function PLP({ products }) {
  const [hideFilters, setHideFilters] = useState(false);

  const pageTitle = "Discover Our Products - Appscrip Test";
  const pageDescription =
    "Discover a curated collection of products. Filter, sort, and browse responsive product listings.";

  // JSON-LD Schema for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Product Listing - Appscrip Task",
    description: pageDescription,
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://your-domain.com/product/${toSeoName(p.title)}`,
    })),
  };

  return (
    <>
      <Head> 
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <Header />

      <main className="container">
        <h1 className="page-title">DISCOVER OUR PRODUCTS</h1>
        <p className="page-subtitle">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>

        {/* Grid Wrapper with Filter + Products */}
        <div className={`plp-grid ${hideFilters ? "no-filters" : ""}`}>
          {/* LEFT FILTERS SIDEBAR */}
          {!hideFilters && (
            <aside className="filters" aria-label="product filters">
              <Filters count={products.length} onHide={() => setHideFilters(true)} />
            </aside>
          )}

          {/* RIGHT PRODUCTS SECTION */}
          <section className="products" aria-label="product list">
            <div className="products-header">
              <p>{products.length} ITEMS</p>

              <div className="products-tools">
                {hideFilters && (
                  <button
                    className="show-filter"
                    onClick={() => setHideFilters(false)}
                  >
                    SHOW FILTER
                  </button>
                )}

                <select aria-label="Sort products">
                  <option>RECOMMENDED</option>
                  <option>PRICE: LOW TO HIGH</option>
                  <option>PRICE: HIGH TO LOW</option>
                </select>
              </div>
            </div>

            {/* PRODUCT GRID */}
            <div className="grid">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

// ✅ SERVER-SIDE RENDERING (fetch data from API at request time)
export async function getServerSideProps() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();
    return { props: { products } };
  } catch (err) {
    console.error("Error fetching products:", err);
    return { props: { products: [] } };
  }
}

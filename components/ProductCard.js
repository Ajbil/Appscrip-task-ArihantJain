// components/ProductCard.js
export default function ProductCard({ product }) {
  // alt text & seo-friendly name derived from product title
  const seoName = product.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  return (
    <article className="product-card" itemScope itemType="http://schema.org/Product">
      <a href={`/product/${seoName}`} className="product-link" title={product.title}>
        <div className="product-image">
          <img
            src={product.image}
            alt={`${product.title} - product image`}
            loading="lazy"
          />
        </div>
        <div className="product-meta">
          <h3 itemProp="name" className="product-title">{product.title}</h3>
          <p className="product-price" itemProp="offers" itemScope itemType="http://schema.org/Offer">
            <span itemProp="priceCurrency" content="USD">$</span>
            <span itemProp="price" content={product.price}>{product.price}</span>
          </p>
        </div>
      </a>
    </article>
  );
}

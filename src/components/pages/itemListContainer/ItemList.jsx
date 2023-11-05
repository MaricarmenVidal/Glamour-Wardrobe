import ProductCard from "../../common/productCard/ProductCard"

const ItemList = ({ items }) => {
  return (
    <section className="Container">
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />
      })}
    </section>
  );
};

export default ItemList;
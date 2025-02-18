// components/ItemList.tsx
import ListItem from "./listItem";

interface Item {
  imageSrc: string;
  itemName: string;
  itemDescription: string;
  itemPrice: string;
}

interface ItemListProps {
  items: Item[];
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden">
      {/* Loop through the items and render ListItem for each */}
      {items.map((item, index) => (
        <ListItem
          key={index}
          imageSrc={item.imageSrc}
          itemName={item.itemName}
          itemDescription={item.itemDescription}
          itemPrice={item.itemPrice}
        />
      ))}
    </div>
  );
};

export default ItemList;

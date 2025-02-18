// components/ListItem.tsx
import CustomImage from "./customImage"; // Import your custom image component

interface ListItemProps {
  imageSrc: string;
  itemName: string;
  itemDescription: string;
  itemPrice: string;
}

const ListItem: React.FC<ListItemProps> = ({ imageSrc, itemName, itemDescription, itemPrice }) => {
  return (
    <div className="flex items-center p-4 border-b border-gray-300">
      {/* Image on the left */}
      <CustomImage src={imageSrc} alt={itemName} width={64} height={64} className="mr-4" />

      {/* Text on the right */}
      <div>
        <h3 className="text-lg font-semibold text-black">{itemName}</h3>
        <p className="text-sm text-gray-600">{itemDescription}</p>
        <p className="mt-2 font-bold text-gray-900">{itemPrice}</p>
      </div>
    </div>
  );
};

export default ListItem;

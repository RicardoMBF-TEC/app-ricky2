// pages/page2.tsx
import Navbar from "@/app/components/NavBar";
import ItemList from "@/app/components/itemList"; // Import the ItemList component

export default function Page2() {
  // Example data for items
  const items = [
    {
      imageSrc: "/plutonium core.jpg",
      itemName: "Plutonium-22 Core",
      itemDescription: "Slightly used, has a few scratches because some genius thought it'd be a good idea to jam a screwdriver into it. Need gone ASAP!! NO questions asked!!",
      itemPrice: "$370,000.00",
    },
    {
      imageSrc: "/mig.jpg",
      itemName: "MiG-31",
      itemDescription: "Needs maintenance and some spares, could be fun to fly! P.S. I only ship within Kazakhstan (can arrange for international shipping but you pay for it).",
      itemPrice: "$184,900.00",
    },
    {
      imageSrc: "/icbm.jpg",
      itemName: "SATAN-2 ICBM",
      itemDescription: "Still got the original user manual. NO LOWBALLS, I KNOW WHAT I GOT!!!",
      itemPrice: "$5,000,000.00",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar Component */}
      <Navbar />

      {/* Centered content */}
      <div className="flex flex-1 justify-center items-center mt-20">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-8">FOR SALE</h1>
      </div>

      {/* Pass the items to ItemList */}
      <div className="flex justify-center p-4">
        <ItemList items={items} />
      </div>
    </div>
  );
}

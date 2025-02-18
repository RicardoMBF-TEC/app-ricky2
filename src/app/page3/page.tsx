import Navbar from "@/app/components/NavBar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar Component */}
      <Navbar />

      {/* Centered content */}
      <div className="flex flex-1 justify-center items-center mt-20">
        {/* Welcome Text */}
        <h1 className="text-4xl font-bold text-center">Page 3 is Under Construction!</h1>
      </div>
    </div>
  );
}
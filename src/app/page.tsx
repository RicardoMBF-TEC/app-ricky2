// pages/Home.js
import Navbar from "./components/NavBar";
import Button from "./components/NavButton"; // Import the Button component

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar Component */}
      <Navbar />

      {/* Centered content */}
      <div className="flex flex-1 justify-center items-center mt-20 flex-col">
        {/* Welcome Text */}
        <h1 className="text-4xl font-bold text-center mb-4">Welcome to the Cotton Road!</h1>

        {/* Button to Products Page */}
        <Button href="/page2" text="Go to Products" variant="rectangular" />
      </div>
    </div>
  );
}


import Button from "@/app/components/NavButton";

interface FormComponentProps {
    title: string;
    buttonText: string;
  }

export default function FormComponent({ title, buttonText }: FormComponentProps) {
  return (
    <form className="bg-white p-6 rounded-lg shadow-lg w-80">
      <h2 className="text-black text-2xl font-semibold text-center mb-4">{title}</h2>
      
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input 
          type="text" 
          className="w-full p-2 border border-gray-300 rounded mt-1"
          placeholder="Enter your name" 
          required
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input 
          type="email" 
          className="w-full p-2 border border-gray-300 rounded mt-1"
          placeholder="Enter your email" 
          required
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700">Password</label>
        <input 
          type="password" 
          className="w-full p-2 border border-gray-300 rounded mt-1"
          placeholder="Enter your password" 
          required
        />
      </div>
      
      <div className="text-center">
        <Button href="#" text={buttonText} variant="rectangular" />
      </div>
    </form>
  );
}

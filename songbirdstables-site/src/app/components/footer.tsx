import { birthstone } from "../fonts/fonts";

export default function Footer() {
  return (
    <footer className="bg-blue-400 text-white py-6">
      <div className="container mx-auto text-center">
        <p className={`${birthstone.variable} font-bold`}>
          &copy; 2024 Songbird Stables. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

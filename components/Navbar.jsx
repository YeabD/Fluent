
import Link from "next/link";
export default function Navbar() {
    return (
        <nav className="bg-white shadow-cyan-400 p-4">
            <div className="max-w-6xl mx-auto flex justify-between items-center ">
                <div className="mr-20  text-slate-800 text-4xl font-serif ">
                    <h1 className="text-3xl font-bold text-blue-600">FLUENT<span className="text-green-500 text-3xl" >.</span></h1>
                </div>
                <div className=" flex gap-8 ">
                    <Link href="/" className="font-serif relative text-gray-700 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">Home</Link>
                    <Link href="/courses" className="font-serif relative text-gray-700 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">Courses</Link>
                </div>
            </div>
        </nav >
    );
}
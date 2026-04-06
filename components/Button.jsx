export default function Button({ text }) {
    return (
        <button className="bg-blue-500 text-white px-5 py-2 rounded-2xl shadow-md hover:bg-blue-800 transition  duration-300 ">
            {text}
        </button>
    );
}
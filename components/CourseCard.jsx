
import Button from "./Button";
import Image from "next/image";

export default function CourseCard({ course }) {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden 
                    hover:shadow-xl hover:-translate-y-1 transition duration-300">


            <Image
                src={course.img}
                alt="course"
                width={400}
                height={200}
                className="w-full h-40 object-cover"
            />
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                    {course.title}
                </h2>
                <p className="text-sm text-gray-600 mt-2">
                    {course.shortDescription}
                </p>
                <div className="flex justify-between mt-3 text-sm text-gray-700">
                    <span><p className="text-gray-600 font-bold font-serif">Rating :</p>⭐ {course.rating}</span>
                    <span><p className="text-gray-600 font-bold font-serif">Duration :</p>{course.duration}</span>
                </div>
                <div className="flex justify-between items-center mt-4">

                    <span className="text-blue-600 font-bold">
                        <p className="text-gray-600 font-serif">Price :</p>${course.price}
                    </span>


                    <Button text="BUY" />


                </div>

            </div>
        </div>
    );
}
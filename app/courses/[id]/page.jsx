import { courses } from "@/data/courses";
import Button from "@/components/Button"
import Image from "next/image"


export default async function CourseDetail({ params }) {
    const { id } = await params
    const course = courses.find((c) => c.id === Number(id))
    if (!course) {
        return (
            <div>
                <h1 className="text-center mt-10">Course not found</h1>
            </div>
        )
    }
    return (

        <div className="bg-gray-50 min-h-screen">
            <div className="max-w-5xl mx-auto px-6 mt-10">

                <div className="grid md:grid-cols-2 gap-10">
                    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
                        <Image
                            src={course.img}
                            alt={course.title}
                            fill
                            className="object-cover rounded-xl shadow-md"
                        />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">
                            {course.title}
                        </h1>

                        <p className="text-gray-600 mt-4">
                            {course.longDescription}
                        </p>

                        <div className="mt-6 space-y-2 text-gray-700">
                            <p>⭐ Rating: {course.rating}</p>
                            <p>⏱ Duration: {course.duration}</p>
                            <p className="text-2xl font-bold text-blue-600">
                                ${course.price}
                            </p>

                            <Button text="ENROLL NOW" className="mt-6" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}
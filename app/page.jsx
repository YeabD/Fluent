
import Button from "../components/Button";
import Link from "next/link";
import { courses } from "../data/courses";
import CourseCard from "../components/CourseCard";
export default function LandingPage() {

    return (
        <div className="  min-h-screen bg-gray-50  ">
            <div className="flex flex-col items-center justify-center text-center px-6 pt-16 ">
                <h3 className="flex justify-center font-serif font-bold text-4xl text-blue-500">Welcome to Fluent course </h3>
                <p className="mt-4 text-gray-600 max-w-xl" >There are many high level courses are out there before we provided for you we evaluate those and when we belive those are great then provid for you . learn and change your life!</p>
            </div>
            <div className="flex  flex-col items-center justify-center gap-4 mt-6">
                < Link href="/courses">
                    <Button text="COURSES" />
                </Link>
            </div>

            <section className="mt-20 px-6 max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold text-center text-gray-800">
                    Why Choose Fluent?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 text-center">

                    <div className="p-6 bg-white rounded-lg shadow">
                        <h3 className="text-lg font-semibold">📚 Variety of Courses</h3>
                        <p className="text-gray-600 mt-2">
                            Learn different skills from multiple domains.
                        </p>
                    </div>

                    <div className="p-6 bg-white rounded-lg shadow">
                        <h3 className="text-lg font-semibold">⭐ High Quality</h3>
                        <p className="text-gray-600 mt-2">
                            Well-structured and practical learning content.
                        </p>
                    </div>

                    <div className="p-6 bg-white rounded-lg shadow">
                        <h3 className="text-lg font-semibold">⏱ Learn Anytime</h3>
                        <p className="text-gray-600 mt-2">
                            Access courses whenever you want.
                        </p>
                    </div>

                </div>
            </section>


            <section className="mt-20 px-6 max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold text-center text-gray-800">
                    Popular Courses
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                    {courses.slice(0, 3).map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </section>


            <section className="mt-20 text-center px-4">
                <h2 className="text-2xl font-bold text-gray-800">
                    Start Learning Today 🚀
                </h2>

                <p className="text-gray-600 mt-3">
                    Browse all courses and take your skills to the next level.
                </p>

                <div className="mt-6">
                    <Link href="/courses">
                        <Button text="Explore Courses" />
                    </Link>
                </div>
            </section>
        </div >
    );
}
import { courses } from "@/data/courses";
import CourseCard from "@/components/CourseCard";

export default function Courses() {

    return (
        <div className="max-w-6xl mx-auto px-6 mt-10 
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
                <a href={`/courses/${course.id}`} key={course.id}>
                    <CourseCard course={course} />
                </a>
            ))}
        </div>
    )
};
import Link from 'next/link';

async function fetchCourses() {
  const response = await fetch('http://localhost:3000/api/courses');
  const courses = await response.json();
  return courses;
}

const Courses = async () => {
  const courses = await fetchCourses();
  return (
    <div className="grid-1 ">
      {courses?.map((course) => (
        <div key={course.id} className="bg-gray-200 p-4 m-4 rounded-lg">
          <h2>{course.title}</h2>
          <p className="mb-4">{course.description}</p>
          <Link
            href={course.link}
            target="_blank"
            className="py-2 px-4 bg-orange-700 hover:bg-red-300 text-white rounded-lg mb-4"
          >
            둘러보기
          </Link>
        </div>
      ))}
    </div>
  );
};
export default Courses;

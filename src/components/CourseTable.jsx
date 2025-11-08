import CourseRow from "./CourseRow";

export default function CourseTable({ courses, onChange, onAdd, onRemove, gradeMap, errors }) {
  return (
    <div className="overflow-x-auto">
      <div className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-soft-lg border border-gray-100 dark:border-gray-800">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Your Courses</h3>
          <button
            onClick={onAdd}
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-md shadow"
          >
            <span className="text-lg">+</span> Add Course
          </button>
        </div>

        <table className="w-full min-w-[640px] border-collapse">
          <thead>
            <tr className="text-sm text-gray-600 dark:text-gray-300">
              <th className="text-left pb-2">Course Name</th>
              <th className="text-left pb-2">Credit Hours</th>
              <th className="text-left pb-2">Grade</th>
              <th className="text-center pb-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <CourseRow
                key={course.id}
                course={course}
                gradeMap={gradeMap}
                error={errors.find((e) => e.id === course.id)?.errors}
                onChange={onChange}
                onRemove={onRemove}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

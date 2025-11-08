export default function CourseRow({ course, onChange, onRemove, gradeMap, error }) {
  return (
    <>
      <tr className="align-top">
        <td className="p-2">
          <input
            type="text"
            value={course.name}
            onChange={(e) => onChange(course.id, "name", e.target.value)}
            placeholder="Course Name"
            className="w-full border border-gray-200 dark:border-gray-700 rounded-md p-2 shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-300"
          />
        </td>
        <td className="p-2 w-28">
          <input
            type="number"
            min="0.5"
            step="0.5"
            value={course.credit}
            onChange={(e) => onChange(course.id, "credit", e.target.value)}
            placeholder="Credit"
            className="w-full border border-gray-200 dark:border-gray-700 rounded-md p-2 shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-300"
          />
        </td>
        <td className="p-2 w-40">
          <select
            value={course.grade}
            onChange={(e) => onChange(course.id, "grade", e.target.value)}
            className="w-full border border-gray-200 dark:border-gray-700 rounded-md p-2 shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          >
            <option value="">Select Grade</option>
            {Object.keys(gradeMap).map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </td>
        <td className="p-2 text-center">
          <button
            onClick={() => onRemove(course.id)}
            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 shadow"
          >
            Remove
          </button>
        </td>
      </tr>

      {error?.length > 0 && (
        <tr>
          <td colSpan={4} className="px-2 py-1 text-sm text-red-600">
            {error.join(" • ")}
          </td>
        </tr>
      )}
    </>
  );
}

import React, { useState } from "react";
import Header from "./components/Header";
import Controls from "./components/Controls";
import CourseTable from "./components/CourseTable";
import ResultsCard from "./components/ResultsCard";
import { defaultGradeMap } from "./utils/gradeMap";
import { validateCourse } from "./utils/validation";
import { calculateCGPA } from "./utils/calc";

export default function App() {
  const [courses, setCourses] = useState([
    { id: Date.now(), name: "", credit: "", grade: "" },
  ]);
  const [errors, setErrors] = useState([]);
  const [results, setResults] = useState(null);

  const handleChange = (id, field, value) => {
    setCourses((prev) =>
      prev.map((c) => (c.id === id ? { ...c, [field]: value } : c))
    );
  };

  const handleAdd = () => {
    setCourses([...courses, { id: Date.now(), name: "", credit: "", grade: "" }]);
  };

  const handleRemove = (id) => {
    setCourses((prev) => prev.filter((c) => c.id !== id));
  };

  const handleReset = () => {
    setCourses([{ id: Date.now(), name: "", credit: "", grade: "" }]);
    setErrors([]);
    setResults(null);
  };

  const handleCalculate = () => {
    const allErrors = [];
    for (const c of courses) {
      const errs = validateCourse(c, defaultGradeMap);
      if (errs.length) allErrors.push({ id: c.id, errors: errs });
    }
    if (allErrors.length) {
      setErrors(allErrors);
      setResults(null);
      return;
    }
    setErrors([]);
    const res = calculateCGPA(courses, defaultGradeMap);
    setResults(res);
  };

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-indigo-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900">
      <div className="max-w-4xl mx-auto px-4">
        <div className="glass-card p-6 rounded-2xl shadow-2xl">
          <div className="flex items-start justify-between gap-6 flex-col sm:flex-row mb-6">
            <Header />
            <Controls />
          </div>

          <CourseTable
            courses={courses}
            gradeMap={defaultGradeMap}
            onChange={handleChange}
            onAdd={handleAdd}
            onRemove={handleRemove}
            errors={errors}
          />

          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center mt-6">
            <button
              onClick={handleCalculate}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-5 py-2 rounded-full shadow-md hover:scale-105 transform transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13 7H7v6h6V7z" />
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11h2v4H9V7z" clipRule="evenodd" />
              </svg>
              Calculate CGPA
            </button>
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 bg-white/60 dark:bg-white/5 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full shadow hover:scale-105 transform transition"
            >
              Reset
            </button>
          </div>

          {results && <ResultsCard results={results} />}
        </div>
      </div>
    </div>
  );
}
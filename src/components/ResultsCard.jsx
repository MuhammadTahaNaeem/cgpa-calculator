export default function ResultsCard({ results }) {
  return (
    <div className="mt-6 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800">
      <div className="px-6 py-4 bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
        <h2 className="text-lg font-bold">Results</h2>
      </div>
      <div className="bg-white dark:bg-gray-900 px-6 py-5 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Total Credits</div>
            <div className="text-xl font-semibold text-gray-800 dark:text-gray-100">{results.totalCredits}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Total Grade Points</div>
            <div className="text-xl font-semibold text-gray-800 dark:text-gray-100">{results.totalGradePoints}</div>
          </div>
        </div>

        <div className="mt-4">
          <div className="inline-block bg-gray-50 dark:bg-gray-800 px-6 py-3 rounded-full shadow-inner">
            <div className="text-sm text-gray-500 dark:text-gray-400">Final CGPA</div>
            <div className="text-3xl font-bold text-emerald-600">{results.cgpa.toFixed(2)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

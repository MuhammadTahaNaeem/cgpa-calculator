export default function Header() {
  return (
    <header className="mb-4 sm:mb-0">
      <div className="flex items-center gap-3">
        <div className="inline-flex items-center gap-3 px-3 py-2 rounded-md bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-md">
          <div className="text-left">
            <h1 className="text-xl sm:text-2xl font-bold leading-tight">CGPA Calculator</h1>
          </div>
        </div>
      </div>
    </header>
  );
}

export function Sidebar({ children }) {
  return (
    <div className="w-64 bg-gray-200 p-4 overflow-y-auto">
      {children}
    </div>
  );
}
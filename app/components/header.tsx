export default function Header() {
  return (
    <header className="w-full bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-full px-4 py-4">
        <div className="flex flex-row-reverse items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
            سیستم یکپارچه شرکت
          </h1>
          <div className="text-sm text-gray-600">(سنگ احسان و رفقا)</div>
        </div>
      </div>
    </header>
  );
}

export default function NavLoader() {
  return (
    <div className="bg-custom-slate-100 fixed top-0 w-screen border-b border-b-custom-slate-300">
      <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex justify-between items-center h-16 lg:h-18 animate-pulse">
          <div className="flex justify-center items-center">
            <div className="flex items-center justify-center w-full">
              <div className="rounded-full bg-slate-300 h-5 w-5"></div>
            </div>
            <div className="h-2 bg-slate-300 rounded-2xl w-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

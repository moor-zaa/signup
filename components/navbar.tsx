import ThemeToggle from "./theme-toggle";

const Navbar = () => {
  return (
    <nav className="absolute top-0 w-full p-6 flex justify-between items-center z-10">
      <div className="font-bold text-xl tracking-tight flex items-center gap-2">
        <div className="w-8 h-8 bg-(--text-primary) text-(--bg-primary) rounded-lg flex items-center justify-center text-xs font-black">
          AI
        </div>
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />

        <div className="flex items-center gap-2 scale-90">
          <span className="text-xs text-(--text-secondary) font-bold">EN</span>
          <div className="relative inline-block w-10 align-middle select-none">
            <label
              htmlFor="lang-toggle"
              className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer"
            ></label>
          </div>
          <span className="text-xs text-(--text-secondary) font-bold">FA</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import LangSwitcher from "./lang-switcher";
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

        <LangSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;

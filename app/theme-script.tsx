const ThemeScript = () => {
  const script = `
    (function () {
      try {
        const stored = localStorage.getItem("theme");
        const theme = stored || "light"
        document.documentElement.setAttribute("data-theme", theme);
      } catch {}
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
};

export default ThemeScript;

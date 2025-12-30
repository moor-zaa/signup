import { LoginTab } from "./auth.types";

const TabToggle = ({
  tabs,
  activeTab,
  onTabChange,
  getLabel,
}: {
  tabs: LoginTab[];
  activeTab: LoginTab;
  onTabChange: (tab: LoginTab) => void;
  getLabel: (tab: LoginTab) => string;
}) => (
  <div className="flex justify-center mb-2">
    <div className="toggle-group" role="tablist" aria-label="Login method">
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          role="tab"
          aria-selected={tab === activeTab}
          className={`toggle-btn ${tab === activeTab ? "active" : ""}`}
          onClick={() => onTabChange(tab)}
        >
          {getLabel(tab)}
        </button>
      ))}
    </div>
  </div>
);

export default TabToggle;

const COUNTRY_CODE = "+98";

const CredentialInput = ({
  type,
  value,
  onChange,
  label,
  placeholder,
  showCountryCode,
}: {
  type: "email" | "text";
  value: string;
  onChange: (value: string) => void;
  label: string;
  placeholder: string;
  showCountryCode?: boolean;
}) => (
  <div className="relative">
    <label className="block text-xs font-medium mb-1.5 ml-1 mr-1 text-(--text-secondary)">
      {label}
    </label>
    <div className="flex items-center gap-2" style={{ direction: "ltr" }}>
      {showCountryCode && (
        <div className="text-xs bg-(--bg-secondary) px-3 h-12.5 rounded-xl flex items-center justify-center border border-(--border-color)">
          {COUNTRY_CODE}
        </div>
      )}
      <input
        type={type}
        value={value}
        minLength={type === "text" ? 10 : 8}
        maxLength={type === "text" ? 10 : 100}
        onChange={(e) => onChange(e.target.value)}
        className="input-field rtl:text-right ltr:text-left flex-1"
        placeholder={placeholder}
        aria-label={label}
      />
    </div>
  </div>
);

export default CredentialInput;

export const OTP_MAX_LENGTH = 6;

const OTPInput = ({
  value,
  onChange,
  label,
  helperText,
}: {
  value: string;
  onChange: (value: string) => void;
  label: string;
  helperText: string;
}) => (
  <>
    <label className="block text-xs font-medium mb-1.5 ml-1 mr-1 text-(--text-secondary)">
      {label}
    </label>
    <input
      type="text"
      value={value}
      onChange={(e) => {
        const val = e.target.value.replace(/\D/g, "");
        onChange(val.slice(0, OTP_MAX_LENGTH));
      }}
      maxLength={OTP_MAX_LENGTH}
      className="input-field text-center tracking-[0.5em] font-mono text-lg"
      placeholder="••••••"
      aria-label={label}
    />
    <p className="text-[10px] text-(--text-secondary) mt-1 text-center">
      {helperText}
    </p>
  </>
);

export default OTPInput;

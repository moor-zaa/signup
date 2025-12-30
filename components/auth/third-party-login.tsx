"use client";

import { useI18n } from "@/i18n/dictionary-provider";
import {
  AppleLogoIcon,
  GoogleLogoIcon,
  LinkedinLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react";
import { useState } from "react";

const ICON_SIZE = 22;
const OTHER_SOCIAL_OPTIONS = [
  "Microsoft",
  "Facebook",
  "Github",
  "Gitlab",
  "Discord",
];

const ThirdPartyLogin = () => {
  const { dictionary } = useI18n();
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="space-y-3">
      <button className="btn-outline w-full justify-center gap-2 font-medium">
        <GoogleLogoIcon />
        <span>{dictionary.continueWithGoogle}</span>
      </button>

      <div className="grid grid-cols-3 gap-3">
        <button className="btn-outline">
          <AppleLogoIcon size={ICON_SIZE} />
        </button>
        <button className="btn-outline">
          <LinkedinLogoIcon size={ICON_SIZE} />
        </button>
        <button className="btn-outline">
          <XLogoIcon size={ICON_SIZE} />
        </button>
      </div>

      <div className="text-center">
        <button
          onClick={handleToggle}
          className="text-xs text-(--text-secondary) hover:text-(--text-primary) transition underline decoration-dotted"
        >
          {dictionary.otherOptions}
        </button>

        <div className={`expandable-grid ${open ? "open" : ""}`}>
          {OTHER_SOCIAL_OPTIONS.map((item) => (
            <div className="social-chip" key={item}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThirdPartyLogin;

import { useI18n } from "@/i18n/dictionary-provider";
import { ArrowLeftIcon } from "@phosphor-icons/react";
import React, { useState } from "react";

type Tab = "email" | "phone";

const FormContainer = () => {
  const { dictionary } = useI18n();
  const [selectedTab, setSelectedTab] = useState<Tab>("email");

  const handleSelectTab = (value: Tab) => {
    setSelectedTab(value);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-center mb-2">
        <div className="toggle-group" id="loginTypeToggle">
          {(["email", "phone"] as Tab[]).map((tab) => (
            <button
              type="button"
              className={`toggle-btn ${tab === selectedTab ? "active" : ""}`}
              data-type={tab}
              key={tab}
              onClick={() => handleSelectTab(tab)}
            >
              {dictionary[tab]}
            </button>
          ))}
        </div>
      </div>

      <div className="relative">
        <label
          className="block text-xs font-medium mb-1.5 ml-1 mr-1 text-(--text-secondary)"
          id="inputLabel"
        >
          {dictionary.emailLabel}
        </label>
        <div className="relative">
          <input
            type="email"
            className="input-field rtl:text-right ltr:text-left"
            placeholder="name@example.com"
          />
          <span
            id="phonePrefix"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-xs bg-(--bg-secondary) px-2 py-1 rounded border border-(--border-color) hidden rtl:right-auto rtl:left-3 ltr:left-auto ltr:right-3"
          >
            +98
          </span>
        </div>
      </div>

      <div id="otpGroup" className="otp-section">
        <label className="block text-xs font-medium mb-1.5 ml-1 mr-1 text-(--text-secondary)">
          {dictionary.confirmationCode}
        </label>
        <input
          type="text"
          id="otpInput"
          maxLength={6}
          className="input-field text-center tracking-[0.5em] font-mono text-lg"
          placeholder="••••••"
        />
        <p
          className="text-[10px] text-(--text-secondary) mt-1 text-center"
          data-en="Check your inbox/SMS"
          data-fa="صندوق ورودی یا پیامک خود را چک کنید"
        >
          صندوق ورودی یا پیامک خود را چک کنید
        </p>
      </div>

      <div
        id="errorMessage"
        className="hidden bg-red-50 text-red-600 text-xs p-2 rounded-lg text-center border border-red-100"
      >
        <span>{dictionary.invalidCode}</span>
      </div>

      <button id="ctaButton" className="btn-primary mt-2">
        <span>{dictionary.continue}</span>
        <ArrowLeftIcon className="rtl:rotate-0 ltr:rotate-180" />
      </button>

      <button className="w-full text-xs text-(--text-secondary) hover:text-(--text-primary) mt-2 transition">
        {dictionary.continueAsGuest}
      </button>
    </div>
  );
};

export default FormContainer;

"use client";

import { useI18n } from "@/i18n/dictionary-provider";
import ThirdPartyLogin from "./third-party-login";
import AgreeTerms from "./agree-terms";
import FormContainer from "./form-container";

const AuthCard = () => {
  const { dictionary } = useI18n();

  return (
    <div className="auth-card">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-2">{dictionary.welcome}</h1>
        <p className="text-(--text-secondary) text-sm">{dictionary.subtitle}</p>
      </div>

      <ThirdPartyLogin />

      <div className="relative py-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-(--border-color)"></div>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-(--bg-primary) px-2 text-(--text-secondary)">
            {dictionary.orLoginWith}
          </span>
        </div>
      </div>

      <FormContainer />

      <AgreeTerms dictionary={dictionary} />
    </div>
  );
};

export default AuthCard;

import { ArrowLeftIcon } from "@phosphor-icons/react";
import { LoginTab } from "./auth.types";
import { useI18n } from "@/i18n/dictionary-provider";
import TabToggle from "./tab-toggle";
import OTPInput from "@/ui/inputs/otp-input";
import ErrorMessage from "../../ui/message/error-message";
import CredentialInput from "@/ui/inputs/credencial-input";
import { useAuthForm } from "@/hooks/useSignin.hook";
import { useRouter } from "next/navigation";

const LOGIN_TABS: LoginTab[] = ["email", "phone"];

const FormContainer = () => {
  const { dictionary, locale } = useI18n();
  const router = useRouter();

  const {
    selectedTab,
    formData,
    showError,
    isSubmitting,
    isEmailTab,
    isCredentialStep,
    isOTPStep,
    handleTabChange,
    handleCredentialChange,
    handleOTPChange,
    handleSendOTP,
    handleVerifyOTP,
    handleGuestContinue,
  } = useAuthForm({
    onSendOTP: (credential, type) => {
      console.log("Sending OTP to:", credential, "via", type);
    },
    onVerifyOTP: (data) => {
      console.log("Verifying OTP:", data);
    },
    onGuestContinue: () => {
      console.log("Continue as guest");
      router.push("/welcome");
    },
  });

  const getTabLabel = (tab: LoginTab) => dictionary[tab];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isCredentialStep) {
      handleSendOTP();
    } else if (isOTPStep) {
      handleVerifyOTP();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {isCredentialStep && (
        <TabToggle
          tabs={LOGIN_TABS}
          activeTab={selectedTab}
          onTabChange={handleTabChange}
          getLabel={getTabLabel}
        />
      )}

      <CredentialInput
        type={isEmailTab ? "email" : "text"}
        value={formData.credential}
        onChange={handleCredentialChange}
        label={isEmailTab ? dictionary.emailLabel : dictionary.phoneLabel}
        placeholder={isEmailTab ? "name@example.com" : "912 345 6789"}
        showCountryCode={!isEmailTab}
      />

      {isOTPStep && (
        <OTPInput
          value={formData.otp}
          onChange={handleOTPChange}
          label={dictionary.confirmationCode}
          helperText={dictionary.checkInbox || "Check your inbox"}
        />
      )}

      {showError && <ErrorMessage message={dictionary.invalidCode} />}

      <button type="submit" className="btn-primary mt-2 w-full">
        <span>
          {isSubmitting
            ? "Loading..."
            : isCredentialStep
            ? dictionary.continue
            : dictionary.signin}
        </span>
        <ArrowLeftIcon
          className={locale === "fa" ? "" : "rotate-180"}
          size={16}
        />
      </button>

      {isCredentialStep && (
        <button
          type="button"
          onClick={handleGuestContinue}
          className="w-full text-xs text-(--text-secondary) hover:text-(--text-primary) mt-2 transition disabled:opacity-50"
          disabled={isSubmitting}
        >
          {dictionary.continueAsGuest}
        </button>
      )}
    </form>
  );
};

export default FormContainer;

import {
  FormData,
  FormStep,
  LoginTab,
  UseAuthFormOptions,
} from "@/components/auth/auth.types";
import { OTP_MAX_LENGTH } from "@/ui/inputs/otp-input";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

export const useAuthForm = (options?: UseAuthFormOptions) => {
  const [selectedTab, setSelectedTab] = useState<LoginTab>("email");
  const [currentStep, setCurrentStep] = useState<FormStep>("credential");
  const [formData, setFormData] = useState<FormData>({
    credential: "",
    otp: "",
  });
  const [showError, setShowError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isEmailTab = selectedTab === "email";
  const isCredentialStep = currentStep === "credential";
  const isOTPStep = currentStep === "otp";
  const isValidOTP = formData.otp.length === OTP_MAX_LENGTH;
  const hasCredential = formData.credential.trim().length > 0;
  const router = useRouter();

  const handleTabChange = useCallback((tab: LoginTab) => {
    setSelectedTab(tab);
    setFormData({ credential: "", otp: "" });
    setCurrentStep("credential");
    setShowError(false);
  }, []);

  const handleCredentialChange = useCallback((value: string) => {
    setFormData((prev) => ({ ...prev, credential: value }));
    setShowError(false);
  }, []);

  const handleOTPChange = useCallback((value: string) => {
    setFormData((prev) => ({ ...prev, otp: value }));
    setShowError(false);
  }, []);

  const handleSendOTP = useCallback(() => {
    if (!hasCredential) {
      setShowError(true);
      return;
    }

    setIsSubmitting(true);
    setShowError(false);

    try {
      options?.onSendOTP?.(formData.credential, selectedTab);
      setCurrentStep("otp");
    } catch (error) {
      console.error("Send OTP error:", error);
      setShowError(true);
    } finally {
      setIsSubmitting(false);
    }
  }, [formData.credential, selectedTab, hasCredential, options]);

  const handleVerifyOTP = useCallback(() => {
    if (!isValidOTP) {
      setShowError(true);
      return;
    }

    setIsSubmitting(true);
    setShowError(false);

    try {
      options?.onVerifyOTP?.({
        ...formData,
        type: selectedTab,
      });
      router.push("/welcome")
    } catch (error) {
      console.error("Verify OTP error:", error);
      setShowError(true);
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, selectedTab, isValidOTP, options]);

  const handleGuestContinue = useCallback(() => {
    options?.onGuestContinue?.();
  }, [options]);

  const resetForm = useCallback(() => {
    setFormData({ credential: "", otp: "" });
    setCurrentStep("credential");
    setShowError(false);
    setIsSubmitting(false);
  }, []);

  return {
    selectedTab,
    formData,
    showError,
    isSubmitting,

    isEmailTab,
    isCredentialStep,
    isOTPStep,
    isValidOTP,
    hasCredential,

    handleTabChange,
    handleCredentialChange,
    handleOTPChange,
    handleSendOTP,
    handleVerifyOTP,
    handleGuestContinue,
    resetForm,
  };
};

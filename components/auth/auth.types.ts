export type LoginTab = "email" | "phone";

export interface FormData {
  credential: string;
  otp: string;
}

export type FormStep = "credential" | "otp";

export interface UseAuthFormOptions {
  onSendOTP?: (credential: string, type: LoginTab) => void | Promise<void>;
  onVerifyOTP?: (data: FormData & { type: LoginTab }) => void | Promise<void>;
  onGuestContinue?: () => void;
}

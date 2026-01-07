declare module "react-netlify-forms" {
  import * as React from "react";

  export type NetlifyFormSuccessContext = {
    formRef: React.RefObject<HTMLFormElement>;
  };

  export type UseNetlifyFormOptions<TValues extends Record<string, unknown>> = {
    name: string;
    action?: string;
    honeypotName?: string;
    onSuccess?: (response: unknown, context: NetlifyFormSuccessContext) => void;
    onError?: (error: unknown, context: unknown) => void;
  };

  export type NetlifyFormState<TValues extends Record<string, unknown>> = {
    handleSubmit: (event: unknown, values?: TValues) => void;
    formRef: React.RefObject<HTMLFormElement>;
    success?: boolean;
    error?: boolean;
  };

  export function useNetlifyForm<
    TValues extends Record<string, unknown> = Record<string, unknown>
  >(options: UseNetlifyFormOptions<TValues>): NetlifyFormState<TValues>;

  export const NetlifyFormProvider: React.ComponentType<any>;

  export const NetlifyFormComponent: React.ComponentType<
    React.FormHTMLAttributes<HTMLFormElement>
  >;

  export const Honeypot: React.ComponentType;

  export const Recaptcha: React.ComponentType<{
    siteKey: string;
    invisible?: boolean;
  }>;
}

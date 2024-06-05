"use client";

import { contactAction } from "@/actions";
import { useFormState, useFormStatus } from "react-dom";
import { PrimaryButton } from "./PrimaryButton";
import { SecondaryButton } from "./SecondaryButton";
import { toast } from "react-toastify";
import { useEffect, useRef } from "react";
import { SendIcon } from "./icons/Send";

export type ContactFormState = {
  message: string;
  errors?: { [key: string]: string[] };
};

const initialFormState: ContactFormState = {
  message: "",
  errors: undefined,
};

export function ContactForm() {
  const [formState, formAction] = useFormState(contactAction, initialFormState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formState.message) {
      if (formState.message === "success") {
        toast("Your email was sent!", { type: "success" });
        formRef.current?.reset();
      } else {
        toast(formState.message, { type: "error" });
      }
    }
  }, [formState]);

  return (
    <form
      ref={formRef}
      action={formAction}
      className="flex flex-col gap-8 mt-16"
    >
      <label htmlFor="name" className="flex flex-col gap-1 group/input flex-1">
        <span>Name</span>
        <div className="h-12 w-full bg-zinc-800 relative p-[1px] rounded overflow-hidden">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="your name..."
            required
            className="peer outline-none border-none relative z-20 h-full w-full px-2 bg-zinc-900 text-white rounded"
          />
          <div className="absolute inset-0 bg-red-300 z-10 rounded opacity-0 group-hover/input:opacity-50 peer-focus:opacity-100">
            <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded"></div>
          </div>
        </div>
        {formState.errors?.name?.length && (
          <div className="w-full p-2 bg-red-500/10 rounded-sm">
            {formState.errors?.name?.map((err) => (
              <p key={err} className="text-red-400">
                {err}
              </p>
            ))}
          </div>
        )}
      </label>

      <label htmlFor="email" className="flex flex-col gap-1 group/input flex-1">
        <span>Email</span>
        <div className="h-12 w-full bg-zinc-800 relative p-[1px] rounded overflow-hidden">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="your@email.com"
            required
            className="peer outline-none border-none relative z-20 h-full w-full px-2 bg-zinc-900 text-white rounded"
          />
          <div className="absolute inset-0 bg-red-300 z-10 rounded opacity-0 group-hover/input:opacity-50 peer-focus:opacity-100">
            <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded"></div>
          </div>
        </div>
        {formState.errors?.email?.length && (
          <div className="w-full p-2 bg-red-500/10 rounded-sm">
            {formState.errors?.email?.map((err) => (
              <p key={err} className="text-red-400">
                {err}
              </p>
            ))}
          </div>
        )}
      </label>

      <label htmlFor="message" className="flex flex-col gap-1 group/input">
        <span>Message</span>

        <div className="min-h-fit w-full bg-zinc-800 relative p-[1px] rounded overflow-hidden">
          <textarea
            name="message"
            id="message"
            placeholder="your message..."
            required
            className="peer outline-none border-none relative z-20 h-full w-full p-2 bg-zinc-900 text-white rounded min-h-48"
          />
          <div className="absolute inset-0 bg-red-300 z-10 rounded opacity-0 group-hover/input:opacity-50 peer-focus:opacity-100">
            <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded"></div>
          </div>
        </div>
        {formState.errors?.message?.length && (
          <div className="w-full p-2 bg-red-500/10 rounded-sm">
            {formState.errors?.message?.map((err) => (
              <p key={err} className="text-red-400">
                {err}
              </p>
            ))}
          </div>
        )}
      </label>

      <div className="flex flex-wrap gap-4">
        <ContactFormSubmitButton />
        <SecondaryButton type="reset">Reset</SecondaryButton>
      </div>
    </form>
  );
}

function ContactFormSubmitButton() {
  const { pending } = useFormStatus();

  return (
    <PrimaryButton type="submit" icon={pending ? undefined : <SendIcon />}>
      {pending ? "Sending..." : "Send Email"}
    </PrimaryButton>
  );
}

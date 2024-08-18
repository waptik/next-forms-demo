"use client";

import { useFormState, useFormStatus } from "react-dom";
import { registerEventGuest } from "@/app/actions";

const initialState = {
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="items-center rounded-md bg-blue-600 hover:bg-blue-400 py-2 px-4 text-white font-medium"
      type="submit"
      aria-disabled={pending}
    >
      {pending ? "Adding..." : "Add"}
    </button>
  );
}

export function AddForm() {
  const [state, formAction] = useFormState(registerEventGuest, initialState);

  return (
    <form action={formAction}>
      <div className="flex flex-col items-center justify-center gap-2 w-full max-w-80 p-4">
        <div className="flex flex-row gap-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="flex w-full rounded-lg border border-input hover:border-gray-700 bg-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 h-10 pl-3 pr-2 py-1 text-lg"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="flex flex-row gap-2">
          <label htmlFor="email">Email</label>
          <input
            className="flex w-full rounded-lg border border-input hover:border-gray-700 bg-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 h-10 pl-3 pr-2 py-1 text-lg"
            type="email"
            id="email"
            name="email"
            required
          />
        </div>

        <SubmitButton />
        <p aria-live="polite" className="non-sr-only" role="status">
          {state?.message}
        </p>
      </div>
    </form>
  );
}

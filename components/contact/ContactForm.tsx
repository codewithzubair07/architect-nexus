"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSearchParams } from "next/navigation";
import GoldButton from "@/components/shared/GoldButton";

const schema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Phone number is required"),
  service: z.string().min(1, "Select a service"),
  budget: z.string().min(1, "Select a budget range"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const serviceOptions = [
  "Starter Plan",
  "AI Automation Plan",
  "Growth Plan",
  "E-Commerce Plan",
  "Custom Plan",
  "Just Exploring",
];

const budgetOptions = [
  "Under ₹10,000",
  "₹10,000–₹25,000",
  "₹25,000–₹50,000",
  "₹50,000+",
  "Let's discuss",
];

const inputClassName =
  "w-full rounded-xl border border-an-border bg-an-black/60 px-4 py-3 text-sm outline-none transition focus:border-an-gold focus:shadow-[0_0_0_3px_rgba(0,229,255,0.12)]";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const searchParams = useSearchParams();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      service: "",
      budget: "",
    },
  });

  useEffect(() => {
    const plan = searchParams.get("plan");
    if (!plan) return;
    const map: Record<string, string> = {
      starter: "Starter Plan",
      ai: "AI Automation Plan",
      growth: "Growth Plan",
      ecommerce: "E-Commerce Plan",
      custom: "Custom Plan",
    };
    if (map[plan]) {
      setValue("service", map[plan]);
    }
  }, [searchParams, setValue]);

  const onSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-an-border bg-an-surface/70 p-10 text-center backdrop-blur" data-reveal>
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-an-gold text-xl text-an-black shadow-[0_0_28px_rgba(0,229,255,0.45)]">
          ✓
        </div>
        <h3 className="mt-6 text-2xl font-display">Message Sent!</h3>
        <p className="mt-2 text-sm text-an-muted">
          We&apos;ll be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)} data-reveal>
      <div>
        <input {...register("fullName")} placeholder="Full Name" className={inputClassName} />
        {errors.fullName ? (
          <p className="mt-1 text-xs text-red-400">{errors.fullName.message}</p>
        ) : null}
      </div>
      <div>
        <input
          {...register("email")}
          placeholder="Email Address"
          type="email"
          className={inputClassName}
        />
        {errors.email ? (
          <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
        ) : null}
      </div>
      <div>
        <input
          {...register("phone")}
          placeholder="Phone Number"
          type="tel"
          className={inputClassName}
        />
        {errors.phone ? (
          <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>
        ) : null}
      </div>
      <div>
        <select {...register("service")} className={inputClassName}>
          <option value="">Service Interested</option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.service ? (
          <p className="mt-1 text-xs text-red-400">{errors.service.message}</p>
        ) : null}
      </div>
      <div>
        <select {...register("budget")} className={inputClassName}>
          <option value="">Budget Range</option>
          {budgetOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.budget ? (
          <p className="mt-1 text-xs text-red-400">{errors.budget.message}</p>
        ) : null}
      </div>
      <textarea
        {...register("message")}
        placeholder="Message"
        rows={4}
        className={inputClassName}
      />
      <GoldButton size="lg" type="submit">
        Send Message
      </GoldButton>
    </form>
  );
}

import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { z } from "zod";
import { ADMIN_API_BASE_URL } from "../config/api";

const contactSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, { message: "First name is required" })
    .max(50, { message: "First name must not exceed 50 characters" }),
  lastName: z
    .string()
    .trim()
    .min(1, { message: "Last name is required" })
    .max(50, { message: "Last name must not exceed 50 characters" }),
  workEmail: z
    .string()
    .trim()
    .min(1, { message: "Work email is required" })
    .email({ message: "Please enter a valid email address" })
    .max(100, { message: "Email address must not exceed 100 characters" }),
  message: z
    .string()
    .trim()
    .min(1, { message: "Message is required" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface FormErrors {
  firstName?: string;
  lastName?: string;
  workEmail?: string;
  message?: string;
}

export function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    workEmail: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        setStatus("idle");
        setServerMessage(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [id]: undefined }));
    }
    if (status !== "idle") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrors({});
    setServerMessage(null);

    const validation = contactSchema.safeParse(formData);
    if (!validation.success) {
      const fieldErrors: FormErrors = {};
      validation.error.issues.forEach((err) => {
        const field = err.path[0] as keyof FormErrors;
        if (field && !fieldErrors[field]) {
          fieldErrors[field] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setStatus("loading");
    try {
      const response = await fetch(`${ADMIN_API_BASE_URL}/contact-us/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validation.data),
      });

      const data = await response.json().catch(() => null);

      if (response.ok) {
        setStatus("success");
        setServerMessage(data?.message || "Thank you! Your message has been sent successfully.");
        setFormData({
          firstName: "",
          lastName: "",
          workEmail: "",
          message: "",
        });
      } else {
        setStatus("error");
        setServerMessage(data?.message || "Failed to send message. Please try again later.");
      }
    } catch (err) {
      setStatus("error");
      setServerMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <div className="pt-24 pb-20 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6">
            Get in <span className="text-red-600 dark:text-red-500">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
            Ready to secure your SAP ecosystem? Reach out to our team for a personalized demo, pricing details, or any other inquiries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:items-stretch">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Contact Information</h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-red-600 dark:text-red-500" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Email Us</h3>
                  <a href="mailto:contact@maitsys.com" className="text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors break-words">contact@maitsys.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-red-600 dark:text-red-500" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Call Us</h3>
                  <a href="tel:+19784722177" className="text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors inline-block">+1 (978) 472-2177</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-red-600 dark:text-red-500" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Global Headquarters</h3>
                  <p className="text-slate-600 dark:text-slate-400">1 Marina Park Drive<br />Boston, MA 02210</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Send a Message</h2>

            {status === "success" && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                <span className="text-sm font-medium">{serverMessage}</span>
              </div>
            )}

            {status === "error" && (
              <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-300 flex items-center gap-3">
                <AlertCircle className="w-5 h-5 shrink-0 text-red-600 dark:text-red-400" />
                <span className="text-sm font-medium">{serverMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    maxLength={50}
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.firstName
                        ? "border-red-500 focus:border-red-500 focus:ring-red-200 dark:focus:ring-red-900/50"
                        : "border-slate-200 dark:border-slate-700 focus:border-red-500 focus:ring-red-200 dark:focus:ring-red-900/50"
                    } bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 transition-all outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500`}
                    placeholder="John"
                  />
                  {errors.firstName && <p className="text-red-500 text-xs font-medium">{errors.firstName}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    maxLength={50}
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.lastName
                        ? "border-red-500 focus:border-red-500 focus:ring-red-200 dark:focus:ring-red-900/50"
                        : "border-slate-200 dark:border-slate-700 focus:border-red-500 focus:ring-red-200 dark:focus:ring-red-900/50"
                    } bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 transition-all outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500`}
                    placeholder="Doe"
                  />
                  {errors.lastName && <p className="text-red-500 text-xs font-medium">{errors.lastName}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="workEmail" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Work Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="workEmail"
                  maxLength={100}
                  value={formData.workEmail}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.workEmail
                      ? "border-red-500 focus:border-red-500 focus:ring-red-200 dark:focus:ring-red-900/50"
                      : "border-slate-200 dark:border-slate-700 focus:border-red-500 focus:ring-red-200 dark:focus:ring-red-900/50"
                  } bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 transition-all outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500`}
                  placeholder="john@company.com"
                />
                {errors.workEmail && <p className="text-red-500 text-xs font-medium">{errors.workEmail}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  How can we help? <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.message
                      ? "border-red-500 focus:border-red-500 focus:ring-red-200 dark:focus:ring-red-900/50"
                      : "border-slate-200 dark:border-slate-700 focus:border-red-500 focus:ring-red-200 dark:focus:ring-red-900/50"
                  } bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 transition-all outline-none resize-none placeholder:text-slate-400 dark:placeholder:text-slate-500`}
                  placeholder="Tell us about your SAP governance needs..."
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs font-medium">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-red-600 rounded-xl overflow-hidden transition-all hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-red-600/30"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}


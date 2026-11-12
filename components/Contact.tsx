"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { EMAIL, PHONE_DISPLAY, WHATSAPP_LINK } from "@/lib/constants";
import { usePrefs } from "@/components/Preferences";

interface ContactFormValues {
  name: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const { t } = usePrefs();
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormValues>();

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    const subject = encodeURIComponent(`Nouveau projet de ${data.name}`);
    const body = encodeURIComponent(`Nom: ${data.name}\nTéléphone: ${data.phone}\n\nMessage:\n${data.message}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section-padding bg-white dark:bg-zala-blue transition-colors duration-300">
      <div className="section-container grid gap-14 lg:grid-cols-2 lg:items-start">
        <div>
          <span className="section-eyebrow">{t.contact.eyebrow}</span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-zala-blue dark:text-white sm:text-4xl">
            {t.contact.title}
          </h2>
          <p className="mt-4 max-w-md font-body text-zala-blue/70 dark:text-white/70">
            {t.contact.subtitle}
          </p>

          <div className="mt-8 space-y-4">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl border border-zala-blue/10 dark:border-white/10 bg-zala-cream dark:bg-white/5 p-4 transition-colors hover:border-zala-orange/50">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-zala-orange/10 text-zala-orange"><MessageCircle size={20} /></span>
              <div>
                <p className="font-mono text-xs text-zala-blue/50 dark:text-white/50">{t.contact.whatsapp}</p>
                <p className="font-body text-sm font-semibold text-zala-blue dark:text-white">{PHONE_DISPLAY}</p>
              </div>
            </a>
            <a href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`} className="flex items-center gap-3 rounded-2xl border border-zala-blue/10 dark:border-white/10 bg-zala-cream dark:bg-white/5 p-4 transition-colors hover:border-zala-orange/50">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-zala-blue/5 dark:bg-white/5 text-zala-blue dark:text-white"><Phone size={20} /></span>
              <div>
                <p className="font-mono text-xs text-zala-blue/50 dark:text-white/50">{t.contact.phone}</p>
                <p className="font-body text-sm font-semibold text-zala-blue dark:text-white">{PHONE_DISPLAY}</p>
              </div>
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 rounded-2xl border border-zala-blue/10 dark:border-white/10 bg-zala-cream dark:bg-white/5 p-4 transition-colors hover:border-zala-orange/50">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-zala-blue/5 dark:bg-white/5 text-zala-blue dark:text-white"><Mail size={20} /></span>
              <div>
                <p className="font-mono text-xs text-zala-blue/50 dark:text-white/50">{t.contact.email}</p>
                <p className="font-body text-sm font-semibold text-zala-blue dark:text-white">{EMAIL}</p>
              </div>
            </a>
          </div>
        </div>

        <motion.form initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} onSubmit={handleSubmit(onSubmit)} className="rounded-2xl border border-zala-blue/10 dark:border-white/10 bg-zala-cream dark:bg-white/[0.02] p-8 shadow-sm dark:shadow-glass" noValidate>
          <div>
            <label className="font-mono text-xs text-zala-blue/70 dark:text-white/70">{t.contact.nameLabel}</label>
            <input type="text" placeholder={t.contact.namePlaceholder} className="mt-2 w-full rounded-lg border border-zala-blue/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3 font-body text-sm text-zala-blue dark:text-white placeholder:text-zala-blue/30 dark:placeholder:text-white/30 focus:border-zala-orange focus:outline-none" {...register("name", { required: t.contact.nameError })} />
            {errors.name && <p className="mt-1 font-body text-xs text-red-500">{errors.name.message}</p>}
          </div>
          <div className="mt-5">
            <label className="font-mono text-xs text-zala-blue/70 dark:text-white/70">{t.contact.phoneLabel}</label>
            <input type="tel" placeholder={t.contact.phonePlaceholder} className="mt-2 w-full rounded-lg border border-zala-blue/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3 font-body text-sm text-zala-blue dark:text-white placeholder:text-zala-blue/30 dark:placeholder:text-white/30 focus:border-zala-orange focus:outline-none" {...register("phone", { required: t.contact.phoneError })} />
            {errors.phone && <p className="mt-1 font-body text-xs text-red-500">{errors.phone.message}</p>}
          </div>
          <div className="mt-5">
            <label className="font-mono text-xs text-zala-blue/70 dark:text-white/70">{t.contact.messageLabel}</label>
            <textarea rows={4} placeholder={t.contact.messagePlaceholder} className="mt-2 w-full resize-none rounded-lg border border-zala-blue/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3 font-body text-sm text-zala-blue dark:text-white placeholder:text-zala-blue/30 dark:placeholder:text-white/30 focus:border-zala-orange focus:outline-none" {...register("message", { required: t.contact.messageError })} />
            {errors.message && <p className="mt-1 font-body text-xs text-red-500">{errors.message.message}</p>}
          </div>
          <button type="submit" disabled={isSubmitting} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-zala-orange px-6 py-3.5 font-body font-semibold text-white shadow-glow transition-transform hover:scale-[1.02] disabled:opacity-60">
            {submitted ? <><CheckCircle2 size={18} /> {t.contact.success}</> : <><Send size={18} /> {isSubmitting ? t.contact.submitting : t.contact.submit}</>}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
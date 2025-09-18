import { useRef, useState, type FormEvent } from "react";
import type { EmailData } from "../types/EmailData";
import { motion } from "motion/react";

export default function EmailForm() {
  const [emailData, setEmailData] = useState<EmailData | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const isFormValid = emailData?.subject && emailData?.body ? true : false;
  const subjectInputRef = useRef<HTMLInputElement | null>(null);
  const bodyTextAreaRef = useRef<HTMLTextAreaElement | null>(null);
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(event: FormEvent) => event.preventDefault()}
    >
      <input
        ref={subjectInputRef}
        className="p-2 placeholder:text-text-colors rounded-[4px] outline outline-text-colors "
        type="text"
        placeholder="Assunto"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setEmailData({
            ...emailData,
            subject: event.target?.value,
          })
        }
      />
      <textarea
        ref={bodyTextAreaRef}
        className="p-3 h-30 placeholder:text-text-colors rounded-[4px] outline outline-text-colors "
        placeholder="Escreva sua mensagem aqui"
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
          setEmailData({ ...emailData, body: event.target?.value });
        }}
      />
      {isSubmitted && !isFormValid && (
        <p className="text-red-600">Preencha todos os campos para enviar</p>
      )}
      <div>
        <small className="text-text-colors">
          Ao clicar em "Enviar", você será redirecionado para o seu cliente de
          e-mail padrão.
        </small>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-primary-color font-bold text-white p-3 rounded transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => {
          if (!emailData?.subject || !emailData?.body) {
            setIsSubmitted(true);
            if (!emailData?.body) {
              bodyTextAreaRef.current?.focus();
              window.navigator.vibrate(200);
            }
            if (!emailData?.subject) {
              window.navigator.vibrate(200);
              subjectInputRef.current?.focus();
            }
            return;
          }
          window.alert("Redirecionando para o seu cliente de e-mail...");
          window.open(
            `mailto:contatoliferio@gmail.com?subject=${emailData?.subject}&body=${emailData?.body}`,
            "_blank",
            "noopener noreferrer"
          );
        }}
      >
        Enviar
      </motion.button>
    </form>
  );
}

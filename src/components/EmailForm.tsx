import { useState, type FormEvent } from "react";
import type { EmailData } from "../types/EmailData";
import Link from "./Link";
import { AnimatePresence } from "motion/react";

export default function EmailForm() {
  const [emailData, setEmailData] = useState<EmailData | null>(null);

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(event: FormEvent) => event.preventDefault()}
    >
      <input
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
        className="p-3 h-30 placeholder:text-text-colors rounded-[4px] outline outline-text-colors "
        placeholder="Escreva sua mensagem aqui"
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
          setEmailData({ ...emailData, body: event.target?.value });
        }}
      />
      <AnimatePresence>
        {emailData?.subject && emailData.body && (
          <Link
          targetBlank
            linkType="link"
            href={`mailto:contatohomecarerio@gmail.com?subject=${emailData?.subject}&body=${emailData?.body}`}
          >
            Enviar
          </Link>
        )}
      </AnimatePresence>
    </form>
  );
}

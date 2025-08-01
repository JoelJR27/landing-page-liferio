import { useRef, useState, type FormEvent } from "react";
import type { EmailData } from "../types/EmailData";

export default function EmailForm() {
  const [emailData, setEmailData] = useState<EmailData | null>(null);
  const subjectRef = useRef<HTMLInputElement | null>(null);
  const bodyRef = useRef<HTMLTextAreaElement | null>(null);

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(event: FormEvent) => event.preventDefault()}
    >
      <input
        ref={subjectRef}
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
        ref={bodyRef}
        className="p-3 h-30 placeholder:text-text-colors rounded-[4px] outline outline-text-colors "
        placeholder="Escreva sua mensagem aqui"
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
          setEmailData({ ...emailData, body: event.target?.value });
        }}
      />
      <button
        className="text-white text-[18px] font-semibold bg-secondary-color rounded-[4px] text-center p-4 cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed transition-all ease-in-out duration-300"
        disabled={emailData?.subject && emailData.body ? false : true}
      >
        <a
          href={`mailto:contatohomecarerio@gmail.com?subject=${emailData?.subject}&body=${emailData?.body}`}
        >
          Enviar
        </a>
      </button>
    </form>
  );
}

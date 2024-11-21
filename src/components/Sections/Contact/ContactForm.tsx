import {FC, memo, useCallback, useMemo, useState} from 'react';
import {useLanguage} from '../../../context/LanguageContext';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  const {translations} = useLanguage();
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);
  const [loading, setLoading] = useState(false); // Estado para indicar carga
  const [feedback, setFeedback] = useState<string | null>(null); // Estado para mostrar mensajes

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;

      const fieldData: Partial<FormData> = {[name]: value};

      setData({...data, ...fieldData});
    },
    [data],
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setLoading(true);
      setFeedback(null); // Reinicia el feedback

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();

        if (result.success) {
          setFeedback(translations['contact.contactForm.successMessage']); // Mensaje de éxito
          setData(defaultData); // Resetea el formulario
        } else {
          setFeedback(translations['contact.contactForm.errorMessage'] || `Error: ${result.message}`);
        }
      } catch (error) {
        console.error('Error al enviar el mensaje:', error);
        setFeedback(translations['contact.contactForm.errorMessage']);
      } finally {
        setLoading(false);
      }
    },
    [data, defaultData, translations],
  );

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-violet-800 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
      <input
        className={inputClasses}
        name="name"
        onChange={onChange}
        placeholder={translations['contact.contactForm.name']}
        required
        type="text"
        value={data.name}
      />
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        onChange={onChange}
        placeholder={translations['contact.contactForm.email']}
        required
        type="email"
        value={data.email}
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
        placeholder={translations['contact.contactForm.message']}
        required
        rows={6}
        value={data.message}
      />
      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-violet-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-violet-800 focus:ring-offset-2 focus:ring-offset-stone-800"
        type="submit"
        disabled={loading}>
        {loading
          ? translations['contact.contactForm.loading'] || 'Enviando...'
          : translations['contact.contactForm.button']}
      </button>
      {feedback && (
        <p className={`text-sm ${feedback.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>{feedback}</p>
      )}
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;

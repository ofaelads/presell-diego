export function WhatsAppSection() {
  return (
    <section className="py-1 px-3 sm:px-4">
      <div className="max-w-7xl mx-auto">
        <a
          href="https://api.whatsapp.com/send/?phone=556182830429"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:opacity-90"
        >
          <img
            src="/whatsapp-atendimento-banner.png"
            alt="Converse conosco via WHATSAPP - ESTAMOS ON-LINE"
            className="w-full h-auto object-cover shadow-2xl"
          />
        </a>
      </div>
    </section>
  )
}

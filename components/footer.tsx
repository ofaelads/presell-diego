import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-4 bg-black">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="space-y-4">
          {/* Informações Legais como botões lado a lado */}
          <div className="flex justify-center gap-2">
            <Link
              href="/termos-de-uso"
              className="px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white text-xs font-medium rounded-full border border-gray-700 hover:border-[#0FFF50] transition-all hover:shadow-[0_0_10px_rgba(15,255,80,0.3)]"
            >
              Termos de Uso
            </Link>
            <Link
              href="/politica-de-privacidade"
              className="px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white text-xs font-medium rounded-full border border-gray-700 hover:border-[#0FFF50] transition-all hover:shadow-[0_0_10px_rgba(15,255,80,0.3)]"
            >
              Política de Privacidade
            </Link>
          </div>

          {/* Contatos como botões lado a lado */}
          <div className="flex justify-center gap-2">
            <a
              href="https://wa.me/5561982830429"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white text-xs font-medium rounded-full border border-gray-700 hover:border-[#25D366] transition-all hover:shadow-[0_0_10px_rgba(37,211,102,0.3)]"
            >
              WhatsApp
            </a>
            <a
              href="https://instagram.com/galegogamaa"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white text-xs font-medium rounded-full border border-gray-700 hover:border-[#E4405F] transition-all hover:shadow-[0_0_10px_rgba(228,64,95,0.3)]"
            >
              Instagram
            </a>
          </div>

          <div className="pt-4 border-t border-gray-800 mt-4">
            <div className="max-w-4xl mx-auto space-y-2 text-gray-400 text-xs leading-relaxed">
              <p className="text-center text-xs font-thin leading-4 font-sans">
                Este site não é afiliado ao Facebook ou Meta. Não vendemos seus dados para terceiros e não fazemos spam.
                Atendimento de Segunda a Sexta das 09h às 18h.
              </p>

              <p className="text-center text-xs font-thin leading-4 font-sans">
                Os resultados divulgados não são garantia de sucesso. Seu desempenho depende de fatores individuais como
                dedicação, técnicas e habilidades aplicadas.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-gray-800 mt-6 text-center">
          <p className="text-gray-500 text-xs uppercase tracking-wider">
            Galego da Sorte © {new Date().getFullYear()} - Todos os direitos reservados
          </p>
          <p className="mt-2 text-gray-600 text-xs">
            Desenvolvido por{" "}
            <a
              href="https://www.instagram.com/topflowdigital.mkt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFA500] hover:text-[#FFB733] transition-colors hover:underline"
            >
              Topflow Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

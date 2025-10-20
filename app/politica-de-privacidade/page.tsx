import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PoliticaDePrivacidade() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/">
          <Button variant="outline" className="mb-8 bg-transparent">
            ← Voltar para o início
          </Button>
        </Link>

        <h1 className="text-4xl font-bold text-[#FFA500] mb-8 uppercase tracking-wide">Política de Privacidade</h1>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Introdução</h2>
            <p>
              A privacidade dos nossos usuários é de extrema importância para o Souza Ponta MS. Esta Política de
              Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais quando
              você utiliza nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Informações que Coletamos</h2>
            <p>Coletamos as seguintes informações quando você utiliza nossos serviços:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
              <li>Nome completo</li>
              <li>Número de telefone (WhatsApp)</li>
              <li>Endereço de e-mail</li>
              <li>Informações de pagamento (processadas por terceiros seguros)</li>
              <li>Dados de navegação e uso do site</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Como Usamos suas Informações</h2>
            <p>Utilizamos suas informações pessoais para:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
              <li>Processar suas compras de bilhetes de rifa</li>
              <li>Entrar em contato sobre sorteios e prêmios</li>
              <li>Enviar atualizações sobre novos sorteios e promoções</li>
              <li>Melhorar nossos serviços e experiência do usuário</li>
              <li>Cumprir obrigações legais e regulatórias</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Compartilhamento de Informações</h2>
            <p>
              Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins de marketing.
              Podemos compartilhar suas informações apenas nas seguintes situações:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
              <li>Com processadores de pagamento para completar transações</li>
              <li>Quando exigido por lei ou ordem judicial</li>
              <li>Para proteger nossos direitos legais e segurança</li>
              <li>Com seu consentimento explícito</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Segurança dos Dados</h2>
            <p>
              Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger suas informações
              pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Isso inclui criptografia de
              dados, acesso restrito e monitoramento regular de nossos sistemas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Cookies e Tecnologias Similares</h2>
            <p>
              Utilizamos cookies e tecnologias similares para melhorar sua experiência em nosso site, analisar o tráfego
              e personalizar conteúdo. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar a
              funcionalidade do site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Retenção de Dados</h2>
            <p>
              Mantemos suas informações pessoais pelo tempo necessário para cumprir os propósitos descritos nesta
              política, a menos que um período de retenção mais longo seja exigido ou permitido por lei.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Seus Direitos</h2>
            <p>Você tem o direito de:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
              <li>Acessar suas informações pessoais que mantemos</li>
              <li>Solicitar correção de informações incorretas</li>
              <li>Solicitar exclusão de suas informações (sujeito a obrigações legais)</li>
              <li>Opor-se ao processamento de suas informações</li>
              <li>Retirar seu consentimento a qualquer momento</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Menores de Idade</h2>
            <p>
              Nossos serviços não são direcionados a menores de 18 anos. Não coletamos intencionalmente informações
              pessoais de menores. Se tomarmos conhecimento de que coletamos informações de um menor, tomaremos medidas
              para excluir essas informações.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">10. Alterações nesta Política</h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre quaisquer
              alterações significativas publicando a nova política em nosso site e atualizando a data de "última
              atualização".
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">11. Contato</h2>
            <p>
              Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos suas informações pessoais,
              entre em contato conosco através dos canais disponíveis no site.
            </p>
          </section>

          <p className="text-sm text-gray-500 mt-8">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>
        </div>

        <div className="mt-12">
          <Link href="/">
            <Button className="bg-[#0FFF50] text-black hover:bg-[#0FFF50]/90 font-bold">Voltar para o início</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}

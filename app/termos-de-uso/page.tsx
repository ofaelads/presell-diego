import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TermosDeUso() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/">
          <Button variant="outline" className="mb-8 bg-transparent">
            ← Voltar para o início
          </Button>
        </Link>

        <h1 className="text-4xl font-bold text-[#FFA500] mb-8 uppercase tracking-wide">Termos de Uso</h1>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e utilizar o site Souza Ponta MS, você concorda em cumprir e estar vinculado aos seguintes
              termos e condições de uso. Se você não concordar com qualquer parte destes termos, não deverá utilizar
              nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Descrição do Serviço</h2>
            <p>
              O Souza Ponta MS é uma plataforma de rifas online que oferece aos usuários a oportunidade de participar de
              sorteios de prêmios diversos, incluindo motos, dinheiro e outros itens de valor. Todos os sorteios são
              realizados de forma transparente e seguem as regulamentações aplicáveis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Elegibilidade</h2>
            <p>
              Para participar das rifas, você deve ter pelo menos 18 anos de idade e estar em plena capacidade civil. Ao
              participar, você declara que atende a esses requisitos e que todas as informações fornecidas são
              verdadeiras e precisas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Compra de Bilhetes</h2>
            <p>
              Os bilhetes de rifa podem ser adquiridos através do nosso site ou canais oficiais de comunicação. O
              pagamento deve ser realizado através dos métodos disponibilizados. Após a confirmação do pagamento, o
              bilhete será registrado em nome do comprador.
            </p>
            <p className="mt-2">
              <strong>Importante:</strong> Não há reembolso após a compra do bilhete, exceto em casos de cancelamento do
              sorteio pela organização.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Realização dos Sorteios</h2>
            <p>
              Os sorteios serão realizados nas datas e horários previamente divulgados. O resultado será publicado em
              nossos canais oficiais e o ganhador será contatado através dos dados fornecidos no momento da compra.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Entrega dos Prêmios</h2>
            <p>
              O ganhador terá um prazo de 30 dias para reivindicar o prêmio após o anúncio do resultado. Caso o prêmio
              não seja reivindicado dentro deste prazo, a organização se reserva o direito de realizar um novo sorteio
              ou destinar o prêmio conforme sua política interna.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Responsabilidades do Usuário</h2>
            <p>
              O usuário é responsável por manter suas informações de contato atualizadas e por verificar regularmente os
              resultados dos sorteios. A organização não se responsabiliza por prêmios não reclamados devido a
              informações incorretas ou desatualizadas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Limitação de Responsabilidade</h2>
            <p>
              O Souza Ponta MS não se responsabiliza por quaisquer danos diretos, indiretos, incidentais ou
              consequenciais decorrentes do uso ou da impossibilidade de uso de nossos serviços, incluindo, mas não se
              limitando a, perda de lucros, dados ou outras perdas intangíveis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Modificações dos Termos</h2>
            <p>
              Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor
              imediatamente após sua publicação no site. É responsabilidade do usuário revisar periodicamente estes
              termos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">10. Contato</h2>
            <p>
              Para dúvidas ou questões relacionadas a estes termos, entre em contato conosco através do WhatsApp ou
              Instagram disponíveis no site.
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

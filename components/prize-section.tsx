import Link from "next/link"

export function PrizeSection() {
  return (
    <section className="py-1 px-3 sm:px-4">
      <div className="max-w-7xl mx-auto">
        <Link
          href="https://galegodasortebsb.com/campanha/saveiro-1999-2-0-tsi-2"
          target="_blank"
          className="block hover:opacity-90 transition-all duration-300 hover:scale-[1.01]"
        >
          <img
            src="/saveiro-premio.png"
            alt="Saveiro 1999 2.0 TSI - Comprar Agora"
            className="w-full h-auto rounded-lg shadow-2xl"
          />
        </Link>
      </div>
    </section>
  )
}

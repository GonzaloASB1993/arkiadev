import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-brand-cyan-500 to-brand-blue-500 bg-clip-text text-transparent mb-4">
              ARKIA
            </h3>
            <p className="text-gray-400 text-sm">
              Más Clientes para tu Negocio con Presencia Digital
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/servicios#pagina-web" className="hover:text-brand-cyan-400 transition">
                  Página Web Profesional
                </Link>
              </li>
              <li>
                <Link href="/servicios#tienda-online" className="hover:text-brand-cyan-400 transition">
                  Tienda Online
                </Link>
              </li>
              <li>
                <Link href="/servicios#sistema" className="hover:text-brand-cyan-400 transition">
                  Sistema Personalizado
                </Link>
              </li>
              <li>
                <Link href="/servicios#app" className="hover:text-brand-cyan-400 transition">
                  App Móvil
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/nosotros" className="hover:text-brand-cyan-400 transition">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/casos-exito" className="hover:text-brand-cyan-400 transition">
                  Casos de Éxito
                </Link>
              </li>
              <li>
                <Link href="/proceso" className="hover:text-brand-cyan-400 transition">
                  Nuestro Proceso
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-brand-cyan-400 transition">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: contacto@arkia.cl</li>
              <li>WhatsApp: +56 9 XXXX XXXX</li>
              <li>Chile</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} ARKIA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

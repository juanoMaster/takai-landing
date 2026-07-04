import type { Metadata } from "next"
import Nav from "../components/Nav"
import Footer from "../components/Footer"

export const metadata: Metadata = {
  title: "Términos de Servicio — Takai",
  description:
    "Condiciones de uso del sistema de reservas Takai para propietarios de cabañas y glampings, turistas y partners del programa de afiliados.",
  alternates: { canonical: "https://www.takai.cl/terminos" },
}

export default function TerminosPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-32 md:px-8 md:pt-40">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-cobre">Legal</p>
        <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-tinta sm:text-5xl">
          Términos de Servicio
        </h1>
        <p className="mt-4 font-mono text-[12px] tracking-wide text-humo">Última actualización: julio de 2026</p>

        <article className="legal mt-6">
          <h2>1. Descripción del servicio y prestador</h2>
          <p>
            Takai proporciona una plataforma tecnológica de gestión y generación de reservas para propietarios de
            cabañas, glampings y alojamientos independientes. Nacida en el sur de Chile, la plataforma opera en Chile y
            Ecuador, con expansión progresiva a otros países. El servicio es operado por{" "}
            <strong>Juan Luis Núñez Valenzuela</strong>, RUT 16.128.225-1, Chile.
          </p>

          <h2>2. Modelo de comisión</h2>
          <p>
            Takai cobra una comisión del 10% exclusivamente sobre las reservas generadas por la plataforma: a través
            del directorio turístico propio, el agente de WhatsApp o el programa de partners. Las reservas gestionadas
            directamente por el propietario no están sujetas a ninguna comisión. La mensualidad de $10.000 CLP solo se
            cobra los meses en que Takai no genera ninguna reserva; si Takai genera reservas ese mes, la mensualidad no
            se cobra y solo se aplica el 10% correspondiente.
          </p>

          <h2>3. Pagos entre turista y propietario</h2>
          <p>
            El anticipo y el saldo de cada reserva se pagan directamente del turista al propietario, por transferencia
            bancaria o mediante pago con tarjeta; en ambos casos los fondos se acreditan directamente en la cuenta del
            propietario. Takai no recauda ni custodia fondos de reservas; la comisión de Takai se liquida directamente
            con el propietario según lo acordado.
          </p>

          <h2>4. Oferta de lanzamiento</h2>
          <p>
            Durante el período promocional, la cuota de incorporación ($80.000 CLP, ofrecida a $20.000 CLP) forma parte
            de la oferta de lanzamiento. La cuota de incorporación corresponde al acceso al sistema, no al precio de la
            página. Takai se reserva el derecho de modificar estas condiciones con 30 días de aviso.
          </p>

          <h2>5. Programa de partners (afiliados)</h2>
          <p>
            Los partners registrados reciben un link personalizado con seguimiento mediante código único. La comisión
            del partner se calcula sobre reservas confirmadas y pagadas atribuidas a su link, se paga con cargo a la
            comisión de Takai (sin costo adicional para el propietario ni para el turista) y se liquida mensualmente
            una vez verificadas las reservas. El porcentaje aplicable se comunica por escrito al partner al momento de
            su registro. Takai se reserva el derecho de revocar la condición de partner ante uso indebido del programa,
            incluyendo autocompras, tráfico fraudulento o publicidad engañosa.
          </p>

          <h2>6. Responsabilidad sobre el alojamiento</h2>
          <p>
            El propietario es responsable de la veracidad de la información publicada (precios, fotografías,
            disponibilidad, reglas) y de la prestación del servicio de hospedaje. Takai provee la tecnología y los
            canales de demanda, y no es parte del contrato de hospedaje entre turista y propietario.
          </p>

          <h2>7. Pausa y terminación</h2>
          <p>
            El propietario puede pausar el servicio en temporada baja sin costo. Cualquiera de las partes puede
            terminar el acuerdo con 15 días de aviso, sin multas ni penalizaciones. No existe permanencia mínima.
          </p>

          <h2>8. Protección de datos</h2>
          <p>
            El tratamiento de datos personales se rige por nuestra{" "}
            <a href="/privacidad">Política de Privacidad</a>, conforme a la Ley N° 21.719 de Protección de Datos
            Personales de Chile.
          </p>

          <h2>9. Ley aplicable</h2>
          <p>
            Estos términos se rigen por las leyes de la República de Chile. Para alojamientos y partners ubicados fuera
            de Chile, se aplicarán además las normas locales imperativas que correspondan.
          </p>

          <h2>10. Contacto</h2>
          <p>
            <a href="mailto:contacto@takai.cl">contacto@takai.cl</a> · WhatsApp +56 9 5523 0900
          </p>
        </article>
      </main>
      <Footer />
    </div>
  )
}

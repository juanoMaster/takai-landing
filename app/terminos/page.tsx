import type { Metadata } from "next"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import {
  ACTIVATION_PRICES,
  ANNUAL_PRICES,
  LOW_SEASON_MESSAGE,
  type CommercialPriceRow,
} from "@/lib/commercial"

const DESCRIPTION =
  "Condiciones de contratación y uso de Takai, el sistema de reservas para dueños de cabañas en Chile."

export const metadata: Metadata = {
  title: "Términos de Servicio — Takai",
  description: DESCRIPTION,
  alternates: { canonical: "https://www.takai.cl/terminos" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Términos de Servicio — Takai",
    description: DESCRIPTION,
    url: "https://www.takai.cl/terminos",
    siteName: "Takai",
    locale: "es_CL",
    type: "website",
    images: [{ url: "/og-takai.jpg", width: 1200, height: 630, alt: "Términos de Servicio de Takai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Términos de Servicio — Takai",
    description: DESCRIPTION,
    images: ["/og-takai.jpg"],
  },
}

function PriceTable({ rows, label }: { rows: readonly CommercialPriceRow[]; label: string }) {
  return (
    <div className="tk-legal-price-wrap">
      <table className="tk-legal-price-table" aria-label={label}>
        <thead>
          <tr>
            <th scope="col">Cabañas</th>
            <th scope="col">Precio</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([cabanas, precio]) => (
            <tr key={cabanas}>
              <th scope="row">{cabanas}</th>
              <td>{precio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function TerminosPage() {
  return (
    <div className="tk-page">
      <Nav />
      <main id="contenido" tabIndex={-1} className="tk-editorial-main">
        <p className="tk-editorial-eyebrow">Legal</p>
        <h1 className="tk-editorial-title">
          Términos de Servicio
        </h1>
        <p className="tk-editorial-date tk-muted">
          Última actualización: 11 de agosto de 2026
        </p>

        <article className="tk-legal">
          <p>
            Estos términos regulan la contratación y el uso de Takai por parte de dueños de cabañas y otros
            alojamientos independientes. Al contratar o utilizar el servicio, el propietario declara haber leído y
            aceptado estas condiciones.
          </p>

          <h2>1. Prestador y descripción del servicio</h2>
          <p>
            Takai es un sistema de reservas operado por <strong>Juan Luis Núñez Valenzuela</strong>, RUT 16.128.225-1,
            con domicilio en Chile. El propietario recibe una página de reservas para su alojamiento, un panel de
            administración y un calendario que bloquea las fechas registradas para ayudar a evitar dobles reservas.
          </p>
          <p>
            Desde el panel, el propietario puede cambiar precios, subir fotografías, bloquear fechas y registrar las
            reservas que reciba por teléfono u otros canales. También puede configurar precios por temporada. Takai
            provee la herramienta tecnológica, pero no presta el servicio de hospedaje ni es parte del contrato entre
            el propietario y su huésped.
          </p>

          <h2>2. Activación — pago único al incorporarse</h2>
          <p>La activación se paga una sola vez al incorporarse. Sus precios vigentes son:</p>
          <PriceTable rows={ACTIVATION_PRICES} label="Precios de activación de Takai" />

          <h2>3. Anualidad — se cobra SOLO entre diciembre y marzo</h2>
          <p>La anualidad mantiene activo el sistema y se cobra solo entre diciembre y marzo.</p>
          <PriceTable rows={ANNUAL_PRICES} label="Precios de anualidad de Takai" />
          <div className="tk-legal-highlight">
            <p>
              {LOW_SEASON_MESSAGE}
            </p>
          </div>
          <p>Todos los montos de las tablas están expresados en pesos chilenos (CLP).</p>

          <h2>4. Cero comisión y pagos directos</h2>
          <p>
            <strong>Takai no cobra comisión ni aplica cargos por reserva.</strong> El monto que el huésped paga por el
            alojamiento pertenece íntegramente al propietario.
          </p>
          <p>
            El pago se realiza directamente del huésped al propietario por transferencia bancaria. Mercado Pago es
            opcional para el propietario que ya disponga de ese medio de pago. Cuando se utiliza, su procesamiento se
            rige por las condiciones del proveedor correspondiente. Takai no recauda ni custodia el dinero de las
            reservas y no almacena datos completos de tarjetas.
          </p>

          <h2>5. Solicitud y confirmación de reservas</h2>
          <p>
            El huésped ingresa su solicitud en la página del alojamiento y el sistema registra la reserva y bloquea
            las fechas correspondientes. <strong>El propietario siempre revisa y confirma o rechaza la reserva.</strong>
            Takai no confirma reservas en su nombre.
          </p>
          <p>
            El propietario debe mantener actualizados la disponibilidad, los precios, las condiciones de pago y las
            reglas de su alojamiento. También es responsable de gestionar directamente los cambios, cancelaciones,
            devoluciones y demás acuerdos con sus huéspedes.
          </p>

          <h2>6. Responsabilidad del propietario</h2>
          <p>
            El propietario es responsable de la veracidad y legalidad de la información que publica, de proteger sus
            credenciales de acceso y de prestar el servicio de hospedaje ofrecido. También debe cumplir las
            obligaciones legales, tributarias y de protección al consumidor que correspondan a su actividad.
          </p>

          <h2>7. Disponibilidad del sistema</h2>
          <p>
            Takai trabaja para mantener el sistema disponible y seguro. Sin embargo, puede haber interrupciones por
            mantenimiento, fallas de proveedores de infraestructura, problemas de conectividad o causas fuera de su
            control. Cuando sea posible, las mantenciones programadas se comunicarán con anticipación.
          </p>

          <h2>8. Uso permitido y término del servicio</h2>
          <p>
            El propietario no debe utilizar Takai para fines ilícitos, engañosos o que afecten la seguridad del
            sistema o los derechos de terceros. Takai puede suspender el acceso ante un incumplimiento grave, uso
            fraudulento o riesgo para la plataforma, informando el motivo cuando corresponda. El propietario puede
            solicitar el término de su servicio a través de los canales de contacto indicados más abajo.
          </p>

          <h2>9. Protección de datos</h2>
          <p>
            El tratamiento de datos personales se describe en nuestra <a href="/privacidad">Política de Privacidad</a>.
            A la fecha de estos términos rige en Chile la Ley N° 19.628 sobre Protección de la Vida Privada. Las
            modificaciones introducidas por la Ley N° 21.719 entran en vigor el 1 de diciembre de 2026.
          </p>

          <h2>10. Cambios a estos términos</h2>
          <p>
            Takai puede actualizar estas condiciones para reflejar cambios del servicio o de la normativa aplicable.
            La versión vigente se publicará en esta página con su fecha de actualización. Los cambios sustanciales se
            comunicarán por los canales de contacto disponibles antes de que resulten aplicables.
          </p>

          <h2>11. Ley aplicable</h2>
          <p>
            Estos términos se rigen por las leyes de la República de Chile, sin perjuicio de los derechos irrenunciables
            que la normativa aplicable reconozca al propietario.
          </p>

          <h2>12. Contacto</h2>
          <p>
            <a href="mailto:contacto@takai.cl">contacto@takai.cl</a> · WhatsApp +56 9 5523 0900
          </p>
        </article>
      </main>
      <Footer />
    </div>
  )
}

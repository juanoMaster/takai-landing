import type { Metadata } from "next"
import Nav from "../components/Nav"
import Footer from "../components/Footer"

const DESCRIPTION =
  "Cómo Takai trata los datos personales de propietarios, huéspedes y personas que contactan el servicio."

export const metadata: Metadata = {
  title: "Política de Privacidad — Takai",
  description: DESCRIPTION,
  alternates: { canonical: "https://www.takai.cl/privacidad" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Política de Privacidad — Takai",
    description: DESCRIPTION,
    url: "https://www.takai.cl/privacidad",
    siteName: "Takai",
    locale: "es_CL",
    type: "website",
    images: [{ url: "/og-takai.jpg", width: 1200, height: 630, alt: "Política de Privacidad de Takai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Política de Privacidad — Takai",
    description: DESCRIPTION,
    images: ["/og-takai.jpg"],
  },
}

export default function PrivacidadPage() {
  return (
    <div className="tk-page">
      <Nav />
      <main id="contenido" tabIndex={-1} className="tk-editorial-main">
        <p className="tk-editorial-eyebrow">Legal</p>
        <h1 className="tk-editorial-title">
          Política de Privacidad
        </h1>
        <p className="tk-editorial-date tk-muted">
          Versión 3.0 · Última actualización: 11 de agosto de 2026
        </p>

        <article className="tk-legal">
          <p>
            Esta política explica cómo <strong>Takai</strong> trata los datos personales de dueños de alojamientos,
            huéspedes y personas que se comunican con nosotros a través de takai.cl, reservas.takai.cl y nuestros
            canales de atención.
          </p>
          <div className="tk-legal-notice">
            <p>
              A la fecha de esta política, el tratamiento de datos personales en Chile se rige por la{" "}
              <strong>Ley N° 19.628 sobre Protección de la Vida Privada</strong>. La Ley N° 21.719, que modifica ese
              régimen, entra en vigor el <strong>1 de diciembre de 2026</strong>. Takai revisará y adaptará esta política
              y sus procedimientos cuando corresponda. Esta referencia normativa es informativa y no constituye
              asesoría legal.
            </p>
          </div>

          <h2>1. Responsable del tratamiento</h2>
          <p>
            El responsable del tratamiento es <strong>Juan Luis Núñez Valenzuela</strong>, RUT 16.128.225-1, operador de
            Takai, con domicilio en Chile. Para consultas o solicitudes sobre privacidad, puedes escribir a{" "}
            <a href="mailto:contacto@takai.cl">contacto@takai.cl</a> o al WhatsApp +56 9 5523 0900.
          </p>

          <h2>2. Datos que tratamos</h2>
          <h3>a) Dueños de alojamientos</h3>
          <ul>
            <li>Nombre, correo electrónico, número de WhatsApp y credenciales de acceso.</li>
            <li>
              Nombre y ubicación del alojamiento, fotografías, descripciones, precios, reglas, unidades y
              disponibilidad.
            </li>
            <li>
              Configuraciones del panel, bloqueos de calendario y reservas ingresadas directamente por el propietario.
            </li>
            <li>Datos de cobro que el propietario decida configurar para recibir pagos directamente.</li>
          </ul>

          <h3>b) Huéspedes que solicitan una reserva</h3>
          <ul>
            <li>Nombre, correo electrónico y número de teléfono o WhatsApp.</li>
            <li>
              Fechas de estadía, cantidad de personas, alojamiento elegido, monto, estado de la solicitud y estado del
              anticipo.
            </li>
            <li>
              Información o comprobantes que el huésped entregue para que el propietario pueda revisar el pago y
              confirmar la reserva.
            </li>
          </ul>

          <h3>c) Personas que contactan a Takai</h3>
          <ul>
            <li>Nombre, datos de contacto, nombre del alojamiento, cantidad de cabañas y contenido de la consulta.</li>
          </ul>

          <h3>d) Datos técnicos</h3>
          <ul>
            <li>
              Dirección IP, fecha y hora de acceso, tipo de dispositivo o navegador y registros técnicos necesarios
              para seguridad, diagnóstico y funcionamiento del servicio.
            </li>
            <li>Datos de uso agregados generados por Vercel Analytics para entender el rendimiento del sitio.</li>
          </ul>

          <p>
            <strong>Takai no recauda ni custodia el dinero de las reservas y no almacena datos completos de tarjetas.</strong>{" "}
            El huésped paga directamente al propietario por transferencia bancaria. Mercado Pago es opcional cuando el
            propietario ya dispone de ese medio y, en ese caso, el proveedor procesa el pago bajo sus propias
            condiciones y política de privacidad.
          </p>

          <h2>3. Para qué usamos los datos</h2>
          <ul>
            <li>Responder consultas y gestionar la incorporación de un propietario a Takai.</li>
            <li>Crear y mantener la página de reservas, la cuenta y el panel del propietario.</li>
            <li>
              Recibir solicitudes de reserva, bloquear las fechas correspondientes, avisar al propietario y permitirle
              confirmar o rechazar.
            </li>
            <li>Mostrar al huésped las instrucciones necesarias para pagar directamente al propietario.</li>
            <li>Prestar soporte y enviar comunicaciones operativas relacionadas con la cuenta o una reserva.</li>
            <li>Prevenir usos indebidos, mantener la seguridad y diagnosticar fallas.</li>
            <li>Medir de forma agregada el uso y rendimiento del sitio para mejorarlo.</li>
          </ul>
          <p>
            Las comunicaciones comerciales se envían solo cuando existe autorización para ello y su recepción puede
            revocarse en cualquier momento.
          </p>

          <h2>4. Autorización y tratamiento conforme a la ley vigente</h2>
          <p>
            Tratamos datos personales cuando contamos con la autorización del titular o con otra habilitación
            reconocida por la normativa aplicable. La información solicitada se limita a la necesaria para responder
            una consulta, prestar el servicio contratado, gestionar una reserva, cumplir obligaciones legales y
            proteger el funcionamiento de la plataforma.
          </p>

          <h2>5. Confirmación de reservas</h2>
          <p>
            Takai registra la solicitud del huésped y bloquea las fechas indicadas, pero{" "}
            <strong>la decisión de confirmar o rechazar una reserva corresponde siempre al propietario</strong>. No
            realizamos perfilamiento ni tomamos decisiones automatizadas con efectos jurídicos o similares sobre
            propietarios o huéspedes.
          </p>

          <h2>6. Con quién compartimos los datos</h2>
          <ul>
            <li>
              Los datos de una solicitud de reserva se comunican al <strong>propietario del alojamiento elegido</strong>{" "}
              para que pueda revisarla, contactar al huésped y prestar el hospedaje.
            </li>
            <li>
              Utilizamos proveedores de infraestructura y operación que tratan datos solo para prestar sus servicios:
              Supabase para base de datos, Vercel para hosting y analítica, Resend para correo transaccional y
              Meta/WhatsApp cuando una persona elige comunicarse por ese canal o recibe un aviso operativo.
            </li>
            <li>
              Mercado Pago recibe los datos necesarios únicamente cuando el propietario habilita ese medio opcional y
              el huésped decide utilizarlo.
            </li>
            <li>También podremos comunicar información cuando una obligación legal o una autoridad competente lo exija.</li>
          </ul>
          <p>
            <strong>No vendemos datos personales ni los cedemos a terceros con fines publicitarios.</strong>
          </p>

          <h2>7. Tratamiento fuera de Chile</h2>
          <p>
            Algunos proveedores tecnológicos pueden procesar o almacenar información en servidores ubicados fuera de
            Chile. Cuando esto ocurre, seleccionamos proveedores reconocidos y aplicamos medidas contractuales,
            organizativas y técnicas razonables de acuerdo con la normativa vigente.
          </p>

          <h2>8. Plazos de conservación</h2>
          <p>
            Conservamos los datos solo durante el tiempo necesario para las finalidades informadas, mientras exista una
            relación activa con el propietario o durante los plazos exigidos para atender responsabilidades legales o
            contractuales. Después, la información se elimina o anonimiza de forma razonable, salvo que una norma exija
            conservarla por más tiempo.
          </p>

          <h2>9. Seguridad</h2>
          <p>
            Aplicamos medidas técnicas y organizativas destinadas a proteger los datos frente a accesos no autorizados,
            pérdida, alteración o divulgación. Entre ellas se incluyen conexiones cifradas y controles de acceso. Ningún
            sistema es infalible; si detectamos un incidente, lo evaluaremos y actuaremos conforme a la normativa
            aplicable.
          </p>

          <h2>10. Tus derechos bajo la Ley N° 19.628</h2>
          <p>
            Puedes solicitar información sobre los datos personales que tratamos, su procedencia, destinatarios y
            finalidad. También puedes pedir la rectificación de datos erróneos, inexactos, equívocos o incompletos, y
            la eliminación o el bloqueo cuando se cumplan las condiciones previstas por la ley. Si el tratamiento se
            basa en tu autorización, puedes revocarla para el futuro cuando corresponda.
          </p>
          <p>
            Para ejercer estos derechos, escribe a <a href="mailto:contacto@takai.cl">contacto@takai.cl</a> e indica tu
            nombre, la solicitud que deseas realizar y la información necesaria para verificar tu identidad. La
            solicitud será respondida dentro de los plazos y condiciones establecidos por la normativa vigente.
          </p>

          <h2>11. Entrada en vigor de la Ley N° 21.719</h2>
          <p>
            La Ley N° 21.719 entra en vigor el 1 de diciembre de 2026 y amplía el régimen chileno de protección de datos
            personales. Antes de esa fecha revisaremos los procedimientos para incorporar los derechos, deberes y
            canales de reclamación que resulten aplicables bajo el nuevo marco.
          </p>

          <h2 id="cookies">12. Cookies y analítica</h2>
          <ul>
            <li>El sitio puede utilizar almacenamiento técnico estrictamente necesario para su funcionamiento.</li>
            <li>Usamos Vercel Analytics para obtener métricas agregadas de uso y rendimiento.</li>
            <li>No utilizamos Google Analytics, Meta Pixel ni herramientas de retargeting publicitario.</li>
          </ul>

          <h2>13. Menores de edad</h2>
          <p>
            Takai está dirigido a personas mayores de 18 años. No recopilamos deliberadamente datos de menores. Si
            detectamos que recibimos datos de un menor sin la autorización correspondiente, adoptaremos medidas para
            eliminarlos.
          </p>

          <h2>14. Cambios a esta política</h2>
          <p>
            Podemos actualizar esta política para reflejar cambios normativos, operativos o de seguridad. La versión
            vigente se publicará en esta página con su fecha de actualización y los cambios sustanciales se comunicarán
            por los canales disponibles cuando corresponda.
          </p>

          <h2>15. Contacto</h2>
          <p>
            Dudas o solicitudes sobre privacidad: <a href="mailto:contacto@takai.cl">contacto@takai.cl</a> · WhatsApp
            +56 9 5523 0900.
          </p>
        </article>
      </main>
      <Footer />
    </div>
  )
}

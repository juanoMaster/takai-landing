import type { Metadata } from "next"
import Nav from "../components/Nav"
import Footer from "../components/Footer"

export const metadata: Metadata = {
  title: "Política de Privacidad — Takai | Ley 21.719 de Protección de Datos Personales",
  description:
    "Cómo Takai trata los datos personales de propietarios, turistas y partners, conforme a la Ley N° 21.719 de Protección de Datos Personales de Chile.",
  alternates: { canonical: "https://www.takai.cl/privacidad" },
  robots: { index: true, follow: true },
}

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-32 md:px-8 md:pt-40">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-cobre">Legal</p>
        <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-tinta sm:text-5xl">
          Política de Privacidad
        </h1>
        <p className="mt-4 font-mono text-[12px] tracking-wide text-humo">
          Versión 2.0 · Última actualización: julio de 2026 · Conforme a la Ley N° 21.719
        </p>

        <article className="legal mt-6">
          <p>
            Esta Política de Privacidad describe cómo <strong>Takai</strong> (&ldquo;Takai&rdquo;, &ldquo;nosotros&rdquo;)
            trata los datos personales de propietarios de alojamientos, turistas y partners que utilizan takai.cl,
            reservas.takai.cl y nuestros canales de atención. Está redactada conforme a la{" "}
            <strong>Ley N° 21.719 sobre Protección de Datos Personales</strong> de Chile, que moderniza el régimen de la
            Ley N° 19.628, y a los principios de licitud, finalidad, proporcionalidad, calidad, seguridad,
            transparencia y responsabilidad que dicha ley consagra.
          </p>

          <h2>1. Responsable del tratamiento</h2>
          <p>
            El responsable del tratamiento de tus datos personales es <strong>Juan Luis Núñez Valenzuela</strong>, RUT
            16.128.225-1, operador de la plataforma Takai, con domicilio en Chile. Contacto para materias de
            privacidad: <a href="mailto:contacto@takai.cl">contacto@takai.cl</a> · WhatsApp +56 9 5523 0900.
          </p>

          <h2>2. Qué datos tratamos y de quién</h2>
          <h3>a) Propietarios de alojamientos</h3>
          <ul>
            <li>Identificación y contacto: nombre completo, número de WhatsApp, correo electrónico.</li>
            <li>Datos del negocio: nombre del alojamiento, ubicación, fotografías, precios, reglas de la casa.</li>
            <li>Datos de facturación necesarios para cobrar la comisión acordada.</li>
          </ul>
          <h3>b) Turistas que reservan</h3>
          <ul>
            <li>Identificación y contacto: nombre completo, número de WhatsApp, correo electrónico.</li>
            <li>Datos de la reserva: fechas de estadía, número de personas, alojamiento elegido, monto y estado del anticipo.</li>
            <li>Conversaciones con el agente de WhatsApp, cuando el turista utiliza ese canal.</li>
          </ul>
          <h3>c) Partners del programa de afiliados</h3>
          <ul>
            <li>Identificación y contacto, canal de difusión declarado y código de partner.</li>
            <li>Registro de reservas atribuidas a su link y datos necesarios para liquidar comisiones.</li>
          </ul>
          <p>
            <strong>Takai no recauda ni custodia fondos de reservas ni almacena datos completos de tarjetas.</strong>{" "}
            Los pagos de anticipo se realizan directamente entre el turista y el propietario, por transferencia
            bancaria o mediante pago con tarjeta, y en ambos casos se acreditan directamente en la cuenta del
            propietario.
          </p>

          <h2>3. Finalidades y base de licitud</h2>
          <ul>
            <li>
              <strong>Gestionar reservas</strong> (crear, confirmar, notificar y bloquear calendario) — base de
              licitud: ejecución del contrato o medidas precontractuales solicitadas por el titular.
            </li>
            <li>
              <strong>Operar el agente de WhatsApp 24/7</strong> y derivar la conversación al propietario — ejecución
              del contrato y consentimiento del titular que inicia la conversación.
            </li>
            <li>
              <strong>Publicar el alojamiento en el directorio turístico</strong> — ejecución del contrato con el
              propietario.
            </li>
            <li>
              <strong>Atribuir reservas y liquidar comisiones de partners</strong> — ejecución del contrato con el
              partner e interés legítimo en la integridad del programa.
            </li>
            <li>
              <strong>Enviar comunicaciones operativas</strong> (confirmaciones, avisos de reserva) — ejecución del
              contrato. Las comunicaciones comerciales solo se envían con consentimiento previo y pueden revocarse en
              cualquier momento.
            </li>
            <li>
              <strong>Analítica web agregada y anónima</strong> (Vercel Analytics, sin identificar usuarios
              individuales) — interés legítimo en mejorar el servicio.
            </li>
          </ul>

          <h2>4. Tus derechos (acceso, rectificación, supresión, oposición, portabilidad y bloqueo)</h2>
          <p>Conforme a la Ley 21.719, todo titular puede ejercer gratuitamente los siguientes derechos:</p>
          <ul>
            <li><strong>Acceso:</strong> saber qué datos tuyos tratamos, de dónde provienen y con qué finalidad.</li>
            <li><strong>Rectificación:</strong> corregir datos inexactos, desactualizados o incompletos.</li>
            <li><strong>Supresión (cancelación):</strong> pedir la eliminación de tus datos cuando ya no sean necesarios, revoques tu consentimiento o el tratamiento sea ilícito.</li>
            <li><strong>Oposición:</strong> oponerte a un tratamiento específico, incluidas las comunicaciones comerciales.</li>
            <li><strong>Portabilidad:</strong> recibir tus datos en un formato estructurado y de uso corriente, y transmitirlos a otro responsable.</li>
            <li><strong>Bloqueo:</strong> solicitar la suspensión temporal del tratamiento mientras se resuelve una solicitud de rectificación u oposición.</li>
          </ul>
          <p>
            Para ejercerlos, escribe a <a href="mailto:contacto@takai.cl">contacto@takai.cl</a> indicando tu nombre y el
            derecho que deseas ejercer. Responderemos dentro de los plazos legales. Si consideras que tu solicitud no
            fue atendida, puedes reclamar ante la <strong>Agencia de Protección de Datos Personales</strong>, autoridad
            creada por la Ley 21.719.
          </p>

          <h2>5. Decisiones automatizadas</h2>
          <p>
            El agente de WhatsApp responde consultas de disponibilidad y precios de forma automatizada, pero{" "}
            <strong>ninguna reserva se confirma sin intervención humana</strong>: el propietario siempre revisa y
            confirma. No realizamos perfilamiento con efectos jurídicos significativos sobre los titulares.
          </p>

          <h2>6. Comunicación y cesión de datos</h2>
          <ul>
            <li>
              Los datos del turista que reserva se comunican <strong>al propietario del alojamiento</strong>, que los
              necesita para prestar el hospedaje.
            </li>
            <li>
              Los datos operativos se procesan mediante <strong>encargados de tratamiento</strong> que prestan
              infraestructura tecnológica: base de datos en Supabase, planillas operativas internas en Google Sheets
              (Google LLC), hosting y analítica en Vercel Inc., mensajería vía WhatsApp/Meta y correo transaccional vía
              Resend — todos bajo sus respectivos compromisos de seguridad y protección de datos.
            </li>
            <li>
              El acceso a la base de datos está <strong>restringido exclusivamente al equipo Takai</strong>.{" "}
              <strong>No vendemos ni cedemos datos personales a terceros</strong> con fines publicitarios ni de ningún
              otro tipo.
            </li>
          </ul>

          <h2>7. Transferencias internacionales</h2>
          <p>
            Nuestra infraestructura tecnológica (Supabase, Google, Vercel, Meta, Resend) puede almacenar datos en
            servidores fuera de Chile, principalmente en Estados Unidos. Además, la red Takai opera en Chile y Ecuador. Estas
            transferencias se realizan a proveedores que ofrecen garantías adecuadas de seguridad y conforme a los
            mecanismos que la Ley 21.719 contempla para transferencias internacionales (consentimiento, ejecución del
            contrato o niveles adecuados de protección).
          </p>

          <h2>8. Plazos de conservación</h2>
          <p>
            Conservamos los datos mientras exista la relación contractual y por los plazos necesarios para cumplir
            obligaciones legales (tributarias y contractuales). Los datos de reservas se conservan mientras el
            propietario mantenga activa su cuenta; al término del servicio, se eliminan o anonimizan dentro de un plazo
            razonable, salvo obligación legal de retención.
          </p>

          <h2>9. Medidas de seguridad</h2>
          <p>
            Aplicamos medidas técnicas y organizativas apropiadas: cifrado en tránsito (HTTPS/TLS), control de acceso a
            los paneles, principio de mínimo privilegio y registro de operaciones relevantes. Ningún sistema es
            infalible, pero trabajamos para proteger tus datos conforme al estándar que exige la ley.
          </p>

          <h2>10. Notificación de brechas</h2>
          <p>
            Si ocurre una vulneración de seguridad que afecte datos personales, la evaluaremos y notificaremos a la
            Agencia de Protección de Datos Personales y a los titulares afectados cuando corresponda, en los términos
            de la Ley 21.719.
          </p>

          <h2 id="cookies">11. Cookies y analítica</h2>
          <ul>
            <li><strong>Cookies técnicas:</strong> necesarias para el funcionamiento del sitio.</li>
            <li>
              <strong>Analítica:</strong> usamos Vercel Analytics de forma anónima y agregada, sin identificar usuarios
              individuales ni cruzar datos con terceros.
            </li>
            <li>
              <strong>No usamos</strong> Google Analytics, Meta Pixel ni herramientas de retargeting publicitario.
            </li>
          </ul>

          <h2>12. Menores de edad</h2>
          <p>
            Nuestros servicios están dirigidos a mayores de 18 años. No recopilamos deliberadamente datos de menores;
            si detectamos datos de un menor sin autorización de su representante legal, los eliminaremos.
          </p>

          <h2>13. Cambios a esta política</h2>
          <p>
            Podemos actualizar esta política para reflejar cambios normativos u operativos. Publicaremos la versión
            vigente en esta página con su fecha de actualización; si el cambio es sustancial, lo comunicaremos por
            nuestros canales de contacto.
          </p>

          <h2>14. Contacto</h2>
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

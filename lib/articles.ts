import {
  ACTIVATION_PRICES,
  ANNUAL_PRICES,
  ANNUAL_SUMMARY,
  LOW_SEASON_MESSAGE,
} from "./commercial"

export interface ArticlePrice {
  cabins: string
  price: string
}

export interface ArticleSection {
  heading?: string
  body: string
  prices?: ArticlePrice[]
  highlight?: string
}

export interface Article {
  slug: string
  title: string
  description: string
  date: string
  updatedDate: string
  readTime: string
  sections: ArticleSection[]
}

export const articles: Article[] = [
  {
    slug: "como-dejar-de-perder-reservas-por-whatsapp",
    title: "Cómo dejar de perder reservas por WhatsApp",
    description:
      "WhatsApp sirve para conversar, pero no para mostrar disponibilidad ni bloquear fechas. Ordena tus reservas sin vivir pendiente del teléfono.",
    date: "2026-04-01",
    updatedDate: "2026-08-11",
    readTime: "5 min",
    sections: [
      {
        body:
          "Si administras tus cabañas desde el teléfono, conoces la rutina: te preguntan por una fecha, revisas el calendario, respondes el precio y esperas una transferencia. Mientras atiendes una consulta pueden entrar otras dos. El problema no es WhatsApp. El problema es usar una conversación como si fuera un sistema de reservas.",
      },
      {
        heading: "Una consulta todavía no es una reserva",
        body:
          "Cuando cada huésped tiene que preguntarte si hay disponibilidad, todo depende de que puedas responder en ese momento. Si estás manejando, atendiendo a otra persona o durmiendo, el proceso se detiene. Una página propia evita ese cuello de botella: muestra las cabañas, los precios y las fechas disponibles sin que tengas que repetir la misma información por chat.",
      },
      {
        heading: "Recibe reservas a cualquier hora",
        body:
          "Con Takai, el huésped elige su cabaña y sus fechas desde tu página. Al enviar la reserva, la fecha queda bloqueada de inmediato para que nadie más pueda tomarla. Tú recibes el aviso, revisas los datos y confirmas. Sigues teniendo el control, pero ya no necesitas contestar el teléfono para que el proceso avance.",
      },
      {
        heading: "Un solo calendario para no vender dos veces",
        body:
          "Las reservas también pueden llegar por una llamada, Instagram o un cliente habitual. Anótalas en el panel apenas las confirmes. Así todas las fechas ocupadas quedan en el mismo calendario y no dependes de recordar qué conversación contenía cada reserva.",
      },
      {
        heading: "Cobra de una forma que ya conoces",
        body:
          "Puedes cobrar el anticipo por transferencia directa a tu cuenta. No necesitas máquina de tarjetas ni una cuenta de comercio. Si ya trabajas con Mercado Pago, también puedes ofrecerlo como opción. Takai no descuenta un porcentaje de la reserva: lo que cobras por tu cabaña es íntegramente tuyo.",
      },
      {
        heading: "WhatsApp sigue siendo útil",
        body:
          "No tienes que dejar de hablar con tus huéspedes. Usa WhatsApp para resolver una duda especial o coordinar la llegada, y comparte el enlace de tu página cuando te pregunten por disponibilidad. La diferencia es simple: el chat acompaña la reserva, pero la página y el calendario la ordenan.",
      },
      {
        body:
          "Con una página propia, un calendario que se bloquea solo y un panel que puedes manejar desde el celular, dejas de elegir entre atender tu negocio y recibir una reserva. Tu huésped puede avanzar por su cuenta y tú confirmas cuando corresponda.",
      },
    ],
  },
  {
    slug: "cuanto-cuesta-sistema-reservas-cabanas-chile",
    title: "¿Cuánto cuesta Takai para tus cabañas?",
    description:
      "Revisa la activación y la anualidad vigentes de Takai según tu número de cabañas. Sin cobros por reserva y sin pagos entre abril y noviembre.",
    date: "2026-04-08",
    updatedDate: "2026-08-11",
    readTime: "5 min",
    sections: [
      {
        body:
          "Antes de incorporar un sistema de reservas necesitas saber qué vas a pagar, cuándo se cobra y qué incluye. En Takai el precio depende de cuántas cabañas administras. Hay una activación al incorporarte y una anualidad que se cobra solo entre diciembre y marzo. Todos los montos están en pesos chilenos.",
      },
      {
        heading: "Activación — pago único al incorporarse",
        body:
          "La activación incluye la preparación de tu página y la configuración inicial del sistema.",
        prices: ACTIVATION_PRICES.map(([cabins, price]) => ({ cabins, price })),
      },
      {
        heading: "Anualidad — se cobra solo entre diciembre y marzo",
        body:
          "La anualidad también se calcula según el número de cabañas que administras.",
        prices: ANNUAL_PRICES.map(([cabins, price]) => ({ cabins, price })),
        highlight: LOW_SEASON_MESSAGE,
      },
      {
        heading: "Cero comisión por reserva",
        body:
          "Takai no cobra un porcentaje cuando recibes una reserva. Da lo mismo si el huésped llegó por Instagram, WhatsApp, una recomendación o el enlace de tu página: lo que cobras por tu cabaña es íntegramente tuyo.",
      },
      {
        heading: "¿Qué incluye el precio?",
        body:
          "Obtienes una página de reservas para tus cabañas, disponibilidad visible, bloqueo automático de fechas, panel autoadministrable, precios por temporada y la opción de usar tu propio dominio. Puedes cobrar por transferencia y, si ya tienes Mercado Pago, ofrecerlo de forma opcional.",
      },
      {
        heading: "Un cobro pensado para un negocio de temporada",
        body:
          "La anualidad se concentra entre diciembre y marzo, cuando normalmente estás operando la temporada. Entre abril y noviembre Takai no te cobra. Tampoco convierte la anualidad en cuotas ni agrega cargos por cada reserva.",
      },
      {
        body:
          "Para comparar bien, calcula el tramo que corresponde a tu número de cabañas y revisa qué tareas dejarás de hacer a mano. El precio debe ser claro antes de empezar; si administras más de 11 cabañas, el valor se cotiza según tu operación.",
      },
    ],
  },
  {
    slug: "errores-duenos-cabanas-gestion-reservas",
    title: "5 errores al gestionar las reservas de tus cabañas",
    description:
      "Cinco problemas habituales que puedes evitar con disponibilidad visible, un calendario único y un proceso claro para confirmar cada reserva.",
    date: "2026-04-15",
    updatedDate: "2026-08-11",
    readTime: "5 min",
    sections: [
      {
        body:
          "Administrar pocas cabañas no significa que el calendario sea fácil de llevar. Una reserva puede entrar por WhatsApp, otra por teléfono y otra desde Instagram. Cuando la información queda repartida, aparecen errores que consumen tiempo y pueden obligarte a rechazar a un huésped después de haberle dicho que sí.",
      },
      {
        heading: "1. Esconder la disponibilidad detrás de un mensaje",
        body:
          "Si cada persona tiene que preguntarte qué fecha está libre, tú te conviertes en el único acceso al calendario. Publica la disponibilidad en una página propia. El huésped puede revisar opciones y enviar su reserva sin esperar una respuesta previa.",
      },
      {
        heading: "2. Llevar las reservas en varios lugares",
        body:
          "Una libreta, el calendario del teléfono y conversaciones sueltas no forman un registro único. Usa un solo calendario para las reservas que entran desde tu página y para las que tú tomas por llamada o mensaje. Cuando registras una reserva manual, la fecha también queda bloqueada para los demás.",
      },
      {
        heading: "3. Cambiar precios a mano en cada conversación",
        body:
          "Verano, fines de semana largos y temporada baja pueden tener precios distintos. Si calculas cada respuesta desde cero, es fácil enviar un monto equivocado. Define los precios por temporada una vez para que el sistema aplique el valor correcto según la fecha elegida.",
      },
      {
        heading: "4. Depender solo de redes sociales",
        body:
          "Instagram sirve para mostrar tus cabañas, pero una publicación no sabe qué fechas siguen disponibles ni puede bloquearlas. Usa tus redes para llevar a las personas a tu página de reservas. Si tienes dominio propio, puedes compartir un enlace con el nombre de tu negocio en vez de uno genérico.",
      },
      {
        heading: "5. No definir cómo confirmas y cobras",
        body:
          "Deja claro cuánto debe transferir el huésped, a qué cuenta y qué ocurre después. Cuando recibes una solicitud, revisas el pago y confirmas desde el panel. Mercado Pago puede ser una alternativa para quien ya lo tenga, pero no es obligatorio para usar Takai.",
      },
      {
        heading: "La regla que evita la mayoría de estos problemas",
        body:
          "Toda reserva debe terminar en el mismo calendario, venga de donde venga. Así puedes cambiar precios, bloquear una fecha, subir fotos y revisar tu operación desde el panel sin reconstruir el historial desde conversaciones antiguas.",
      },
      {
        body:
          "Un sistema de reservas no reemplaza tu criterio como dueño. Te entrega orden para que confirmes con información clara, cobres directo y no vendas dos veces la misma fecha. Takai hace eso sin descontar comisión de tus reservas.",
      },
    ],
  },
  {
    slug: "por-que-no-necesitas-airbnb-sistema-propio",
    title: "Airbnb o sistema propio: qué conviene para tus cabañas",
    description:
      "Un portal externo y una página propia cumplen funciones distintas. Aprende cuándo usar cada canal y cómo conservar el control de tus reservas directas.",
    date: "2026-04-22",
    updatedDate: "2026-08-11",
    readTime: "6 min",
    sections: [
      {
        body:
          "Airbnb puede ser un canal útil para mostrar tus cabañas a personas que todavía no conocen tu negocio. Una página propia resuelve otra necesidad: recibir y ordenar las reservas de quienes ya llegan por tus redes, WhatsApp, recomendaciones o clientes habituales. No tienes que elegir por costumbre; conviene entender qué trabajo hace cada herramienta.",
      },
      {
        heading: "Un portal te presta su vitrina",
        body:
          "En un portal publicas dentro de una plataforma que reúne muchos alojamientos. A cambio de esa exposición, la reserva queda sujeta a sus tarifas, condiciones y forma de presentar tu negocio. Puede tener sentido cuando necesitas llegar a un público que todavía no tienes.",
      },
      {
        heading: "Tu página atiende a tu propia audiencia",
        body:
          "Si una persona ya te sigue en Instagram, te escribió por WhatsApp o llegó recomendada, no necesita volver a buscarte dentro de otro portal. Puedes enviarle tu enlace para que vea disponibilidad, elija fechas y reserve directo. La fecha se bloquea y tú confirmas desde el panel.",
      },
      {
        heading: "Cero comisión en Takai",
        body:
          "Takai no descuenta un porcentaje de lo que cobras. El huésped puede transferir el anticipo directamente a tu cuenta y tú conservas el total de la reserva. Mercado Pago es opcional para quien ya lo use.",
      },
      {
        heading: "Tu marca y tus reglas",
        body:
          "En tu página decides qué fotos mostrar, qué precios aplicar por temporada y qué información necesita el huésped antes de reservar. También puedes usar un dominio propio, como micabana.cl, para que el enlace represente a tu negocio.",
      },
      {
        heading: "Si mantienes más de un canal, cuida el calendario",
        body:
          "Takai no importa calendarios de Airbnb o Booking. Si recibes una reserva en un portal externo, debes bloquear esa fecha en tu panel. Y si una fecha se reserva en tu página, actualiza los otros canales que uses. Ese hábito evita ofrecer la misma cabaña dos veces.",
      },
      {
        heading: "¿Cuál te conviene?",
        body:
          "Usa un portal si su vitrina te aporta clientes nuevos y el costo te resulta razonable. Usa tu página propia para ordenar las reservas directas y no pagar un porcentaje por ellas. Muchos negocios pueden trabajar con ambos, siempre que mantengan la disponibilidad actualizada.",
      },
      {
        body:
          "La pregunta no es si debes desaparecer de Airbnb. La pregunta es por qué obligar a un cliente que ya te conoce a pasar por un intermediario. Tu propio sistema te da un camino directo, con tu calendario y el control en tus manos.",
      },
    ],
  },
  {
    slug: "sistema-reservas-cabanas-sur-chile-guia-2026",
    title: "Sistema de reservas para cabañas: guía práctica 2026",
    description:
      "Qué debe incluir un sistema para que administres disponibilidad, precios y cobros sin depender de mensajes ni pagar comisión por reserva.",
    date: "2026-04-29",
    updatedDate: "2026-08-11",
    readTime: "7 min",
    sections: [
      {
        body:
          "Un sistema de reservas debe simplificar tu trabajo diario. No basta con tener una página bonita: necesitas saber qué cabaña está libre, qué precio corresponde a cada fecha y qué reservas esperan tu confirmación. Esta guía resume lo que conviene revisar antes de elegir.",
      },
      {
        heading: "1. Una página que funcione desde el celular",
        body:
          "Tu huésped debe poder revisar cabañas, fotos, precios y disponibilidad sin instalar una aplicación. El proceso tiene que ser claro en el teléfono: elige fechas, completa sus datos y envía la reserva desde el mismo lugar.",
      },
      {
        heading: "2. Disponibilidad y bloqueo automático",
        body:
          "Cuando entra una reserva, las fechas deben bloquearse al instante. Eso evita que otra persona tome el mismo período mientras tú revisas la solicitud. Las reservas que recibes por teléfono o mensaje también deben poder anotarse manualmente en ese calendario.",
      },
      {
        heading: "3. Un panel que puedas administrar tú",
        body:
          "No deberías depender de un técnico para cambiar el precio, subir una foto o cerrar una fecha. Revisa que el panel te permita hacer esas tareas desde el celular y ver tus reservas en un solo lugar.",
      },
      {
        heading: "4. Precios por temporada",
        body:
          "Define una vez cuánto cobras en verano, temporada baja o fechas especiales. El sistema debe aplicar ese precio cuando el huésped elige sus días. Así no necesitas recalcular el total en cada conversación.",
      },
      {
        heading: "5. Cobro directo",
        body:
          "Con Takai puedes indicar una transferencia directa a tu cuenta. No necesitas máquina de tarjetas ni cuenta de comercio. Si ya tienes Mercado Pago, puedes agregarlo como opción. En ambos casos, Takai cobra cero comisión por la reserva.",
      },
      {
        heading: "6. Dominio propio",
        body:
          "Un enlace con el nombre de tu negocio es más fácil de recordar y compartir. Takai permite usar un dominio propio para que tu página de reservas mantenga tu marca.",
      },
      {
        heading: "Así funciona Takai",
        body:
          "Primero preparamos tu página con las cabañas, fotos, precios y reglas. Luego el huésped revisa la disponibilidad y envía su reserva. La fecha queda bloqueada y tú revisas la información para confirmar desde el panel. Tu página puede quedar lista en horas, no en semanas.",
      },
      {
        heading: "Cómo se cobra el servicio",
        body:
          "La activación cuesta $99.000 para 1 a 3 cabañas, $150.000 para 4 a 7 y $250.000 para 8 a 10; para más de 11, el valor es a cotizar. " + ANNUAL_SUMMARY,
        highlight: LOW_SEASON_MESSAGE,
      },
      {
        body:
          "El sistema correcto es el que puedes usar todos los días sin convertirte en experto en tecnología. Debe ordenar tus reservas, proteger tu calendario y dejarte cobrar directo, sin descontar una parte de cada estadía.",
      },
    ],
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug)
}

export interface Article {
  slug: string
  title: string
  description: string
  date: string
  readTime: string
  sections: { heading?: string; body: string }[]
}

export const articles: Article[] = [
  {
    slug: "como-dejar-de-perder-reservas-por-whatsapp",
    title: "Cómo dejar de perder reservas por WhatsApp",
    description: "Si gestionas las reservas de tus cabañas por WhatsApp, probablemente ya perdiste dinero sin darte cuenta. Te explicamos cómo evitarlo.",
    date: "2026-04-01",
    readTime: "5 min",
    sections: [
      { body: "Si tienes cabañas en Chile y gestionas tus reservas por WhatsApp, probablemente ya perdiste dinero sin darte cuenta. No es un problema de voluntad ni de esfuerzo — es un problema de sistema. O más precisamente, de la falta de uno." },
      { heading: "El problema real del WhatsApp como sistema de reservas", body: "WhatsApp fue diseñado para conversar, no para gestionar negocios. Cuando usas WhatsApp para recibir reservas, cada consulta requiere tu atención inmediata. Si estás ocupado, dormido, o simplemente sin señal, esa consulta se convierte en una reserva perdida. El turista no espera — escribe al siguiente resultado de Google." },
      { heading: "Lo que pasa cuando no contestas a tiempo", body: "Los estudios de comportamiento del consumidor digital son claros: si un potencial cliente no recibe respuesta en menos de 2 horas, la probabilidad de que reserve cae más del 60%. En temporada alta, cuando la demanda supera la oferta, puede que te salgas con la tuya. Pero en temporada media o baja, esa demora te cuesta reservas reales." },
      { heading: "El otro problema: las dobles reservas", body: "Sin un sistema centralizado, es fácil confirmar dos reservas para la misma cabaña en las mismas fechas. Sucede cuando manejas consultas por WhatsApp, Instagram y llamadas al mismo tiempo. El resultado es incómodo: tienes que llamar a uno de los huéspedes para cancelar, y eso daña tu reputación." },
      { heading: "La solución: que el turista reserve solo", body: "La alternativa no es contratar a alguien para que conteste mensajes. Es tener una página de reservas donde el turista vea la disponibilidad en tiempo real, elija fechas, y confirme solo. Tú recibes la notificación y confirmas con un botón. Sin ir y venir de mensajes, sin dobles reservas, sin depender de que estés disponible en el momento exacto." },
      { heading: "¿Qué necesito para implementar esto?", body: "Un sistema de reservas para cabañas no tiene que ser caro ni complejo. Takai, por ejemplo, te entrega una página pública con calendario en tiempo real, formulario de reservas, y notificaciones automáticas. Sin mensualidad, sin instalación costosa. Solo pagas una pequeña comisión cuando el sistema te trae una reserva nueva. Tus reservas directas siguen siendo 100% tuyas." },
      { body: "Si estás cansado de vivir pendiente del teléfono para no perder una reserva, el momento de cambiar es ahora. De WhatsApp a reservas automáticas puede ser más simple de lo que crees." }
    ]
  },
  {
    slug: "cuanto-cuesta-sistema-reservas-cabanas-chile",
    title: "¿Cuánto cuesta un sistema de reservas para cabañas en Chile?",
    description: "Comparativa real de precios y modelos de cobro de los sistemas de reservas disponibles para propietarios de cabañas en Chile en 2026.",
    date: "2026-04-08",
    readTime: "6 min",
    sections: [
      { body: "Una de las primeras preguntas que hacen los dueños de cabañas cuando buscan digitalizar su negocio es cuánto va a costarles. La respuesta depende del modelo de cobro que elijas, y hay diferencias importantes que vale la pena entender antes de decidir." },
      { heading: "Los modelos de cobro más comunes", body: "En el mercado chileno y latinoamericano existen básicamente tres modelos: mensualidad fija, comisión por reserva, o una combinación de ambos. Cada uno tiene ventajas y desventajas dependiendo de tu nivel de ocupación y temporalidad." },
      { heading: "Mensualidad fija", body: "Es el modelo más común en plataformas internacionales y algunas locales. Pagas entre $20.000 y $60.000 pesos chilenos al mes, independiente de si tuviste reservas o no. En temporada alta puede ser conveniente. En temporada baja, pagas igual aunque tus cabañas estén vacías. Además, muchas plataformas cobran un cargo adicional de instalación de $50.000 a $100.000 para configurar tu cuenta." },
      { heading: "Comisión por reserva", body: "En este modelo no pagas nada fijo. Solo pagas un porcentaje cuando recibes una reserva a través del sistema. Es el modelo más justo para propietarios con temporalidad marcada, como ocurre con la mayoría de las cabañas en el sur de Chile. Si en junio no hay reservas, no pagas nada." },
      { heading: "El modelo híbrido", body: "Algunas plataformas cobran mensualidad más comisión. Es el más caro de todos y el menos recomendable para negocios pequeños e independientes." },
      { heading: "¿Qué incluye el precio?", body: "Más allá del modelo de cobro, lo relevante es qué obtienes a cambio. Un buen sistema debe incluir: página pública para el turista, calendario de disponibilidad en tiempo real, bloqueo automático de fechas reservadas, panel del propietario accesible desde el celular, y notificaciones automáticas. Si el sistema no incluye todo eso en el precio base, los costos reales serán mayores." },
      { heading: "¿Cuánto cuesta Takai?", body: "Takai opera con un modelo de comisión del 10% exclusivamente sobre las reservas que la plataforma genera. Las reservas que tú mismo consigues por tus propios canales — Instagram, WhatsApp, boca a boca — son 100% tuyas sin ningún costo. Actualmente, durante el período de lanzamiento, la creación de la página y la mensualidad del sistema son gratuitas." },
      { body: "La mejor manera de evaluar un sistema no es solo por su precio, sino por la relación entre lo que pagas y las reservas que te ayuda a generar o a no perder. Un sistema que te cuesta $25.000 al mes pero te ahorra 3 reservas perdidas al mes es, en la práctica, gratuito." }
    ]
  },
  {
    slug: "errores-duenos-cabanas-gestion-reservas",
    title: "5 errores que cometen los dueños de cabañas al gestionar reservas",
    description: "Estos son los errores más comunes que cuestan reservas y dinero a los propietarios de cabañas en Chile, y cómo evitarlos.",
    date: "2026-04-15",
    readTime: "5 min",
    sections: [
      { body: "Después de trabajar con propietarios de cabañas en el sur de Chile, hemos identificado los mismos errores una y otra vez. No son errores de negligencia — son errores de sistema. Aquí están los cinco más comunes y cómo evitarlos." },
      { heading: "1. No tener disponibilidad visible en tiempo real", body: "El error más frecuente y costoso. Cuando el turista tiene que preguntar por disponibilidad antes de poder reservar, se agrega una fricción enorme al proceso. Muchos simplemente no esperan la respuesta y reservan en otro lugar. La disponibilidad tiene que ser visible de inmediato, sin necesidad de contacto previo." },
      { heading: "2. Confirmar reservas sin cobrar adelanto", body: "Confirmar una reserva sin recibir ningún pago por adelantado es arriesgado. El turista puede no aparecer, cancelar a último momento, o simplemente cambiar de planes. Sin un adelanto, esa cabaña estuvo bloqueada para otros potenciales clientes sin ninguna garantía. Un adelanto del 20 al 30 por ciento del valor total es una práctica estándar y razonable." },
      { heading: "3. Gestionar reservas desde múltiples canales sin sincronización", body: "WhatsApp, Instagram, llamadas telefónicas, correo electrónico — muchos propietarios reciben consultas desde todos lados y las gestionan manualmente. El resultado inevitable es la doble reserva: dos personas confirmadas para la misma cabaña en las mismas fechas. Es una de las situaciones más incómodas que puede vivir un propietario y afecta directamente la reputación del negocio." },
      { heading: "4. No enviar recordatorios antes del check-in", body: "Una gran proporción de no-shows y cancelaciones tardías se puede prevenir con un simple recordatorio 48 horas antes del check-in. Confirma la llegada, recuerda el horario, y da instrucciones de acceso. Este paso solo puede reducir los problemas de última hora de forma significativa." },
      { heading: "5. No tener página propia y depender solo de redes sociales", body: "Instagram y Facebook son herramientas de descubrimiento, no de reservas. Un perfil en redes sociales no puede mostrar disponibilidad en tiempo real, no puede recibir una reserva formal, y no genera confianza de la misma manera que una página profesional con nombre de dominio propio. Las redes sociales deben llevar al turista a tu página, no ser el destino final." },
      { body: "La buena noticia es que todos estos errores tienen solución con las herramientas correctas. Un sistema de reservas moderno resuelve los cinco de una vez: disponibilidad en tiempo real, cobro de adelanto integrado, calendario centralizado, recordatorios automáticos, y una página profesional propia." }
    ]
  },
  {
    slug: "por-que-no-necesitas-airbnb-sistema-propio",
    title: "Por qué no necesitas Airbnb si tienes tu propio sistema de reservas",
    description: "Airbnb cobra entre 15% y 20% de cada reserva y controla la relación con tus huéspedes. Existe una alternativa mejor para cabañas en Chile.",
    date: "2026-04-22",
    readTime: "6 min",
    sections: [
      { body: "Airbnb es una plataforma poderosa y tiene millones de usuarios. Nadie lo discute. Pero para un propietario de cabañas en Chile con clientela propia y presencia en redes sociales, los costos de depender de Airbnb superan ampliamente los beneficios." },
      { heading: "Cuánto cobra realmente Airbnb", body: "Airbnb cobra al propietario entre un 3% y un 15% por cada reserva, dependiendo de la configuración. Pero además cobra al huésped entre un 14% y un 20% adicional. Eso significa que el precio que ve el turista es significativamente mayor al que tú publicaste, lo que reduce tu competitividad frente a alojamientos que operan con precios directos." },
      { heading: "El problema del control", body: "Cuando operas a través de Airbnb, la relación con el huésped pertenece a Airbnb, no a ti. El turista que reservó tus cabañas tres veces no es tu cliente recurrente — es el cliente de Airbnb. Si mañana Airbnb cambia sus condiciones, sube sus comisiones, o simplemente cierra tu cuenta por una reseña negativa, pierdes todo ese historial y esa relación." },
      { heading: "Cuándo sí tiene sentido usar Airbnb", body: "Airbnb tiene sentido cuando necesitas visibilidad en mercados donde no tienes presencia propia — turistas extranjeros, viajeros que no conocen tu zona, público que descubre tu cabaña por primera vez. En ese contexto, pagar comisión por exposición tiene lógica. Pero esa misma lógica implica que para tus clientes recurrentes y para quienes llegan por tus canales propios, no necesitas intermediarios." },
      { heading: "La alternativa: tu propia página de reservas", body: "Con una página propia puedes publicar tu disponibilidad, recibir reservas directas, cobrar adelantos, y construir una base de clientes que es tuya. Sin comisiones sobre tus reservas directas. Sin depender de los algoritmos de una plataforma extranjera. Con tu marca, tu identidad, y tus reglas." },
      { heading: "El argumento definitivo", body: "Si tienes presencia en Instagram, si tus clientes habituales ya te conocen, si apareces en búsquedas de Google cuando alguien busca cabañas en tu zona — no necesitas pagarle a Airbnb por esas reservas. Ya tienes el canal. Lo que necesitas es la herramienta para recibirlas de forma profesional." },
      { body: "Takai existe exactamente para eso: darte la tecnología que antes solo tenían las grandes plataformas, pero sin las comisiones abusivas ni la pérdida de control sobre tus clientes." }
    ]
  },
  {
    slug: "sistema-reservas-cabanas-sur-chile-guia-2026",
    title: "Sistema de reservas para cabañas en el sur de Chile: guía completa 2026",
    description: "Todo lo que necesitas saber para digitalizar la gestión de reservas de tus cabañas en la zona de los lagos de Chile. Guía práctica para propietarios.",
    date: "2026-04-29",
    readTime: "7 min",
    sections: [
      { body: "El turismo de cabañas en el sur de Chile — la zona de los lagos, Villarrica, Pucón, Licán Ray, Coñaripe — tiene características propias que lo distinguen del turismo urbano o de plataformas internacionales. Los huéspedes buscan experiencias auténticas, trato directo con el propietario, y precios razonables sin intermediarios. Digitalizar tu sistema de reservas en este contexto tiene que respetar esa identidad." },
      { heading: "¿Por qué digitalizar si siempre me fue bien con WhatsApp?", body: "Es la pregunta que más escuchamos. La respuesta no es que WhatsApp esté mal — es que el comportamiento del turista cambió. Hoy, antes de escribirle a alguien por WhatsApp, el turista ya revisó tres páginas web, comparó precios, y buscó disponibilidad en línea. Si no apareces en esa etapa de búsqueda, directamente no existes para ese turista." },
      { heading: "Qué debe tener un buen sistema de reservas para cabañas", body: "No todos los sistemas sirven igual para este tipo de negocio. Lo esencial es: un calendario de disponibilidad visible sin necesidad de registrarse, un formulario de reserva simple que funcione en celular, bloqueo automático de fechas para evitar dobles reservas, notificación inmediata al propietario, y posibilidad de cobrar un adelanto. Lo accesorio — que muchas plataformas venden como esencial — son integraciones complejas, reportes avanzados, y funciones que un negocio de 2 a 5 cabañas nunca va a usar." },
      { heading: "El factor temporalidad", body: "Las cabañas en el sur de Chile tienen una temporalidad marcada: alta en verano y en fiestas de invierno, baja en otoño y parte del invierno. Eso hace que un sistema con mensualidad fija sea especialmente poco conveniente: pagas igual en los meses en que no tienes ingresos. Un modelo de comisión por reserva se adapta naturalmente a esta realidad." },
      { heading: "Cómo presentar tu cabaña en línea", body: "La página pública de tu cabaña es tu vendedor silencioso. Debe mostrar fotos reales, precios claros, disponibilidad actualizada, y las reglas básicas de la estadía. No hace falta que sea elaborada — hace falta que sea honesta y completa. Un turista que llega informado a tu cabaña es un huésped satisfecho." },
      { heading: "La integración con redes sociales", body: "No tienes que elegir entre tener presencia en Instagram y tener una página propia. Son complementarias. Instagram atrae, la página convierte. El enlace de tu página de reservas debe estar en tu bio de Instagram, en tus historias destacadas, y en cualquier respuesta a consultas de disponibilidad. En vez de decirle al turista 'sí hay disponibilidad, me escribes para separar', le dices 'sí hay disponibilidad, reserva directo acá' con un link." },
      { body: "Digitalizar tu sistema de reservas no significa volverlo impersonal. Significa liberarte de las tareas repetitivas para tener más tiempo y energía para lo que sí importa: recibir bien a tus huéspedes y hacer crecer tu negocio." }
    ]
  }
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug)
}

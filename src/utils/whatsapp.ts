const PHONES = {
  taller: "5491133419375", // Taller Cantón (Chapa, Pintura, Estética, General)
  motobox: "5491121787278", // Moto Box (Tu celular: 11 2178-7278)
};

const whatsappConfig: Record<string, { phone: string; text: string }> = {
  general: {
    phone: PHONES.taller,
    text: "Hola Taller Cantón! Quiero hacer una consulta general.",
  },
  turno: {
    phone: PHONES.taller,
    text: "Hola Taller Cantón! Quisiera solicitar un turno.",
  },
  chapa: {
    phone: PHONES.taller,
    text: "Hola Taller Cantón! Quiero consultar por chapa y pintura.",
  },
  estetica: {
    phone: PHONES.taller,
    text: "Hola Taller Cantón! Quiero consultar por terminación y estética.",
  },
  mecanica: {
    phone: PHONES.motobox,
    text: "Hola Moto Box! Quiero consultar y pedir turno para mi moto (marca, modelo y km):",
  },
};

export function getWhatsAppUrl(
  tipo: string = "general",
  mensajeCustom?: string,
): string {
  const entry = whatsappConfig[tipo] || whatsappConfig.general;
  const texto = mensajeCustom || entry.text;
  return `https://wa.me/${entry.phone}?text=${encodeURIComponent(texto)}`;
}
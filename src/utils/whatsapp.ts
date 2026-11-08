export const WHATSAPP_NUMBER = "5491133419375";

export type WhatsAppContext = 'general' | 'chapa' | 'motos' | 'estetica' | 'turno';

const messages: Record<WhatsAppContext, string> = {
  general: "Hola, quisiera consultar por los servicios de Taller Cantón.",
  chapa: "Hola, quisiera consultar por un trabajo de chapa y pintura para mi vehículo.",
  motos: "Hola, quisiera consultar por un servicio de mecánica para mi moto.",
  estetica: "Hola, quisiera consultar por un trabajo de terminación y estética.",
  turno: "Hola, quisiera solicitar un turno en Taller Cantón. Me gustaría consultar disponibilidad para coordinar un día y horario."
};

export function getWhatsAppUrl(context: WhatsAppContext = 'general'): string {
  const text = encodeURIComponent(messages[context]);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
export const WHATSAPP_NUMBER = "2348100032611"; 
export const WHATSAPP_TEXT =
  "Hi Kool Link! I want to order ice blocks. Name: ____ | Location: ____ | Ice Type: ____ | Quantity: ____";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_TEXT
)}`;
export const REQUEST_LINK = `Hello Kool Link! I would like to request more information about your ice products and delivery services.
 Please provide details on pricing, delivery areas, and how to place an order. Thank you!`;
 export const WHATSAPP_REQUEST = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  REQUEST_LINK
)}`;
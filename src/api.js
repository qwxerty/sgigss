// frontend/src/api.js
const API_BASE_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001/api';

export const createCheckoutSession = async (purchaseData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/create-checkout-session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(purchaseData),
    });

    // KLUCZOWA DIAGNOSTYKA:
    const textResponse = await response.text(); // Pobierz surową odpowiedź jako tekst
    console.log("--- Diagnostyka API Response ---");
    console.log("URL:", response.url);
    console.log("Status:", response.status);
    console.log("Headers:", Array.from(response.headers.entries()));
    console.log("Surowa odpowiedź (tekst):", textResponse.substring(0, 500) + (textResponse.length > 500 ? '...' : '')); // Loguj tylko część dla długich odpowiedzi
    console.log("--- Koniec Diagnostyki API Response ---");

    try {
      const data = JSON.parse(textResponse); // Spróbuj parsować jako JSON
      if (!response.ok) {
        throw new Error(data.error || `Błąd backendu: Status ${response.status}.`);
      }
      return data;
    } catch (parseError) {
      console.error("Błąd parsowania JSON:", parseError);
      throw new Error(`Błąd: Odpowiedź z serwera nie jest prawidłowym formatem JSON (HTTP Status: ${response.status}). Fragment odpowiedzi: ${textResponse.substring(0, 200)}...`); 
    }
  } catch (networkError) {
    console.error("Błąd sieci podczas łączenia z backendem:", networkError);
    throw new Error(`Błąd połączenia z serwerem (${API_BASE_URL}). Upewnij się, że backend działa i jest dostępny. (Błąd: ${networkError.message})`);
  }
};

export const fetchOpinions = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/reviews`); 
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || 'Nie udało się pobrać opinii.');
    }
    return data;
  } catch (error) {
    console.error("Błąd fetchowania opinii:", error);
    throw new Error(`Nie udało się pobrać opinii. Sprawdź połączenie z backendem. (${error.message})`);
  }
};

export const fetchStripeCheckoutSession = async (sessionId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/stripe-checkout-session/${sessionId}`);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || 'Nie udało się pobrać szczegółów sesji Stripe.');
    }
    return data;
  } catch (error) {
    console.error("Błąd fetchowania sesji Stripe:", error);
    throw new Error(`Nie udało się pobrać szczegółów sesji Stripe. Sprawdź połączenie z backendem. (${error.message})`);
  }
};
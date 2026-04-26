export interface BookingRequest {
  name: string;
  email: string;
  phone?: string;
  preferredTime: string;
  message?: string;
}

export interface BookingResponse {
  success: boolean;
  message: string;
}

export function validateBookingRequest(
  data: unknown
): data is BookingRequest {
  if (!data || typeof data !== "object") return false;
  const d = data as Record<string, unknown>;
  return (
    typeof d.name === "string" && d.name.trim().length > 0 &&
    typeof d.email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email) &&
    typeof d.preferredTime === "string" && d.preferredTime.trim().length > 0
  );
}

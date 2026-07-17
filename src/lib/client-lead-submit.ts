// Client-side replacement for the old server action webhook forwarder.
// Static export has no server to call, so this runs the fetch in the browser.
export const LEAD_STORAGE_KEY = "qorercm_lead";

export async function forwardLead(payload: Record<string, unknown>, source: string) {
  const webhookUrl = process.env.NEXT_PUBLIC_LEAD_WEBHOOK_URL;

  if (!webhookUrl) {
    // No CRM/webhook configured yet — wire NEXT_PUBLIC_LEAD_WEBHOOK_URL
    // (Zapier, Make, HubSpot Forms API, etc.) before going live.
    console.info(`[${source}] no NEXT_PUBLIC_LEAD_WEBHOOK_URL set:`, payload);
    return;
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...payload,
      source,
      submittedAt: new Date().toISOString(),
    }),
  });

  if (!response.ok) {
    throw new Error(`Webhook responded with ${response.status}`);
  }
}

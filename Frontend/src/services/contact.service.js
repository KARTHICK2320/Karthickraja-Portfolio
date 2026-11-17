/**
 * contact.service.js
 * ------------------------------------------------------------------
 * Netlify Forms integration service.
 * Submits URL-encoded form data directly to Netlify's form-handling
 * endpoint at "/" with "form-name: contact".
 *
 * Maintains the exact response contract expected by Contact.jsx:
 *   { success: boolean, message: string, errors: object|null }
 * ------------------------------------------------------------------
 */

/**
 * Submit contact form data to Netlify Forms.
 *
 * @param {{ name: string, email: string, subject: string, message: string }} formData
 * @returns {Promise<{ success: boolean, message: string, errors: object|null }>}
 */
export async function submitContactForm(formData) {
  try {
    // If subject was prepended to message, extract the clean message body
    let cleanMessage = formData.message || "";
    if (
      formData.subject &&
      cleanMessage.startsWith(`[Subject: ${formData.subject}]\n\n`)
    ) {
      cleanMessage = cleanMessage.slice(`[Subject: ${formData.subject}]\n\n`.length);
    }

    const payload = {
      "form-name": "contact",
      name: (formData.name || "").trim(),
      email: (formData.email || "").trim(),
      subject: (formData.subject || "").trim(),
      message: cleanMessage.trim(),
    };

    const body = new URLSearchParams(payload).toString();

    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });

    if (response.ok) {
      return {
        success: true,
        message: "Thank you! Your message has been sent successfully.",
        errors: null,
      };
    }

    return {
      success: false,
      message: "Unable to submit your message right now. Please try again later.",
      errors: null,
    };
  } catch (error) {
    return {
      success: false,
      message: "Unable to reach the server. Please check your connection and try again.",
      errors: null,
    };
  }
}

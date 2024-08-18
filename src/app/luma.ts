export async function registerEvent(email: string, name: string) {
  const data = {
    name,
    ticket_type_to_selection: {
      "evtticktyp-YfGpEe0NzTubg6l": { count: 1, amount: 0 },
    },
    email,
    event_api_id: "evt-wuvdEjXV8Us5p6D",
  };

  const request = await fetch("https://api.lu.ma/event/independent/register", {
    method: "POST",
    headers: {
      accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const response = await request.json();


  console.log({ response });

  if ("message" in response) {
    throw new Error(response.message);
  }

  if (response.status !== "success") {
    throw new Error("Failed to register");
  }

  return response;
}

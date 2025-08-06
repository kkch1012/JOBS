// ──────────────── src/api/fetchMcpStreamingResponse.js ────────────────
import { API_CONFIG } from '../config/api';

// export async function fetchMcpStreamingResponse(text, userId, token, onMessageCallback) {
//   const sessionRes = await fetch(`${API_CONFIG.BASE_URL}/mcp`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify({
//       text,
//       user_id: userId,
//     }),
//   });

//   const reader = sessionRes.body.getReader();
//   const decoder = new TextDecoder("utf-8");

//   let endpoint = null;

//   while (true) {
//     const { done, value } = await reader.read();
//     if (done) break;

//     const chunk = decoder.decode(value, { stream: true });
//     const match = chunk.match(/data:\s*(.*)/);
//     if (match) {
//       endpoint = match[1].trim();
//       break;
//     }
//   }

//   if (!endpoint) throw new Error("MCP endpoint not received");

//   const eventSource = new EventSource(`${API_CONFIG.BASE_URL}${endpoint}`);

//   eventSource.onmessage = (event) => {
//     onMessageCallback(event.data);
//   };

//   eventSource.onerror = (err) => {
//     eventSource.close();
//     throw new Error("MCP SSE 연결 실패: " + err.message);
//   };
// }

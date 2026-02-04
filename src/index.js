import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import App from "@/App";

// Monkeypatch WebAssembly.instantiateStreaming to pass a cloned Response
// This prevents libraries that try instantiateStreaming then fallback to
// response.arrayBuffer() from failing with "body stream already read".
if (typeof WebAssembly !== 'undefined' && WebAssembly.instantiateStreaming) {
  const _origInstantiateStreaming = WebAssembly.instantiateStreaming.bind(WebAssembly);
  WebAssembly.instantiateStreaming = (resp, importObject) => {
    return Promise.resolve(resp).then(r => {
      try {
        // If r is a Response, pass a clone so later arrayBuffer() calls still work
        if (r && typeof r.clone === 'function') {
          return _origInstantiateStreaming(Promise.resolve(r.clone()), importObject);
        }
      } catch (e) {
        // fallthrough to original call
      }
      return _origInstantiateStreaming(resp, importObject);
    });
  };
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

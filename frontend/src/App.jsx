import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AuthRouter from "./auth/AuthRouter";

// Layouts
import SecretariatLayout from "./layout/secretariat/SecretariatLayout";
import OCLayout from "./layout/oc/OCLayout";

const App = () => {
  return (
    <Routes>
      {/* ================= AUTH ================= */}
      <Route path="/auth/*" element={<AuthRouter />} />

      {/* ================= OC SYSTEM ================= */}
      <Route path="/app/oc/*" element={<OCLayout />} />

      {/* ================= SECRETARIAT SYSTEM ================= */}
      <Route path="/app/secretariat/*" element={<SecretariatLayout />} />

      {/* ================= ROOT REDIRECT ================= */}
      <Route path="/" element={<Navigate to="/auth/login" replace />} />

      {/* ================= FALLBACK ================= */}
      <Route path="*" element={<Navigate to="/auth/login" replace />} />
    </Routes>
  );
};

export default App;

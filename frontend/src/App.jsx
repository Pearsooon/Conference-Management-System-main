import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // Import Navigate

import AuthRouter from "./auth/AuthRouter";
import SecretariatLayout from "./layout/SecretariatLayout";
import LogisticsLayout from "./layout/LogisticsLayout";

const App = () => {
  return (
    <Routes>
      {/* Auth system (Landing page cho /auth/*) */}
      <Route path="/auth/*" element={<AuthRouter />} />

      {/* Main App System - Secretariat */}
      <Route path="/app/secretariat/*" element={<SecretariatLayout />} />

      {/* Main App System - Logistics */}
      <Route path="/app/logistics/*" element={<LogisticsLayout />} />

      {/* Legacy routes - redirect to new structure */}
      <Route path="/app/*" element={<Navigate to="/app/secretariat/dashboard" replace />} />

      {/* Redirect Root URL (/) to the Dashboard for testing */}
      <Route path="/" element={<Navigate to="/app/secretariat/dashboard" replace />} />

      {/* fallback (Sẽ chuyển hướng các URL không khớp về trang Auth) */}
      <Route path="*" element={<AuthRouter />} />
    </Routes>
  );
};

export default App;
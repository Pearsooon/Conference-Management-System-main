import React, { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import TopBar from "./TopBar";
import Sidebar from "./Sidebar";
import { colors as mockColors } from "../colors";

/* ===== IMPORT PAGES ===== */

// OC
import FinancialDashboard from "../pages/OC/FinancialDashboard";
import BudgetApprovals from "../pages/OC/BudgetApproval";
import ConferenceSetup from "../pages/OC/ConferenceSetup";
import EmailManagement from "../pages/OC/EmailManagement";
import AwardsResults from "../pages/OC/AwardsAnnouncement";

// Registration
import RegistrationList from "../pages/Registration/RegistrationList";
import RegistrationSettings from "../pages/Registration/RegistrationSettings";
import CMS from "../pages/Registration/CMS";
import PostEventComm from "../pages/Registration/PostEventComm";

// Logistics
import StaffAssignment from "../pages/Logistics/StaffAssignment";
import QRCheckin from "../pages/Logistics/QRCheckin";
import VenueAndTravel from "../pages/Logistics/VenueAndTravel";

// Submission
import ReviewDecisions from "../pages/Submission/Review/ReviewDecisions";
import PapersList from "../pages/Submission/Review/PapersList";
import FinalSubmission from "../pages/Submission/Finalization/FinalSubmission";
import AIProofread from "../pages/Submission/Finalization/AIProofread";
import PrePublishCheck from "../pages/Submission/Finalization/PrePublishCheck";
import BestPaperEval from "../pages/Submission/SessionAndAwards/BestPaperEval";
import AISessionBuilder from "../pages/Submission/SessionAndAwards/AISessionBuilder";

/* ===== MODULE CONFIG ===== */

const MODULE_ROUTES = {
  oc: {
    title: "Organizing Committee",
    items: [
      { id: "oc/dashboard", label: "Financial Dashboard", icon: "DollarSign" },
      { id: "oc/budget-approval", label: "Budget Approvals", icon: "AlertTriangle" },
      { id: "oc/setup", label: "Conference Setup", icon: "Settings" },
      { id: "oc/email-management", label: "Email Management", icon: "Mail" },
      { id: "oc/awards", label: "Awards & Results", icon: "Award" },
    ],
  },
  registration: {
    title: "Registration & CMS",
    items: [
      { id: "reg/list", label: "Registration List", icon: "Users" },
      { id: "reg/settings", label: "Registration Settings", icon: "Sliders" },
      { id: "reg/cms", label: "Content Management", icon: "Globe" },
      { id: "reg/post-comm", label: "Post-Event Comm", icon: "Send" },
    ],
  },
  logistics: {
    title: "Logistics & On-site",
    items: [
      { id: "logistics/staff", label: "Staff Assignment", icon: "Calendar" },
      { id: "logistics/checkin", label: "QR Check-in", icon: "QrCode" },
      { id: "logistics/venue", label: "Venue & Travel", icon: "MapPin" },
    ],
  },
  submission: {
    title: "Academic Submission",
    items: [
      { id: "sub/review-decisions", label: "Review Decisions", icon: "Eye" },
      { id: "sub/papers-list", label: "Papers List", icon: "FileText" },
      { id: "sub/final-submission", label: "Final Submissions", icon: "Upload" },
      { id: "sub/proofread", label: "AI Proofreading", icon: "Brain" },
      { id: "sub/pre-publish", label: "Pre-Publish Check", icon: "CheckCircle" },
      { id: "sub/best-paper", label: "Best Paper Eval", icon: "Star" },
      { id: "sub/ai-session", label: "AI Session Builder", icon: "Zap" },
    ],
  },
};

const SecretariatLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  /* ===== DETECT CURRENT MODULE ===== */
  // URL: /app/{module}/{page}
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const moduleKey = pathSegments[1] || "oc";

  const currentModuleData = MODULE_ROUTES[moduleKey] || MODULE_ROUTES.oc;

  const navItems = currentModuleData.items.map((item) => ({
    ...item,
    path: `/app/${item.id}`,
  }));

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        background: mockColors.bg,
      }}
    >
      {/* ===== TOP BAR ===== */}
      <TopBar
        colors={mockColors}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        {/* ===== SIDEBAR ===== */}
        <Sidebar
          colors={mockColors}
          sidebarOpen={sidebarOpen}
          navItems={navItems}
          moduleTitle={currentModuleData.title}
        />

        {/* ===== MAIN CONTENT ===== */}
        <main style={{ flex: 1, padding: "24px 32px", overflowY: "auto" }}>
          <Routes>
            {/* ===== OC ===== */}
            <Route path="oc/dashboard" element={<FinancialDashboard />} />
            <Route path="oc/budget-approval" element={<BudgetApprovals />} />
            <Route path="oc/setup" element={<ConferenceSetup />} />
            <Route path="oc/email-management" element={<EmailManagement />} />
            <Route path="oc/awards" element={<AwardsResults />} />

            {/* ===== REGISTRATION ===== */}
            <Route path="reg/list" element={<RegistrationList />} />
            <Route path="reg/settings" element={<RegistrationSettings />} />
            <Route path="reg/cms" element={<CMS />} />
            <Route path="reg/post-comm" element={<PostEventComm />} />

            {/* ===== LOGISTICS ===== */}
            <Route path="logistics/staff" element={<StaffAssignment />} />
            <Route path="logistics/checkin" element={<QRCheckin />} />
            <Route path="logistics/venue" element={<VenueAndTravel />} />

            {/* ===== SUBMISSION ===== */}
            <Route path="sub/review-decisions" element={<ReviewDecisions />} />
            <Route path="sub/papers-list" element={<PapersList />} />
            <Route path="sub/final-submission" element={<FinalSubmission />} />
            <Route path="sub/proofread" element={<AIProofread />} />
            <Route path="sub/pre-publish" element={<PrePublishCheck />} />
            <Route path="sub/best-paper" element={<BestPaperEval />} />
            <Route path="sub/ai-session" element={<AISessionBuilder />} />

            {/* ===== DEFAULT ===== */}
            <Route path="" element={<Navigate to="oc/dashboard" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default SecretariatLayout;

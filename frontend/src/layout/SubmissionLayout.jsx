import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Eye, Upload, Star } from "lucide-react";

/* ===== MAIN TABS ===== */
const mainTabs = [
  {
    label: "Review",
    icon: Eye,
    path: "/app/submission/review",
  },
  {
    label: "Finalization",
    icon: Upload,
    path: "/app/submission/finalization",
  },
  {
    label: "Sessions & Awards",
    icon: Star,
    path: "/app/submission/sessions-awards",
  },
];

/* ===== SUB TABS CONFIG ===== */
const subTabsMap = {
  review: [
    { label: "Papers List", path: "papers-list" },
    { label: "Review Decisions", path: "review-decisions" },
  ],
  finalization: [
    { label: "Final Submission", path: "final-submission" },
    { label: "AI Proofread", path: "proofread" },
    { label: "Pre-Publish Check", path: "pre-publish" },
  ],
  "sessions-awards": [
    { label: "Best Paper Evaluation", path: "best-paper" },
  ],
};

const SubmissionLayout = () => {
  const location = useLocation();

  const section = location.pathname.split("/")[3]; 
  // review | finalization | sessions-awards

  const subTabs = subTabsMap[section] || [];

  return (
    <div className="space-y-6">
      {/* ===== HEADER ===== */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Academic Submission
        </h1>
        <p className="text-slate-500 mt-1">
          Review, finalize, and organize accepted papers
        </p>
      </div>

      {/* ===== MAIN TABS ===== */}
      <div className="flex gap-6 border-b border-slate-200">
        {mainTabs.map((tab) => {
          const Icon = tab.icon;
          const active = location.pathname.startsWith(tab.path);

          return (
            <NavLink
              key={tab.path}
              to={tab.path}
              className={`flex items-center gap-2 pb-3 text-sm font-medium transition
                ${
                  active
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-slate-500 hover:text-slate-800"
                }`}
            >
              <Icon size={16} />
              {tab.label}
            </NavLink>
          );
        })}
      </div>

      {/* ===== SUB TABS ===== */}
      {subTabs.length > 0 && (
        <div className="flex gap-4">
          {subTabs.map((tab) => {
            const fullPath = `/app/submission/${section}/${tab.path}`;
            const active = location.pathname === fullPath;

            return (
              <NavLink
                key={tab.path}
                to={fullPath}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition
                  ${
                    active
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
              >
                {tab.label}
              </NavLink>
            );
          })}
        </div>
      )}

      {/* ===== CONTENT ===== */}
      <Outlet />
    </div>
  );
};

export default SubmissionLayout;

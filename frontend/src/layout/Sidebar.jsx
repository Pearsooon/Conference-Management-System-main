import React from "react";
import { NavLink } from "react-router-dom";
import {
  DollarSign,
  AlertTriangle,
  Settings,
  Mail,
  Award,
  Users,
  Sliders,
  Globe,
  Send,
  Calendar,
  QrCode,
  MapPin,
  Eye,
  FileText,
  Upload,
  Brain,
  CheckCircle,
  Star,
} from "lucide-react";

/**
 * Map string icon name -> React Icon Component
 * Giữ MODULE_ROUTES thuần data (string), UI tự map
 */
const ICON_MAP = {
  DollarSign,
  AlertTriangle,
  Settings,
  Mail,
  Award,
  Users,
  Sliders,
  Globe,
  Send,
  Calendar,
  QrCode,
  MapPin,
  Eye,
  FileText,
  Upload,
  Brain,
  CheckCircle,
  Star,
};

const Sidebar = ({ sidebarOpen, navItems }) => {
  return (
    <div
      className={`${
        sidebarOpen ? "w-[260px]" : "w-0"
      } bg-white border-r border-[#e2e8f0] h-[calc(100vh-64px)] transition-[width] duration-300 overflow-hidden sticky top-16`}
    >
      <div className="p-6 px-4">
        {/* ===== ACTIVE MODULE ===== */}
        <div className="mb-5 p-3 bg-[#2563eb]/[0.1] rounded-lg border-l-[3px] border-[#2563eb]">
          <div className="text-xs text-[#64748b] mb-1">
            ACTIVE MODULE
          </div>
          <div className="text-sm font-semibold text-[#2563eb]">
            Papers & Sessions
          </div>
        </div>

        {/* ===== NAV ITEMS ===== */}
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className="no-underline"
          >
            {({ isActive }) => {
              const Icon = ICON_MAP[item.icon];

              return (
                <div
                  className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer mb-1 transition-all duration-200 ${
                    isActive
                      ? "bg-[#2563eb] text-white"
                      : "bg-transparent text-[#1e293b]"
                  }`}
                >
                  {Icon && <Icon size={20} />}
                  <span className="text-sm font-medium">
                    {item.label}
                  </span>
                </div>
              );
            }}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

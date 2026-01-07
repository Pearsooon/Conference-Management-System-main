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

const Sidebar = ({ sidebarOpen, colors, navItems }) => {
  return (
    <div
      style={{
        width: sidebarOpen ? "260px" : "0",
        background: colors.cardBg,
        borderRight: `1px solid ${colors.border}`,
        height: "calc(100vh - 64px)",
        transition: "width 0.3s",
        overflow: "hidden",
        position: "sticky",
        top: "64px",
      }}
    >
      <div style={{ padding: "24px 16px" }}>
        {/* ===== ACTIVE MODULE ===== */}
        <div
          style={{
            marginBottom: "20px",
            padding: "12px",
            background: `${colors.primary}10`,
            borderRadius: "8px",
            borderLeft: `3px solid ${colors.primary}`,
          }}
        >
          <div
            style={{
              fontSize: "12px",
              color: colors.textLight,
              marginBottom: "4px",
            }}
          >
            ACTIVE MODULE
          </div>
          <div
            style={{
              fontSize: "14px",
              fontWeight: "600",
              color: colors.primary,
            }}
          >
            Papers & Sessions
          </div>
        </div>

        {/* ===== NAV ITEMS ===== */}
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            style={{ textDecoration: "none" }}
          >
            {({ isActive }) => {
              const Icon = ICON_MAP[item.icon];

              return (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    marginBottom: "4px",
                    transition: "all 0.2s",
                    background: isActive
                      ? colors.primary
                      : "transparent",
                    color: isActive ? "white" : colors.text,
                  }}
                >
                  {Icon && <Icon size={20} />}
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
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

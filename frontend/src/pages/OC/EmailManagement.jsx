import React from "react";
import { Mail, Plus, Send, CheckCircle, X, Clock } from "lucide-react";
import Button from "../../ui/Button";
import { colors as defaultColors } from "../../colors";

const StatCard = ({ icon: Icon, label, value, color, colors }) => (
  <div style={{ background: colors.cardBg, border: `1px solid ${colors.border}`, borderRadius: 12, padding: 24, flex: 1 }}>
    <Icon size={24} color={color} />
    <div style={{ color: colors.textLight }}>{label}</div>
    <div style={{ fontSize: 28, fontWeight: 700, color }}>{value}</div>
  </div>
);

const EmailManagement = () => {
  const colors = defaultColors;

  const inviteStats = {
    sent: 45,
    accepted: 38,
    declined: 3,
    pending: 4,
  };

  return (
    <div>
      <h2 style={{ fontSize: 28, fontWeight: 600 }}>Email Management 📧</h2>
      <p style={{ color: colors.textLight, marginBottom: 24 }}>
        Manage invitations and RSVP tracking.
      </p>

      <div style={{ display: "flex", gap: 12, marginBottom: 24 }}>
        <Button icon={Plus} colors={colors}>Create Template</Button>
        <Button variant="secondary" icon={Mail} colors={colors}>View Logs</Button>
      </div>

      <div style={{ display: "flex", gap: 16 }}>
        <StatCard icon={Send} label="Sent" value={inviteStats.sent} color={colors.primary} colors={colors} />
        <StatCard icon={CheckCircle} label="Accepted" value={inviteStats.accepted} color={colors.success} colors={colors} />
        <StatCard icon={X} label="Declined" value={inviteStats.declined} color={colors.danger} colors={colors} />
        <StatCard icon={Clock} label="Pending" value={inviteStats.pending} color={colors.warning} colors={colors} />
      </div>
    </div>
  );
};

export default EmailManagement;

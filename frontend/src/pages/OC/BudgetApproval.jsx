import React from "react";
import { AlertTriangle, Filter, Download, Check, X, Eye } from "lucide-react";
import Button from "../../ui/Button";
import { colors as defaultColors } from "../../colors";

const BudgetApproval = () => {
  const colors = defaultColors;

  const budgetRequests = [
    {
      id: 1,
      category: "Catering",
      requested: 5000,
      reason: "Additional VIP dinner",
      status: "pending",
      date: "2025-03-15",
    },
    {
      id: 2,
      category: "Marketing",
      requested: 3000,
      reason: "Social media ads campaign",
      status: "pending",
      date: "2025-03-14",
    },
    {
      id: 3,
      category: "Technology",
      requested: 2500,
      reason: "Extra AV equipment",
      status: "approved",
      date: "2025-03-12",
    },
  ];

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 24 }}>
        <div>
          <h2 style={{ fontSize: 28, fontWeight: 600 }}>Budget Approval Requests ⚠️</h2>
          <p style={{ color: colors.textLight }}>
            Review and approve budget overrun requests.
          </p>
        </div>

        <div style={{ display: "flex", gap: 8 }}>
          <Button variant="secondary" icon={Filter} colors={colors}>Filter</Button>
          <Button variant="secondary" icon={Download} colors={colors}>Export</Button>
        </div>
      </div>

      <div style={{ background: colors.cardBg, border: `1px solid ${colors.border}`, borderRadius: 12 }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: colors.bg }}>
              {["ID", "Category", "Amount", "Reason", "Date", "Status", "Actions"].map(h => (
                <th key={h} style={{ padding: 16, fontSize: 13, color: colors.textLight }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {budgetRequests.map((r, i) => (
              <tr key={r.id} style={{ borderBottom: i < budgetRequests.length - 1 ? `1px solid ${colors.border}` : "none" }}>
                <td style={{ padding: 16, fontWeight: 600, color: colors.primary }}>#{r.id}</td>
                <td style={{ padding: 16 }}>{r.category}</td>
                <td style={{ padding: 16, fontWeight: 600 }}>${r.requested.toLocaleString()}</td>
                <td style={{ padding: 16, color: colors.textLight }}>{r.reason}</td>
                <td style={{ padding: 16 }}>{r.date}</td>
                <td style={{ padding: 16 }}>
                  <span style={{
                    padding: "4px 10px",
                    borderRadius: 6,
                    fontSize: 12,
                    fontWeight: 600,
                    background: r.status === "approved" ? `${colors.success}15` : `${colors.warning}15`,
                    color: r.status === "approved" ? colors.success : colors.warning
                  }}>
                    {r.status.toUpperCase()}
                  </span>
                </td>
                <td style={{ padding: 16 }}>
                  {r.status === "pending" ? (
                    <div style={{ display: "flex", gap: 8 }}>
                      <Button size="sm" variant="success" icon={Check} colors={colors}>Approve</Button>
                      <Button size="sm" variant="danger" icon={X} colors={colors}>Reject</Button>
                    </div>
                  ) : (
                    <Button size="sm" variant="secondary" icon={Eye} colors={colors}>View</Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BudgetApproval;

import React from "react";
import { Award, Eye, Send } from "lucide-react";
import Button from "../../ui/Button";
import { colors as defaultColors } from "../../colors";

const AwardsAnnouncement = () => {
  const colors = defaultColors;

  const awardCandidates = [
    { id: "P001", title: "Medical Imaging with Deep Learning", score: 92.3, status: "Proposed", type: "Best Paper" },
    { id: "P005", title: "Quantum Machine Learning", score: 88.3, status: "Proposed", type: "Best Student Paper" },
    { id: "C001", title: "Dr. Evelyn Reed", score: null, status: "Finalized", type: "Lifetime Achievement" },
  ];

  return (
    <div>
      <h2 style={{ fontSize: 28, fontWeight: 600 }}>Awards & Results 🏆</h2>
      <p style={{ color: colors.textLight, marginBottom: 24 }}>
        Review, finalize, and announce awards.
      </p>

      <div style={{ background: colors.cardBg, border: `1px solid ${colors.border}`, borderRadius: 12, padding: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
          <h3>Pending Award Finalization</h3>
          <Button icon={Award} variant="success" colors={colors}>Announce Awards</Button>
        </div>

        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: colors.bg }}>
              {["ID", "Title", "Type", "Score", "Status", "Actions"].map(h => (
                <th key={h} style={{ padding: 12, fontSize: 13, color: colors.textLight }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {awardCandidates.map((a, i) => (
              <tr key={a.id} style={{ borderBottom: i < awardCandidates.length - 1 ? `1px solid ${colors.border}` : "none" }}>
                <td style={{ padding: 12, fontWeight: 600, color: colors.primary }}>{a.id}</td>
                <td style={{ padding: 12 }}>{a.title}</td>
                <td style={{ padding: 12 }}>{a.type}</td>
                <td style={{ padding: 12 }}>{a.score ?? "N/A"}</td>
                <td style={{ padding: 12 }}>
                  <span style={{
                    padding: "4px 8px",
                    borderRadius: 4,
                    fontSize: 12,
                    background: a.status === "Finalized" ? `${colors.success}15` : `${colors.warning}15`,
                    color: a.status === "Finalized" ? colors.success : colors.warning
                  }}>{a.status}</span>
                </td>
                <td style={{ padding: 12 }}>
                  <Button size="sm" variant="secondary" icon={Eye} colors={colors}>Review</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ marginTop: 20 }}>
          <Button size="sm" icon={Send} variant="secondary" colors={colors}>
            Send Internal Notification
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AwardsAnnouncement;

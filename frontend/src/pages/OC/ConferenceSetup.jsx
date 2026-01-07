import React from "react";
import { Save, Send } from "lucide-react";
import Button from "../../ui/Button";
import { colors as defaultColors } from "../../colors";

const ConferenceSetup = () => {
  const colors = defaultColors;

  return (
    <div>
      <h2 style={{ fontSize: 28, fontWeight: 600 }}>Conference Setup & Timeline 🏢</h2>
      <p style={{ color: colors.textLight, marginBottom: 24 }}>
        Configure conference details and schedule.
      </p>

      <div style={{ background: colors.cardBg, border: `1px solid ${colors.border}`, borderRadius: 12, padding: 24 }}>
        <h3>Basic Information</h3>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <input placeholder="Conference Name" />
          <input placeholder="Venue" />
          <input type="date" />
          <input type="number" placeholder="Duration (days)" />
        </div>

        <div style={{ marginTop: 20, display: "flex", justifyContent: "flex-end" }}>
          <Button icon={Save} colors={colors}>Save Draft</Button>
        </div>

        <div style={{ marginTop: 24, borderTop: `1px solid ${colors.border}`, paddingTop: 20 }}>
          <h3>Timeline Editor</h3>
          <p style={{ color: colors.textLight }}>
            Placeholder for schedule editor and conflict detection.
          </p>
          <Button icon={Send} colors={colors}>Submit for Approval</Button>
        </div>
      </div>
    </div>
  );
};

export default ConferenceSetup;

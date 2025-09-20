import React, { useState, useRef } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function DateRangeWithInput() {
  const [range, setRange] = useState([
    {
      startDate: new Date(2025, 8, 12),
      endDate: new Date(2025, 9, 15),
      key: "selection"
    }
  ]);

  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // cerrar al hacer click afuera
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div style={{ position: "relative", display: "inline-block", margin: '1em 0 0 1em' }} ref={ref}>
      <input
        readOnly
        value={`${format(range[0].startDate, "MM/dd/yyyy")} - ${format(
          range[0].endDate,
          "MM/dd/yyyy"
        )}`}
        onClick={() => setOpen(!open)}
        style={{
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #1976d2",
          cursor: "pointer",
          width: "220px"
        }}
      />

      {open && (
        <div style={{ position: "absolute", zIndex: 1000000, top: "110%", left: "0" }}>
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setRange([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={2}
            direction="horizontal"
            minDate={new Date(2025, 8, 12)}
            maxDate={new Date(2025, 9, 15)}
          />
        </div>
      )}
    </div>
  );
}

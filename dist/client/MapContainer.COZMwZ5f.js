import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { C as Card } from "./card.DPXo1ZLP.js";
import { S as SafeIcon, a as Button } from "./AppHeader.h2OVAX_7.js";
function MapContainer({
  height = "400px",
  showControls = true,
  onZoomIn,
  onZoomOut,
  onRecenter,
  className = "",
  children
}) {
  const [isClient, setIsClient] = useState(false);
  const mapRef = useRef(null);
  useEffect(() => {
    setIsClient(true);
  }, []);
  const handleZoomIn = () => {
    onZoomIn?.();
  };
  const handleZoomOut = () => {
    onZoomOut?.();
  };
  const handleRecenter = () => {
    onRecenter?.();
  };
  if (!isClient) {
    return /* @__PURE__ */ jsx(Card, { className: `relative overflow-hidden bg-muted ${className}`, style: {
      height
    }, "data-source-file": "src/components/common/MapContainer.tsx", "data-source-line-start": "47", "data-source-line-end": "54", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", "data-source-file": "src/components/common/MapContainer.tsx", "data-source-line-start": "48", "data-source-line-end": "53", children: /* @__PURE__ */ jsxs("div", { className: "text-center space-y-2", "data-source-file": "src/components/common/MapContainer.tsx", "data-source-line-start": "49", "data-source-line-end": "52", children: [
      /* @__PURE__ */ jsx(SafeIcon, { name: "Map", size: 48, className: "mx-auto text-muted-foreground", "data-source-file": "src/components/common/MapContainer.tsx", "data-source-line-start": "50", "data-source-line-end": "50" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/common/MapContainer.tsx", "data-source-line-start": "51", "data-source-line-end": "51", children: "Loading map..." })
    ] }) }) });
  }
  return /* @__PURE__ */ jsxs(Card, { className: `relative overflow-hidden ${className}`, style: {
    height
  }, "data-source-file": "src/components/common/MapContainer.tsx", "data-source-line-start": "59", "data-source-line-end": "105", children: [
    /* @__PURE__ */ jsx("div", { ref: mapRef, className: "absolute inset-0 bg-gradient-to-br from-muted to-muted/50", style: {
      backgroundImage: `url("https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/11/16/626b5934-cf34-4926-9f89-0182464bcb31.png")`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }, "data-source-file": "src/components/common/MapContainer.tsx", "data-source-line-start": "61", "data-source-line-end": "71", children }),
    showControls && /* @__PURE__ */ jsxs("div", { className: "absolute top-4 right-4 flex flex-col gap-2 z-10", "data-source-file": "src/components/common/MapContainer.tsx", "data-source-line-start": "75", "data-source-line-end": "103", children: [
      /* @__PURE__ */ jsx(Button, { size: "icon", variant: "secondary", className: "shadow-lg", onClick: handleZoomIn, "aria-label": "Zoom in", "data-source-file": "src/components/common/MapContainer.tsx", "data-source-line-start": "76", "data-source-line-end": "84", children: /* @__PURE__ */ jsx(SafeIcon, { name: "Plus", size: 20, "data-source-file": "src/components/common/MapContainer.tsx", "data-source-line-start": "83", "data-source-line-end": "83" }) }),
      /* @__PURE__ */ jsx(Button, { size: "icon", variant: "secondary", className: "shadow-lg", onClick: handleZoomOut, "aria-label": "Zoom out", "data-source-file": "src/components/common/MapContainer.tsx", "data-source-line-start": "85", "data-source-line-end": "93", children: /* @__PURE__ */ jsx(SafeIcon, { name: "Minus", size: 20, "data-source-file": "src/components/common/MapContainer.tsx", "data-source-line-start": "92", "data-source-line-end": "92" }) }),
      /* @__PURE__ */ jsx(Button, { size: "icon", variant: "secondary", className: "shadow-lg", onClick: handleRecenter, "aria-label": "Recenter map", "data-source-file": "src/components/common/MapContainer.tsx", "data-source-line-start": "94", "data-source-line-end": "102", children: /* @__PURE__ */ jsx(SafeIcon, { name: "Locate", size: 20, "data-source-file": "src/components/common/MapContainer.tsx", "data-source-line-start": "101", "data-source-line-end": "101" }) })
    ] })
  ] });
}
export {
  MapContainer as M
};

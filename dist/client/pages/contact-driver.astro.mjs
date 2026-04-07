import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from "../astro/server.DvbP1VFY.js";
import "piccolore";
import { $ as $$BaseLayout } from "../BaseLayout.D-nZ0uYi.js";
import { b as Avatar, c as AvatarImage, d as AvatarFallback, S as SafeIcon, B as Badge, a as Button, A as AppHeader } from "../AppHeader.DiYVpvWN.js";
import { A as AppBottomNav } from "../AppBottomNav.D_V8Uun5.js";
import { jsxs, jsx } from "react/jsx-runtime";
import { m as mockCurrentRide } from "../ride.BbPk0mGh.js";
import * as React from "react";
import { useState, useRef, useCallback, useEffect } from "react";
import { io } from "socket.io-client";
import { C as Card, a as CardHeader, b as CardTitle, d as CardContent, e as cn } from "../card.BA4JS6QT.js";
import { S as Separator } from "../separator.DdA1LhoM.js";
import { I as Input } from "../input.DrcO4c1k.js";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { renderers } from "../renderers.mjs";
const mockCurrentUser = {
  userId: "user_bossie_007"
};
function useMessaging({
  rideId,
  userId,
  userType,
  socketUrl = "http://localhost:3001"
}) {
  const [messages, setMessages] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const socketRef = useRef(null);
  const fetchMessages = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/messages/get?rideId=${rideId}`);
      const data = await response.json();
      if (data.success) {
        setMessages(data.messages);
      } else {
        setError(data.error || "Failed to load messages");
      }
    } catch (err) {
      setError(err.message || "Failed to load messages");
    } finally {
      setIsLoading(false);
    }
  }, [rideId]);
  const sendMessage = useCallback(async (text) => {
    try {
      const response = await fetch("/api/messages/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          rideId,
          senderId: userId,
          senderType: userType,
          text
        })
      });
      const data = await response.json();
      if (data.success) {
        setMessages((prev) => {
          const exists = prev.some((msg) => msg.id === data.message.id);
          if (exists) {
            return prev;
          }
          return [...prev, data.message];
        });
        return data.message;
      } else {
        throw new Error(data.error || "Failed to send message");
      }
    } catch (err) {
      setError(err.message || "Failed to send message");
      throw err;
    }
  }, [rideId, userId, userType]);
  useEffect(() => {
    if (!socketUrl || socketUrl === "") {
      console.warn("Socket URL not configured. Real-time messaging disabled.");
      fetchMessages();
      return;
    }
    const socket = io(socketUrl, {
      query: {
        rideId,
        userId,
        userType
      },
      transports: ["websocket", "polling"]
    });
    socketRef.current = socket;
    socket.on("connect", () => {
      setIsConnected(true);
      console.log("Connected to messaging server");
      socket.emit("join-ride", {
        rideId
      });
      fetchMessages();
    });
    socket.on("disconnect", () => {
      setIsConnected(false);
      console.log("Disconnected from messaging server");
    });
    socket.on("error", (err) => {
      setError(err.message || "Socket connection error");
    });
    socket.on("new-message", (message) => {
      setMessages((prev) => [...prev, message]);
    });
    return () => {
      socket.disconnect();
      socketRef.current = null;
    };
  }, [rideId, userId, userType, socketUrl, fetchMessages]);
  return {
    messages,
    sendMessage,
    isConnected,
    isLoading,
    error
  };
}
function RideDetailsPanel({
  ride
}) {
  const driver = ride.driverDetails;
  return /* @__PURE__ */ jsxs(Card, { className: "shadow-card", "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "17", "data-source-line-end": "108", children: [
    /* @__PURE__ */ jsx(CardHeader, { "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "18", "data-source-line-end": "20", children: /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "19", "data-source-line-end": "19", children: "Ride Details" }) }),
    /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "21", "data-source-line-end": "107", children: [
      driver && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "24", "data-source-line-end": "40", children: [
        /* @__PURE__ */ jsxs(Avatar, { className: "h-14 w-14", "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "25", "data-source-line-end": "30", children: [
          /* @__PURE__ */ jsx(AvatarImage, { src: driver.profileImageUrl, alt: driver.name, "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "26", "data-source-line-end": "26" }),
          /* @__PURE__ */ jsx(AvatarFallback, { className: "bg-primary/10 text-primary font-semibold", "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "27", "data-source-line-end": "29", children: driver.name.split(" ").map((n) => n[0]).join("").toUpperCase() })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "31", "data-source-line-end": "39", children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-base", "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "32", "data-source-line-end": "32", children: driver.name }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground", "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "33", "data-source-line-end": "38", children: [
            /* @__PURE__ */ jsx(SafeIcon, { name: "Star", size: 14, className: "fill-yellow-400 text-yellow-400", "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "34", "data-source-line-end": "34" }),
            /* @__PURE__ */ jsx("span", { className: "font-medium", "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "35", "data-source-line-end": "35", children: driver.rating.toFixed(1) }),
            /* @__PURE__ */ jsx("span", { "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "36", "data-source-line-end": "36", children: "•" }),
            /* @__PURE__ */ jsx("span", { "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "37", "data-source-line-end": "37", children: driver.vehicle.model })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, { "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "43", "data-source-line-end": "43" }),
      driver && /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "47", "data-source-line-end": "57", children: [
        /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "48", "data-source-line-end": "52", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "49", "data-source-line-end": "49", children: "Vehicle" }),
          /* @__PURE__ */ jsx("p", { className: "font-medium", "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "50", "data-source-line-end": "50", children: driver.vehicle.model }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "51", "data-source-line-end": "51", children: driver.vehicle.color })
        ] }),
        /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "53", "data-source-line-end": "56", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "54", "data-source-line-end": "54", children: "Plate Number" }),
          /* @__PURE__ */ jsx("p", { className: "font-mono font-semibold text-primary", "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "55", "data-source-line-end": "55", children: driver.vehicle.plateNumber })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, { "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "60", "data-source-line-end": "60" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3", "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "63", "data-source-line-end": "85", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "64", "data-source-line-end": "73", children: [
          /* @__PURE__ */ jsx("div", { className: "mt-1 w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0", "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "65", "data-source-line-end": "67", children: /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-primary", "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "66", "data-source-line-end": "66" }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "68", "data-source-line-end": "72", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-muted-foreground", "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "69", "data-source-line-end": "69", children: "Pickup" }),
            /* @__PURE__ */ jsx("p", { className: "font-medium truncate", "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "70", "data-source-line-end": "70", children: ride.pickupLocation.name }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground truncate", "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "71", "data-source-line-end": "71", children: ride.pickupLocation.address })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "75", "data-source-line-end": "84", children: [
          /* @__PURE__ */ jsx("div", { className: "mt-1 w-4 h-4 rounded-sm bg-destructive/20 flex items-center justify-center flex-shrink-0", "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "76", "data-source-line-end": "78", children: /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-sm bg-destructive", "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "77", "data-source-line-end": "77" }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "79", "data-source-line-end": "83", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-muted-foreground", "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "80", "data-source-line-end": "80", children: "Dropoff" }),
            /* @__PURE__ */ jsx("p", { className: "font-medium truncate", "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "81", "data-source-line-end": "81", children: ride.dropoffLocation.name }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground truncate", "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "82", "data-source-line-end": "82", children: ride.dropoffLocation.address })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, { "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "87", "data-source-line-end": "87" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-3", "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "90", "data-source-line-end": "106", children: [
        /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "91", "data-source-line-end": "94", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "92", "data-source-line-end": "92", children: "ETA" }),
          /* @__PURE__ */ jsxs("p", { className: "font-semibold", "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "93", "data-source-line-end": "93", children: [
            ride.currentEtaMinutes,
            " min"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "95", "data-source-line-end": "98", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "96", "data-source-line-end": "96", children: "Fare" }),
          /* @__PURE__ */ jsxs("p", { className: "font-semibold text-primary", "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "97", "data-source-line-end": "97", children: [
            "KES ",
            ride.estimatedFare.toFixed(2)
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "99", "data-source-line-end": "105", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "100", "data-source-line-end": "100", children: "Status" }),
          /* @__PURE__ */ jsxs(Badge, { variant: "default", className: "mt-1", "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "101", "data-source-line-end": "104", children: [
            /* @__PURE__ */ jsx(SafeIcon, { name: "Navigation", size: 12, className: "mr-1", "data-source-file": "src/components/contact-driver/RideDetailsPanel.tsx", "data-source-line-start": "102", "data-source-line-end": "102" }),
            "In Transit"
          ] })
        ] })
      ] })
    ] })
  ] });
}
const ScrollArea = React.forwardRef(({
  className,
  children,
  ...props
}, ref) => /* @__PURE__ */ jsxs(ScrollAreaPrimitive.Root, { ref, className: cn("relative overflow-hidden", className), ...props, children: [
  /* @__PURE__ */ jsx(ScrollAreaPrimitive.Viewport, { className: "h-full w-full rounded-[inherit]", children }),
  /* @__PURE__ */ jsx(ScrollBar, { "data-source-file": "src/components/ui/scroll-area.tsx", "data-source-line-start": "18", "data-source-line-end": "18" }),
  /* @__PURE__ */ jsx(ScrollAreaPrimitive.Corner, {})
] }));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
const ScrollBar = React.forwardRef(({
  className,
  orientation = "vertical",
  ...props
}, ref) => /* @__PURE__ */ jsx(ScrollAreaPrimitive.ScrollAreaScrollbar, { ref, orientation, className: cn("flex touch-none select-none transition-colors", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", className), ...props, children: /* @__PURE__ */ jsx(ScrollAreaPrimitive.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" }) }));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;
const quickMessages = ["I'm running late", "Where are you?", "I'm ready", "Thank you!"];
function MessagingInterface({
  messages,
  driverName,
  driverAvatar,
  onSendMessage,
  onQuickMessage,
  isConnected,
  isLoading = false,
  error
}) {
  const [inputValue, setInputValue] = useState("");
  const scrollRef = useRef(null);
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({
        behavior: "smooth"
      });
    }
  }, [messages]);
  const handleSend = () => {
    if (inputValue.trim()) {
      onSendMessage(inputValue);
      setInputValue("");
    }
  };
  const handleQuickMessage = (message) => {
    onQuickMessage(message);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  return /* @__PURE__ */ jsxs(Card, { className: "shadow-card flex flex-col h-[500px]", "data-source-file": "src/components/contact-driver/MessagingInterface.tsx", "data-source-line-start": "73", "data-source-line-end": "174", children: [
    /* @__PURE__ */ jsx(CardHeader, { className: "border-b", "data-source-file": "src/components/contact-driver/MessagingInterface.tsx", "data-source-line-start": "74", "data-source-line-end": "86", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", "data-source-file": "src/components/contact-driver/MessagingInterface.tsx", "data-source-line-start": "75", "data-source-line-end": "85", children: [
      /* @__PURE__ */ jsxs(CardTitle, { className: "text-base", "data-source-file": "src/components/contact-driver/MessagingInterface.tsx", "data-source-line-start": "76", "data-source-line-end": "76", children: [
        "Messages with ",
        driverName
      ] }),
      isConnected !== void 0 && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", "data-source-file": "src/components/contact-driver/MessagingInterface.tsx", "data-source-line-start": "78", "data-source-line-end": "83", children: [
        /* @__PURE__ */ jsx("div", { className: `h-2 w-2 rounded-full ${isConnected ? "bg-green-500" : "bg-gray-400"}`, "data-source-file": "src/components/contact-driver/MessagingInterface.tsx", "data-source-line-start": "79", "data-source-line-end": "79" }),
        /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", "data-source-file": "src/components/contact-driver/MessagingInterface.tsx", "data-source-line-start": "80", "data-source-line-end": "82", children: isConnected ? "Connected" : "Disconnected" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs(CardContent, { className: "flex-1 flex flex-col p-0", "data-source-file": "src/components/contact-driver/MessagingInterface.tsx", "data-source-line-start": "88", "data-source-line-end": "173", children: [
      error && /* @__PURE__ */ jsx("div", { className: "p-3 bg-destructive/10 text-destructive text-sm border-b", "data-source-file": "src/components/contact-driver/MessagingInterface.tsx", "data-source-line-start": "91", "data-source-line-end": "93", children: error }),
      /* @__PURE__ */ jsx(ScrollArea, { className: "flex-1 p-4", "data-source-file": "src/components/contact-driver/MessagingInterface.tsx", "data-source-line-start": "97", "data-source-line-end": "135", children: isLoading && messages.length === 0 ? /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center h-full", "data-source-file": "src/components/contact-driver/MessagingInterface.tsx", "data-source-line-start": "99", "data-source-line-end": "101", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/contact-driver/MessagingInterface.tsx", "data-source-line-start": "100", "data-source-line-end": "100", children: "Loading messages..." }) }) : /* @__PURE__ */ jsxs("div", { className: "space-y-4", "data-source-file": "src/components/contact-driver/MessagingInterface.tsx", "data-source-line-start": "103", "data-source-line-end": "133", children: [
        messages.map((message) => /* @__PURE__ */ jsxs("div", { className: `flex gap-3 ${message.sender === "rider" ? "flex-row-reverse" : ""}`, "data-source-file": "src/components/contact-driver/MessagingInterface.tsx", "data-source-line-start": "105", "data-source-line-end": "130", children: [
          message.sender === "driver" && /* @__PURE__ */ jsxs(Avatar, { className: "h-8 w-8 flex-shrink-0", "data-source-file": "src/components/contact-driver/MessagingInterface.tsx", "data-source-line-start": "110", "data-source-line-end": "115", children: [
            /* @__PURE__ */ jsx(AvatarImage, { src: driverAvatar, alt: driverName, "data-source-file": "src/components/contact-driver/MessagingInterface.tsx", "data-source-line-start": "111", "data-source-line-end": "111" }),
            /* @__PURE__ */ jsx(AvatarFallback, { className: "bg-primary/10 text-primary text-xs", "data-source-file": "src/components/contact-driver/MessagingInterface.tsx", "data-source-line-start": "112", "data-source-line-end": "114", children: driverName.split(" ").map((n) => n[0]).join("").toUpperCase() })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: `flex flex-col gap-1 max-w-xs ${message.sender === "rider" ? "items-end" : "items-start"}`, "data-source-file": "src/components/contact-driver/MessagingInterface.tsx", "data-source-line-start": "118", "data-source-line-end": "129", children: [
            /* @__PURE__ */ jsx("div", { className: `px-4 py-2 rounded-lg ${message.sender === "rider" ? "bg-primary text-primary-foreground rounded-br-none" : "bg-muted text-foreground rounded-bl-none"}`, "data-source-file": "src/components/contact-driver/MessagingInterface.tsx", "data-source-line-start": "119", "data-source-line-end": "127", children: /* @__PURE__ */ jsx("p", { className: "text-sm break-words", "data-source-file": "src/components/contact-driver/MessagingInterface.tsx", "data-source-line-start": "126", "data-source-line-end": "126", children: message.text }) }),
            /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", "data-source-file": "src/components/contact-driver/MessagingInterface.tsx", "data-source-line-start": "128", "data-source-line-end": "128", children: message.timestamp })
          ] })
        ] }, message.id)),
        /* @__PURE__ */ jsx("div", { ref: scrollRef, "data-source-file": "src/components/contact-driver/MessagingInterface.tsx", "data-source-line-start": "132", "data-source-line-end": "132" })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "border-t p-3 space-y-2", "data-source-file": "src/components/contact-driver/MessagingInterface.tsx", "data-source-line-start": "138", "data-source-line-end": "153", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground px-1", "data-source-file": "src/components/contact-driver/MessagingInterface.tsx", "data-source-line-start": "139", "data-source-line-end": "139", children: "Quick replies:" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2", "data-source-file": "src/components/contact-driver/MessagingInterface.tsx", "data-source-line-start": "140", "data-source-line-end": "152", children: quickMessages.map((msg, idx) => /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", onClick: () => handleQuickMessage(msg), className: "text-xs h-8", "data-source-file": "src/components/contact-driver/MessagingInterface.tsx", "data-source-line-start": "142", "data-source-line-end": "150", children: msg }, idx)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "border-t p-3 flex gap-2", "data-source-file": "src/components/contact-driver/MessagingInterface.tsx", "data-source-line-start": "156", "data-source-line-end": "172", children: [
        /* @__PURE__ */ jsx(Input, { placeholder: "Type a message...", value: inputValue, onChange: (e) => setInputValue(e.target.value), onKeyPress: handleKeyPress, className: "flex-1", "data-source-file": "src/components/contact-driver/MessagingInterface.tsx", "data-source-line-start": "157", "data-source-line-end": "163" }),
        /* @__PURE__ */ jsx(Button, { size: "icon", onClick: handleSend, disabled: !inputValue.trim(), className: "flex-shrink-0", "data-source-file": "src/components/contact-driver/MessagingInterface.tsx", "data-source-line-start": "164", "data-source-line-end": "171", children: /* @__PURE__ */ jsx(SafeIcon, { name: "Send", size: 18, "data-source-file": "src/components/contact-driver/MessagingInterface.tsx", "data-source-line-start": "170", "data-source-line-end": "170" }) })
      ] })
    ] })
  ] });
}
function CallActionButtons({
  driverPhone,
  onCall
}) {
  const handleCall = () => {
    onCall();
  };
  const handleSMS = () => {
    if (driverPhone) {
      window.location.href = `sms:${driverPhone}`;
    }
  };
  return /* @__PURE__ */ jsx(Card, { className: "shadow-card", "data-source-file": "src/components/contact-driver/CallActionButtons.tsx", "data-source-line-start": "23", "data-source-line-end": "50", children: /* @__PURE__ */ jsxs(CardContent, { className: "pt-6", "data-source-file": "src/components/contact-driver/CallActionButtons.tsx", "data-source-line-start": "24", "data-source-line-end": "49", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3", "data-source-file": "src/components/contact-driver/CallActionButtons.tsx", "data-source-line-start": "25", "data-source-line-end": "45", children: [
      /* @__PURE__ */ jsxs(Button, { onClick: handleCall, disabled: !driverPhone, size: "lg", className: "h-14", "data-source-file": "src/components/contact-driver/CallActionButtons.tsx", "data-source-line-start": "26", "data-source-line-end": "34", children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "Phone", size: 20, className: "mr-2", "data-source-file": "src/components/contact-driver/CallActionButtons.tsx", "data-source-line-start": "32", "data-source-line-end": "32" }),
        "Call Driver"
      ] }),
      /* @__PURE__ */ jsxs(Button, { onClick: handleSMS, disabled: !driverPhone, variant: "outline", size: "lg", className: "h-14", "data-source-file": "src/components/contact-driver/CallActionButtons.tsx", "data-source-line-start": "35", "data-source-line-end": "44", children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "MessageCircle", size: 20, className: "mr-2", "data-source-file": "src/components/contact-driver/CallActionButtons.tsx", "data-source-line-start": "42", "data-source-line-end": "42" }),
        "Send SMS"
      ] })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground text-center mt-3", "data-source-file": "src/components/contact-driver/CallActionButtons.tsx", "data-source-line-start": "46", "data-source-line-end": "48", children: driverPhone ? `Driver: ${driverPhone}` : "Driver phone not available" })
  ] }) });
}
function ContactDriverContent() {
  const {
    messages,
    sendMessage,
    isConnected,
    isLoading,
    error
  } = useMessaging({
    rideId: mockCurrentRide.rideId,
    userId: mockCurrentUser.userId,
    userType: "rider",
    socketUrl: void 0
  });
  const handleSendMessage = async (text) => {
    try {
      await sendMessage(text);
    } catch (err) {
      console.error("Failed to send message:", err);
    }
  };
  const handleCall = () => {
    if (mockCurrentRide.driverDetails?.phone) {
      window.location.href = `tel:${mockCurrentRide.driverDetails.phone}`;
    }
  };
  const handleQuickMessage = (message) => {
    handleSendMessage(message);
  };
  return /* @__PURE__ */ jsxs("div", { className: "container max-w-2xl mx-auto px-4 py-4 space-y-4", "data-source-file": "src/components/contact-driver/ContactDriverContent.tsx", "data-source-line-start": "36", "data-source-line-end": "57", children: [
    /* @__PURE__ */ jsx(RideDetailsPanel, { ride: mockCurrentRide, "data-source-file": "src/components/contact-driver/ContactDriverContent.tsx", "data-source-line-start": "38", "data-source-line-end": "38" }),
    /* @__PURE__ */ jsx(MessagingInterface, { messages, driverName: mockCurrentRide.driverDetails?.name || "Driver", driverAvatar: mockCurrentRide.driverDetails?.profileImageUrl, onSendMessage: handleSendMessage, onQuickMessage: handleQuickMessage, isConnected, isLoading, error, "data-source-file": "src/components/contact-driver/ContactDriverContent.tsx", "data-source-line-start": "41", "data-source-line-end": "50" }),
    /* @__PURE__ */ jsx(CallActionButtons, { driverPhone: mockCurrentRide.driverDetails?.phone, onCall: handleCall, "data-source-file": "src/components/contact-driver/ContactDriverContent.tsx", "data-source-line-start": "53", "data-source-line-end": "56" })
  ] });
}
const $$ContactDriver = createComponent(($$result, $$props, $$slots) => renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { title: "Contact Driver - Bossie Ride" }, { default: ($$result2) => renderTemplate`
  ${renderComponent($$result2, "AppHeader", AppHeader, { "client:load": true, showBackButton: true, title: "Contact Driver", showNotifications: false, "client:component-hydration": "load", "client:component-path": "@/components/common/AppHeader.tsx", "client:component-export": "default" })}
  
  ${maybeRenderHead()}<main data-source-file="src/pages/contact-driver.astro" data-source-line-start="17" data-source-line-end="19" className="flex-1 pb-20">
    ${renderComponent($$result2, "ContactDriverContent", ContactDriverContent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/contact-driver/ContactDriverContent.tsx", "client:component-export": "default" })}
  </main>

  ${renderComponent($$result2, "AppBottomNav", AppBottomNav, { "client:idle": true, activeItem: "home", "client:component-hydration": "idle", "client:component-path": "@/components/common/AppBottomNav.tsx", "client:component-export": "default" })}
` })}`, "/home/rayan/bossie-ride/src/pages/contact-driver.astro", void 0);
const $$file = "/home/rayan/bossie-ride/src/pages/contact-driver.astro";
const $$url = "/contact-driver.html";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$ContactDriver,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};

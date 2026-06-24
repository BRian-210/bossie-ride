import { jsx } from "react/jsx-runtime";
import * as React from "react";
import { cva } from "class-variance-authority";
import { e as cn } from "./card.DPXo1ZLP.js";
const alertVariants = cva("relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7", {
  variants: {
    variant: {
      default: "bg-background text-foreground",
      destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
const Alert = React.forwardRef(({
  className,
  variant,
  ...props
}, ref) => /* @__PURE__ */ jsx("div", { ref, role: "alert", className: cn(alertVariants({
  variant
}), className), ...props, "data-source-file": "src/components/ui/alert.tsx", "data-source-line-start": "26", "data-source-line-end": "31" }));
Alert.displayName = "Alert";
const AlertTitle = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx("h5", { ref, className: cn("mb-1 font-medium leading-none tracking-tight", className), ...props, "data-source-file": "src/components/ui/alert.tsx", "data-source-line-start": "39", "data-source-line-end": "43" }));
AlertTitle.displayName = "AlertTitle";
const AlertDescription = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("text-sm [&_p]:leading-relaxed", className), ...props, "data-source-file": "src/components/ui/alert.tsx", "data-source-line-start": "51", "data-source-line-end": "55" }));
AlertDescription.displayName = "AlertDescription";
export {
  Alert as A,
  AlertDescription as a,
  AlertTitle as b
};

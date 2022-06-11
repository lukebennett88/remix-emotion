import { Link as RemixLink } from "@remix-run/react";
import { makeLinkComponent } from "@spark-web/link";

export const UniversalRemixLink = makeLinkComponent(
  ({ href, onClick, rel, children, ...props }, forwardedRef) => {
    const shouldUseRemix = href.charAt(0) === "/";

    if (shouldUseRemix) {
      return (
        <RemixLink {...props} ref={forwardedRef} to={href}>
          {children}
        </RemixLink>
      );
    }

    return (
      <a
        ref={forwardedRef}
        href={href}
        rel={rel || "noreferrer noopener"}
        onClick={(event) => {
          if (href === "" || href === "#") {
            event.preventDefault();
          }

          if (typeof onClick === "function") {
            onClick(event);
          }
        }}
        {...props}
      >
        {children}
      </a>
    );
  }
);

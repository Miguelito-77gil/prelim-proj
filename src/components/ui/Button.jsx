import { cn } from "@/lib/utils";

function Button({
  children,
  className,
  href,
  type = "button",
}) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-medium transition",
    "bg-black text-white hover:bg-gray-800",
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}

export default Button;
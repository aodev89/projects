export default function Button({
                                   children,
                                   variant = "primary",
                               }) {
    const base =
        "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-primary"

    const variants = {
        primary: "bg-primary text-white hover:opacity-90",
        secondary: "border border-border hover:bg-gray-50",
        ghost: "hover:bg-gray-100",
    }

    return (
        <button className={`${base} ${variants[variant]}`}>
            {children}
        </button>
    )
}

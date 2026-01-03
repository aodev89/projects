export default function Card({ children }) {
    return (
        <div className="rounded-lg border border-border p-6 hover:shadow-sm transition">
            {children}
        </div>
    )
}

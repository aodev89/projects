export default function Footer() {
    return (
        <footer className={"border-t mt-20"}>
            <div className={"container mx-auto px-6 py-6 text-sm text-sm text-gray-500 flex justify-between"}>
                <span> {new Date().getFullYear()} Alexander</span>
                <span> Bygget med React og Tailwind </span>
            </div>
        </footer>
    )
}
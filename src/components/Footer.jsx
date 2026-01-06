export default function Footer() {
    return (
        <footer className="border-t border-white/10 py-6">
            <div className="max-w-6xl mx-auto px-4 text-center text-gray-400 text-sm">
                <div className="mb-2 text-xs text-gray-500">Built with creativity • animated accents</div>
                <div>© {new Date().getFullYear()} Manish Kumar. All rights reserved.</div>
            </div>
        </footer>
    );
}

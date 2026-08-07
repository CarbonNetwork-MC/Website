export default function Footer() {
    return (
        <footer className="bg-white rounded-md shadow-md">
            <div className="flex items-center justify-center p-4">
                <span className="text-gray-600">&copy; 2024-{new Date().getFullYear()} Carbon Network. All rights reserved.</span>
            </div>
        </footer>
    );
}

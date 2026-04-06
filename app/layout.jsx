import '@/styles/globals.css'
import Navbar from "../components/Navbar"

export default function Layout({ children }) {
    return (<html >
        <body >
            <Navbar />
            {children}
        </body>
    </html>
    )
}
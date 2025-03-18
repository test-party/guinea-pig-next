import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

//http://localhost:3000/list-issues

export default function Page() {
    return (
        <div className={inter.className}>
            <ul className="prose-sm -ml-1 -mr-1 leading-5">
                <div>
                    test
                </div>
                {true &&
                    <li>test
                    </li>
                }
                <div>
                    <li>Unwrapped Item</li>
                    <li>Unwrapped Item</li>
                    <li>Unwrapped Item</li>
                </div>
                <li>help</li>
            </ul>
        </div>
    );
}

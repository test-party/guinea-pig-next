//http://localhost:3000/protected-link-name

import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server";
export default async function Page() {
    const { userId } = await auth();
    return (
        <>
            <SignedIn>
                <div>
                    <a href='https://www.google.com'></a>
                </div>
            </SignedIn>
            <SignedOut>
                <RedirectToSignIn redirectUrl="/protected-link-name" />
            </SignedOut>
        </>
    );
}

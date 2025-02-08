//http://localhost:3000/meta-refresh
export default function Page() {
    return (
        <div>
            <meta http-equiv="refresh" content="10" />
            <meta http-equiv="refresh" content={(60 * 60 * 20).toString()} />
            <meta http-equiv="content-security-policy" />
            <meta http-equiv="content-type" />
            <meta http-equiv="default-style" />
        </div>
    );
}
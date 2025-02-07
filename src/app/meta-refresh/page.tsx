//http://localhost:3000/meta-refresh
export default function Page() {
    return (
        <body>
            <div>
                <meta content="10" />
                <meta http-equiv="refresh" content={(60 * 60 * 20).toString()} />
                <meta http-equiv="content-security-policy" />
                <meta http-equiv="content-type" />
                <meta http-equiv="default-style" />
            </div>
            <div>
                <meta name="viewport" />
                <meta name="viewport" content="user-scalable=no" />
                <meta name="viewport" content="user-scalable=no, maximum-scale=2.6" />
                <meta name="viewport" content="user-scalable=no, maximum-scale=1" />
            </div>
        </body>
    );
}
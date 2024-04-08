export default function Audio() {
    return (
        <main className="flex min-h-screen p-24">
            <audio controls>
                <source src="https://codify-audio.s3.amazonaws.com/20VC__Keith_Rabois_Exclusive.mp3" type="audio/mpeg"></source>
            </audio>
        </main>
    )
}
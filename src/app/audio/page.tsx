export default function Audio() {
    return (
        <>
            <title>Audio Player - Podcast</title>
            <main className="flex min-h-screen p-24" aria-label="Audio player">
                <audio controls aria-label="20VC Keith Rabois Exclusive podcast episode">
                    <source src="https://codify-audio.s3.amazonaws.com/20VC__Keith_Rabois_Exclusive.mp3" type="audio/mpeg"></source>
                    Your browser does not support the audio element.
                </audio>
            </main>
        </>
    )
}
import './Home.css'

function Home() {
    return(
        <Container />
    );
}

function Container() {
    return(
        <div className="container">
            <ContainerTitle text="Write, Save, Remember Effortlessly with Memories Pad."/>
            <ButtonDownload />
            <ContainerPhotoBackground />
            <ContainerHeading text="Features"/>
            <ContainerFeature 
                title="Store Unlimited Notes"
                text="There are no limits to your ideas and inspirations. With Memories Pad, you can save as many notes as you need without worrying about running out of space, keeping all your thoughts and important information neatly organized in one place."
                imgBg="/background-windows/background.webp"
                imgOverlay="/background-windows/add_note.webp"
            />
            <ContainerFeature 
                title="Stay on Top with Pin"
                text="Keep your notes always visible! With the pin feature, your note stays on top of other windows, ensuring it never gets lost behind. Just click the pin, and your note will remain in front, no matter what you're working on."
                imgBg="/background-windows/background.webp"
                imgOverlay="/background-windows/Stay-on-Top-with-Pin.webp"
                reverse={true}
            />
            <ContainerFeature 
                title="Personalize Your Notes"
                text="Make your notes truly yours! Choose from a variety of colors to organize your notes the way you like. With just a tap, switch between different colors to match your style and preferences."
                imgBg="/background-windows/background.webp"
                imgOverlay="/background-windows/Personalize-Your-Notes.webp"
            />
            <ContainerFeature 
                title="Access Anytime"
                text="No internet? No problem! Memories Pad stores your notes locally, requiring no internet connection. You can access and edit your notes anytime, anywhere, with complete freedom."
                imgBg="/background-windows/background.webp"
                imgOverlay="/background-windows/Access-Anytime.webp"
                reverse={true}
            />
        </div>
    );
}

function ContainerTitle({ text }) {
    return (
        <div className="container-title">
            <div className="content-title">
                <h1>{text}</h1>
            </div>
        </div>
    );
}

function ButtonDownload() {
    return (
        <div className="container-button-download">
            <a href="download/SetupMemoriesPad.exe" download className="button-download">
                Download For Windows
            </a>
            <a href="https://www.figma.com/proto/Ey9nxdZzuucXhSAnZNybLB/MemoriesPad?node-id=1-3&t=X4hxnjPwxmuEhKzD-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3" target="_blank" rel="noopener noreferrer" className="button-figma">
                Run Figma
            </a>
        </div>
    );
}

function ContainerPhotoBackground() {
    return(
        <div className="container-photo-background">
            {/* Gambar utama sebagai background */}
            <img src="/background-windows/background.webp" alt="background windows" className="img-background" />

            {/* Gambar kedua sebagai overlay */}
            <img src="/background-windows/MemoriesPad.webp" alt="overlay" className="img-overlay" />
        </div>
    );
}

function ContainerHeading({ text }) {
    return (
        <div className="container-heading">
            <div className="content-heading">
                <h1>{text}</h1>
            </div>
        </div>
    );
}

function ContainerFeature({ title, text, imgBg, imgOverlay, reverse = false }) {
    return (
        <div className={`container-feature ${reverse ? "reverse" : ""}`}>
            {/* Bagian Kiri atau Kanan (Text) */}
            <div className="feature-left">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>

            {/* Bagian Kanan atau Kiri (Gambar) */}
            <div className="feature-right">
                <img src={imgBg} alt="background" className="img-background-feature" />
                <img src={imgOverlay} alt="overlay" className="img-overlay" />
            </div>
        </div>
    );
}

export default Home;
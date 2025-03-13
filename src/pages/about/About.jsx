import './About.css'

function About() {
    return(
        <ContainerAbout />
    );
}

function ContainerAbout(){
    return(
        <div className='container-about'>
            <ContainerAboutTitle/>
            <ContainerContentAbout 
                subtitle="What is Memories Pad?" 
                paragraphs={[
                    "Memories Pad is a modern note-taking application that allows you to manage your notes quickly, easily, and efficiently in one app. With the custom color feature, you can personalize your notes to match your preferences. Additionally, the pin mode ensures that your notes always stay on top, preventing them from being covered by other applications while multitasking. With Memories Pad, you can write, save, and access your notes anytime without interruptions. Currently, Memories Pad is only available for Windows devices."
                ]}
                showDownload={false}
            />
            <BorderBottom />
            <ContainerContentAbout 
                subtitle="How Was Memories Pad Built?"
                paragraphs={[
                    "In today's digital era, many note-taking applications come with complex features that often hinder users who simply want to jot down something quickly and conveniently. We believe that taking notes should be a simple, fast, and accessible experience at any time without limitations—without relying on an internet connection or cloud services. From this need, Memories Pad was built—a note-taking application focused on core functionality, security, and flexibility, allowing users to store ideas, important notes, and reminders without distractions.",
                    "Memories Pad was developed using the C++ programming language with the wxWidgets framework, providing a lightweight and responsive user interface while ensuring optimal performance on various Windows devices without consuming significant system resources. For data storage, we use SQLite3, enabling notes to be stored locally on the user's device without requiring internet access, ensuring data remains secure and fully under the user's control. Designed with efficiency and ease of use in mind, Memories Pad is the perfect solution for those seeking a minimalistic, fast, and always-accessible note-taking application."
                ]}
                showDownload={false}
            />
            <BorderBottom />
            <ContainerContentAbout 
                subtitle="Why Choose Memories Pad?"
                paragraphs={[
                    "Memories Pad is a fast, lightweight, and flexible note-taking solution. Here are the key advantages that set it apart from other applications :",
                    "- Fast & Lightweight → Optimized performance without slowing down your device",
                    "- Privacy → All notes are stored locally without relying on the cloud",
                    "- Unlimited Notes → Save as many notes as you need",
                    "- Customizable Colors → Personalize your notes with your favorite colors",
                    "- Pin Mode → Keep notes always on top while multitasking",
                    "- Offline Access → No internet connection required for use"
                ]}
                showDownload={false}
            />
            <BorderBottom />
            <ContainerContentAbout 
                subtitle="Try Memories Pad Now!"
                paragraphs={[
                    "Manage your notes in an easier, faster, and more flexible way. Download Memories Pad today and experience seamless note-taking without limits!",
                    "- No Registration Required - Start using it instantly without creating an account",
                ]}
                showDownload={true}
            />
        </div>
    );
}

function ContainerAboutTitle() {
    return(
        <div className='container-about-title'>
            <h1>
                "Meet Memories Pad - Your Smart Note-Taking Companion"
            </h1>
        </div>
    );
}

function BorderBottom() {
    return (
        <div className='border-bottom-about'>
        </div>
    );
}

function ContainerContentAbout({ subtitle, paragraphs, showDownload }) {
    return (
        <div className='container-content-about'>
            <div className='container-about-sub-title'>
                <h2>{subtitle}</h2>
            </div>
            <div className='container-about-paragraph'>
                {paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
                {showDownload && (
                    <div className='container-button-download-about'>
                        <a href="download/SetupMemoriesPad.exe" className="download-button">
                            Download Now
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}

export default About;
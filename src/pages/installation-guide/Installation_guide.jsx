import React from "react";
import './Installation_guide.css'

function InstallationGuide() {
    return (
        <ContainerInstallationGuide />
    );
}

function ContainerInstallationGuide() {
    return (
        <div className="container-installation-guide">
            <Installation />
        </div>
    );
}

function Installation(){
    return(
        <div className="installation">
            <div className="left-column">
            <h2 id="step1">Step 1: Download the App</h2>
                <p>The first step to start the installation is to access the main page of the application through the browser on your device. Make sure the internet connection is stable so that the process runs smoothly. After the main page opens, find the button or link that says "Download". Click the button to start the process of downloading the installation file. Wait until the download process is complete before proceeding to the next step.</p>
                <img src="/installation/download.webp" alt="Download Step" className="tutorial-image" />

                <h2 id="step2">Step 2: Install the App</h2>
                <p>Once the installation file has been successfully downloaded, open it by double-clicking it. An installation window will appear on your screen. At this stage, you will be asked to agree to the terms and conditions of using the application. Click the “I Agree” button to continue the installation process. Make sure you read the information displayed to understand what will be installed on your device. See the image below as a reference for this step.</p>
                <img src="/installation/install_1.webp" alt="Install Step" className="tutorial-image" />
                <p>After agreeing to the terms, the installation process will run automatically. The system will start copying files and setting the necessary configurations for the application to run properly. You will see a progress bar of the installation as shown in the image below. This process usually only takes a few minutes, depending on the speed of your device. Once the process is complete, click the “Close” button to close the installation window.</p>
                <img src="/installation/install_2.webp" alt="Install Step" className="tutorial-image" />

                <h2 id="step3">Step 3: Launch and Configure</h2>
                <p>The application installation has been successfully completed. Now you can open the application (launch) via the Start menu or a shortcut on the desktop. The application is ready to be used to support your needs.</p>
                <img src="/installation/finish_install.webp" alt="Launch Step" className="tutorial-image" />
            </div>

            <div className="right-column">
                <h3>On This Page</h3>
                <div className="nav-links">
                    <a href="#step1" onClick={(e) => smoothScroll(e, "step1")}>Download the App</a>
                    <a href="#step2" onClick={(e) => smoothScroll(e, "step2")}>Install the App</a>
                    <a href="#step3" onClick={(e) => smoothScroll(e, "step3")}>Launch and Configure</a>
                </div>
            </div>
        </div>
    );
}

function smoothScroll(event, targetId) {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        const yOffset = -80; // Ubah nilai ini sesuai kebutuhan (misalnya -100 untuk lebih ke atas)
        const y = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
    }
}

export default InstallationGuide;
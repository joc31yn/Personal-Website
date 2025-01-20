import LinkedInLogo from './imgs/linkedin.png';
import GithubLogo from './imgs/github.png';
import GmailLogo from './imgs/gmail.png';
import './Contact.css';
function Contact() {
    return (<>
        <div className='flex space-x-5 md:space-x-8 lg:space-x-11 xl:space-x-12 items-center'>
            <a className='' href="https://www.linkedin.com/in/jocelyn-xu-741106289/" target="_blank">
                <img className="linked_logo w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 2xl:w-10 2xl:h-10 hover:scale-110 transition-all" src={LinkedInLogo} alt="github" />
            </a>
            <a className='' href="https://github.com/joc31yn" target="_blank">
                <img className="github_logo w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 2xl:w-9 2xl:h-9 hover:scale-110 transition-all" src={GithubLogo} alt="github" />
            </a>
            <a className='' href="mailto:joce.xxt22@gmail.com" target="_blank">
                <img className="gmail_logo w-6 h-5.5 md:w-7 md:h-6.5 lg:w-8 lg:h-7.5 xl:w-9 xl:h-8.5 2xl:w-10 2xl:h-9.5 hover:scale-110 transition-all" src={GmailLogo} alt="github" />
            </a>

        </div>
    </>);
}

export default Contact;
// static footer component
import "../styles/Footer.css";


const footerData = {
    footerLanguageFieldName: ["English(US)", "Ikinyatwanda", "Francais(France)", "Kiswahili", "Espagnol", "Deustsch", "Japanese", "Portugues(Brazil)", "Korean", "Arabic"],
    footerOptionsFieldName: ["Sign Up", "Facbook", "Lite", "Games", "Oculus", "Bulletin", "Service", "About", "Developers", "Log In", "Watch", "Marketplace", "Portal", "Local", "Places",
        "CreateAd", "Careers", "SignUp", "Places", "FacebookPlay", "Instagram", "Fundraiser", "Groups", "CreatePage", "Privacy", "LogIn", "Messenger", "Messenge",
        "VotingInformationCenter", "Cookies", "AdChoices", "Terms", "Help"],
    footerCopyrightFieldName: "Meta © 2023", 
}

function SmallText(props){
    return <div className={props.className}>
        {props.text}
    </div>
}

function ComponentComniner(props) {
    console.log(props.items);
    return <div className={props.className}>
        {props.items?.map((value) => (<SmallText className = "footer-small-text" text={value} />))}
    </div>
}

function Footer(props){
    return <>
        <ComponentComniner className = "footer-row" items = {footerData.footerLanguageFieldName}/>
        <hr></hr>
        <ComponentComniner className = "footer-row" items = {footerData.footerOptionsFieldName}/>
        <SmallText className = "footer-bold-text" text = {footerData.footerCopyrightFieldName}/>
    </>
}

export default Footer;
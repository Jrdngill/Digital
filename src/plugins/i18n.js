// https://github.com/kazupon/vue-i18n https://medium.freecodecamp.org/how-to-add-internationalization-to-a-vue-application-d9cfdcabb03b
import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {

        // Header

        headerHomePage: 'Home',
        headerServicePage: 'Services',
        headerCasesPage: 'Cases',
        headerNewsPage: 'News & Blog',
        headerContactPage: 'Contact',

        // Home page English translations
        // Hero

        heroMsg: 'WE ARE MAESTRO',
        heroBtnMsg: 'Get to know us',

        // Service Section

        serviceHeaderMsg: 'Masters in connecting your brand with GEN-Z and Millenials.',
        serviceSubHeader01: 'Branding',
        serviceSubHeaderText01: 'Working out and coming up with concepts from A to Z. Thanks to our broad knowledge, tools and partners in the field of esports and broadcasting, we develop original concepts.',
        serviceSubHeader02: 'Esports',
        serviceSubHeaderText02: 'With years of experience in having esport teams playing in esport tournaments such as the Copenhagen Games, Maestro Digital is the market leader in the field of esports in the Benelux.',
        serviceSubHeader03: 'Marketing',
        serviceSubHeaderText03: 'Reaching young people together with the gaming and millennial market. Thanks to our experience in esports and general marketing, we can make every brand appeal to young people and ensure brand activation.',
        serviceSubHeader04: 'Graphic design',
        serviceSubHeaderText04: 'Creating and coming up with graphic concepts such as design and online related. Thanks to our experienced programmers and designers, we can create and set up projects in your house style.',

        // Portfolio Section

        portfolioHeaderMsg: 'Want to see our previous work?',
        portfolioBtnMsg: 'Yes please!',

        // Article Section to-do at later date

        // Team

        teamHeaderMsg: 'Do you want to work with us?',
        teamBtnMsg: 'Contact Us',
        teamNameText: '',
        teamEmailText: '',
        teamRegionText: '',


        // About Page English Translations
        // Hero

        aboutHeroBgMsg: 'ABOUT US',
        aboutHeroMsg: 'From esport association to a company that provides services to companies.',
        aboutHeroText01: 'Maestro Digital is an all-round production house for esports, events, web development and talent management. With five years of experience in the international esport and web development industry, Maestro Digital is one of the first companies focused on esports, events and media in the Benelux.',
        aboutHeroText02: 'In addition, Maestro Digital, together with Maestro Esports, is part of Maestro Media Group BV, a company created by passionate esport professionals who have taken their international experience to the ever-growing esport industry in the Netherlands & Belgium.',

        // Team 

        aboutTeamTitle: 'The Maestro Team',
        aboutTeamBtn: 'Contact Us',
        aboutTeamText: 'Maestro has an excellent team of people who all have experience in different industries. From sports management to marketing, graphic design and website programming. We are an all-round sport & esport media agency.',

    },
    'nl': {
        // Header

        headerHomePage: 'Home',
        headerServicePage: 'Over ons',
        headerCasesPage: 'Diensten',
        headerNewsPage: 'Nieuws & Blog',
        headerContactPage: 'Contact',

        // Home Page Dutch Translations 
        // Hero
        heroMsg: 'WIJ ZIJN MAESTRO',
        heroBtnMsg: 'Leer ons kennen',

        // Service Section

        serviceHeaderMsg: 'Masters in het verbinden van jou merk met GEN-Z en Millenials.',
        serviceSubHeader01: 'Branding',
        serviceSubHeaderText01: 'Het uitwerken en bedenken van concepten van a tot z. Dankzij onze brede kennis, tools en partners op het gebied van esports, en broadcasting ontwikkelen wij originele concepten.',
        serviceSubHeader02: 'Esports',
        serviceSubHeaderText02: 'Door de jarenlange ervaring in het hebben van esport teams die spelen in esporttoornooien zoals de Copenhagen Games, is Maestro Digital de marktleider op het gebied van esports in de Benelux.',
        serviceSubHeader03: 'Marketing',
        serviceSubHeaderText03: 'Het bereiken van jongeren samen met de gaming- en millennialmarkt. Door onze ervaring in esports en algemene marketing kunnen wij elk merk jongeren laten aanspreken en voor merkactivatie zorgen.',
        serviceSubHeader04: 'Graphic design',
        serviceSubHeaderText04: 'Het creëren en bedenken van grafische concepten zo wel ontwerp als online gerelateerd. Door onze ervaren programmeurs en designers kunnen wij in uw huisstijl projecten creëren en opzetten.',

        // Portfolio Section

        portfolioHeaderMsg: 'Wilt u ons vorige werk zien?',
        portfolioBtnMsg: 'Ja, graag!',

        // Article Section to-do at later date

        // Team

        teamHeaderMsg: 'Wil je met ons werken?',
        teamBtnMsg: 'Contactpagina',
        teamNameText: '',
        teamEmailText: '',
        teamRegionText: '',

        // About Page Dutch Translations
        // Hero

        aboutHeroBgMsg: 'OVER ONS',
        aboutHeroMsg: 'Van esport vereniging naar een onderneming die diensten verleend aan bedrijven.',
        aboutHeroText01: 'Maestro Digital is een all-round productiehuis voor esports, evenementen, webontwikkeling en talent management. Met vijf jaar ervaring in de internationale esport en webontwikkeling industrie is Maestro Digital een van de eerste ondernemingen gericht op esports, events en media in de Benelux.',
        aboutHeroText02: 'Daarnaast is Maestro Digital samen met Maestro Esports onderdeel van Maestro Media Group BV, een onderneming die ontstaan is door gepassioneerde esport professionals die hun internationale ervaring mee naar de nog groeiende esport industrie in Nederland & België hebben genomen.',

        // Team 

        aboutTeamTitle: 'Het Maestro Team',
        aboutTeamBtn: 'Contactpagina',
        aboutTeamText: 'Maestro heeft een uitstekend samenwerkend team van mensen die allemaal ervaring hebben in verschillende branches. Van sports management naar marketing, grafische vormgeving en het programmeren van websites. We zijn een all-round sport & esport media bureau.',

    }
};

const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'nl', // set fallback locale 
    messages, // set locale messages
});

export default i18n;
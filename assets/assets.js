import user_image from './user-image.jpeg';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import user1 from './user-1.jpg'
import user2 from './user-2.jpg';
import user3 from './user-3.jpg';
import user4 from './user-4.png';
import user5 from './user-5.png';
export const assets = {
    user_image,
    user1,
    user2,
    user3,
    user4,
    user5,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        name: 'Landivia',
        title: 'Mobile App',
        description: 'A modern mobile application that provides AI powered solution for predicting prices of land across Nigeria.',
        details: 'Landivia is a mobile platform that the user just needs to provide a few information and get the price of a land including its distance from schools, hospitals, and markets and also their and estimated time to get there. It also provides a map representation and you can always view your past predictions.',
        languages: ['React Native', 'Flask', 'MongoDB'],
        bgImage: '/work-1.jpg',
        video: 'https://drive.google.com/file/d/1_b0OABx3tJ52DIMzLjPolXdZDvGo_Qyq/view?usp=drive_link',
        link: ''
    },
    {
        name: 'JScan',
        title: 'Web App',
        description: 'This is web app that helps doctors detect breast cancer in women',
        details: 'This web app is designed to provide an intuitive user experience. The doctor just needs to provide the mammogram image, and the app will analyze it using advanced algorithms to detect any signs of breast cancer.',
        languages: ['Django', 'Python', 'Random Forest', 'PostgreSQL'],
        bgImage: '/work-5.png',
        video: 'https://drive.google.com/file/d/1v24CYIHuVHYu2xLqGfQZa9j3jN5d1GDE/view?usp=drive_link',
        link: ''
    },
    {
        name: 'Zempaa',
        title: 'Backend Projects',
        description: 'This is an eccomerce platform that provides various AI solutions',
        details: 'Zempaa has an AI chat bot called ZAI. ZAI is not like your normal AI chatbot, It answers general questions and relates them back to the web app. It also uses both text and voice commands and helps the users in cart enagements, finding products, placing orders and navigating through the site',
        languages: [ 'Django', 'open AI', 'Next.js'],
        bgImage: '/work-6.png',
        video: 'https://drive.google.com/file/d/17s4jjoFu2ZIkDhpnNfhqVI7AaA-sCarR/view?usp=sharing',
        link: 'https://zempaa.com'
    },
    {
        name: 'AI Model Training',
        title: 'Price Prediction',
        description: 'This is an AI model that was trained with XGBoost, a machine learning algorithm',
        details: 'This project focused on the training of the model with over 100000 values of a land price dataset to achieve an accuracy of 98% whixh means it is quite reliable',
        languages: ['Python', 'TensorFlow', 'PyTorch', 'scikit-learn', 'Pandas'],
        bgImage: '/work-7.png',
        video: '',
        link: ''
    }
];

export const serviceData = [
  { 
    icon: assets.web_icon, 
    title: 'Web design', 
    description: 'Web development is the process of building, programming', 
    details: 'We create responsive, SEO-friendly websites tailored to client needs, ensuring optimal performance across devices and browsers. Our design approach focuses on user experience, accessibility, and scalability.', 
    tools: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Node.js', 'Figma'], 
    link: '' 
  },
  { 
    icon: assets.mobile_icon, 
    title: 'Mobile app', 
    description: 'Mobile app development involves creating software for mobile devices', 
    details: 'We build cross-platform mobile apps that are fast, secure, and user-friendly. Our process covers wireframing, UI/UX design, API integration, and deployment to app stores.', 
    tools: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'], 
    link: '' 
  },
  { 
    icon: assets.ui_icon, 
    title: 'Training AI Models', 
    description: 'Training AI models involves teaching algorithms to recognize patterns', 
    details: 'We specialize in building, training, and fine-tuning AI models for tasks such as image recognition, natural language processing, and recommendation systems using advanced machine learning techniques.', 
    tools: ['Python', 'TensorFlow', 'PyTorch', 'scikit-learn', 'Pandas'], 
    link: '' 
  },
  { 
    icon: assets.graphics_icon, 
    title: 'Online Trainings', 
    description: 'Providing online training sessions for various topics...', 
    details: 'We deliver interactive online courses covering topics like programming, data analysis, AI, and design. Each training includes hands-on projects, quizzes, and mentorship support.', 
    tools: ['Zoom', 'Google Meet', 'Loom', 'Moodle', 'Canva'], 
    link: '' 
  }
];


export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript, Express Js, Node Js, React Js, Next Js, React Native, Python, Flask' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Undergraduate in Computer Science at Godfrey Okoye University, Enugu' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
  { name: 'VS Code', icon: assets.vscode },
  { name: 'Firebase', icon: assets.firebase },
  { name: 'MongoDB', icon: assets.mongodb },
  { name: 'Figma', icon: assets.figma },
  { name: 'Git', icon: assets.git },
];

export const reviewsData = [
  {
    name: 'Alice Johnson',
    ratings: 5,
    reviews: 'Amazing experience! Highly recommended.',
    image: assets.user1,
  },
  {
    name: 'Michael Smith',
    ratings: 4,
    reviews: 'Very good service, but could improve in response time.',
    image: assets.user2,
  },
  {
    name: 'Sophia Lee',
    ratings: 5,
    reviews: 'Exceeded my expectations! Will use again.',
    image: assets.user3,
  },
  {
    name: 'Daniel Kim',
    ratings: 4,
    reviews: 'It was an exciting journey always delivering more than expected.',
    image: assets.user4,
  },
  {
    name: 'Emily Davis',
    ratings: 5,
    reviews: 'Loved it! Smooth and efficient experience.',
    image: assets.user5,
  },
];

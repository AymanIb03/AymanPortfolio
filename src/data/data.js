import Doctor from '../assets/projects/Doctor.png';
import Delivery from '../assets/projects/Delivery.png';
import Portfolio from '../assets/projects/Portfolio.png';
import timesheet from '../assets/projects/timesheet.png';

import Doctor1 from '../assets/projects/Doctor(1).png';
import Doctor2 from '../assets/projects/Doctor(2).png';
import Doctor3 from '../assets/projects/Doctor(3).png';
import Doctor4 from '../assets/projects/Doctor(4).png';
import Doctor5 from '../assets/projects/Doctor(5).png';


import Delivery2 from '../assets/projects/Delivery(2).png';
import Delivery3 from '../assets/projects/Delivery(3).png';
import Delivery4 from '../assets/projects/Delivery(4).png';
import Delivery5 from '../assets/projects/Delivery(5).png';

import Portfolio1 from '../assets/projects/potfolio(1).png';
import Portfolio2 from '../assets/projects/potfolio(2).png';
import Portfolio3 from '../assets/projects/potfolio(3).png';
import Portfolio4 from '../assets/projects/potfolio(4).png';


import Timesheet2 from '../assets/projects/timesheet(2).png';
import Timesheet3 from '../assets/projects/timesheet(3).png';
import Timesheet4 from '../assets/projects/timesheet(4).png';
import Timesheet5 from '../assets/projects/timesheet(5).png';

export const data = [
    {
        id: 1,
        name: "Timesheets Employees Management",
        image: timesheet,
        github: "https://github.com/AymanIbnouennadre/TimesheetBE_Sanlam",
        frontend: "https://github.com/AymanIbnouennadre/TimesheetFE_Sanlam",
        description: "This timesheets management solution for Sanlam was developed using ASP.NET Core Web API for backend services, React.js for the frontend, and SQL Server for data storage. The application is divided into two main modules: User and Admin, each tailored to meet the specific needs of employees and administrators. In the User module, employees can complete and submit daily timesheets for assigned projects, with options to modify or delete entries that are pending approval. If a timesheet is rejected, users can make adjustments and resubmit it. Additionally, they can view personal account information. The Admin module includes comprehensive management features. Administrators can manage users, projects, assignments, and review timesheets submitted by employees, with options to approve or reject them. They can also download individual timesheet reports for each user and project in Excel format. Account management is also available for administrators, allowing them to update their own information. An integrated notification system facilitates communication between users and administrators within the platform, ensuring seamless interaction and timely updates across all levels.",
        type: "frontend-backend",
        gallery: [timesheet, Timesheet2, Timesheet3, Timesheet4, Timesheet5]
    },
    
    {
        id: 2,
        name: "Truck Delivery Optimization",
        image: Delivery,
        github: "https://github.com/AymanIbnouennadre/Delevery_Optimization_WEBAPP",
        description: "The project involves optimizing delivery routes for INSOFT, a company that serves 1,500 clients spread across a vast geographical area using a fleet of 25 trucks. The main challenge lies in minimizing the total distance traveled to reduce costs, improve customer service, and comply with the trucks' capacity constraints. The input data used includes an Excel file containing the GPS coordinates and order capacities of the 1,500 clients, as well as a distance matrix between clients. The entire project was developed using Python, incorporating artificial intelligence techniques and optimization algorithms such as geographic client clustering with the OPTICS algorithm, shortest path calculations with Bellman-Ford, and route optimization using the Nearest Neighbor algorithm. The project culminated in a web application built with the Flask framework.",
        type: "fullstack",
        gallery: [Delivery, Delivery2, Delivery3, Delivery4, Delivery5]
    },
    {
        id: 3,
        name: "Healthcare Website",
        image: Doctor,
        github: "https://github.com/AymanIbnouennadre/health-WebSite_DJANGO",
        description: "This project is an online healthcare booking platform, allowing patients to streamline the process of scheduling appointments with their chosen doctors and hospitals. Patients can browse the website to view available services, select a doctor and hospital, and submit a request for an appointment, pending confirmation from the admin. Upon approval, the admin selects a suitable date, and an email is sent to the patient containing the appointment details, including the invoice, date, location, doctor, and assigned room. The platform also includes an internal notification system to keep the admin updated on pending appointment confirmations, ensuring timely and efficient management. Built with Django, Python, and Bootstrap, this platform combines an intuitive user experience with robust functionality to improve both patient satisfaction and healthcare service management.",
        type: "fullstack",
        gallery: [Doctor, Doctor1, Doctor2, Doctor3, Doctor4, Doctor5]
    },
    
    {
        id: 4,
        name: "Dynamic Portfolio",
        image: Portfolio,
        github: "https://github.com/AymanIbnouennadre/MyPortfolio",
        description: "A portfolio website for a software engineer showcasing professional experience, projects, and a contact form for email inquiries. It includes CRUD functionality for adding new information and projects, developed using ASP.NET Core MVC and Bootstrap.",
        type: "fullstack",
        gallery: [Portfolio, Portfolio1, Portfolio2, Portfolio3, Portfolio4]
    },
];

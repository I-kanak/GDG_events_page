import React from "react";
import EventCard from "./EventCard";

const EventList = () => {
  return (
    <div className="bg-black text-white min-h-screen p-6 px-20">
      <h2 className="text-3xl lg:text-4xl mb-10">Upcoming Events</h2>
      <div className="flex flex-wrap gap-8">
        {events.upcoming.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>

      <h2 className="text-3xl lg:text-4xl mb-10 mt-20">Past Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {events.past.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

const events = {
  upcoming: [
    {
      title: "GDSC Embark",
      date: "2025-03-25",
      description: "GDSC EMBARK at MITWPU introduces students to Google Developer Student Clubs, covering both tech and non-tech aspects.",
      details: "Welcome to GDSC EMBARK 2024! This event isn't just a gathering; it's the start of something transformative. At GDSC-MITWPU, we believe in igniting the passion for learning new skills and making sure that everyone who joins us is equipped with the right tools to succeed. Our community is more than just a collection of individuals; it’s a thriving ecosystem where the best minds come together, driven by a shared hunger to learn and a determination to make an impact.",
      image: "https://gdscmitwpu.tech/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fofficial-website-prod-1a724.appspot.com%2Fo%2Fevents%252FPRZ7Qk90T8BkAnK0DMga%252Fbanner_1.webp%3Falt%3Dmedia%26token%3D29647ef3-46d2-4f3f-acb1-b905cacdd654&w=1920&q=75", 
      location: "Swami Vivekananda Auditorium, 9 Vishwashanti Marg, Pune, 411038",
      locate: "https://goo.gl/maps/QSmSL9QRLMfg8UDS9",
      overview: "Introduction to GDSC \n Overview of the club's structure, goals and activities Departmental Insights \n Rapid Networking Session \n Conclusion and Networking",
      gallery: "	https://gdscmitwpu.tech/_next/image?url=https%3A%2…3Df8a9c012-1d5b-484b-aa37-87ccf389b41a&w=828&q=75",
    },
  ],
  past: [
    {
      title: "GDSC WOW 2024",
      description: "The GDSC WOW (Wonder of Wonders) event on March 18th, 2024, brought together 30+ GDSCs across Pune for a collaborative experience.",
      image: "https://gdscmitwpu.tech/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fofficial-website-prod-1a724.appspot.com%2Fo%2Fevents%252FeixBdeiTgHX5AL44nQ4X%252Fbanner_1.jpeg%3Falt%3Dmedia%26token%3Dd4c8d3ab-6b3c-474a-aa8c-ceaee3f8ccc3&w=1920&q=75",
      details: "Students, developers, and communities united under one roof to explore a range of technologies. The event featured hands-on activities, lightning talks, and networking opportunities with tech experts, fostering knowledge sharing and community building. The event was a huge success, attracting a remarkable turnout and generating overwhelming positivity and praise from participants. The vibrant atmosphere and enthusiastic engagement highlighted the thriving tech culture and community spirit.",
      date: "",
      location: "Swami Vivekananda Auditorium, 9 Vishwashanti Marg, Pune, 411038",
      locate: "https://goo.gl/maps/QSmSL9QRLMfg8UDS9",
      overview: "",
    
    },
    {
      title: "Byte Me",
      description: "AI/ML Workshop provided students with comprehensive insights into cutting-edge Google technologies and the latest advancements in Artificial Intelligence.",
      image: "https://gdscmitwpu.tech/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fofficial-website-prod-1a724.appspot.com%2Fo%2Fevents%252FNiXVvtVecv5F1PHsyJ8k%252Fbanner_1.jpeg%3Falt%3Dmedia%26token%3D681999a5-4055-4aa3-81d8-0879b759839d&w=1920&q=75",
      details: "AI/ML Workshop provided an immersive exploration into the forefront of Google technologies and AI advancements. Beginning with fundamental Machine Learning principles and progressing to cutting-edge innovations like Gemini, attendees gained insights into various AI algorithms and their applications. The event highlighted emerging technologies such as Vertex AI, AI Studio, and Duet AI, offering a glimpse into their potential. Interactive elements like technical quizzes and the Imagination Challenge added depth, while the networking session fostered connections and reflection.",
      date: "13/03/2024",
      location: "Swami Vivekananda Auditorium, 9 Vishwashanti Marg, Pune, 411038",
      locate: "https://goo.gl/maps/QSmSL9QRLMfg8UDS9",
      overview: "API and Model First Focus \n Machine Learning and algorithms \n Quiz- 1 \n Neural Networks \n Google's AI/ML Libraries \n Quiz- 2 \n Google’s AI/ML products \n Gemini \n Vertex AI \n AI Studio \n Exploiting LLM \n Duet AI \n QnA Session",
    },
    {
      title: "Cloud Native Day Pune",
      description: "A comprehensive event exploring cutting-edge cloud technologies through discussions and workshops.",
      image: "https://gdscmitwpu.tech/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fofficial-website-prod-1a724.appspot.com%2Fo%2Fevents%252F2GUHBHE2NmGQ3mSCP41Y%252Fbanner_1.jpeg%3Falt%3Dmedia%26token%3D9d6ef87b-b3c0-4710-98c3-c89e43e19c58&w=1920&q=75",
      details: "Cloud Native Day Pune was an exceptional event boasting over 20 speakers who delved into diverse cloud topics ranging from Kubernetes to Docker, providing attendees with a comprehensive overview of contemporary cloud technologies. Spanning six hours, the event facilitated extensive learning opportunities and offered a platform for networking and staying abreast of the latest technological advancements. The event was organized in partnership with Cloud Native Day Pune, enriching the experience with industry expertise and community engagement.",
      date: "28/10/2023",
      location: "Swami Vivekananda Auditorium, 9 Vishwashanti Marg, Pune, 411038",
      locate: "https://goo.gl/maps/QSmSL9QRLMfg8UDS9",
      overview: "Rocky Bhatia (Adobe) The Art of Algorithms: How Generative AI Transforms Lives \n Giriraj Daga (Affinidi) Mastering Identity Management & Passwordless authentication using Open Standards \n Utkarsh Sharma (Google) Journey with Anthos and GKE Enterprise \n Karanveer Singh (Stratacent) Unlocking new value chain: Embedded lending \n Dr. Rajani Sajjan (MIT) Dr. Rahul Gaikwad (AWS) Vishal Alhat (Forcepoint) Panel Discussion \n Dheeraj Choudhary (EPAM Systems) Mastering OpenSearch: A Comprehensive Guide \n Hrittik Roy (Loft Labs) Virtual Kubernetes Clusters: A New Approach to Multi-tenancy kubernetes, DevOps \n Rohan Shah and Sudharma Mokashi (Google) Solving Real-World Problems with Generative AI on Google Cloud Databases",
    },
    {
      title: "Embark",
      description: "GDSC Embark, held on 23rd August, 2023, was an informative orientation delving into the club structure, activities, and functioning.",
      image: "https://gdscmitwpu.tech/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fofficial-website-prod-1a724.appspot.com%2Fo%2Fevents%252FEmafGbyDesAdy9V2KFR4%252Fbanner_1.jpeg%3Falt%3Dmedia%26token%3D312ce91c-f0bc-4234-a270-34ad75e951af&w=1920&q=75",
      details: "On August 23rd, 2023, GDSC organized Embark, a helpful orientation session introducing the club's structure, activities, and operations. Department heads shared their respective roles and contributions. Attendees had the chance to network and make new connections through the rapid networking session. A live screening of the Chandrayaan mission added excitement and unity. With over 800 attendees, Embark was a hit, receiving lots of positive feedback.",
      date: "23/08/2023",
      location: "Swami Vivekananda Auditorium, 9 Vishwashanti Marg, Pune, 411038",
      locate: "https://goo.gl/maps/QSmSL9QRLMfg8UDS9",
      overview: "Introduction to GDSC \n Overview of the club's structure, goals, and activities \n Departmental Insights \n Rapid Networking Session \n Chandrayaan Mission Screening \n Conclusion and Networking",
    },
    {
      title: "GDSC WoW",
      description: "With over 35 GDSCs, 100 volunteers and 800 participants, we hosted the biggest collaborative tech event of the year.",
      image: "https://gdscmitwpu.tech/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fofficial-website-prod-1a724.appspot.com%2Fo%2Fevents%252FeixBdeiTgHX5AL44nQ4X%252Fbanner_1.jpeg%3Falt%3Dmedia%26token%3Dd4c8d3ab-6b3c-474a-aa8c-ceaee3f8ccc3&w=1920&q=75",
      details: "Organized by 35+ GDSCs across pune and hosted in MITWPU, GDSC Wonders of Wonder stayed true to its name. We saw talks on a wide range of technologies and networking with like-minded individuals from almost every engineering college in Pune. The event included keynote talks, hands-on activities, and sessions on various topics",
      date: "16/04/2023",
      location: "Swami Vivekananda Auditorium, 9 Vishwashanti Marg, Pune, 411038",
      locate: "https://goo.gl/maps/QSmSL9QRLMfg8UDS9",
      overview: "Keynote by Karthik Padmanabhan \n Keynote by Nikita Gandhi \n Building Web Solutions by Vrijraj Singh \n Zero to ChatGPT by Yogesh Kulkarni \n Placement preparation panel discussion \n Building career in Data Technologies by Murari Ramuka \n Learn Devops by Udayendu Kar \n Microservices demystified by Sangeeta Gupta \n Standup comedy by Purvi Toshniwal \n Standup comedy by Atharva Pawar (Vadapav) \n All about AR by Faizan Akhtar \n Kickstart Flutter by Shree Bhagwat \n FlutterFlow by Pooja Bhaumik \n Power of Bootstrap by Asit Sonawane",
    },
    {
      title: "Inauguration",
      description: "Having an exhilarated audience as witnesses, your friendly neighbourhood tech club announced its arrival with a bang!",
      image: "https://gdscmitwpu.tech/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fofficial-website-prod-1a724.appspot.com%2Fo%2Fevents%252F06zrk8YHPE5MRmhRh0OH%252Fbanner_1.jpeg%3Falt%3Dmedia%26token%3D0192e172-16ec-4abe-842b-e6dfed57d230&w=1920&q=75",
      details: "On 6th February 2023, GDSC MITWPU sparked countless techies by introducing them to the club and its motives. The attendees were introduced to the admin panel through keynote speeches.The event proved to be an ignition for innovation, learning and the future of technology.",
      date: "06/02/2023",
      location: "Shivneri Hall, Chanakya Building, 9 Vishwashanti Marg, Pune, 411038",
      locate: "https://goo.gl/maps/QSmSL9QRLMfg8UDS9",
      overview: "Speech by Prof. Dr. Shubhalaxmi Joshi (Associate Dean, Faculty of Science) \n Speech by Dr. Sumegh Tharewal (Program Head M.Sc Blockchain) \n Speech by Harshal Juikar (President) \n Speech by Khushi Patil (Vice-President) \n Speech by Speech by Shivam Deshmukh (Treasurer) \n Speech by Ritika Ojha (Core member)",
    },
  ],
};

export default EventList;


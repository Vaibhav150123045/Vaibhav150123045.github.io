// config/portfolioData.ts

export const personalData = {
  name: "Vaibhav Motwani", // [cite: 1]
  title: "Full-Stack Developer & M.Sc. Computer Science Candidate", // [cite: 6, 19]
  location: "Bern, Switzerland", // [cite: 4, 20]
  bio: "Master of Science in Computer Science student with a strong background as a Full Stack and Backend Developer. Experienced in building high-traffic banking applications, scalable backend systems, and implementing complex deep learning and machine learning pipelines.", // [cite: 6, 33, 39, 62]
  email: "vaibhavmotwani64@gmail.com", // [cite: 5]
  github: "https://github.com/yourusername", // [cite: 2] 
  linkedin: "https://linkedin.com/in/yourusername" // [cite: 2]
};

export const technicalSkills = {
  languages: ["Java", "Python", "Javascript", "Typescript", "HTML", "CSS", "C++"], // [cite: 10]
  frameworks: ["SpringBoot", "SpringBatch", "React", "Streamlit", "React-native"], // [cite: 11, 38]
  libraries: ["Material", "Redux", "React Router", "PyTorch", "Scikit-learn", "OpenCV"], // [cite: 12, 60, 79, 92]
  databases: ["MySQL", "PostgreSQL", "Database Architecture", "MSSQL", "Elasticsearch", "Opensearch"], // [cite: 13, 24, 30, 40]
  infrastructure: ["Git", "Docker", "CI/CD", "Cloud Computing", "AWS EC2", "Kubernetes", "Agile/Scrum"] // [cite: 16, 31, 33]
};

export const experiences = [
  {
    role: "Full-Stack Developer (Part-time)", // [cite: 19]
    company: "MeiMed GMBH", // [cite: 18]
    location: "Bern, Switzerland", // [cite: 20]
    period: "June 2024 - Feb 2025", // [cite: 21, 22]
    bullets: [
      "Designed, developed and deployed a web based application for processing medical bills using Streamlit, Python, and MSSQL.", // [cite: 23, 24]
      "Applied a series of validation, preprocessing and computation rules before storing the cleaned and structured data.", // [cite: 25]
      "Built reporting and visualization tools followed by predictive modelling using Clustering." // [cite: 26]
    ]
  },
  {
    role: "Backend Developer", // [cite: 28]
    company: "TrestleIQ", // [cite: 27]
    location: "Seattle, USA (Hybrid)", // [cite: 29]
    period: "Jan 2023 - Jan 2024", // [cite: 29]
    bullets: [
      "Integrated diverse data sources into Opensearch periodically using Spring Batch, orchestrating the process via AWS EC2.", // [cite: 30, 31]
      "Developed data processing logic using partitioning, normalisation, and rigorous validation.", // [cite: 32]
      "Consistently delivered over 15K API responses daily, with a 99% hit rate under 99ms using Kubernetes." // [cite: 33]
    ]
  },
  {
    role: "Full Stack Developer", // [cite: 35]
    company: "Barclays", // [cite: 34]
    location: "Pune, Maharashtra, India", // [cite: 36]
    period: "Aug 2019 - Jan 2023", // [cite: 36]
    bullets: [
      "Led the development for two high-traffic banking mobile applications that serviced nearly 10M monthly users.", // [cite: 39]
      "Oversaw systems architecture using Java Backend, JS Frontend, MySQL and ElasticSearch.", // [cite: 40]
      "Led the Gateway developer team for BMB, mastering challenges on a massive legacy JAVA codebase." // [cite: 41, 42]
    ]
  },
  {
    role: "Industrial Intern", // [cite: 44]
    company: "Thermo Fisher Scientific", // [cite: 43]
    location: "Bangalore, Karnataka, India", // [cite: 45]
    period: "May 2018 - July 2018", // [cite: 45]
    bullets: [
      "Analyzed experimental params using Kibana for data visualization and Elasticsearch for querying.", // [cite: 46]
      "Predicted activation barriers using PySpark's K-means algorithm, achieving 96.12% efficiency.", // [cite: 47, 48]
      "Built REST API to fetch and serve predicted data using Java and Spring JPA." // [cite: 49]
    ]
  }
];

export const projects = {
  softwareEngineering: [
    {
      title: "Twitter Dataset Analysis", // [cite: 75]
      description: "Created Neo4j models to simulate basic search, sort, and select operations while maintaining consistency. Analyzed efficiency based on user queries.", // [cite: 76, 77]
      tech: ["Neo4j", "Database Architecture"] // [cite: 13, 76]
    },
    {
      title: "V2V & V2I Communication Optimization", // [cite: 51]
      description: "Reduced CAM size to 200b from 750b by optimizing broadcast trace info, reducing packet delay up to 42.8% at 50m spacing.", // [cite: 56, 57]
      tech: ["VEINS", "Network Systems", "C++"] // [cite: 10, 54]
    }
  ],
  deepLearning: [
    {
      title: "Image Captioning Pipeline", // [cite: 62]
      description: "Developed pipeline using CNN-RNN baseline, enhanced with DINOv2 features and Transformer architectures to generate captions from Flickr8k.", // [cite: 62]
      tech: ["PyTorch", "torchvision", "Transformers"] // [cite: 60, 62]
    },
    {
      title: "Distributed Federated Learning", // [cite: 68]
      description: "Implemented FedSGD and FedAvg algorithms. Designed proof-of-concept defense mechanisms (Krum, Bulyan) against model/data poisoning.", // [cite: 68, 72, 73]
      tech: ["PyTorch", "nn.distributed", "FedAvg"] // [cite: 66, 68]
    },
    {
      title: "Pneumonia Prediction Network", // [cite: 63]
      description: "Developed a neural network to predict pneumonia using x-ray images, increasing validation accuracy to 89% via L2 and dropout regularization.", // [cite: 63, 64]
      tech: ["PyTorch", "CNN", "Deep Learning"] // [cite: 59, 60]
    }
  ],
  machineLearning: [
    {
      title: "GenAI Math Tutor & Regressions", // [cite: 81]
      description: "Developed a GenAI tutor using prompt engineering with ChatGPT API. Built regression models to predict food delivery time and graduate admission chances.", // [cite: 81, 82, 89]
      tech: ["OpenAI API", "Scikit-learn", "Pandas"] // [cite: 79, 81]
    },
    {
      title: "Computer Vision & 3D Reconstruction", // [cite: 91, 93]
      description: "Implemented 3D reconstruction from stereo images using eight-point algorithm and RANSAC. Developed an image processing pipeline for Sudoku digit recognition.", // [cite: 93, 95]
      tech: ["OpenCV", "NumPy", "SciPy"] // [cite: 92]
    }
  ]
};

export const education = [
  {
    degree: "Master of Science, Computer Science", // [cite: 6]
    institution: "University of Bern, Switzerland", // [cite: 4]
    location: "Bern, Switzerland", // [cite: 4]
    period: "Feb 2024 - Present", // [cite: 14]
    details: "Includes coursework at ETH Zurich." // [cite: 6]
  },
  {
    degree: "Bachelor of Technology in Chemical Science and Technology", // [cite: 8]
    institution: "Indian Institute of Technology Guwahati", // [cite: 7]
    location: "Guwahati, India", // [cite: 7]
    period: "Jul 2015 - Jun 2019", // [cite: 15]
    details: "Completed Bachelor's Thesis on V2V & V2I Communication Optimization in ITS." // [cite: 51]
  }
];

export const achievements = [
  "Skillenza 2024: 1st among 40 teams in hackathon organized by Shadowfax (won 300K INR)", // [cite: 97]
  "GRE 2023: 324 score with a perfect 170/170 in the quant section (among top 3% of all test takers)", // [cite: 98]
  "IELTS 2023: 8-band score, classified as a 'Very good user'", // [cite: 99]
  "JEE 2019: Ranked in the top 0.1% out of 1.3 million candidates for the Joint Entrance Examination Advanced" // [cite: 100]
];

export const hobbies = [
  // Expand this array with personal hobbies if you wish to display them
];
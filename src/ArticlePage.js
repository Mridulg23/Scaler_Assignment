import React from 'react';
import { useParams } from 'react-router-dom';
import './ArticlePage.css';
import ChatBar from './ChatBar';

const sampleArticles = {
  1: {
    title: "Tesla unvield cybercab",
    content: `
       Introduction
      The rise of quantum computing brings fascinating challenges and opportunities. We explore the latest advancements and their impact on industries.
      
       The Problem
      Quantum computers could potentially break modern cryptography, leading to a **Doom Challenge** for data security.
      
       The Future
      However, quantum computing also offers immense potential for breakthroughs in areas like medicine, finance, and more.
    `,
    date: "October 12, 2024",
    author: "Jane Smith",
    image:"https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20241011043637_Tesla_Cybercab_front.jpg&w=700&c=1"
  },
  2: {
    title: "The Future of AI",
    content: `
       Introduction
      Artificial Intelligence (AI) is rapidly transforming industries. This article delves into how AI advancements will shape the future.
      
       Key Areas of Change
      AI will revolutionize areas like healthcare, automation, and customer experience by bringing more efficient and personalized solutions.
    `,
    date: "October 10, 2024",
    author: "John Doe",
    image:"https://incubator.ucf.edu/wp-content/uploads/2023/07/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1-1500x1000.jpg"
  },
  3: {
    title: "Quantum Computer Doom Challenge",
    content: `
       Introduction
      Artificial Intelligence (AI) is rapidly transforming industries. This article delves into how AI advancements will shape the future.
      
       Key Areas of Change
      AI will revolutionize areas like healthcare, automation, and customer experience by bringing more efficient and personalized solutions.
    `,
    date: "October 10, 2024",
    author: "John Doe",
    image:"https://www.cnet.com/a/img/resize/c7cb26e927bebaa784fb55a01e71d7fecb15d2e3/hub/2019/06/26/3f76e99d-8055-46f3-8f27-558ee276b665/20180405-ibm-q-quantum-computer-02.jpg?auto=webp&fit=crop&height=675&width=1200"
  },
  4: {
    title: "Rohit Sharma Best caption of india",
    content: `
      ## Introduction
      Artificial Intelligence (AI) is rapidly transforming industries. This article delves into how AI advancements will shape the future.
      
      ### Key Areas of Change
      AI will revolutionize areas like healthcare, automation, and customer experience by bringing more efficient and personalized solutions.
    `,
    date: "October 10, 2024",
    author: "John Doe",
    image:"https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-111741230/111741230.jpg"
  },
  5: {
    title: "Rupees record lowest down",
    content: `
      ## Introduction
      Artificial Intelligence (AI) is rapidly transforming industries. This article delves into how AI advancements will shape the future.
      
      ### Key Areas of Change
      AI will revolutionize areas like healthcare, automation, and customer experience by bringing more efficient and personalized solutions.
    `,
    date: "October 10, 2024",
    author: "John Doe",
    image:"https://img.etimg.com/thumb/width-1600,height-900,imgsize-47754,resizemode-75,msid-112333624/markets/forex/rbi-asks-top-banks-to-refrain-from-large-trading-bets-against-rupee-report.jpg"
  },
  6: {
    title: "Ratan of india demise",
    content: `
      ## Introduction
      Artificial Intelligence (AI) is rapidly transforming industries. This article delves into how AI advancements will shape the future.
      
      ### Key Areas of Change
      AI will revolutionize areas like healthcare, automation, and customer experience by bringing more efficient and personalized solutions.
    `,
    date: "October 10, 2024",
    author: "John Doe",
    image:"https://img.etimg.com/thumb/width-640,height-480,imgsize-24938,resizemode-75,msid-114129139/news/india/ratan-tata-the-perfect-renaissance-man/ratan-tata-passes-away.jpg"
  },
  7: {
    title: "The Future of AI",
    content: `
      ## Introduction
      Artificial Intelligence (AI) is rapidly transforming industries. This article delves into how AI advancements will shape the future.
      
      ### Key Areas of Change
      AI will revolutionize areas like healthcare, automation, and customer experience by bringing more efficient and personalized solutions.
    `,
    date: "October 10, 2024",
    author: "John Doe",
    image:"https://d6fiz9tmzg8gn.cloudfront.net/wp-content/uploads/2019/02/15tech-Banner.jpg"
  },
  8: {
    title: "Quantum Computer Doom Challenge",
    content: `
      ## Introduction
      Artificial Intelligence (AI) is rapidly transforming industries. This article delves into how AI advancements will shape the future.
      
      ### Key Areas of Change
      AI will revolutionize areas like healthcare, automation, and customer experience by bringing more efficient and personalized solutions.
    `,
    date: "October 10, 2024",
    author: "John Doe",
    image:"https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_aws.jpg"
  },
  9: {
    title: "AWS Cloud Computing service",
    content: `
      ## Introduction
      Artificial Intelligence (AI) is rapidly transforming industries. This article delves into how AI advancements will shape the future.
      
      ### Key Areas of Change
      AI will revolutionize areas like healthcare, automation, and customer experience by bringing more efficient and personalized solutions.
    `,
    date: "October 10, 2024",
    author: "John Doe",
    image:"https://blogs.iadb.org/caribbean-dev-trends/wp-content/uploads/sites/34/2017/12/Blockchain1.jpg"
  },

};

const ArticlePage = () => {
  const { id } = useParams();
  const article = sampleArticles[id];

  return (
    <div className="article-page">
       <img src={article.image} alt={article.title} className="article-image" />
      <div className="article-container">
        <h1>{article.title}</h1>
        <p className="article-meta">By {article.author} on {article.date}</p>
        <div className="article-body" dangerouslySetInnerHTML={{ __html: article.content }} />
      </div>
      <ChatBar />
    </div>
  );
};

export default ArticlePage;

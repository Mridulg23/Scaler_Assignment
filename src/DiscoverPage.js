import React from 'react';
import './DiscoverPage.css';
import { Link } from 'react-router-dom';

const sampleArticles = [
  {
    id: 1,
    title: "Tesla unvield cybercab",
    description: "Tesla move it's step to driverless cab era",
    date: "October 11, 2024",
    author: "Martin Samuel",
    image:"https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20241011043637_Tesla_Cybercab_front.jpg&w=700&c=1"
  },
  {
    id: 2,
    title: "The Future of AI",
    description: "How AI advancements will shape the world of tomorrow.",
    date: "October 10, 2024",
    author: "John Doe",
    image:"https://incubator.ucf.edu/wp-content/uploads/2023/07/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1-1500x1000.jpg"
  },
  {
    id: 3,
    title: "Quantum Computer Doom Challenge",
    description: "Explore the potential risks and benefits of quantum computing.",
    date: "October 12, 2024",
    author: "Jane Smith",
    image:"https://www.cnet.com/a/img/resize/c7cb26e927bebaa784fb55a01e71d7fecb15d2e3/hub/2019/06/26/3f76e99d-8055-46f3-8f27-558ee276b665/20180405-ibm-q-quantum-computer-02.jpg?auto=webp&fit=crop&height=675&width=1200"
  },
  {
    id: 4,
    title: "Rohit Sharma Best caption of india",
    description: "With most percentage of wins, is rohit the best caption of india",
    date: "October 12, 2024",
    author: "Mridul Gupta",
    image:"https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-111741230/111741230.jpg"
  },
  {
    id: 5,
    title: "Rupees record lowest down",
    description: "This Week Indian market records lowest down to dollar",
    date: "October 12, 2024",
    author: "Sahil Jain",
    image:"https://img.etimg.com/thumb/width-1600,height-900,imgsize-47754,resizemode-75,msid-112333624/markets/forex/rbi-asks-top-banks-to-refrain-from-large-trading-bets-against-rupee-report.jpg"
  },
  {
    id: 6,
    title: "Ratan of india demise",
    description: "India's business tycoon Ratan Tata dies",
    date: "October 13, 2024",
    author: "Prabhat Singh",
    image:"https://img.etimg.com/thumb/width-640,height-480,imgsize-24938,resizemode-75,msid-114129139/news/india/ratan-tata-the-perfect-renaissance-man/ratan-tata-passes-away.jpg"
  },
  {
    id: 7,
    title: "Quantum Computer Doom Challenge",
    description: "Explore the potential risks and benefits of quantum computing.",
    date: "October 12, 2024",
    author: "Tanmay Srivastav",
    image:"https://d6fiz9tmzg8gn.cloudfront.net/wp-content/uploads/2019/02/15tech-Banner.jpg"
  },
  {
    id: 8,
    title: "AWS Cloud Computing service",
    description: "Explore the potential benefits of Cloud computing.",
    date: "October 12, 2024",
    author: "Utkarsh Dubey",
    image:"https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_aws.jpg"
  },
  {
    id: 9,
    title: "BlockChain Challenge",
    description: "Blockchain is a secure, decentralized, and distributed database",
    date: "October 12, 2024",
    author: "Rizwan",
    image:"https://blogs.iadb.org/caribbean-dev-trends/wp-content/uploads/sites/34/2017/12/Blockchain1.jpg"
  },
];
const topics = [
  '✨Top',
  '🖥Tech & Science',
  '💰Finance',
  '🎨Arts & Culture',
  '🥇Sports',
  '📺Entertaiment',
];

const DiscoverPage = () => {
  return (
     <div className="discover-page">
      <h1>perplexity</h1>
      <h1>🌐Discover</h1>
      <div className="divider-line"></div>
      <div className="sticky-header">
        <ul>
          {topics.map((topic, index) => (
            <li key={index}>
              {topic}
              {}
             <i className="fas fa-chevron-right icon-right"></i>
            </li>
          ))}
        </ul>
      </div>
      <div className="article-grid">
        {sampleArticles.map((article) => (
         <Link to={`/article/${article.id}`} key={article.id} className="card-link">
            <div className="card">
            <img src={article.image} alt={article.title} className="article-image" />
              <h2>{article.title}</h2>
              <p className="description">{article.description}</p>
              <div className="card-footer">
                <span>{article.author}</span> | <span>{article.date}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DiscoverPage;

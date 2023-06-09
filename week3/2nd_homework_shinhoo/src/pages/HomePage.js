import React from "react";
import { Link } from "react-router-dom";
import "../styles/homepage.css";

function HomePage() {
  return (
    <div>  
      <h1>Welcome to My Homepage</h1>
      <p>This is an example of a homepage component in JSX format.</p>
      
          <Link to="/about">소개</Link>
        
      <ul>
      
        <li><a href="/profile/Elon">Elon의 프로파일</a></li>
        <li><a href="/profile/Steve">Steve의 프로파일</a></li>
        <li><a href="/profile/Lee">Lee의 프로파일</a></li>
        <li><a href="/profile/xxx">아무개의 프로파일</a></li>
        <li>
          <Link to="/articles">게시글 목록</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;

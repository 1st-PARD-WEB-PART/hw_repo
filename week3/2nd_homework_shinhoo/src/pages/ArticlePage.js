import { useParams } from 'react-router-dom';

function ArticlePage() {
  const { id } = useParams();
  return (
    <div>
      <h2>Article {id}</h2>
    </div>
  );
};

export default ArticlePage;
import { useContext, useRef, useState } from 'react';
import { ArticlesContext } from '../store/ArticlesContext.tsx';
import Article from './Article';
import Wrapper from './Wrapper';
import Modal, { type ModalRef } from './Modal.tsx';

const Articles = () => {
  const { articles, totalResults } = useContext(ArticlesContext);
  const modalRef = useRef<ModalRef>(null);
  const [modalContent, setModalContent] = useState<React.ReactNode>(
    <div></div>
  );

  const openModal = () => {
    modalRef.current?.open();
  };

  return (
    <>
      <Wrapper className="">
        <p className="font-bold text-3xl">Found results: {totalResults}</p>
        {articles && totalResults && (
          <>
            {articles.map((item, idx) => (
              <Article
                name={item.source.name}
                key={idx}
                author={item.author}
                title={item.title}
                description={item.description}
                url={item.url}
                urlToImage={item.urlToImage}
                publishedAt={item.publishedAt}
                content={item.content}
                setModalContent={setModalContent}
                openModal={openModal}
              />
            ))}
          </>
        )}
      </Wrapper>
      <Modal ref={modalRef}>{modalContent}</Modal>
    </>
  );
};

export default Articles;

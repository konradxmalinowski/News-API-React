import Button from './Button';

interface Props {
  name: string;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  setModalContent: React.Dispatch<React.SetStateAction<React.ReactNode>>;
  openModal: () => void;
}

const Article = ({
  name,
  author,
  title,
  description,
  url,
  urlToImage,
  publishedAt,
  content,
  setModalContent,
  openModal,
}: Props) => {
  return (
    <div className="w-full md:w-[90%] max-w-300 p-6 bg-background2 transition-all rounded-xl hover:scale-105 hover:transition-all">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <span className="text-gray-500 inline-block">
        {publishedAt.slice(0, 10)}
      </span>
      <div className="border-[1px] border-white border-solid rounded-xl text-white py-1 px-3 w-fit my-3">
        {name}
      </div>
      <p className="text-[16px] mb-5">{description}</p>
      <Button
        handleClick={() => {
          setModalContent(
            <>
              <img
                src={urlToImage}
                alt="article image"
                className="float-left max-h-60"
              />
              <h1 className="text-2xl font-semibold float-left">{title}</h1>
              <span className="text-gray-400 block clear-both">
                Author: {author}
              </span>
              <div className="border-[1px] border-white border-solid rounded-xl text-white py-1 px-3 w-fit my-3">
                {name}
              </div>
              {content}
              <Button
                label="Read the full article"
                handleClick={() => window.open(url, '_blank')}
              />
            </>
          );
          openModal();
        }}
        label="Read more"
      />
    </div>
  );
};

export default Article;

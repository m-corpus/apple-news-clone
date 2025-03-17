type TAuthor = {
  id: string;
  name: string;
};

type TPublisher = {
  id: string;
  name: string;
};

type TNews = {
  id: string;
  title: string;
  body: string;
  image: string;
  created_at: string;
  author: TAuthor;
  publisher: TPublisher;
};

type TMagazine = {
  id: string;
  title: string;
  image: string;
  isFollowing: boolean;
};

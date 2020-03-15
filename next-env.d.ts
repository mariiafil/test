/// <reference types="next" />
/// <reference types="next/types/global" />

interface Post {
  id: number;
  title: string;
  body: string;
}

interface Comment {
  id: number;
  postId: number;
  body: string;
}

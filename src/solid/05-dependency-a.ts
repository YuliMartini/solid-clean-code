import { PostService } from "./05-dependency-b";
import {
  JsonDataBaseService,
  LocalDataBaseService,
  WebApiPostService,
} from "./05-dependency-c";

// Main
(async () => {
  // const postService = new PostService();
  //  const posts = await postService.getPosts();

  // aplicando inyeccion de dependencias
  // const provider = new JsonDataBaseService();

  // aplicando inversion de dependencias y sustitucion de liskov
  // const provider = new LocalDataBaseService();
  const provider = new WebApiPostService();

  const postService = new PostService(provider);

  const posts = await postService.getPosts();

  console.log({ posts });
})();

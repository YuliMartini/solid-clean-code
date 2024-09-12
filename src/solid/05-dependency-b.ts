import {
  LocalDataBaseService,
  JsonDataBaseService,
  PostProvider,
} from "./05-dependency-c";

export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export class PostService {
  private posts: Post[] = [];

  // aplicando inyeccion de dependencias
  // constructor(private postProvider: JsonDataBaseService) {}

  // aplicando inversion de dependencias
  constructor(private postProvider: PostProvider) {}

  async getPosts() {
    // aqui hay una dependencia oculta
    // const jsonDB = new LocalDataBaseService();
    // this.posts = await jsonDB.getFakePosts();

    // aqui estamos violentanto el princpio de open/close al modificar directamente el metodo
    // const jsonDB = new JsonDataBaseService();
    // this.posts = await jsonDB.getPosts();

    // aplicando inyeccion de dependencias
    this.posts = await this.postProvider.getPosts();

    return this.posts;
  }
}

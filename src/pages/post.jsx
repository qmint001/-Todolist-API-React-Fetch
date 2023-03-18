import { useRouter } from "next/router";
import Link from "next/link";

const Post = () => {
  const router = useRouter();
  return (
    <div>
      <h1> Post#{router.query.id}</h1>
      <p>
        {" "}
        This is content of <post>router.query.id</post>
      </p>
      <Link href="/">Post</Link>
    </div>
  );
};

export default Post;

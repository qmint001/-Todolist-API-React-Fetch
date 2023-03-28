import "@/styles/globals.css";

// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
import { TodoList } from "@/components/TodoList";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

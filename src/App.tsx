import { Header } from "./components/Header";

import styles from "./App.module.css";

import "./global.css";
import { ContentToDo } from "./components/ContentToDo";

function App() {
  return (
    <main className={styles.divContent}>
      <Header />

      <section className={styles.content}>
        <ContentToDo />
      </section>
    </main>
  );
}

export default App;

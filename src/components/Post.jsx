import React from "react";
import styles from "./Post.module.css";

const Post = () => {
  return (
    <div>
      <article className={styles.Post}>
        <header>
          <div className={styles.author}>
            <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/145160596?v=4" alt="" />
            <div className={styles.authorInfo}>
              <strong>Diego Fernandes</strong>
              <span>Web Developer</span>
            </div>
          </div>

          <time title="11 de Maio às 08:13h" datetime="2022-05-11 08:13:30">
            Publicado há 1h
          </time>
        </header>

        <div className={styles.content}>
          <p>Fala galeraa 👋</p>
          <p>
            Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é
            DoctorCare 🚀
          </p>
          <p>
            <a href=""> 👉 jane.design/doctorcare</a>
          </p>
          <p>
            <a href="">#novoprojeto #nlw #rocketseat</a>
          </p>
        </div>
      </article>
    </div>
  );
};

export default Post;

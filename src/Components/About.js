import 'bootstrap/dist/css/bootstrap.min.css';

function About(){
    const styles = {
        container: {
          padding: '20px',
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'left'
        },
        header: {
          fontSize: '2em',
          marginBottom: '0.5em',
        },
        paragraph: {
          fontSize: '1.2em',
          lineHeight: '1.6',
          marginBottom: '1em',
        }
      };
    return(
        <>
        <h1 style={styles.header}>About Real-Time News App</h1>
      <p style={styles.paragraph}>
        Welcome to Real-Time News App, your go-to source for the latest news from around the world. Our mission is to provide you with up-to-date, reliable news coverage on a wide range of topics, including politics, technology, entertainment, sports, and more.
      </p>
      <p style={styles.paragraph}>
        We understand the importance of staying informed in today's fast-paced world. That's why we leverage cutting-edge technology to bring you real-time news updates from trusted sources. Whether you're looking for breaking news, in-depth analysis, or feature stories, our app has you covered.
      </p>
      <p style={styles.paragraph}>
        Our team is dedicated to ensuring that you receive accurate and unbiased news. We aggregate news from multiple reputable sources to provide you with a comprehensive view of the day's events. Our user-friendly interface allows you to easily navigate through different news categories and find the stories that matter to you.
      </p>
      <p style={styles.paragraph}>
        In addition to providing real-time news, our app integrates multiple dynamic APIs to enhance your experience. We offer features such as live weather updates, stock market information, and trending topics from various social media platforms. This ensures that you have access to a wide range of information all in one place.
      </p>
      <p style={styles.paragraph}>
        Our sidebar navigation makes it easy for you to explore different sections of our app. Whether you're interested in national news, business updates, sports scores, or entertainment gossip, you can quickly find what you're looking for. The sidebar also includes links to our contact page, so you can reach out to us with any questions or feedback.
      </p>
      <p style={styles.paragraph}>
        Thank you for choosing Real-Time News App. We hope you find our app useful and informative. If you have any feedback or suggestions, please feel free to contact us. Stay informed, stay connected.
      </p>
        </>
    );
}

export default About;
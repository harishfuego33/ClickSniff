import ShinyText from "../components/ShinyText/ShinyText";
const Home = () => {
  return (
    <main id="home" className="home">
      <iframe
        src="https://unicorn.studio/embed/AyFghFWYp37UJfD7Sn7P?preview=true"
        loading="lazy"
        className="background-main"
      ></iframe>
      <section className="home-section">
        {/* <div className="main-text">LET'S FIND SUSPICIOUS LINK</div> */}
        <ShinyText
          text="LET'S FIND SUSPICIOUS LINK"
          disabled={false}
          speed={3}
          className="custom-class main-text"
        />
        <div className="sub-text">
          Scan and block harmful links to keep your users safe online.
        </div>
      </section>
    </main>
  );
};

export default Home;

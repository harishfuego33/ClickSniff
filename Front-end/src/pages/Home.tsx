import CardGrid from "../components/glowCards";
import ShinyText from "../components/ShinyText/ShinyText";
const Home = () => {
  // const iframeRef = useRef<HTMLIFrameElement | null>(null);
  // const [iframeErr, setIframeErr] = useState<boolean>(false);
  // useEffect(() => {
  //   const iframe = iframeRef.current;
  //   if (!iframe) return;
  //   const handleLoad = () => {
  //     try {
  //       if (
  //         !iframe.contentDocument ||
  //         iframe.contentWindow?.location.href == "about:black"
  //       ) {
  //         setIframeErr(true);
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   iframe.addEventListener("load", handleLoad);
  //   console.log(iframe);

  //   return () => {
  //     iframe.removeEventListener("load", handleLoad);
  //   };
  // }, []);
  return (
    <main id="home" className="home">
      <section className="home-section">
        <iframe
          // ref={iframeRef}
          src="https://unicorn.studio/embed/AyFghFWYp37UJfD7Sn7P?preview=true"
          loading="lazy"
          className="background-main"
          // style={{ display: iframeErr ? "none" : "initial" }}
        ></iframe>
        <ShinyText
          text="DETECT SUSPICIOUS URLS INSTANTLY"
          disabled={false}
          speed={3}
          className="custom-class main-text"
        />
        <div className="sub-text">
          Stay safe online. Paste any <code>URL</code> and we’ll check if it's
          <span className="safe"> safe</span> or{" "}
          <span className="suspicious">suspicious</span> in seconds.
        </div>
      </section>
      <section className="info-section">
        <CardGrid />
      </section>
    </main>
  );
};

export default Home;

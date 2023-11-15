import Link from "next/link";
import React from "react";
import Items from "./Items";

const Projects = ({ title }) => {
  const copy = {
    projects: {
      title: "Projects 🔥",
      data: [
        ["ZBD", "https://zbd.gg"],
        ["NBD", "https://nbd.wtf"],
        ["AZ Bitcoin Network", "https://azb.tc"],
        ["emeralize", "https://emeralize.com"],
      ],
    },
    innovations: {
      title: "Innovations ⚡",
      data: [
        ["Forumstr", "https://forumstr.lol"],
        [
          "Payment Splitting",
          "https://twitter.com/5antoshernandez/status/1532909388821712896",
        ],
        [
          "Automatic Withdrawals to LN Address",
          "https://twitter.com/5antoshernandez/status/1579269582254407680",
        ],
        [
          "Building Circular Economies",
          "https://twitter.com/5antoshernandez/status/1508946768859258882",
        ],
        [
          "Satoshi Day Concept",
          "https://blog.chamberofsatoshi.org/ffef3b2f-9fd9-44c6-bf4c-f0398bba9200",
        ],
        [
          "Satoshi Day Execution",
          "https://blog.chamberofsatoshi.org/ffef3b2f-9fd9-44c6-bf4c-f0398bba9200",
        ],
        [
          "Satoshi Day Concept",
          "https://twitter.com/SatoshisChamber/status/1517959963758407680",
        ],
      ],
    },
    openSource: {
      title: "Open Source & Resources 📂",
      data: [
        ["Forumstr", "https://github.com/zantoshi/forumstr"],
        [
          "Pay to Lightning Address App",
          "https://github.com/zantoshi/zbd-pay-to-lightning-address",
        ],
        [
          "nostr Keyring App",
          "https://github.com/zantoshi/nostr-keyrring-web-app",
        ],
        [
          "nostr Python Utils",
          "https://github.com/zantoshi/nostr-python-utils",
        ],
        ["ZEBEDEE Python SDK", "https://pypi.org/project/zebedee/"],
        [
          "Educational Cirriculum & Strategy",
          "https://www.figma.com/file/R4DEpVch2zPkSWlpMaBjOV/Curriculum?node-id=0%3A1",
        ],
        [
          "Pamphlet",
          "https://www.figma.com/file/2YA5mRZtEe4ep1CvTIGV2h/Pamphlet?node-id=0%3A1",
        ],
        [
          "Banner",
          "https://www.figma.com/file/fgbjtZXCGdQDWfQgacDewn/Banner?node-id=0%3A1",
        ],
        [
          "Small Business Marketing Materials",
          "https://www.figma.com/file/5XLL1TpSVB5HTWRA0UuyyB/bitcoin-marketing-materials?node-id=0%3A1",
        ],
      ],
    },
    education: {
      title: "Education 📚",
      data: [
        ["Nostr 101", "https://zbd.dev/courses/nostr-101"],
        ["Lightning 101", "https://zbd.dev/courses/lightning-network-101"],
        ["LNURL 102", "https://zbd.dev/courses/lnurl-101"],
        ["ZBD 101", "https://zbd.dev/courses/zbd101/zbd-dev-101"],
        [
          "Build a Lightning App",
          "https://zbd.dev/courses/zbd101/build-lightning-app",
        ],
        ["ZBD Hackathon Course", "https://zbd.one/hackathon-course-2023"],
        [
          "Bitcoin Self-Custodial Wallet Course",
          "https://emeralize.app/course/6/",
        ],
        [
          "Self-Custodial Lightning Network Wallet Course",
          "https://emeralize.app/course/8/",
        ],
        ["Lightning UI / UX", "https://zbd.one/ln-uiux"],
        [
          "Crash Course in Product Design for Lightning Apps",
          "https://zbd.dev/courses/bitcoin-lightning-product-design",
        ],
      ],
    },
    media: {
      title: "Media 🎤",
      data: [
        [
          "Building Revenue Generating LN Apps",
          "https://www.youtube.com/watch?v=ddPyNH1jiJ0",
        ],
        [
          "SATSx Startup Day: emeralize -- a hackathon execution strategy",
          "https://www.youtube.com/watch?v=NH9KtK2r_0U",
        ],
        ["AZ Bitcoin Network", "https://azb.tc"],
        [
          "Business Bitcoinization Show - emeralize: A better platform for educators.",
          "https://tunein.com/podcasts/Business--Economics-Podcasts/Business-Bitcoinization-p1655465/",
        ],
        [
          "Santos Hernandez Introduces Emeralize - A lightning powered e-learning platform",
          "https://open.spotify.com/episode/5GPeY2pIOScZNM5AHLbEbr",
        ],
        [
          "Once Bitten -- Introducing emeralize.app",
          "https://podcasters.spotify.com/pod/show/daniel-prince6/5antoshernandez---Introducing-emeralizeapp---Where-Educators-Earn-bitcoin-and-Learning-is-Rewarded--312-e1t40k5",
        ],
        [
          "Talking about all things NBD",
          "https://twitter.com/zebedeeio/status/1584226947743113216",
        ],
        [
          "My highlights from the Bitcoin Education panel at TABconf",
          "https://twitter.com/5antoshernandez/status/1584964879043424256",
        ],
        [
          "Orange Pill Addicts: Zebedee, Gaming on Lightning, Personal Development, and Bitcoin Meetups W/ Santos",
          "https://btcm.co/opa28-zebedee-gaming-on-lightning-personal-development-and-bitcoin-meetups-w-santos/",
        ],
        [
          "How is the Lightning Network revolutionizing gaming? 🎮",
          "https://twitter.com/zebedeeio/status/1560575026780315651?s=21&t=8EZToZo58oa5JH2oqJ1SBA",
        ],
        [
          "The Future of Payments",
          "https://andreneves.xyz/p/future-of-payments",
        ],
        [
          "CD60: building a bitcoin circular economy with @Dooowta, @BrainHarrington, and @5antoshernandez",
          "https://bitcointv.com/w/6vQWEiJDegwyXW8LYFTDva",
        ],
        [
          "Bitcoin Gaming and the Lightning Network | Santos Hernandez",
          "https://www.youtube.com/watch?v=dIBTUPmVBuI",
        ],
      ],
    },
  };
  return (
    <div className="my-4">
      <div className="mb-4">
        <h1 className="text-2xl">{title}</h1>
      </div>
      <div className="grid md:grid-row-2 md:grid-cols-3 grid-cols-1 text-center gap-2 justify-center align-middle">
        <Items items={copy.projects} />
        <Items items={copy.innovations} />
        <Items items={copy.openSource} />
        <Items items={copy.education} />
        <Items items={copy.media} />
      </div>
    </div>
  );
};

export default Projects;

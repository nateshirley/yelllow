import React from "react";
import logo from "./assets/yellow-shop.png";
import channels from "./assets/channels.png";
import prh from "./assets/prh.png";
import friendpacks from "./assets/friendpacks.png";
import pressthebutton from "./assets/pressthebutton.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="component-parent">
        <div className="home-body">
          <div className="subheading">
            Simply, putting social data on-chain.
            <br />
            <div style={{ marginTop: "16px" }}>
              If context is everywhere, products can be anywhere.
            </div>
            <div className="twitter">
              <a
                href="https://twitter.com/yelllownate"
                target="_blank"
                rel="noreferrer noopener"
                className="twitter-link"
              >
                @yelllownate
              </a>
            </div>
          </div>
          <div className="projects-section">
            <div className="projects-header">Projects</div>
            <div className="projects-body">
              <img src={prh} alt="prh" className="channels-logo" />
              <div className="project-header">
                ParisRadioHour: an on-chain music subreddit that sells itself
                every week
                <br />
                ------
              </div>
              <div>
                <a
                  href="https://www.parisradiohour.xyz/about"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  parisradiohour.xyz
                </a>
              </div>
              <img src={channels} alt="channels" className="channels-logo" />
              <div className="project-header">
                Channels: Channel/subscriber relationships between wallets. An
                on-chain friend graph.
                <br />
                ------
              </div>
              <br />
              When new channels are created, the program links the creator's
              wallet to a channel token. Channel tokens represent one-way
              connections to their creator.
              <br />
              <br />
              Anyone can subscribe to a channel by minting its token. Channels
              organize an audience of wallets.
              <div className="project-links">
                web app:{" "}
                <a
                  href="https://channels-mu.vercel.app/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  channels-mu.vercel.app
                </a>
                <br />
                <div style={{ marginTop: "5px" }}>
                  <a
                    href="https://github.com/nateshirley/channels"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    github.com/nateshirley/channels
                  </a>
                </div>
              </div>
              <img
                src={friendpacks}
                alt="friendpacks"
                className="project-logo-friend"
              />
              <div className="project-header">
                Friendpacks
                <br />
                ------
              </div>
              <br />
              Friendpacks makes it easy to put your friend group on chain.
              <br />
              <br />
              Every pack has a token. If you hold the token, you're in the pack.
              <br />
              <br />
              This can be used to create public alliances among wallets (e.g.,
              FaZe Clan, rat pack, Cheetah Girls) and to push information to
              users based on their friends' activity.
              <br />
              <div className="project-links">
                web app:{" "}
                <a
                  href="https://friendpacks.vercel.app/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  friendpacks.xyz
                </a>
                <br />
                <div style={{ marginTop: "5px" }}>
                  <a
                    href="https://github.com/nateshirley/friendpacks"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    github.com/nateshirley/friendpacks
                  </a>
                </div>
              </div>
              <img
                src={pressthebutton}
                alt="channels"
                className="project-logo press"
              />
              <div className="project-header">
                Press The Button
                <br />
                ------
              </div>
              <br />
              Press The Button is an app that lets you connect your wallet and
              press a button.
              <br />
              <br />
              When you press the button, it shows which of your friends (wallets
              you share at least one pack with) have also pressed the button and
              when exactly they pressed it.
              <br />
              <br />
              PTB shows one way that dapps could use friendpacks (or other
              social primitives) to surface relevant information for their
              users.
              <br />
              <div className="project-links">
                web app:{" "}
                <a
                  href="https://www.pressthebutton.xyz/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  pressthebutton.xyz
                </a>
                <br />
                <div style={{ marginTop: "5px" }}>
                  <a
                    href="https://github.com/nateshirley/pushabutton"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    github.com/nateshirley/pushabutton
                  </a>
                </div>
              </div>
              <div className="project-header-no-logo">
                Avatars: set an avi for your wallet
                <br />
                ------
              </div>
              <br />
              With the avatars program, you can declare an NFT as the avatar for
              your wallet.
              <br />
              <br />
              When you pick an asset, it verifies that your wallet is the owner
              and creates a record of your selection, on-chain. This way, any
              dapp can look up your wallet's avatar and use it.
              <br />
              <br />
              If another wallet is using an NFT that you own as their avatar,
              you can revoke it and reset their avatar to the default.
              <div className="project-links">
                there's no frontend
                <br />
                <div style={{ marginTop: "5px" }}>
                  <a
                    href="https://github.com/nateshirley/avatars"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    github.com/nateshirley/avatars
                  </a>
                </div>
              </div>
              <div className="project-header-no-logo">
                Likes: give likes to txns
                <br />
                ------
              </div>
              <br />
              Likes is a program for giving likes to Solana transactions. It
              lets you say, "my wallet likes this txn."
              <br />
              <br />
              Ofc, any dapp can use your likes from any other dapp.
              <div className="project-links">
                there's no frontend
                <br />
                <div style={{ marginTop: "5px" }}>
                  <a
                    href="https://github.com/nateshirley/likes"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    github.com/nateshirley/likes
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

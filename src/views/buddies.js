import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Testimonal from '../components/testimonal'
import PersonCard from '../components/person-card'
import Card from '../components/card'
import './buddies.css'

const Buddies = (props) => {
  return (
    <div className="buddies-container">
      <Helmet>
        <title>Async_Sunlight Website</title>
        <meta property="og:title" content="Async_Sunlight Website" />
      </Helmet>
      
      <Navbar />
      
      <section id="top" className="buddies-hero-section">
        <section className="buddies-join-us">
          <div className="buddies-content">
            <div className="buddies-main">
              <div className="buddies-heading">
                <h2 className="buddies-header">
                  A professional connection is what workaholic people strive
                  for...
                </h2>
                <p className="buddies-caption">
                  Collaborate with me on a casual current or future project
                  where I could be helpful to you.
                </p>
              </div>
              <a
                href="https://www.linkedin.com/in/async-sunlight/"
                className="buddies-view1 button"
              >
                Connect with Me
              </a>
            </div>
            <img
              alt="image"
              src="/Avatars/undraw_engineering_team_a7n2.svg"
              className="buddies-image4"
            />
          </div>
        </section>
      </section>
      
      <section className="buddies-testimonals">
        <div className="buddies-left">
          <span className="buddies-section section-head">Testimonials</span>
          <span className="buddies-text06 title">
            What my friends say about me
          </span>
          <p className="buddies-paragraph section-description">
            <span>
              Sometimes a good word by friend is all you need to present to
              showcase yourself.
            </span>
            <br></br>
          </p>
        </div>
        <div className="buddies-right">
          <div className="buddies-column">
            <Testimonal
              From="rish_1412"
              Name="Rishabh Jain"
              Quote='"Sumit is an exceptional friend and professional. His unwavering support, empathy, and dedication make him a true gem to have in both personal and work spheres. Highly recommend!"'
              Avatar_alt="Rishabh Jain cute avatar"
              Avatar_src="/Characters/cute%20avatar%20rishabh.svg"
              link_Author="https://x.com/rish_1412"
            ></Testimonal>
            <Testimonal
              From="tek_knight"
              Name="Priyansh Singh"
              Quote='"Sumit is a good coder and an even better friend. He&apos;s funny, kind and always there to help his friends out. Enthusiastic about physics and electronics among other things, he is a great human being."'
              Avatar_alt="Priyansh Singh cute avatar"
              Avatar_src="/Characters/cute%20avatar%20priyansh.svg"
              link_Author="https://www.instagram.com/priyanshsingh7322/"
            ></Testimonal>
            <Testimonal
              From="the_elevated_one"
              Name="Prince Thind"
              Quote='"A humble yet professional young man. It is not common to find someone who is quick with his work and would still bear the mammoth of tasks with utmost elegance. I highly recommend Sumit as an IT professional"'
              Avatar_alt="Prince Thind cute avatar"
              Avatar_src="/Characters/cute%20avatar%20prince.svg"
            ></Testimonal>
            <Testimonal
              From="k_shvn"
              Name="Shiven Shandil"
              Quote='"Sumit is a skilled guy, especially when it comes to  cybersecurity, with a sharp analytical mind and a knack for solving complex problems. His dedication and approachable nature make them a valuable asset in and projects."'
              Avatar_alt="Shiven Shandil cute avatar"
              Avatar_src="/Characters/cute%20avatar%20Shiven.svg"
              link_Author="https://x.com/k_shvn"
            ></Testimonal>
            <Testimonal
              From="Anmol_9784"
              Name="Anmol"
              Quote="&quot;Sumit is a very hardworking and helpful person and always does work with team work. He is always ready to help others and try to solve problems by putting his efforts. He is always ready to take on new challenges and always ready for their outcomes.&quot;"
              Avatar_alt="Anmol cute avatar"
              Avatar_src="/Characters/cute%20avatar%20Anmol.svg"
              link_Author="https://x.com/Anmol_9784"
            ></Testimonal>
          </div>
          <div className="buddies-column1">
            <Testimonal
              From="vivacious_san"
              Name="Sanjana"
              Quote="&quot;Sumit's IT work is remarkable! He demonstrates a keen understanding in the field of electronic physics &amp; programming related topics and consistently delivers top-notch solutions. It's a pleasure to witness his talent and dedication in action.&quot;"
              Avatar_alt="Sanjana cute avatar"
              Avatar_src="/Characters/cute%20avatar%20sanjana.svg"
              link_Author="https://www.instagram.com/vivacious_san/"
            ></Testimonal>
            <Testimonal
              From="akansha2001"
              Name="Akansha Jain"
              Quote='"Sumit is a hardworking individual who courageously takes on responsibilities in any field, wholeheartedly completes the tasks with dedication."'
              Avatar_alt="Akansha jain cute avatar"
              Avatar_src="/Characters/cute%20avatar%20%20akansha.svg"
              link_Author="https://x.com/Akansha2001"
            ></Testimonal>
            <Testimonal
              From="Butter"
              Name="Ankit Thakur"
              Quote='"Sumit is a very consistent individual with a lot of resiliance towards a task. Along with good coding skills, he possesses good soft skills."'
              Avatar_alt="Ankit Thakur cute avatar"
              Avatar_src="/Characters/cute%20avatar%20ankit.svg"
            ></Testimonal>
            <Testimonal
              From="Rohan Sahu"
              Name="Rohan Sahu"
              Quote="As a long-time friend of Sumit, I have witnessed his journey from a curious technical enthusiast to a talented developer. His website showcases not only his coding prowess but also his passion for technology and towards learning to code languages to level better than his classmates. Sumit's dedication to refining his work, even when faced with challenges, is truly commendable."
              Avatar_alt="Rohan Sahu cute avatar"
              Avatar_src="/Characters/cute%20avatar%20rohan%20sahu.svg"
            ></Testimonal>
            <Testimonal
              From="visualter_in"
              Name="Abhishek Sharma"
              Quote='"Sumit is a very compassionate partner who makes working alongside him a peice of cake. Goes above and beyond to ensure the success of the project he works on. His positive demeanour and value for others time always guarantees the best results. A prefect match for any professional endeavour."'
              Avatar_alt="Abhishek Sharma Cute Avatar"
              Avatar_src="/Characters/cute%20avatar%20abhishek.svg"
              link_Author="https://www.instagram.com/visualter_in"
            ></Testimonal>
          </div>
        </div>
        <span className="buddies-text09">
          <span>Show more</span>
          <br></br>
        </span>
      </section>
      
      <section id="Buddies" className="buddies-collection">
        <div className="buddies-content1">
          <span className="buddies-caption1">collection of buddies</span>
          <div className="buddies-heading1">
            <h2 className="buddies-header1">My Friends&apos; Catalogue</h2>
            <p className="buddies-header2">
              Only Professional relations are mentioned in this section
            </p>
          </div>
        </div>
        <div className="buddies-cards-container">
        <a
          href="https://www.linkedin.com/in/sanjana-kumari-54a2b5306/"
          target="_blank"
          rel="noreferrer noopener"
          className="buddies-link06">
            <PersonCard
              image="/Characters/cute%20avatar%20sanjana.svg"
              Person="Sanjana"
              image_alt="Sanjana cute avatar"
              description="Sanjana is a passionate and ambitious young artist. She is demonstrating a great enthusiasm to expand her knowledge and skills in the field of art. She is pursuing a Bachelor's degree in Architecture, which aligns perfectly with her deep-rooted passion."
              social_link="https://www.instagram.com/vivacious_san/"
              rootClassName="person-card-root-class-name"
              className="buddies-component08"
            ></PersonCard>
          </a>
          <a
            href="https://www.researchgate.net/publication/349710925_Image_Classification_using_Decision_Trees_with_Clustering_algorithms_PCA"
            target="_blank"
            rel="noreferrer noopener"
            className="buddies-link06"
          >
            <PersonCard
              Hint="Explore Article"
              image="/Characters/cute%20avatar%20ankit.svg"
              Person="Ankit Thakur"
              image_alt="Ankit thakur cute avatar"
              description="Ankit Thakur has a vast knowledge of programming and is very professional with his work, whether done in a group or solo. He is currently pursuing Bachelor's in Applied Mathematics. This card will directly take you to his Research Article on ResearchGate."
              rootClassName="person-card-root-class-name2"
              className="buddies-component09"
            ></PersonCard>
          </a>
          <Link to="/under-development" className="buddies-navlink7">
            <PersonCard
              image="/Characters/cute%20avatar%20priyansh.svg"
              Person="Priyansh Singh"
              image_alt="Priyansh Singh cute avatar"
              description="In order to obtain a Bachelor of Technology in Computer Science Engineering, Priyansh Singh is currently studying. In terms of software and its other fields, he aspires to be a student and actively engages in extracurricular activities."
              social_link="https://www.instagram.com/priyanshsingh7322/"
              rootClassName="person-card-root-class-name5"
              className="buddies-component10"
            ></PersonCard>
          </Link>
          <a
            href="https://github.com/rish-1412"
            target="_blank"
            rel="noreferrer noopener"
            className="buddies-link09"
          >
            <PersonCard
              image="/Characters/cute%20avatar%20rishabh.svg"
              Person="Rishabh Jain"
              Hint="Explore Profile"
              image_alt="Rishabh Jain cute avatar"
              description="Rishabh is a great friend who is pursuing B.Sc. (Hons.) in Statistics at Ramanujan College, Delhi University. He's proficient with data & numerical approaches and is keen for growth opportunities. His leadership qualities & spoken communication skills are a boon in handling workload in the team."
              social_link="https://www.linkedin.com/in/rishabh-jain-b6b420286/"
              rootClassName="person-card-root-class-name1"
              className="buddies-component13"
            ></PersonCard>
          </a>
          <a
            href="https://github.com/shvn22k"
            target="_blank"
            rel="noreferrer noopener"
            className="buddies-link06"
          >
            <PersonCard
              Hint="Explore Profile"
              image="/Characters/cute%20avatar%20Shiven.svg"
              Person="Shiven Shandil"
              image_alt="Shiven Shandil cute avatar"
              social_link="https://www.linkedin.com/in/shiven-k-58b423212/"
              website_link="https://github.com/shvn22k"
              description="Shiven Shandil has a vast knowledge of Machine Learning and is very professional with his work, whether done in a group or solo. He is currently pursuing Bachelor's Comupter Science (AI&ML branch). He helps his team a lot in development of applications based upon ML and python language."
              rootClassName="person-card-root-class-name2"
              className="buddies-component09"
            ></PersonCard>
          </a>
          <a
            href="https://prince-thind.github.io/"
            target="_blank"
            rel="noreferrer noopener"
            className="buddies-link07"
          >
            <PersonCard
              Hint="Explore Porfolio"
              image="/Characters/cute%20avatar%20prince.svg"
              Person="Prince Thind"
              image_alt="Prince Thind cute avatar"
              description="Prince has pursued Bachelors of technology in Computer Science Engineering and also possesses a vast knowledge of Frontend development. He possesses the ability to create both static and dynamic websites, which is a tough combination to find in young individuals."
              social_link="https://github.com/prince-thind"
              rootClassName="person-card-root-class-name4"
              className="buddies-component11"
            ></PersonCard>
          </a>
          <a
            href="https://github.com/SushantVirghla"
            target="_blank"
            rel="noreferrer noopener"
            className="buddies-link09"
          >
            <PersonCard
              image="/Characters/cute%20avatar%20Sushant.svg"
              Person="Sushant Virghla"
              Hint="Explore Profile"
              image_alt="Sushant cute avatar"
              description="Sushant is passionate about & around App development, he currently is pursuing B.Tech. in CS Engineering. His desire for exploration of IT systems and developing scalable solutions are quite excellent and strong. He aims to achieve exquisite App development & UI/UX designing skills."
              social_link="https://www.linkedin.com/in/sushant-virghla-b74435329/"
              rootClassName="person-card-root-class-name1"
              className="buddies-component13"
            ></PersonCard>
          </a>
          <a
            href="https://anmolcoder.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
            className="buddies-link09"
          >
            <PersonCard
              image="/Characters/cute%20avatar%20Anmol.svg"
              Person="Anmol"
              Hint="Explore Porfolio"
              image_alt="Anmol cute avatar"
              description="Anmol is pursuing B.tech in IT Engineering and is very passionate about his work and solutions. He gives his heart into a project he has been assigned or chosen, moreover he has vast knowledge in developing scalable full stack websites. His dynamic approach to work is excuisite"
              social_link="https://www.linkedin.com/in/anmol-776877294"
              rootClassName="person-card-root-class-name1"
              className="buddies-component13"
            ></PersonCard>
          </a>
          <a
            href="https://jakansha2001.github.io/"
            target="_blank"
            rel="noreferrer noopener"
            className="buddies-link08"
          >
            <PersonCard
              Hint="Explore Portfolio"
              image="/Characters/cute%20avatar%20%20akansha.svg"
              Person="Akansha Jain"
              image_alt="Akansha Jain cute avatar"
              description="Akansha Jain is a very professional cross-platform Flutter developer with excellent skills in multiple languages and also exceptional leadership skills. Her numerous events, which she has hosted in partnership with GDSE and The Flutter Community, have successfully paved the way for many tech enthusiasts."
              social_link="https://github.com/jakansha2001"
              rootClassName="person-card-root-class-name3"
              className="buddies-component12"
            ></PersonCard>
          </a>
          <a
            href="https://www.instagram.com/visualter_in"
            target="_blank"
            rel="noreferrer noopener"
            className="buddies-link09"
          >
            <PersonCard
              image="/Characters/cute%20avatar%20abhishek.svg"
              Person="Abhishek Sharma"
              image_alt="Abhishek Sharma cute avatar"
              description="Abhishek is a professional video and graphics designer residing in Shimla, the capital of Himachal Pradesh. Additionally, he holds the position of administrator for The Discord Server of Himachal Pradesh. In my estimation, his digital art and landscape photographs are the acme of greatness."
              social_link="https://www.instagram.com/visualter_in"
              rootClassName="person-card-root-class-name1"
              className="buddies-component13"
            ></PersonCard>
          </a>
        </div>
      </section>
      
      <section id="features" className="buddies-section1">
        <header className="buddies-header3">
          <header className="buddies-left1">
            <span className="section-head buddies-section2">
              Tempor incididunt
            </span>
            <h2 className="buddies-heading2 section-heading">
              <span>Meet our network</span>
              <br></br>
              <span>of licensed providers</span>
            </h2>
          </header>
          <div className="buddies-right1">
            <p className="buddies-paragraph1 section-description">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
          </div>
        </header>
        <main className="buddies-cards">
          <Card rootClassName="card-root-class-name"></Card>
          <Card
            Icon="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/524e45c1-0347-49e8-8a2f-1beae49da426/c146e758-32b1-4c16-9456-e1a441900c48?org_if_sml=1380"
            rootClassName="card-root-class-name1"
          ></Card>
          <Card
            Icon="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/524e45c1-0347-49e8-8a2f-1beae49da426/e70214bb-f096-4ff8-8c80-02ea76863af7?org_if_sml=1256"
            rootClassName="card-root-class-name2"
          ></Card>
        </main>
      </section>
      
      <Footer />
    </div>
  )
}

export default Buddies
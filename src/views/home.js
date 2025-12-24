import React from 'react'
import { Link } from 'react-router-dom'
import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ProjectCard from '../components/project-card'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Async_Sunlight Website</title>
        <meta property="og:title" content="Async_Sunlight Website" />
      </Helmet>
      
      <Navbar />
      
      <section id="top" className="home-hero">
        <div className="home-heading">
          <h1 className="home-header comic">
            <span>A dendrophile and the life of a party, when I am not attached to my screen</span>
            <br className="comic"></br>
          </h1>
          <p className="home-caption">
          Albeit an open book there are so many more sides to me that only 
          my dearest friends came across…<br></br>let's take a deep dive into it.
          </p>
        </div>
        <div className="home-buttons">
          <a href="#collection" className="home-view1 button">
            Learn more about projects
          </a>
          <a href="#Me" className="home-link10">
            <div className="home-get-started button">
              <span className="home-text08">Learn more about me</span>
            </div>
          </a>
        </div>
      </section>
      
      <section className="home-description">
        <img
          alt="Banner Image"
          src="/Ext images/banner-1500w.png"
          loading="eager"
          className="home-divider-image"
        />
        <div id="Me" className="home-container3">
          <div className="home-description01">
            <div className="home-content">
              <p className="home-paragraph">
                <span className="home-text09">Hello there!</span>
                <br className="home-text10"></br>
                <br className="home-text11"></br>
                <span className="home-text12">I&apos;m</span>
                <span className="home-text13">
                  <span dangerouslySetInnerHTML={{ __html: ' ' }} />
                </span>
                <span className="home-text14">Sumit Sharma</span>
                <br></br><br></br>
                <p className="home-paragraph">
                  I have profound knowledge of I.T. stuff, application
                  programming, user interface designing, Video and photography
                  and most importantly how to keep good friendship.
                  <br></br><br></br>
                  I&apos;m a backend developer, UI/UX designer and most
                  importantly an extrovert who likes to party. Pay a visit to my
                  hometown. There you&apos;ll experience the best place to
                  experience new sense of friendship.
                </p>
              </p>
            </div>
            <div className="home-links">
              <a
                href="mailto:sumitsharmakaen@gmail.com?subject=Let us connect and collab with our work"
                className="home-link11 button-link button"
              >
                <span className="home-text19">Request a collab with me</span>
                <img alt="image" src="/Icons/arrow.svg" className="home-arrow" />
              </a>
              <a
                href="https://www.discordapp.com/users/727073320557871137"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link12 button-link button"
              >
                <span className="home-text20">Join me on Discord</span>
                <img alt="image" src="/Icons/arrow.svg" className="home-arrow1" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <section className="home-interests">
        <div className="home-cinephile">
          <div className="home-content01">
            <span className="home-caption1">Cinephile</span>
            <div className="home-heading01">
              <h2 className="home-header01">Movies have a great effect on you</h2>
              <p className="home-header02">
                <span className="home-text21">
                  Movies and the internet are getting people together. Experts
                  have shown that those who suffer from social anxieties and
                  find it challenging to find a common language with others can
                  overcome these obstacles by watching movies. A film is always
                  an excellent opportunity to meet new people and to strengthen
                  relationships with old friends.
                  <br></br><br></br>
                  Our favourite characters, superheroes, teach us life lessons.
                  They give us ideas and inspiration to do everything for the
                  better instead of just sitting around, waiting for things to
                  go their way. Films about famous personalities are the perfect
                  way to affect social behaviour positively.
                  <br></br><br></br>
                  Films are a source of knowledge. They can help learn what's in
                  the trend, find out more about ancient times, or fill out some
                  knowledge gaps.
                  <br></br><br></br>
                  ----- Says Times of india
                  <br></br><br></br>
                  Words indeed are not mine but the feeling is rather the same,
                  I love many of movies and also great TV shows...
                </span>
              </p>
            </div>
            <a
              href="https://timesofindia.indiatimes.com/readersblog/ajaytalks/the-positive-effects-of-movies-on-human-behaviour-25678/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-view2 button-link button"
            >
              <span className="home-text31">Link to the article</span>
              <img alt="image" src="/Icons/arrow.svg" className="home-image04" />
            </a>
          </div>
          <img
            alt="movies"
            src="/Avatars/undraw_netflix_q-00-o.svg"
            loading="eager"
            className="home-image05"
          />
        </div>
        <div className="home-nemophilist">
          <img
            alt="great view"
            src="/Avatars/undraw_before_dawn_re_hp4m.svg"
            className="home-image06"
          />
          <div className="home-content02">
            <span className="home-caption2">Nemophilist</span>
            <div className="home-heading02">
              <h2 className="home-header03">
                <span>Nature &amp; Mountains are my love</span>
                <br></br>
              </h2>
              <p className="home-header04">
                <span>
                  Born in Delhi, India but being a Himachali I feel like life is
                  beautiful in the mountains. I hail from the Kangra district of
                  Himachal Pradesh, and being raised there for 4 years seems
                  magnificent to me now. Tourism in my hometown is a
                  forever-lasting one, For people like me who love the mountain
                  ranges and the peacefulness of those places it is like a
                  heaven.
                  <br></br><br></br>
                  The only problem I think persists there is the more and more
                  construction and litter taking place that seems to have taken
                  over the city. That is why there is a need of some NGOs that
                  take care with that. No hard feelings, but sometimes the
                  forest range burns due to one cigeratte thrown by tourists.
                </span>
              </p>
            </div>
            <div className='home-links'>
            <a
              href="https://www.instagram.com/dhauladharcleaners"
              target="_blank"
              rel="noreferrer noopener"
              className="home-view3 button-link button"
            >
              <span className="home-text38">People who keep my Hometown clean</span>
              <img alt="image" src="/Icons/arrow.svg" className="home-image07" />
            </a>
            <a
              href="https://www.instagram.com/wastewarriors"
              target="_blank"
              rel="noreferrer noopener"
              className="home-view4 button-link button"
            >
              <span className="home-text39">People helping the mountains stay clean</span>
              <img alt="image" src="/Icons/arrow.svg" className="home-image08" />
            </a>
            </div>
          </div>
        </div>
      </section>
      
      <section className="home-qualifications">
        <div className="home-heading03">
          <h2 className="home-header05">My Qualifications</h2>
          <p className="home-header06">
            Here is my Official qualifications that I have achieved over these
            academic years of mine...
          </p>
        </div>
        <div className="home-list">
          <div className="home-step">
            <span className="home-caption1">01</span>
            <div className="home-heading04">
              <h2 className="home-header07">CBSE 10th Grade</h2>
              <p className="home-header08">
                Got an overall percentage of 90.2% . Actually, at that time
                board actual exams were cancelled and we were given this
                percentage not the basis of any exam rather than our old results
                analysed and by our teacher&apos;s wish, this is how I got to
                choose Science Stream.
              </p>
            </div>
          </div>
          <div className="home-step1">
            <span className="home-caption1">02</span>
            <div className="home-heading05">
              <h2 className="home-header09">CBSE 12th Grade</h2>
              <p className="home-header10">
                  Got an overall percentage of 92%. In few terms it indeed is
                  actually a nice and descent score but my many of the
                  classmates scored more than me, thus I am not the best of my
                  so called batchmates.
                  <br></br>
                  Also, Completed both of above listed qualification from DAV
                  Noida.
              </p>
            </div>
          </div>
          <div className="home-step2">
            <span className="home-caption1">03</span>
            <div className="home-heading06">
              <h2 className="home-header11">Got into AKTU University</h2>
              <p className="home-header12">
                <span className="home-text44">
                  I am currently Pursuing Computer Science 
                  Engineering from G.L. Bajaj Institute of Technology, 
                  even though I personally am not doing very well in academics
                  but my collegues are pretty decent.<br></br>
                  I am trying my best to be part of the communities here yet 
                  most of the things still works discretely. <br></br>
                  Ending thoughts? Umm... Find your best version yourself rather to relying on your college.
                </span>
              </p>
            </div>
          </div>
          <div className="home-step3">
            <span className="home-caption1">04</span>
            <div className="home-heading07">
              <h2 className="home-header13">Other Qualifications</h2>
              <p className="home-header14">
                I am very qualified in terms of online free resources only, not
                very qualified but it would work quite well thou...
              </p>
              <div className="home-benefits">
              <a
                  href="https://www.linkedin.com/learning/certificates/f3a9810f30c726ec6922f6fe925759f8e2623cc701c1a48113dbd6be025ef878"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link15"
                >
                  <div className="home-item3">
                    <img
                      alt="Technology"
                      src="https://img.icons8.com/clouds/48/cyber-security.png"
                      className="home-image12"
                    />
                    <p className="home-header18">
                      Career Essentials in Cybersecurity by Microsoft and LinkedIn
                    </p>
                  </div>
              </a>
              <a
                  href="https://www.credly.com/badges/8e098956-6f6f-48d2-9519-892a226d5137"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link15"
                >
                  <div className="home-item3">
                    <img
                      alt="Technology"
                      src="https://img.icons8.com/pulsar-color/48/security-shield-green.png"
                      className="home-image12"
                    />
                    <p className="home-header18">
                      Cybersecurity Fundamentals by IBM
                    </p>
                  </div>
                </a>
                <a
                  href="https://app.cybrary.it/courses/api/certificate/CC-6626e529-9bda-4ecb-a7e1-875d4c2eb491/view"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link15"
                >
                  <div className="home-item3">
                    <img
                      alt="Technology"
                      src="https://img.icons8.com/pulsar-color/48/security-shield-green.png"
                      className="home-image12"
                    />
                    <p className="home-header18">
                      Entry-Level Cybersecurity Training by Cybrary
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.credly.com/badges/e796f97b-93df-4d87-9438-adbb233b899f/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link15"
                >
                  <div className="home-item3">
                    <img
                      alt="Technology"
                      src="https://img.icons8.com/pulsar-color/48/security-shield-green.png"
                      className="home-image12"
                    />
                    <p className="home-header18">
                      Introduction to Cybersecurity by Cisco NetAcad
                    </p>
                  </div>
                </a>
                <a
                  href="https://skillsoft.digitalbadges.skillsoft.com/923f163a-ffaa-436d-9ca1-8763180f76d1"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link15"
                >
                  <div className="home-item3">
                    <img
                      alt="Technology"
                      src="https://img.icons8.com/dusk/48/engineering.png"
                      className="home-image12"
                    />
                    <p className="home-header18">
                    Security for Engineering Leaders by SkillSoft
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.freecodecamp.org/certification/Su-nlight/scientific-computing-with-python-v7"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link13"
                >
                  <div className="home-item">
                    <img
                      alt="image"
                      src="https://img.icons8.com/color/48/python--v1.png"
                      loading="eager"
                      className="home-image09"
                    />
                    <p className="home-header15">
                      Python qualification from Free Code Camp 
                    </p>
                  </div>
                </a>
                <div className="home-item1">
                  <img
                    alt="image"
                    src="https://img.icons8.com/color/48/python--v1.png"
                    className="home-image10"
                  />
                  <p className="home-header16">
                    Python Core qualification from Sololearn
                  </p>
                </div>
                <a
                  href="https://www.sololearn.com/certificates/CT-U2NNQ9LE"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link14"
                >
                  <div className="home-item2">
                    <img
                      alt="external-sql-computer-programming-flaticons-lineal-color-flat-icons"
                      src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-sql-computer-programming-flaticons-lineal-color-flat-icons.png"
                      className="home-image11"
                    />
                    <p className="home-header17">
                      SQL qualification from Sololearn
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.sololearn.com/certificates/CC-5GSKNCNE"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link15"
                >
                  <div className="home-item3">
                    <img
                      alt="Technology"
                      src="https://img.icons8.com/clouds/48/technology.png"
                      className="home-image12"
                    />
                    <p className="home-header18">
                      Tech for Everyone qualification from Sololearn
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="collection" className="home-collection">
        <div className="home-content03">
          <span className="home-caption1">collection of Past workings</span>
          <div className="home-heading08">
            <h2 className="home-header19">Past Projects on Display</h2>
            <p className="home-header20">
              Only the best of mine are on display, of-course this is clearly to
              swank about of...
            </p>
          </div>
        </div>
        <div className="home-main">
          <a href="https://github.com/shvn22k/FinerdAI" target="_blank" rel="noreferrer noopener">
            <ProjectCard
              Name="FinerdAI : Financial Litteracy Chatbot"
              Image_alt="External AI Computer"
              Image_src="https://img.icons8.com/external-itim2101-lineal-color-itim2101/200/external-ai-computer-and-laptop-itim2101-lineal-color-itim2101.png"
              Description="GFG Finale Noida Project"
              rootClassName="project-card-root-class-name"
              className="home-component1"
            ></ProjectCard>
          </a>
          <a href="/under-development" target="_blank" rel="noreferrer noopener">
            <ProjectCard
              Name="Survey Paper on Data Auditing in Cloud Computing"
              Image_alt="Business Report"
              Image_src="https://img.icons8.com/plasticine/200/business-report.png"
              Description="A Research Paper Presented in ICDT2025"
              rootClassName="project-card-root-class-name2"
              className="home-component2"
            ></ProjectCard>
          </a>
          <a href="https://drive.google.com/file/d/1tujgYcVyssySznbf6V-GxyXLZO6wyki5/view?usp=sharing" target="_blank" rel="noreferrer noopener">
            <ProjectCard
              Name="Making & Implementing Secure ESP Device"
              Image_alt="Keyboard"
              Image_src="https://img.icons8.com/dusk/200/keyboard.png"
              Description="Bachelor's Degree Mini Project"
              rootClassName="project-card-root-class-name3"
              className="home-component3"
            ></ProjectCard>
          </a>
          <a href="https://drive.google.com/file/d/1sXmIfthU3Zo1IjrWYbBqEdAimpCSgKT7/view?usp=sharing" target="_blank" rel="noreferrer noopener">
            <ProjectCard
              Name="Demonstration &amp; building Impulse Generator"
              Image_alt="Electricity Hazard Sign"
              Image_src="https://img.icons8.com/plasticine/250/electricity-hazard.png"
              Description="High School Physics Project"
              rootClassName="project-card-root-class-name1"
              className="home-component"
            ></ProjectCard>
          </a>
        </div>
        <Link to="/projects-workings#top" className="home-view5 button-link button">
          View all
        </Link>
      </section>
      
      <section className="home-blog-card">
        <div className="home-row">
          <div className="home-card">
            <div className="home-avatar">
              <img
                alt="Chat doodle"
                src="https://img.icons8.com/office/64/chat.png"
                className="home-avatar1"
              />
            </div>
            <div className="home-main1">
              <div className="home-content04">
                <h2 className="home-header21">Anonymously send messages to me</h2>
                <p className="home-description02">
                  <span>
                    You can send me message via 3CX client on the web client by clicking the url link that has been attached below.
                  <br></br>
                    This chat is realtime and i may not be available mostly but you can drop any number of messages you want. I will make sure to go through them.
                    If you want me to connect back to you either you can mail me or send me your prefered ID for chat.
                  </span>
                  <br></br>
                  <br></br>
                </p>
              </div>
              <a href="https://1741.3cx.cloud/asyncsunlight" target="_blank" rel="noreferrer noopener" className="home-learn button">
                <span className="home-text55">3CX Live Chat to Me</span>
                <img alt="image" src="/Icons/arrow.svg" className="home-image13" />
              </a>
            </div>
          </div>
          <div className="home-card1">
            <div className="home-avatar2">
              <img
                alt="resume"
                src="https://img.icons8.com/glyph-neue/100/resume.png"
                className="home-avatar3"
              />
            </div>
            <div className="home-main2">
              <div className="home-content05">
                <h2 className="home-header22">Interested in knowing me Professionally?</h2>
                <p className="home-description03">
                  I have attached the link to my CV so that you can check it out it may contain 
                  the same things as my LinkedIn but this would be very refined according to 
                  industry requirements and standards.
                </p>
              </div>
              <a href="/under-development" className="home-learn1 button">
                <span className="home-text56">See Resume</span>
                <img alt="image" src="/Icons/arrow-2.svg" className="home-image14" />
              </a>
            </div>
          </div>
        </div>
        <div className="home-card2">
          <div className="home-avatar4">
            <img
              alt="2 person doodle"
              src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/external-friends-back-to-school-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"
              className="home-avatar5"
            />
          </div>
          <div className="home-row1">
            <div className="home-main3">
              <div className="home-content06">
                <h2 className="home-header23">
                  Meet &apos;Da friend polygon&apos;
                </h2>
                <p className="home-description04">
                  Here have a good look what we made in collaboration on Github.
                  You ask my personal favorite person to collab..... Well, this
                  question requires a good diplomatic answer and since I
                  won&apos;t betray any single one of them, here are all of
                  &apos;em.
                </p>
              </div>
              <Link to="/buddies#top" className="home-learn2 button">
                <span className="home-text57">My buddies</span>
                <img alt="Arrow" src="/Icons/arrow-2.svg" className="home-image15" />
              </Link>
            </div>
            <img alt="image" src="/Avatars/undraw_having_fun_re_vj4h.svg" className="home-image16" />
          </div>
        </div>
      </section>
      
      <section className="home-faq">
        <h2 className="home-header24">I have all the answers</h2>
        <div className="home-accordion">
          <div data-role="accordion-container" className="home-element accordion">
            <div className="home-content07">
              <span className="home-header25">Where is the banner image from ?</span>
              <div className="home-container4">
                <span data-role="accordion-content" className="home-description05">
                  <span>Since I am not good at drawing and any art related stuff, that
                  is why I did downloaded the Free illustration from
                  OpenDoodles. Further, I edited the same downloads to meet my
                  banner requirement. OpenDoodles offers free of cost and no
                  login required illustration set and compositions, you can also
                  alter their ink (outlining color), Body filled color and the
                  background color by simply going to &apos;generator&apos; page
                  in the main site. 
                  <br></br>
                  <a href="https://www.opendoodles.com/" target="_blank" rel="noreferrer noopener" className="home-learn3 button">
                    <span className="home-text58">
                      <span>Link for OpenDoodles</span>
                      <br></br>
                    </span>
                    <img alt="image" src="/Icons/arrow.svg" className="home-image17" />
                  </a>
                </span>
                </span>
              </div>
            </div>
            <div className="home-icon-container">
              <svg viewBox="0 0 1024 1024" data-role="accordion-icon-closed" className="home-icon12">
                <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" data-role="accordion-icon-open" className="home-icon14">
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>
          <div data-role="accordion-container" className="home-element1 accordion">
            <div className="home-content08">
              <span className="home-header26">
                Can you tell us the site for using free icons based on our
                interests ?
              </span>
              <div className="home-container5">
                <span data-role="accordion-content" className="home-description06">
                  <span>
                    I personally used Icons8 for few of my icons, I did so
                    because of the help of Github Student and also they provide
                    free content also. Also you can use &quot;Material
                    Designs&quot; for your requirements it is totally free to
                    use and easy to integrate to your applications.
                  <br></br>Links to both are provided below.
                  <br></br>
                  <a href="https://icons8.com/" target="_blank" rel="noreferrer noopener" className="home-learn4 button">
                    <span className="home-text64">Icons from Icons8</span>
                    <img alt="image" src="/Icons/arrow.svg" className="home-image18" />
                  </a>
                <a href="https://m2.material.io/components" target="_blank" rel="noreferrer noopener" className="home-learn5 button">
                  <span className="home-text65">
                    <span>Site link of Material Designs</span>
                    <br></br>
                  </span>
                  <img alt="image" src="/Icons/arrow.svg" className="home-image19" />
                </a>
                </span>
                </span>
              </div>
            </div>
            <div className="home-icon-container1">
              <svg viewBox="0 0 1024 1024" data-role="accordion-icon-closed" className="home-icon16">
                <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" data-role="accordion-icon-open" className="home-icon18">
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>
          <div data-role="accordion-container" className="home-element2 accordion">
            <div className="home-content09">
              <span className="home-header27">
                Where did you find the other illustrations that seem to be
                pictures ?
              </span>
              <span data-role="accordion-content" className="home-description07">
                <span className="home-text68">
                  Yes, you caught it right that I copied all the drawings,
                  vectors, icons etc. but for the one you are asking I used
                  Undraw. There are many other sites as well, like : Humaaans,
                  Ouch, Handz, Paper Illustrations and absurd designs.
                </span>
                <br></br>
              </span>
            </div>
            <div className="home-icon-container2">
              <svg viewBox="0 0 1024 1024" data-role="accordion-icon-closed" className="home-icon20">
                <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" data-role="accordion-icon-open" className="home-icon22">
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>
          <div data-role="accordion-container" className="home-element3 accordion">
            <div className="home-content10">
              <span className="home-header28">Do you get paid to promote all these sites ?</span>
              <span data-role="accordion-content" className="home-description08">
                <span>
                  Absolutely not, since I did not paid them a single penny for
                  all these stuff to make my site gorgeous, thus atleast i can
                  give them a little bit of credit to all those who contributed
                  to my development.
                </span>
                <br></br>
              </span>
            </div>
            <div className="home-icon-container3">
              <svg viewBox="0 0 1024 1024" data-role="accordion-icon-closed" className="home-icon24">
                <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" data-role="accordion-icon-open" className="home-icon26">
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>
          <a href="mailto:sumitsharmakaen@gmail.com?subject=I had a question about  " className="home-link20 button">
            Ask your questions
          </a>
        </div>
      </section>
      
      <section className="home-get-yours">
        <div className="home-row2">
          <div className="home-column">
            <div className="home-card3">
              <img alt="Athena" src="Characters\re-terminal_gohugo.png" loading="eager" className="home-image20" />
              <span className="home-text72">Re - Terminal Template</span>
            </div>
            <div className="home-card3">
              <img alt="Blogs Page Screenshot" src="Ext images\async_sunlight-blogs.png" loading="eager" className="home-image20" />
              <span className="home-text72">Async_Sunlight Blogs</span>
            </div>
          </div>
          <div className="home-column1">
            <div className="home-card4">
              <img alt="GOHUGO logo" src="https://avatars.githubusercontent.com/u/29385237" loading="eager" className="home-image21" />
            </div>
          </div>
        </div>
        <div className="home-column2">
          <div className="home-card5">
            <div className="home-content11">
              <h2 className="home-header29">Personal Blogs or Documentation Archives</h2>
              <p className="home-description09">
                <span>
                  I use Hugo templates to easily convert my markdown files
                  to the website format required. This website is very static
                  like most of the blogging sites. 
                  <br></br>
                  I currently have hosted my blog website were I do post stuff
                  (not regularly but rarely), so i would really appreciate if you
                  wanted to post your content on my website too. Also I would be 
                  glad to help you setup a similar website if you want.
                </span>
                <br></br>
                <span>
                  <span dangerouslySetInnerHTML={{ __html: ' ' }} />
                </span>
              </p>
            </div>
            <a href="mailto:sumitsharmakaen@gmail.com?subject=Regarding Hosting Blogs: " target="_blank" rel="noreferrer noopener" className="home-link21 button">
              <span>
                <span>Send me your Blog hosting request</span>
                <br></br>
              </span>
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
      
      <div>
        <Script
          html={`<script>
   /* Accordion - Code Embed*/
 (function() {
    const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]');
    const accordionContents = document.querySelectorAll('[data-role="accordion-content"]');
    const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]');
    const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]');

    accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none";
    });

    accordionIconsClosed.forEach((icon) => {
      icon.style.display = "flex"
    });

    accordionIconsOpen.forEach((icon) => {
      icon.style.display = "none"
    });

    accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
        if (accordionContents[index].style.display === "flex") {
          accordionContents[index].style.display = "none";
          accordionIconsClosed[index].style.display = "flex";
          accordionIconsOpen[index].style.display = "none"
        } else {
          accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none";
          });

          accordionIconsClosed.forEach((accordionIcon) => {
            accordionIcon.style.display = "flex";
          });

          accordionIconsOpen.forEach((accordionIcon) => {
            accordionIcon.style.display = "none";
          });
          
          accordionContents[index].style.display = "flex";
          accordionIconsClosed[index].style.display = "none";
          accordionIconsOpen[index].style.display = "flex";
        }
      });
    });
  })();
</script>
`}
        ></Script>
      </div>
    </div>
  )
}

export default Home
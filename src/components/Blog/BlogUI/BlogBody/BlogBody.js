import React from "react";

import "./style.scss";

import fb from "../../../../Images/social/facebook.png";
import wa from "../../../../Images/social/whatsapp.png";
import li from "../../../../Images/social/linkedin.png";
import tw from "../../../../Images/social/twitter.png";

function BlogBody(props) {
  return (
    <React.Fragment>
      <div className="blog-body">
        <div className="role-play"></div>
        <div className="blog-content">
          <div className="blog-content--print py-fnt-s--1p6 py-ink--dark">
            <p>
              National University of Sciences and Technology NUST very
              well-known and top rated engineering university of Pakistan. NUST
              was founded in 1991 with mission of providing quality education
              and invest in research. So far in a very short period of time they
              are able to earn very good name in world. NUST provides wide range
              of programs to accommodate students from every field which also
              includes engineering programs offered to DAE candidates. Due to
              their high standards their fee structure is also high, but for
              poor people they have scholarship facilities (Need based
              Scholarship). Minimum 60% marks are required to become eligible
              for NUST NET test. NUST NET test is expected to be conduct in Dec
              2018. Every year thousands of students apply for NUST NET, all
              candidates should work very hard to get admission in NUST.
            </p>
            <br />
            <p>
              Preparing from Pakprep.com is the best way to get admission in
              NUST. We have more than 15000 solved MCQ’s along with explanation.
              We also provide past papers for NUST NET, MOCK test will help
              students to analyze paper situation and manage their time in a
              better way. Smart analytics will keep record of all your test, so
              that you can identify your week areas and work more on them. To
              start your preparation today with Pakprep.com please
            </p>
            <br />
            <p>
              Ghulam Ishaq Khan Institute of Information Technology (GIK) is
              ranked among top engineering universities of Pakistan and also
              known as worldwide due to their quality of education. GIK was
              established in 1988 by former President of Pakistan Ghulam Ishaq
              Khan. Their main motive is to provide quality education and lift
              youth of Pakistan by providing them carrier opportunities.
              Currently GIK has six different departments focusing on science
              and engineering. Same like other universities their eligibility
              criteria is not very high and you only need 60% marks in FSc to be
              eligible for any program in GIK. Due to their high standards their
              fee structure is also very high and not every candidate can afford
              it, so keeping that in mind they also provide scholarships to
              needy students. Their entry test is expected to be conducted in
              April 2019, every year thousands of students apply for it but very
              little number of students can secure their admission due to
              difficulty and competition in test.
            </p>
            <br />
            <p>
              FAST is also known as National University of Computer and
              Engineering Sciences. FAST is very well known engineering
              university operating in Islamabad. FAST has earned very good name
              among engineering universities of Pakistan in very short time just
              because of their hard work and dedication. Use of any electronic
              device in FAST entry test is prohibited and time allowed for entry
              test is two hours. In some sections they also have negative
              marking and mostly their entry test consists of MCQ’s. Every year
              many students apply for FAST entry test but very limited can go
              through because of high competition and difficulty of test.
              Students should prepare themselves properly if they want to secure
              admission.
            </p>
          </div>
          <div
            className="blog-actions py-fnt-s--1p4 py-fnt-w--bold"
            onClick={props.config.commentBoxOpened}
          >
            <div className="blog-actions--act blog-actions--act__inactive blog-actions--act-comment">
              <div className="blog-actions--act-stage blog-actions--act-stage__inactive">
                <div className="blog-actions--act-stage--curtain">
                  <i className="far fa-comments"></i>
                  <span>ADD A COMMENT</span>
                </div>
                <div className="blog-actions--act-stage--show__inactive"></div>
              </div>
            </div>
            <div
              className="blog-actions--act blog-actions--act__inactive blog-actions--act-like"
              onClick={props.config.likeToggled}
            >
              <div className="blog-actions--act-stage blog-actions--act-stage__inactive">
                <div className="blog-actions--act-stage--curtain">
                  <i className="far fa-heart"></i>
                  <span>LIKE</span>
                </div>
                <div className="blog-actions--act-stage--show__inactive"></div>
              </div>
            </div>
            <div className="blog-actions--act blog-actions--act-share">
              <div className="blog-actions--act-stage">
                <div className="blog-actions--act-stage--curtain">
                  <i className="fas fa-share"></i>
                  <span>SHARE THIS BLOG</span>
                </div>
                <div className="blog-actions--act-stage--show">
                  <div className="py-social-actor">
                    <img
                      className="py-social-actor--pixel"
                      src={fb}
                      title="Facebook"
                      alt="fb"
                    />
                  </div>
                  <div className="py-social-actor">
                    <img
                      className="py-social-actor--pixel"
                      src={tw}
                      title="Twitter"
                      alt="tr"
                    />
                  </div>
                  <div className="py-social-actor">
                    <img
                      className="py-social-actor--pixel"
                      src={li}
                      title="Linkedin"
                      alt="ig"
                    />
                  </div>
                  <div className="py-social-actor">
                    <img
                      className="py-social-actor--pixel"
                      src={wa}
                      title="WhatsApp"
                      alt="wa"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-related"></div>
      </div>
    </React.Fragment>
  );
}

export default BlogBody;

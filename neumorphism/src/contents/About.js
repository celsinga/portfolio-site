import { Component } from 'react';


class About extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">About Me</h1>
            <div className="hr_line line2"><div className="inner2"></div></div>
            <h2 className="abouthead">Colin <mark className="mark2">Elsinga</mark></h2>
            <p>Full Stack Developer</p>
            <br></br>
            <p className="p10">Graduating from audio engineering school lead to many opportunities for me, including learning new technologies and software for sound design and live performance. This has led me to further my education and become a full stack web developer. One of the things I love about the web dev world is there are new challenges and projects that we get to dive into constantly. I am excited to help companies achieve high customer turnover through innovative design.
            </p>
            <div className="Edu">
                <div class="back1 back2"><i class="fa fa-book i1 i3"></i></div>
            </div>
            <h3>Education</h3>
            <div className="vr_line">
                <div className="vr_inner inn1"></div>
                <div className="vr_inner inn2"></div>
            </div>
            <h4>Diploma in Web Development</h4>
            <p className="p1">Lighthouse Labs, Vancouver</p>
            <p className="p1"><i class="fa fa-calendar i2"></i> 2020 - 2021</p>
            <h4>Diploma in Music Industry</h4>
            <p className="p1">Nimbus School of Recording Arts & Media</p>
            <p className="p1"><i class="fa fa-calendar i2"></i> 2014 - 2016</p>

            <h3 class="sk_head">Skills</h3>
            <div class="sk">JavaScript</div>
            <div class="sk s2">React</div>
            <div class="sk s3">HTML/CSS</div>
            <div class="sk s4">Node</div>
            <div class="sk s5">SQL</div>
            <div class="sk s6">Ruby</div>
            </div>
            )
        }
    }
    
export default About
    

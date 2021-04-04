import React from 'react';
import './Home.css'
import S from '../../Image/s.jpg'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className="home">
          <div className="row">
              <div className="col-md-6 mt-5 pt-5">
              <h2>Welcome to Pubg</h2>
              <h4>Welcome to Khela Pari Na Clan</h4>
              <p className="text-dark">we are all family member.you have to maintain some rules for our clan.we have a unique name.your name must be start with KPNx.we will provide custom match in every week.we arrange big tournament also.our co-leader rafy gives royal pass to the other members.everybody must connect to our discord channel.we have also a messenger group.you can share your feelings and communicate with us.Happy Journey to our clan.</p>
              <Link to="/pubgplayer">

             
              <button className="btn btn-primary">Explore More</button>
              </Link>
              <br/>
              <Link to="/form">
              <button className="btn btn-warning mt-2">New member???</button>
              </Link>
            
              </div>
              <div className="col-md-6 mt-5 pt-5 col-sm-12">
                  <img style={{height:'480px'}} className="img-fluid" src={S} alt=""/>
              </div>
              
          </div>

        </div>
    );
};

export default Home;
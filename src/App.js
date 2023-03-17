import React from 'react';
import LeftProfileBox from './Component/Profile/Boxes/LeftProfileBox/LeftProfileBox';
import SocialMediaBox from './Component/Profile/Boxes/SocialMediaBox/SocialMediaBox';
import CredentialsProfileBox from './Component/Profile/Boxes/CredentialsProfileBox/CredentialsProfileBox';
import ProjectStatusBox from './Component/Profile/Boxes/ProjectStatusBox/ProjectStatus';
import ProfileHeaderBox from './Component/Profile/Boxes/ProfileHeaderBox/ProfileHeaderBox';

import './App.css';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';



const App = () => {
  return (
    <div className="App">
        <section style={{ backgroundColor: '#eee' }}>
        <MDBContainer className="py-5">
          <ProfileHeaderBox />  {/*Header of the profile page, gives page links*/}
          <MDBRow>
            <MDBCol lg="4">
              <LeftProfileBox /> {/*Box that includes profile pic, name, follow and message button, and job + address */}
              <SocialMediaBox /> {/*Box that includes account name of facebook, twitter, insta, github */}
            </MDBCol>
            <MDBCol lg="8">
              <CredentialsProfileBox /> {/*Box that includes full name, email, mobile phone and address */}
              <MDBRow>
                <ProjectStatusBox /> {/*Box that includes project status of assignments */}
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
}

export default App;
